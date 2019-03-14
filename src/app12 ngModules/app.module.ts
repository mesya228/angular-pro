import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FoodStoreModule } from './food-store/food-store.module';

import { AppComponent } from './app.component';
import { PizzaViewerComponent } from './containers/pizza-viewer/pizza-viewer.component';
import { SideViewerComponent } from './containers/side-viewer/side-viewer.component';
import { DrinkViewerComponent } from './containers/drink-viewer/drink-viewer.component';

import { API_TOKEN, API_TOKEN2 } from './token';

@NgModule({
  declarations: [
    AppComponent,
    PizzaViewerComponent,
    SideViewerComponent,
    DrinkViewerComponent,
  ],
  providers: [
    {provide: API_TOKEN, useValue: 'http://localhost:8080/pizzas'},
    {provide: API_TOKEN2, useValue: 'http://localhost:8080/pizzAss'}
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FoodStoreModule.forRoot({
      storeId: '10292',
      storeToken: 'eca938c99a0e9ff91029dc'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
