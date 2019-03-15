import { Component} from '@angular/core';
import { Store } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {

  counter: number = 0;

  constructor(private store: Store) {
    this.store.set('todos', [
      {id: 1},
      {id: 2},
      {id: 3}
    ]);
    this.store.set('todos2', [
      {id: 1},
      {id: 2},
      {id: 3}
    ]);
    console.log(store);
  }
  
}
