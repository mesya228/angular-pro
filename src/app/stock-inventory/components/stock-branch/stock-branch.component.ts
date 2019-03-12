import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-branch',
  templateUrl: './stock-branch.component.html',
  styleUrls: ['./stock-branch.component.sass']
})
export class StockBranchComponent {

  @Input() parent: FormGroup;

  constructor() { }

  checkRequired(name: string) {
    return this.parent.get(`store.${name}`).hasError('required') && this.parent.get(`store.${name}`).touched;
  }
  checkInvalid() {
    return this.parent.get('store.branch').hasError('invalidBranch') && this.parent.get('store.branch').dirty && !this.checkRequired('branch');
  }
  checkUnknown() {
    return this.parent.get('store.branch').hasError('unknownBranch') && this.parent.get('store.branch').dirty;
  }

}
