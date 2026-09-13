export interface AdminJwtAccessTokenPayload {
  sub: string;
  email: string;
  role: string;
  jti: string;
  iat: number;
  exp: number;
}

export interface AdminJwtRefreshTokenPayload {
  sub: string;
  jti: string;
  iat: number;
  exp: number;
}
