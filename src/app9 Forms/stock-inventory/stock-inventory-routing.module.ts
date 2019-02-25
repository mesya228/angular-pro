import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';
import { StockInventoryService } from './services/stock-inventory/stock-inventory.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: StockInventoryComponent,
    resolve: [
      StockInventoryService
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockInventoryRoutingModule { }
