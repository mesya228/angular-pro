import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OneComponent implements OnInit {

  @Input() user;

  constructor() { }

  ngOnInit() {
  }

}
