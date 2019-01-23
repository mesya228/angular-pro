import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  
  query: string;

  files = [
    {name: 'logo.svg', size: 2120109, type: 'image/svg'},
    {name: 'banner.jpg', size: 18029, type: 'image/jpg'},
    {name: 'bg.svg', size: 17484562, type: 'image/png'}
  ]

  constructor() {
    
  }
  
}
