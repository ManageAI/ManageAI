import { Route } from '@angular/router';
import { AuthorizationComponent } from './authorization.component';
import { authorizationGuard } from '../../core/guards/authorization.guard';

export const authorizationRoutes: Route[] = [
  {
    path: '',
    component: AuthorizationComponent,
    children: [
      {
        path: 'user-profile',
        canActivateChild: [authorizationGuard],
        loadChildren: () =>
          import('./content/user-profile/user-profile.routes').then((r) => r.userProfileRoutes),
      },
    ],
  },
];
