import { Component } from '@angular/core';

@Component({
  selector: 'app-mail-folder',
  templateUrl: './mail-folder.component.html',
  styleUrls: ['./mail-folder.component.sass']
})
export class MailFolderComponent {

  messages = [
    {
      id: 1, 
      folder: 'Inbox',
      from: 'Jane Smith',
      summary: 'Lorem ipsum dolor si amet',
      timestamp: 1487848162905
    },
    {
      id: 2,
      folder: 'Inbox',
      from: 'Rick Sanchez',
      summary: "Hey Morty! Go away from class right now, i am waiting for you outside, let's go. In and out. Twenty minute adventure",
      timestamp: 1487848162905
    }
  ];

  constructor() { }

}
