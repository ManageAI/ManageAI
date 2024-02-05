import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { AuthorizedUser } from '../interfaces/authorized-user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _baseUrl = environment.url;

  private _authorizedUser = new BehaviorSubject<AuthorizedUser>(
    JSON.parse(localStorage.getItem('authorizedUser') || '{}')
  );
  authorizedUser$ = this._authorizedUser.asObservable();

  constructor(private _http: HttpClient, private _cookieService: CookieService) {}

  public authentication<T>(endpoint: string, form: T): Observable<string[]> {
    return this._http.post<AuthorizedUser>(`${this._baseUrl}/${endpoint}`, form).pipe(
      take(1),
      map((user) => {
        this._handleUserAuthentication(user);

        return user.userRoles;
      })
    );
  }

  private _handleUserAuthentication(user: AuthorizedUser): void {
    this._setTokenInCookie(user.token);
    this._setUserDataInStorage(user);

    this._authorizedUser.next(user);
  }

  private _setTokenInCookie(token: string): void {
    this._cookieService.set('manage-ai-token', token, { path: '/', secure: true });
  }

  private _setUserDataInStorage(user: AuthorizedUser): void {
    const userData = this._pickUserData(user);
    localStorage.setItem('authorizedUser', JSON.stringify(userData));
  }

  private _pickUserData(
    user: AuthorizedUser
  ): Pick<AuthorizedUser, 'id' | 'fullName' | 'email' | 'userRoles'> {
    return {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      userRoles: user.userRoles,
    };
  }
}
