import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';

@NgModule({
  declarations: [MailAppComponent, MailItemComponent, MailFolderComponent],
  imports: [
    CommonModule
  ]
})
export class MailModule { }
