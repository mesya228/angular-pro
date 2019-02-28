import { Injectable } from '@angular/core';
import { Observable, Observer, forkJoin } from 'rxjs';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MailFolderService {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<null | HttpErrorResponse> {
    return this.getFolders(route.params['name'])
  }

  constructor(private http: HttpClient) { }

  getFolders(state: string): Observable<any> {
    return this.http.get('http://localhost:8080/'+state);
  }
}
