import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditCardDirective } from './credit-card-directive/credit-card.directive';
import { TooltipDirective } from './tooltip/tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardDirective,
    TooltipDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  entryComponents: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
