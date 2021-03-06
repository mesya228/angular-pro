import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SongsModule } from './songs/songs.module';

import { AppComponent } from './app.component';

import { Store } from './store';


@NgModule({
  declarations: [
    AppComponent,
  ],
  providers: [
    Store
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SongsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
