import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FoodService } from '../food.service';

export function DrinkFactory(http) {
  return new FoodService('http://localhost:8080/drinks', http)
}

export abstract class DrinkService {
  getDrinks: () => Observable<any>;
}

@Component({
  selector: 'app-drink-viewer',
  templateUrl: './drink-viewer.component.html',
  styleUrls: ['./drink-viewer.component.sass'],
  providers: [
    FoodService,
    {provide: DrinkService, useExisting: FoodService}
  ]
})
export class DrinkViewerComponent implements OnInit {

  items$: Observable<any>;

  constructor(private drinkService: DrinkService) { }

  ngOnInit() {
    this.items$ = this.drinkService.getDrinks();
  }

}
