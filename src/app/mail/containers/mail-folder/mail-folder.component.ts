import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mail-folder',
  templateUrl: './mail-folder.component.html',
  styleUrls: ['./mail-folder.component.sass']
})
export class MailFolderComponent {

  data;
  title: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(res => {
      this.title = res.name;
    });
    this.route.data.subscribe(res => {
      this.data = res.setup;
    });
  }

}
