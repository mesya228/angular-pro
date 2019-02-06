import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StockInventoryRoutingModule } from './stock-inventory-routing.module';

import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';
import { StockBranchComponent } from './components/stock-branch/stock-branch.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';
import { StockProductsComponent } from './components/stock-products/stock-products.component';

import { StockInventoryService } from './services/stock-inventory/stock-inventory.service';

@NgModule({
  declarations: [
    StockInventoryComponent,
    StockBranchComponent,
    StockSelectorComponent,
    StockProductsComponent,
  ],
  imports: [
    CommonModule,
    StockInventoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    StockInventoryService
  ],
})
export class StockInventoryModule { }
