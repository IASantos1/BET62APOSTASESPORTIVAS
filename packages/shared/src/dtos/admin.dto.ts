import { Type } from "class-transformer";
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsStrongPassword,
  IsUUID,
  Max,
  MaxLength,
  Min,
  MinLength,
} from "class-validator";
import { AdminRole, AuditLogSeverity, AdminDashboardPeriod } from "../enums";

export class AdminLoginDto {
  @IsEmail()
  @MaxLength(254)
  email!: string;

  @IsString()
  @MinLength(8)
  @MaxLength(256)
  password!: string;

  @IsOptional()
  @IsString()
  @MinLength(6)
  @MaxLength(8)
  twoFactorCode?: string;

  @IsOptional()
  @IsString()
  ipAddress?: string;

  @IsOptional()
  @IsString()
  userAgent?: string;
}

export class AdminSessionResponse {
  @IsUUID("4")
  adminUserId!: string;

  @IsString()
  name!: string;

  @IsEmail()
  email!: string;

  @IsEnum(AdminRole)
  role!: AdminRole;

  @IsString()
  accessToken!: string;

  @IsOptional()
  @IsString()
  refreshToken?: string;

  @IsInt()
  @Type(() => Number)
  expiresInSec!: number;
}

export class AdminAuditQueryDto {
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  startDate?: Date;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  endDate?: Date;

  @IsOptional()
  @IsUUID("4")
  adminUserId?: string;

  @IsOptional()
  @IsString()
  action?: string;

  @IsOptional()
  @IsString()
  entityType?: string;

  @IsOptional()
  @IsString()
  entityId?: string;

  @IsOptional()
  @IsUUID("4")
  userAffectedId?: string;

  @IsOptional()
  @IsEnum(AuditLogSeverity)
  severity?: AuditLogSeverity;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  @Min(1)
  @Max(200)
  limit?: number = 100;
}

export class AdminDashboardQueryDto {
  @IsEnum(AdminDashboardPeriod)
  period!: AdminDashboardPeriod;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  from?: Date;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  to?: Date;

  @IsOptional()
  @IsString()
  currency?: string;
}

export class AdminUserActionDto {
  @IsUUID("4")
  userId!: string;

  @IsString()
  reason!: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  durationDays?: number;
}

export class AdminCreateUserDto {
  @IsEmail()
  @MaxLength(254)
  email!: string;

  @IsStrongPassword({
    minLength: 10,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1,
  })
  password!: string;

  @IsString()
  @MinLength(1)
  @MaxLength(128)
  name!: string;

  @IsEnum(AdminRole)
  role!: AdminRole;

  @IsOptional()
  disabled?: boolean;
}
