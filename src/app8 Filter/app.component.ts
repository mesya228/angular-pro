import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  
  query: string;

  items = [
    {title: 'Item 1'},
    {title: 'Item 2'},
    {title: 'Item 3'}
  ]

  constructor() {
    
  }
  
}
