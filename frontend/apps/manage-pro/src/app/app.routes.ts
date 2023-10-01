import { Route } from '@angular/router';
import { AuthorizedUserComponent } from './authorized-user/authorized-user.component';

export const appRoutes: Route[] = [
  {
    path: 'login',
    component: AuthorizedUserComponent,
    loadChildren: () =>
      import('./authorized-user/authorized-user.module').then(
        (m) => m.AuthorizedUserModule
      ),
  },
];
