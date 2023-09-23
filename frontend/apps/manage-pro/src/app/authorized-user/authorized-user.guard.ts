import { CanActivateFn } from '@angular/router';

export const authorizedUserGuard: CanActivateFn = (route, state) => {
  return true;
};
