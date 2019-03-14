import { Component, OnInit, DoCheck, NgZone } from '@angular/core';
import { FoodStoreService } from './food-store/food-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit, DoCheck {

  counter: number = 0;

  constructor(
    private foodStoreService: FoodStoreService,
    private zone: NgZone
  ) {
    this.foodStoreService.getStore().subscribe();
  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      for (var i = 0; i < 100; i++) {
        setTimeout(() => {
          this.counter++;
        });
      }
    });
    this.zone.run(() => {
      setTimeout(() => this.counter = this.counter, 1000)
    });
  }

  ngDoCheck() {
  }
  
}
