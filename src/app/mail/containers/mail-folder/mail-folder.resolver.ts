import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MailFolderService } from '../services/mail-folder/mail-folder.service';

@Injectable({
  providedIn: 'root'
})
export class MailFolderResolver {

  constructor(private mailFolderService: MailFolderService) { }
  
  resolve(route: ActivatedRouteSnapshot): Observable<null | HttpErrorResponse> {
    return this.mailFolderService.getFolder(route.params['name'])
  }

}
