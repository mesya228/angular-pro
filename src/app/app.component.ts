import { Component, ChangeDetectionStrategy,  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {

  user: any = {
    name: 'Sergey Miller',
    age: 19,
    location: 'Kyiv'
  }

  addProp() {
    this.user.email = 's.melnykov.451@gmail.com'
  }

  changeName() {
    this.user.name = 'Rick Sanchez';
  }

  changeUser() {
    this.user = {
      name: 'Valera Zhmih',
      age: 58,
      location: 'Chelyabinsk'
    }
  }
  
}
