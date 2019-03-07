import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, CustomPreload } from './app-routing.module';
import { AppComponent } from './app.component';
import { MailModule } from './mail/mail.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  providers: [
    CustomPreload
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MailModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
