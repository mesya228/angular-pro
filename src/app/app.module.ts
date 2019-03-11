import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { StockInventoryService } from './stock-inventory/services/stock-inventory.service';

import { FileSizePipe } from './file-size-pipe/file-size.pipe';
import { StockCounterComponent } from './stock-inventory/components/stock-counter/stock-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    FileSizePipe,
    StockCounterComponent,
  ],
  providers: [
    StockInventoryService
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
