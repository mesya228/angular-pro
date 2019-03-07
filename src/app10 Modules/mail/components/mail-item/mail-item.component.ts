import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mail-item',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.sass']
})
export class MailItemComponent {

  @Input() message;
  @Input() itemInfo;
  
  constructor() { }

  setItemStyle() {
    return this.itemInfo.itemNum == 0 ? '10px 10px 0 0' : this.itemInfo.itemNum == this.itemInfo.messagesLength-1 ? '0 0 10px 10px' : '';
  }

}
