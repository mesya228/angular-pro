import { Component } from '@angular/core';
import { FormGroup, Validators, FormArray, FormBuilder, AbstractControl } from '@angular/forms';

import { map } from 'rxjs/operators';

import { StockInventoryService } from '../../services/stock-inventory/stock-inventory.service';

import { Product, Item } from '../../models/product.class';

import { StockValidators } from './stock-inventory.validators';
import { forkJoin } from 'rxjs';

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
    if (!this.stockInventoryService.products || !this.stockInventoryService.carts) {
      forkJoin(
        this.stockInventoryService.getCarts(),
        this.stockInventoryService.getProducts(),
      ).subscribe(([carts, products]) => {
        this.setConstructorValues(carts, products);
      });
    } else {
      this.setConstructorValues(this.stockInventoryService.carts, this.stockInventoryService.products);
    }
  }

  setConstructorValues(carts, products) {
    this.products = products;
        this.getProductMap(this.products);
    
        this.form = this.formBuilder.group({
          store: this.formBuilder.group({
            branch: [
              '', 
              [Validators.minLength(3), Validators.maxLength(10), Validators.required, StockValidators.checkBranch],
              [this.validateBranch.bind(this)]
            ],
            code: ['', [Validators.minLength(3), Validators.maxLength(10), Validators.required]]
          }),
          selector: this.createStock(),
          stock: this.formBuilder.array([])
        }, {validator: StockValidators.checkStockExists});
    
        this.stock = this.form.get('stock') as FormArray;
        this.calculateTotal(carts);
        for (var i = 0; i < carts.length; i++) {
          this.addStock(carts[i]);
        }
        this.form.get('stock').valueChanges.subscribe(values => {
          this.calculateTotal(values);
        });
    console.log(!!this.form);
  }

  validateBranch(control: AbstractControl) {
    return this.stockInventoryService.checkBranchId(control.value)
      .pipe(
        map(res => {
          console.log(res ? null : {unknownBranch: true});
          return res ? null : {unknownBranch: true};
        })
      );
  }

  calculateTotal(value: Item[]) {
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
    console.log(products);
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
