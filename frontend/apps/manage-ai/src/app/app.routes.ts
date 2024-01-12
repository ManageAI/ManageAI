import { Route } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthorizationComponent } from './authorization/authorization.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: 'login',
    loadComponent: () =>
      import('./authentication/authentication.component').then(
        (m) => m.AuthenticationComponent
      ),
  },

  {
    path: 'signup',
    loadComponent: () =>
      import('./authentication/authentication.component').then(
        (m) => m.AuthenticationComponent
      ),
  },

  {
    path: 'authorization',
    loadComponent: () =>
      import('./authorization/authorization.component').then(
        (m) => m.AuthorizationComponent
      ),
  },
];
