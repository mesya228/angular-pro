import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockInventoryComponent } from './stock-inventory/containers/stock-inventory/stock-inventory.component';
import { StockBranchComponent } from './stock-inventory/components/stock-branch/stock-branch.component';
import { StockSelectorComponent } from './stock-inventory/components/stock-selector/stock-selector.component';
import { StockProductsComponent } from './stock-inventory/components/stock-products/stock-products.component';

@NgModule({
  declarations: [
    AppComponent,
    StockInventoryComponent,
    StockBranchComponent,
    StockSelectorComponent,
    StockProductsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  entryComponents: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
