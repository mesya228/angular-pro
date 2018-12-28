import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.sass'],
})
export class TwoComponent {

  @Input() user;


  constructor() { }
  
  update() {
    this.user.name = 'Updated from component';
  }

}
