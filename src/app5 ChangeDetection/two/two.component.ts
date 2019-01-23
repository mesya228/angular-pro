import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.sass']
})
export class TwoComponent implements OnInit {

  @Input() user;

  constructor() { }

  ngOnInit() {
  }

}
