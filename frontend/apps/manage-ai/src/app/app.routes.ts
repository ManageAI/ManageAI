import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadComponent: () =>
      import('./authentication/authentication.component').then((m) => m.AuthenticationComponent),
  },

  {
    path: 'signup',
    loadComponent: () =>
      import('./authentication/authentication.component').then((m) => m.AuthenticationComponent),
  },

  {
    path: '',
    loadChildren: () =>
      import('./authorization/authorization.routes').then((r) => r.authorizationRoutes),
  },
];
