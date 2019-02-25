import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mail-item',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.sass']
})
export class MailItemComponent implements OnInit {

  @Input() message;

  constructor() { }

  ngOnInit() {
  }

}
