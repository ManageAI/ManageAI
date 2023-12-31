import { Route } from '@angular/router';
import { AuthorizedUserComponent } from './authorized-user/authorized-user.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: 'login',
    component: AuthorizedUserComponent,
    loadChildren: () =>
      import('./authorized-user/authorized-user.module').then(
        (m) => m.AuthorizedUserModule
      ),
  },

  {
    path: 'signup',
    component: AuthorizedUserComponent,
    loadChildren: () =>
      import('./authorized-user/authorized-user.module').then(
        (m) => m.AuthorizedUserModule
      ),
  },
];
