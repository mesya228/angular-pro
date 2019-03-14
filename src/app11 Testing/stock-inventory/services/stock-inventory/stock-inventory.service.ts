import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, forkJoin, Observer, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Product, Item } from '../../models/product.class';

@Injectable({
  providedIn: 'root'
})
export class StockInventoryService {

  carts: Item[];
  products: Product[];

  constructor(private http: HttpClient) {
  }

  resolve(): Observable<null | HttpErrorResponse> {
    return Observable.create((observer: Observer<null | HttpErrorResponse>) => {
      forkJoin(
        this.getCarts(),
        this.getProducts(),
      )
      .subscribe(([carts, products]) => {
        this.carts = carts;
        this.products = products;

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
        map(products => {
          this.products = products;
          return products;
        })
      )
  }

  getCarts(): Observable<Item[]> {
    return this.http.get<Item[]>('http://localhost:8080/cart')
      .pipe(
        map(carts => {
          this.carts = carts;
          return carts;
        })
      )
  }

  checkBranchId(id: string): Observable<Item[]> {
    let options = {
      params: new HttpParams()
        .set('branch', id)
    };
    return this.http.get<Item[]>('http://localhost:8080/branches', options)
      .pipe(
        map(branches => branches),
        catchError(e => of(null))
      );
  }
}
