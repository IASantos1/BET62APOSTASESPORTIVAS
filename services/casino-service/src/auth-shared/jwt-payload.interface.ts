import type { AuthRole } from '@bet62/shared';

export interface JwtAccessTokenPayload {
  sub: string;
  email: string;
  roles: AuthRole[];
  kycLevel?: number;
  jti: string;
  iat: number;
  exp: number;
}
