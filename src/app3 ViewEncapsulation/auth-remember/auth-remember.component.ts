import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auth-remember',
  templateUrl: './auth-remember.component.html',
  styleUrls: ['./auth-remember.component.sass']
})
export class AuthRememberComponent implements OnInit {

  constructor() { }

  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {
  }

  onChecked(checked: boolean) {
    this.checked.emit(checked);
  }

}
