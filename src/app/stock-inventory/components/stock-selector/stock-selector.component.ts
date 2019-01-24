import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../../models/product.class';

import * as M from 'node_modules/materialize-css'

@Component({
  selector: 'app-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.sass']
})
export class StockSelectorComponent {
  
  @Input() parent: FormGroup;
  @Input() products: Product[];

  constructor() {
  }
  
  ngAfterViewInit() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  }

}
