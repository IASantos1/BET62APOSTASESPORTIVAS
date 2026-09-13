import { Type } from "class-transformer";
import {
  IsArray,
  IsDate,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  MaxLength,
  Min,
  MinLength,
} from "class-validator";
import {
  BonusType,
  BonusTrigger,
  BonusStatus,
  CasinoContributionCategory,
  RolloverStatus,
  CampaignStatus,
} from "../enums";

export class CreateCampaignDto {
  @IsString()
  @MinLength(3)
  @MaxLength(128)
  name!: string;

  @IsOptional()
  @IsString()
  code?: string;

  @IsEnum(BonusType)
  bonusType!: BonusType;

  @IsEnum(BonusTrigger)
  trigger!: BonusTrigger;

  @IsEnum(CampaignStatus)
  @IsOptional()
  status?: CampaignStatus;

  @IsOptional()
  @IsNumber()
  @Min(0)
  matchPercent?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  maxAmount?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  minDepositAmount?: number;

  @IsOptional()
  @IsNumber()
  @Min(1.01)
  minOddsRequirement?: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  rolloverMultiplier?: number;

  @IsOptional()
  @IsEnum(CasinoContributionCategory)
  rolloverContributionCategory?: CasinoContributionCategory;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  startsAt?: Date;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  expiresAt?: Date;

  @IsOptional()
  @IsInt()
  @Min(1)
  validityDays?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  freeSpinsCount?: number;

  @IsOptional()
  @IsUUID("4")
  freeSpinsGameId?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  eligibleCountries?: string[];

  @IsOptional()
  @IsArray()
  @IsUUID("4", { each: true })
  eligibleSports?: string[];
}

export class GrantBonusDto {
  @IsEnum(BonusType)
  bonusType!: BonusType;

  @IsNumber()
  @Min(1)
  amount!: number;

  @IsOptional()
  @IsUUID("4")
  userId?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  @Min(1.01)
  minOddsRequirement?: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  rolloverMultiplier?: number;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  expiresAt?: Date;

  @IsOptional()
  @IsString()
  campaignId?: string;

  @IsOptional()
  @IsUUID("4")
  referenceDepositId?: string;
}

export class RedeemBonusCodeDto {
  @IsString()
  @MinLength(2)
  @MaxLength(32)
  code!: string;
}

export class BonusQueryDto {
  @IsOptional()
  @IsEnum(BonusStatus, { each: true })
  @IsArray()
  statuses?: BonusStatus[];

  @IsOptional()
  @IsEnum(RolloverStatus, { each: true })
  @IsArray()
  rolloverStatuses?: RolloverStatus[];

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  @Min(1)
  @Max(100)
  limit?: number = 50;
}

export class CancelBonusDto {
  @IsOptional()
  @IsString()
  reason?: string;
}

export class RolloverProgressResponse {
  @IsUUID("4")
  bonusId!: string;

  @IsEnum(BonusStatus)
  status!: BonusStatus;

  @IsNumber()
  grantedAmount!: number;

  @IsOptional()
  @IsNumber()
  maxAmount?: number;

  @IsNumber()
  rolloverRequiredTotal!: number;

  @IsNumber()
  rolloverCompletedReal!: number;

  @IsNumber()
  rolloverCompletedWeighted!: number;

  @IsNumber()
  rolloverPercent!: number;

  @IsEnum(RolloverStatus)
  rolloverStatus!: RolloverStatus;

  @IsOptional()
  @IsDate()
  expiresAt?: Date;

  @IsOptional()
  @IsNumber()
  minOddsRequirement?: number;
}
