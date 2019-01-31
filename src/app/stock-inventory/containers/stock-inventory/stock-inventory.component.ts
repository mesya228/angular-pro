import { Component } from '@angular/core';
import { FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Product } from '../../models/product.class';

@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.sass']
})
export class StockInventoryComponent {

  products: Product[] = [
    {id: 1, price: 1, name: 'Product 1'},
    {id: 2, price: 2, name: 'Product 2'},
    {id: 3, price: 3, name: 'Product 3'},
  ]

  form: FormGroup;
  stock: FormArray;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      store: this.formBuilder.group({
        branch: ['', [Validators.minLength(3), Validators.maxLength(10), Validators.required]],
        code: ['', [Validators.minLength(3), Validators.maxLength(10), Validators.required]]
      }),
      selector: this.createStock(),
      stock: this.formBuilder.array([
        this.createStock(1, 2),
        this.createStock(2, 10),
      ])
    })
    this.stock = this.form.get('stock') as FormArray;
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

  addStock(e) {
    this.stock.push(this.createStock(e.productId, e.quantity))
  }

  deleteStock(e) {
    console.log(e);
    this.stock.removeAt(e.i);
  }

}
