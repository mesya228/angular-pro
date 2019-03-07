import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.sass']
})
export class MailViewComponent {

  reply: string = '';
  mail;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(res => {
      this.mail = res.setup;
      this.reply = '';
    });
  }

  sendReply() {
    console.log('Sended:', this.reply);
  }

}
