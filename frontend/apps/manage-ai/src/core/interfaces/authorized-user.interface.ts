export interface AuthorizedUser {
  id: number;
  fullName: string;
  email: string;
  userRoles: string[];
  token: string;
}
