import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../../models/product.class';

import * as M from 'node_modules/materialize-css';

@Component({
  selector: 'app-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.sass']
})
export class StockSelectorComponent {
  
  @Input() parent: FormGroup;
  @Input() products: Product[];
  @Output() addedStock: EventEmitter<any> = new EventEmitter<any>();

  selectinput;

  constructor() {
  }
  
  ngAfterViewInit() {
    this.initMatSelect();
  }

  initMatSelect() {
    var elems = document.querySelectorAll('select');
    this.selectinput = M.FormSelect.init(elems);
  }

  addToStock() {
    this.addedStock.emit(this.parent.get('selector').value);
    this.parent.get('selector').reset({
      productId: '',
      quantity: 10
    });
    this.initMatSelect();
    console.log(this.selectinput[0]);
  }

  get getNotSelected() {
    return !this.parent.get('selector.productId').value;
  }

  get getStockExists() {
    return this.parent.hasError('stockExists') && this.parent.get('selector.productId').dirty;
  }

}
