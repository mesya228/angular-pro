import { Injectable, Inject } from '@angular/core';
import { FOOD_STORE_CONFIG, FoodStoreConfig } from './config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodStoreService {

  constructor(
    @Inject(FOOD_STORE_CONFIG) private config: FoodStoreConfig,
    private http: HttpClient
  ) {
    
  }

  getStore() {
    const options = {
      headers: new HttpHeaders()
        .append('Authorization', this.config.storeToken),
    };
    return this.http.get('http://localhost:8080/store', options);
  }
}
