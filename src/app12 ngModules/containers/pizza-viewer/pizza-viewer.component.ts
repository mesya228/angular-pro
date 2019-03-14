import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { FoodService } from '../food.service';

export function PizzaFactory(http) {
  return new FoodService('http://localhost:8080/pizzas', http)
}

@Component({
  selector: 'app-pizza-viewer',
  templateUrl: './pizza-viewer.component.html',
  styleUrls: ['./pizza-viewer.component.sass'],
  providers: [
    {
      provide: FoodService,
      useFactory: PizzaFactory,
      deps: [
        HttpClient
      ]
    }
  ]
})
export class PizzaViewerComponent implements OnInit {

  items$: Observable<any>;

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.items$ = this.foodService.getFood();
  }

}
