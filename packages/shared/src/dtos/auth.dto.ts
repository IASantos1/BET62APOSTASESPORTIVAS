import { Type } from "class-transformer";
import {
  IsArray,
  IsDate,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsStrongPassword,
  IsUUID,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidateNested,
} from "class-validator";
import { AuthRole, TwoFactorType, CountryCode, LanguageCode } from "../enums";

export class RegisterDto {
  @IsEmail()
  @MaxLength(254)
  email!: string;

  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 0,
    minUppercase: 1,
  })
  @MaxLength(256)
  password!: string;

  @IsString()
  @MinLength(1)
  @MaxLength(64)
  firstName!: string;

  @IsString()
  @MinLength(1)
  @MaxLength(64)
  lastName!: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  dateOfBirth?: Date;

  @IsOptional()
  @IsEnum(CountryCode)
  country?: CountryCode;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsEnum(LanguageCode)
  preferredLanguage?: LanguageCode;

  @IsOptional()
  @IsString()
  affiliateCode?: string;

  @IsOptional()
  @IsString()
  promocode?: string;
}

export class LoginDto {
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
  @MaxLength(512)
  trustedDeviceId?: string;

  @IsOptional()
  rememberMe?: boolean;
}

export class RefreshTokenDto {
  @IsOptional()
  @IsString()
  refreshToken?: string;
}

export class ForgotPasswordDto {
  @IsEmail()
  @MaxLength(254)
  email!: string;
}

export class ResetPasswordDto {
  @IsUUID("4")
  token!: string;

  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 0,
    minUppercase: 1,
  })
  @MaxLength(256)
  newPassword!: string;
}

export class VerifyEmailDto {
  @IsUUID("4")
  token!: string;
}

export class ChangePasswordDto {
  @IsString()
  @MinLength(8)
  @MaxLength(256)
  currentPassword!: string;

  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 0,
    minUppercase: 1,
  })
  @MaxLength(256)
  newPassword!: string;
}

export class EnableTwoFactorDto {
  @IsString()
  @MinLength(6)
  @MaxLength(8)
  code!: string;
}

export class VerifyTwoFactorDto {
  @IsString()
  @MinLength(6)
  @MaxLength(8)
  code!: string;
}

export class DisableTwoFactorDto {
  @IsOptional()
  @IsString()
  recoveryCode?: string;

  @IsOptional()
  @IsString()
  @MinLength(8)
  @MaxLength(256)
  password?: string;
}

export class AuthTokensResponse {
  @IsString()
  accessToken!: string;

  @IsOptional()
  @IsString()
  refreshToken?: string;

  @IsString()
  tokenType = "Bearer";

  @Type(() => Number)
  expiresIn!: number;
}

export class LoginResponse extends AuthTokensResponse {
  @IsEnum({ REQUIRED: "REQUIRED", NONE: "NONE", PENDING: "PENDING" })
  twoFactorStatus!: "REQUIRED" | "NONE" | "PENDING";

  @IsOptional()
  @IsString()
  challengeId?: string;
}

export class MeResponse {
  @IsUUID("4")
  id!: string;

  @IsEmail()
  email!: string;

  @IsArray()
  @IsEnum(AuthRole, { each: true })
  roles!: AuthRole[];

  @IsString()
  firstName!: string;

  @IsString()
  lastName!: string;

  @IsEnum(TwoFactorType)
  twoFactorEnabled!: TwoFactorType;
}

export class TwoFactorSecretResponse {
  @IsString()
  secret!: string;

  @IsString()
  otpAuthUrl!: string;

  @IsString()
  qrDataUrl!: string;

  @IsArray()
  recoveryCodes!: string[];
}
