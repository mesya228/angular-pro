import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_TOKEN } from '../token';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(@Inject(API_TOKEN) private api: string, private http: HttpClient) {
    console.count('Food Service');
  }

  getFood(): Observable<any> {
    return this.http.get<any>(this.api);
  }
  getDrinks(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/drinks');
  }
}
