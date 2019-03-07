import { Component } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass', './app.component.css'],
})
export class AppComponent {

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        // console.log(event);
      }
    });
  }
  
}
