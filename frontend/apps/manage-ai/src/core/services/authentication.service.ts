import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Authentication } from '../interfaces/authentication.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _baseUrl = environment.url;

  constructor(private _http: HttpClient) {}

  public authenticationLogin(login: Partial<Authentication>): Observable<any> {
    return this._http.post(`${this._baseUrl}/login`, login);
  }
}
