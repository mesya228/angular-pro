import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, } from '@angular/router';
import { MailFolderService } from '../../containers/services/mail-folder/mail-folder.service';

@Injectable({
  providedIn: 'root'
})
export class MailViewResolver {

  constructor(private mailFolderService: MailFolderService) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<null | HttpErrorResponse> {
    return this.mailFolderService.getMessage(route.params['id'])
  }
  
}
