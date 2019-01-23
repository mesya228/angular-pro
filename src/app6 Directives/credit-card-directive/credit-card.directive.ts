import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {

  @HostBinding('class') classes: string;

  @HostListener('input', ['$event.target']) onkeydown(target: HTMLInputElement) {
    let trimmedStr = target.value.replace(/\D+/g, '');

    this.classes = '';
    if (trimmedStr.length > 16) {
      trimmedStr = trimmedStr.substr(0,16);
    }
    if (trimmedStr.length == 16) this.classes = 'valid';
    
    let codeNumbers = [];
    for (var i = 0; i < trimmedStr.length; i += 4) {
      codeNumbers.push(trimmedStr.substr(i, 4));
    }

    if (/\D+/g.test(target.value.replace(/\s+/g, ''))) {
      this.classes = 'invalid';
      setTimeout(() => {
        if (trimmedStr.length == 16) this.classes = 'valid';
        else this.classes = '';
      }, 2000);
    }

    target.value = codeNumbers.join(' ');

  }

}
