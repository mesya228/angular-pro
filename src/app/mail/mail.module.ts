import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailRoutingModule } from './mail-routing.module';
import { MailFolderService } from './containers/mail-folder/mail-folder.service';
import { MailViewComponent } from './components/mail-view/mail-view.component';

@NgModule({
  declarations: [
    MailAppComponent,
    MailItemComponent,
    MailFolderComponent,
    MailViewComponent
  ],
  imports: [
    CommonModule,
    MailRoutingModule,
    HttpClientModule
  ],
  providers: [
    MailFolderService
  ],
  exports: [
    MailAppComponent
  ]
})
export class MailModule { }