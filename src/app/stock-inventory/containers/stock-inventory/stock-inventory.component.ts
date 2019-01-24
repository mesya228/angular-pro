import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
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

  constructor() {
    this.form = new FormGroup({
      store: new FormGroup({
        branch: new FormControl('', [Validators.minLength(3), Validators.maxLength(10), Validators.required]),
        code: new FormControl('', [Validators.minLength(3), Validators.maxLength(10), Validators.required])
      }),
      selector: new FormGroup({
        productId: new FormControl(''),
        quantity: new FormControl(10)
      }),
      stock: new FormArray([])
    })
  }

  onSubmit() {
    console.log('Submit', this.form.value);
  }

}
