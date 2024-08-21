import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { map, take } from 'rxjs';

export const authorizationGuard: CanActivateChildFn = () => {
  const authService = inject(AuthenticationService);

  return authService.authorizedUser$.pipe(
    take(1),
    map(({ userRoles }) => {
      if (userRoles.includes('ROLE_ADMIN') || userRoles.includes('ROLE_USER')) {
        return true;
      } else {
        return false;
      }
    })
  );
};
