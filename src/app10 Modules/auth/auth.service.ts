import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user;

  constructor() {
    this.user = {isAdmin: false};
  }

  checkPermissions() {
    return of(this.user && this.user.isAdmin);
  }
  isLoggedIn() {
    return of(!!this.user);
  }
}
