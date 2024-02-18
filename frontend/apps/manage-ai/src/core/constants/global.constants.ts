export abstract class GlobalConstants {
  static readonly profileRoutesByRole: { [key: string]: string } = {
    ROLE_ADMIN: 'user-profile',
    ROLE_CEO: 'ceo-profile',
    ROLE_CLIENT: 'client-profile',
    ROLE_USER: 'user-profile',
  };
}
