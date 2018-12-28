import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OneComponent {

  @Input() user;

  constructor() { }

  update() {
    this.user.name = 'Updated from component';
  }

}
