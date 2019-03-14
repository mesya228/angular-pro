import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { FoodService } from '../food.service';

export function SideFactory(http) {
  return new FoodService('http://localhost:8080/sides', http)
}

@Component({
  selector: 'app-side-viewer',
  templateUrl: './side-viewer.component.html',
  styleUrls: ['./side-viewer.component.sass'],
  providers: [
    {
      provide: FoodService,
      useFactory: SideFactory,
      deps: [
        HttpClient
      ]
    }
  ]
})
export class SideViewerComponent implements OnInit {

  items$: Observable<any>;

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.items$ = this.foodService.getFood();
  }

}
