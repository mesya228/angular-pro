import { Component } from '@angular/core';
import { FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';

import { StockInventoryService } from '../../services/stock-inventory/stock-inventory.service';

import { Product, Item } from '../../models/product.class';

import { StockValidators } from './stock-inventory.validators';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.sass']
})
export class StockInventoryComponent {

  products: Product[];
  productsMap;
  totals;

  form: FormGroup;
  stock: FormArray;

  constructor(private formBuilder: FormBuilder,
              private stockInventoryService: StockInventoryService) {
    this.products = this.stockInventoryService.products;
    this.getProductMap(this.products);

    this.form = this.formBuilder.group({
      store: this.formBuilder.group({
        branch: ['', [Validators.minLength(3), Validators.maxLength(10), Validators.required, StockValidators.checkBranch]],
        code: ['', [Validators.minLength(3), Validators.maxLength(10), Validators.required]]
      }),
      selector: this.createStock(),
      stock: this.formBuilder.array([])
    }, {validator: StockValidators.checkStockExists});

    this.stock = this.form.get('stock') as FormArray;
    this.calculateTotal(this.stockInventoryService.carts);
    for (var i = 0; i < this.stockInventoryService.carts.length; i++) {
      this.addStock(this.stockInventoryService.carts[i]);
    }
    this.form.get('stock').valueChanges.subscribe(values => {
      this.calculateTotal(values);
    });
  }

  calculateTotal(value: Item[]) {
    console.log(value);
    var total = {};
    total['price'] = value.reduce((sum, cur) => {
      return sum + (cur.quantity * this.productsMap.get(cur.productId).price);
    }, 0);
    total['quantity'] = value.reduce((sum, cur) => {
      return sum + cur.quantity;
    }, 0);
    this.totals = total;
  }

  getProductMap(products) {
    this.productsMap = new Map(products.map(product => [product.id, product]));
  }

  onSubmit() {
    console.log('Submit', this.form.value);
  }

  createStock(productId: number | string = '', quantity: number | string = 10) {
    return this.formBuilder.group({
      productId: productId,
      quantity: quantity
    })
  }

  addStock({productId, quantity}) {
    this.stock.push(this.createStock(+productId, quantity));
  }

  deleteStock(e) {
    this.stock.removeAt(e.i);
  }

}
