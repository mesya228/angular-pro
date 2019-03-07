import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MailRoutingModule } from './mail-routing.module';

import { MailAppComponent } from './components/mail-app/mail-app.component';
import { MailItemComponent } from './components/mail-item/mail-item.component';
import { MailFolderComponent } from './containers/mail-folder/mail-folder.component';
import { MailViewComponent } from './components/mail-view/mail-view.component';

import { MailFolderService } from './containers/services/mail-folder/mail-folder.service';

import { MailViewGuard } from './components/mail-view/mail-view-guard/mail-view.guard';

@NgModule({
  declarations: [
    MailAppComponent,
    MailItemComponent,
    MailFolderComponent,
    MailViewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MailRoutingModule
  ],
  providers: [
    MailFolderService,
    MailViewGuard
  ],
  exports: [
    MailAppComponent
  ]
})
export class MailModule { }