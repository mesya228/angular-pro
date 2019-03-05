import { Component } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.sass']
})
export class MailViewComponent {

  mail;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(res => {
      this.mail = res.setup;
      console.log(res.setup);
    });
  }

}
