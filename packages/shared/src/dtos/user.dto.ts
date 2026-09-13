import { Type } from "class-transformer";
import {
  IsArray,
  IsDate,
  IsEmail,
  IsEnum,
  IsInt,
  IsMobilePhone,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidateNested,
} from "class-validator";
import type { BetType, MarketStatus, MarketType, SelectionOutcome, SportType, BetAcceptanceType, UserStatus, LanguageCode, CountryCode, SelfExcludeDuration, PaymentProvider, BonusType, CasinoGameCategory } from "../enums";

export class UpdateUserProfileDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  firstName?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  lastName?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  address?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  city?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  postalCode?: string;

  @IsOptional()
  @IsMobilePhone("pt-PT")
  phoneNumber?: string;

  @IsOptional()
  @IsEnum({ "pt-PT": "pt-PT", "en-US": "en-US", "es-ES": "es-ES" })
  preferredLanguage?: LanguageCode;

  @IsOptional()
  marketingOptIn?: boolean;

  @IsOptional()
  smsOptIn?: boolean;

  @IsOptional()
  pushOptIn?: boolean;
}

export class UpdateUserPreferencesDto {
  @IsOptional()
  @IsEnum(["decimal", "fractional", "american", "hongkong", "indonesian", "malay"])
  oddsFormat?: "decimal" | "fractional" | "american";

  @IsOptional()
  @IsNumber()
  @Min(0.1)
  @Max(10000)
  defaultStake?: number;

  @IsOptional()
  @IsEnum({
    ACCEPT_HIGHER_ODDS: "ACCEPT_HIGHER_ODDS",
    ACCEPT_ANY_ODDS: "ACCEPT_ANY_ODDS",
    ACCEPT_NO_CHANGE: "ACCEPT_NO_CHANGE",
    ACCEPT_EQUAL_OR_HIGHER: "ACCEPT_EQUAL_OR_HIGHER",
  })
  betAcceptanceType?: BetAcceptanceType;

  @IsOptional()
  showLiveScores?: boolean;

  @IsOptional()
  autoCashoutEnabled?: boolean;

  @IsOptional()
  @IsNumber()
  @Min(0)
  autoCashoutThreshold?: number;

  @IsOptional()
  realityCheckEnabled?: boolean;

  @IsOptional()
  @IsInt()
  @Min(10)
  @Max(1440)
  realityCheckIntervalMin?: number;

  @IsOptional()
  quickBetEnabled?: boolean;

  @IsOptional()
  soundEnabled?: boolean;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  favoriteSports?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  favoriteLeagues?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  favoriteTeams?: string[];
}

export class UpdateUserLimitsDto {
  @IsOptional()
  @IsNumber()
  @Min(0)
  depositDailyLimit?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  depositWeeklyLimit?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  depositMonthlyLimit?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  lossDailyLimit?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  lossWeeklyLimit?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  lossMonthlyLimit?: number;

  @IsOptional()
  @IsInt()
  @Min(15)
  @Max(1440)
  sessionTimeLimitMin?: number;
}

export class RequestSelfExclusionDto {
  @IsEnum({
    DAYS_7: "DAYS_7",
    DAYS_30: "DAYS_30",
    DAYS_90: "DAYS_90",
    DAYS_180: "DAYS_180",
    DAYS_365: "DAYS_365",
    PERMANENT: "PERMANENT",
  })
  duration!: SelfExcludeDuration;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  reason?: string;

  @IsOptional()
  confirmResponsible?: boolean;
}

export class UserStatusAdminUpdateDto {
  @IsEnum({
    PENDING: "PENDING",
    ACTIVE: "ACTIVE",
    SUSPENDED: "SUSPENDED",
    SELF_EXCLUDED: "SELF_EXCLUDED",
    BANNED: "BANNED",
    CLOSED: "CLOSED",
  })
  status!: UserStatus;

  @IsOptional()
  @IsString()
  reason?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  until?: Date;
}
