import { Component } from '@angular/core';
import { FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Product } from '../../models/product.class';
import { StockInventoryService } from '../../services/stock-inventory/stock-inventory.service';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.sass']
})
export class StockInventoryComponent {

  products: Product[];

  form: FormGroup;
  stock: FormArray;

  constructor(private formBuilder: FormBuilder,
              private stockInventoryService: StockInventoryService) {
    this.products = this.stockInventoryService.products;
    this.form = this.formBuilder.group({
      store: this.formBuilder.group({
        branch: ['', [Validators.minLength(3), Validators.maxLength(10), Validators.required]],
        code: ['', [Validators.minLength(3), Validators.maxLength(10), Validators.required]]
      }),
      selector: this.createStock(),
      stock: this.formBuilder.array([])
    })
    this.stock = this.form.get('stock') as FormArray;
    for (var i = 0; i < this.stockInventoryService.carts.length; i++) {
      this.addStock(this.stockInventoryService.carts[i]);
    }
  }

  onSubmit() {
    console.log('Submit', this.form.value);
  }

  createStock(productId: number | string = '', quantity: number | string = '') {
    return this.formBuilder.group({
      productId: productId,
      quantity: quantity
    })
  }

  addStock({productId, quantity}) {
    this.stock.push(this.createStock(productId, quantity))
  }

  deleteStock(e) {
    console.log(e);
    this.stock.removeAt(e.i);
  }

}
