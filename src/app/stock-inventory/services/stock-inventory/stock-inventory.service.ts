import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, forkJoin, Observer } from 'rxjs';
import { Product, Item } from '../../models/product.class';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StockInventoryService {

  carts: Item[];
  products: Product[];
  branches;

  constructor(private http: HttpClient) {
  }

  resolve(): Observable<null | HttpErrorResponse> {
    return Observable.create((observer: Observer<null | HttpErrorResponse>) => {
      forkJoin(
        this.getCarts(),
        this.getProducts(),
        this.getBranches()
      )
      .subscribe(([carts, products, branches]) => {
        this.carts = carts;
        this.products = products;
        this.branches = branches;

        observer.next(null);
        observer.complete();
      }, (errorResponse: HttpErrorResponse) => {
        observer.error(errorResponse);
        observer.complete();
      });
    });
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/products')
      .pipe(
        map(products => products)
      )
  }

  getCarts(): Observable<Item[]> {
    return this.http.get<Item[]>('http://localhost:8080/cart')
      .pipe(
        map(carts => carts)
      )
  }

  getBranches(): Observable<Item[]> {
    let options = {
      params: new HttpParams()
        .set('branch', '1')
    };
    return this.http.get<Item[]>('http://localhost:8080/branches', options)
      .pipe(
        map(branches => branches)
      )
  }
}
