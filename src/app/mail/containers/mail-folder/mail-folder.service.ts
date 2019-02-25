import { Injectable } from '@angular/core';
import { Observable, Observer, forkJoin } from 'rxjs';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MailFolderService {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<null | HttpErrorResponse> {
    console.log('route', route);
    console.log('state', state);
    return new Observable((observer: Observer<null | HttpErrorResponse>) => {
      forkJoin(
        this.getFolders()
      )
      .subscribe(([folders]) => {
        observer.next(null);
        observer.complete();
      });
    });
  }

  constructor(private http: HttpClient) { }

  getFolders(): Observable<any> {
    return this.http.get('http://localsorage:8080/');
  }
}
