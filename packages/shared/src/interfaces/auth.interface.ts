import type { AuthProvider, AuthRole, TwoFactorType } from "../enums";
import type { Timestamped, Identifiable, GeoLocation } from "./common.interface";

export interface AuthUser extends Identifiable, Timestamped {
  userId: string;
  email: string;
  emailVerifiedAt?: Date | null;
  passwordHash: string;
  provider: AuthProvider;
  providerId?: string | null;
  roles: AuthRole[];
  twoFactorType: TwoFactorType;
  twoFactorSecret?: string | null;
  twoFactorRecoveryCodes?: string[] | null;
  isActive: boolean;
  lastLoginAt?: Date | null;
  lastLoginIp?: string | null;
  lastLoginLocation?: GeoLocation | null;
}

export interface RefreshToken extends Identifiable, Timestamped {
  userId: string;
  tokenHash: string;
  userAgent?: string | null;
  ipAddress?: string | null;
  location?: GeoLocation | null;
  expiresAt: Date;
  revokedAt?: Date | null;
  revokedReason?: string | null;
  isActive: boolean;
}

export interface PasswordResetToken extends Identifiable, Timestamped {
  userId: string;
  tokenHash: string;
  expiresAt: Date;
  usedAt?: Date | null;
  ipAddress?: string | null;
  isUsed: boolean;
}

export interface EmailVerificationToken extends Identifiable, Timestamped {
  userId: string;
  tokenHash: string;
  expiresAt: Date;
  usedAt?: Date | null;
  isUsed: boolean;
}

export interface AuthJwtPayload {
  sub: string;
  email: string;
  roles: AuthRole[];
  kycLevel?: number;
  iat: number;
  exp: number;
  jti: string;
  iss: string;
  aud?: string;
}

export interface LoginAttempt {
  email: string;
  ipAddress: string;
  userAgent?: string;
  success: boolean;
  failureReason?: string;
  attemptAt: Date;
}

export interface AuthSession {
  id: string;
  userId: string;
  refreshTokenId: string;
  userAgent?: string | null;
  ipAddress?: string | null;
  location?: GeoLocation | null;
  startedAt: Date;
  lastActivityAt: Date;
  expiresAt: Date;
  isActive: boolean;
  deviceName?: string | null;
  deviceType?: "desktop" | "mobile" | "tablet" | "unknown";
}
