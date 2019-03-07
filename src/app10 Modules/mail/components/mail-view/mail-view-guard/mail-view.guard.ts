import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MailViewComponent } from '../mail-view.component';

@Injectable({
  providedIn: 'root'
})
export class MailViewGuard implements CanDeactivate<MailViewComponent> {

  canDeactivate(component: MailViewComponent) {
    return component.reply == '' ? true : confirm('Are you sure? You will lose all not saved data');
  }

}
