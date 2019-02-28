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
  // folderTitle: Observable<string> = this.route.params;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(res => {
      console.log(res);
      this.data = res.setup;
    });
  }

}
