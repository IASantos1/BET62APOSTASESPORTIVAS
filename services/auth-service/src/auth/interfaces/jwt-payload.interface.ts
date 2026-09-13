import type { AuthRole } from '@bet62/shared';

export interface JwtAccessTokenPayload {
  sub: string;
  uid: string;
  email: string;
  roles: AuthRole[];
  kycLevel?: number;
  jti: string;
  iat: number;
  exp: number;
}

export interface JwtRefreshTokenPayload {
  sub: string;
  uid: string;
  jti: string;
  iat: number;
  exp: number;
}
