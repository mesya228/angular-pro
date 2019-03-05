import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailFolderService {

  constructor(private http: HttpClient) { }

  getFolder(state: string): Observable<any> {
    return this.http.get('http://localhost:8080/'+state);
  }
  
  getMessage(id: string): Observable<any> {
    let options = {
      params: new HttpParams()
        .set('id', id)
    }
    return this.http.get('http://localhost:8080/message', options);
  }
}
