import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { AuthRememberComponent } from './auth-remember/auth-remember.component';
import { AuthMessageComponent } from './auth-message/auth-message.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    AuthRememberComponent,
    AuthMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  entryComponents: [
    AuthFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
