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

  constructor() {
  }
  
  ngAfterViewInit() {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
  }

  addToStock() {
    this.addedStock.emit(this.parent.get('selector').value);
  }

}
