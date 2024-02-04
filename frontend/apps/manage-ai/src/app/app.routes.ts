import { Route } from '@angular/router';

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
    path: 'auth',
    loadComponent: () =>
      import('./authorization/authorization.component').then(
        (m) => m.AuthorizationComponent
      ),
  },
];
