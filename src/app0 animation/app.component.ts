import { Component, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition, stagger, query, keyframes } from '@angular/animations';

@Component({
  animations: [
    trigger('buttonState', [
      state('false', style({
        backgroundColor: '*',
        width: '*'
      })),
      state('true', style({
        backgroundColor: 'red',
        width: '200px'
      })),
      transition('* <=> *', animate('100ms ease-in')),
    ]),
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('.3s', style({ opacity: 1, transform: 'translateY(0px)' })),
      ]),
      transition(':leave', [
        animate('.2s', style({ transform: 'translateX(20px)' })),
        animate('.2s', style({ transform: 'translateX(-200px)', opacity: 0 }))
      ])
    ]),
    trigger('countChange', [
      transition(':increment', [
        animate('.2s', keyframes([
          style({ color: 'green', transform: 'translateY(-10px)' }),
          style({ transform: 'translateY(0)' }),
          style({ color: '*' }),
        ]))
      ]),
      transition(':decrement', [
        animate('.2s', keyframes([
          style({ color: 'red', transform: 'translateY(-10px)' }),
          style({ transform: 'translateY(0)' }),
          style({ color: '*' }),
        ]))
      ]),
    ]),
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  @HostBinding('@.disabled') private animationsDisabled = false;

  state: boolean;
  count: number = 0;

  constructor() {

  }

  clickBtn() {
    this.state = !this.state;
  }

  increaseNum() {
    this.count++;      
  }

  decreaseNum() {
    this.count--;    
  }

  changeAnimation() {
    this.animationsDisabled = !this.animationsDisabled;
  }

  doneAnimation(e) {
    console.log(e);
  }
  
}
