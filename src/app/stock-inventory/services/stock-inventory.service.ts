import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item, Product } from '../models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockInventoryService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<Item[]> {
    return this.http.get<Item[]>('http://localhost:8080/items')
      .pipe(
        map(res => res)
      );
  }
  
  getproducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/products')
      .pipe(
        map(res => res)
      );
  }
}
