import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  user = {
    name: 'Sergey Miller',
    age: 19,
    location: 'Kiyv'
  }

  addProp() {
    this.user['email'] = 's.melnykov.451@gmail.com';
  }

  changeUser() {
    this.user = {
      name: 'Valerka Maslo',
      age: 60,
      location: 'Zimbabve'
    }
  }

  changeName() {
    this.user.name = 'Vasiliy Pupkin';
  }
}
