import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, forkJoin, Observer } from 'rxjs';
import { Product, Item, ProductMap } from '../../models/product.class';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StockInventoryService {

  carts: Item[];
  products: Product[];
  productsMap: any;

  constructor(private http: HttpClient) {
  }

  resolve(): Observable<null | HttpErrorResponse> {
    return Observable.create((observer: Observer<null | HttpErrorResponse>) => {
      forkJoin(
        this.getCarts(),
        this.getProducts()
      )
      .subscribe(([carts, products]) => {
        this.carts = carts;
        this.products = products;
        this.productsMap = new ProductMap(products).productsMap;

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
}
