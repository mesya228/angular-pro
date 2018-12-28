import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  createUser(user) {
    console.log('Create account', user)
  }

  loginUser(user) {
    console.log('Login', user)
  }
  
}
