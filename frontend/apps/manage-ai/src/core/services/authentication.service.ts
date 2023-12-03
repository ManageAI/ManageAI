import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _baseUrl = 'http://localhost:8080';

  constructor(private _http: HttpClient) {}

  public postAuthorizationLogin(login: any): Observable<any> {
    return this._http.post(`${this._baseUrl}/login`, login);
  }
}
