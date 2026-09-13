import type { AuditAction, AuditEntityType, AdminRole } from "../enums";
import type { Identifiable, Timestamped, GeoLocation } from "./common.interface";

export interface AdminUser extends Identifiable, Timestamped {
  email: string;
  emailVerifiedAt?: Date | null;
  passwordHash: string;
  firstName?: string | null;
  lastName?: string | null;
  fullName?: string | null;
  phone?: string | null;
  avatarUrl?: string | null;
  role: AdminRole;
  permissionIds?: string[] | null;
  status: "ACTIVE" | "SUSPENDED" | "LOCKED" | "INVITED" | "DISABLED";
  twoFactorEnabled: boolean;
  twoFactorSecret?: string | null;
  lastLoginAt?: Date | null;
  lastLoginIp?: string | null;
  lastLoginLocation?: GeoLocation | null;
  lastLoginUserAgent?: string | null;
  failedLoginAttempts: number;
  lockedUntil?: Date | null;
  passwordChangedAt?: Date | null;
  passwordNextChangeRequired: boolean;
  invitedBy?: string | null;
  invitedAt?: Date | null;
  lastActivityAt?: Date | null;
  preferredLanguage: string;
  timezone?: string | null;
  notes?: string | null;
  metadata?: unknown | null;
}

export interface AdminSession extends Identifiable, Timestamped {
  adminUserId: string;
  tokenHash: string;
  refreshTokenHash?: string | null;
  ipAddress?: string | null;
  location?: GeoLocation | null;
  userAgent?: string | null;
  deviceType?: string | null;
  startedAt: Date;
  lastActivityAt: Date;
  expiresAt: Date;
  revokedAt?: Date | null;
  revokedReason?: string | null;
  isActive: boolean;
  impersonatedUserId?: string | null;
  impersonatedAt?: Date | null;
}

export interface RolePermission extends Identifiable, Timestamped {
  role: AdminRole;
  permissionKey: string;
  permissionGroup: string;
  permissionLabel?: string | null;
  description?: string | null;
  canCreate: boolean;
  canRead: boolean;
  canUpdate: boolean;
  canDelete: boolean;
  canApprove: boolean;
  canExport: boolean;
  scope?: "ALL" | "OWN" | "TEAM" | "DEPARTMENT" | null;
}

export interface AuditLog extends Identifiable {
  id: string;
  timestamp: Date;
  adminUserId?: string | null;
  adminEmail?: string | null;
  adminRole?: AdminRole | null;
  userIdAffected?: string | null;
  impersonatedBy?: string | null;
  action: AuditAction;
  entityType: AuditEntityType;
  entityId?: string | null;
  entityExternalId?: string | null;
  beforeJson?: unknown | null;
  afterJson?: unknown | null;
  changesDiffJson?: unknown | null;
  ipAddress?: string | null;
  userAgent?: string | null;
  requestId?: string | null;
  correlationId?: string | null;
  note?: string | null;
  severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  metadata?: unknown | null;
}
