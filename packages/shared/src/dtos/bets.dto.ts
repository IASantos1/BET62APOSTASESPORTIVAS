import { Type } from "class-transformer";
import {
  IsArray,
  IsDate,
  IsEmail,
  IsEnum,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidateNested,
} from "class-validator";
import {
  BetAcceptanceType,
  BetStatus,
  BetType,
  BonusType,
  CashoutType,
  MarketStatus,
  SelectionOutcome,
  SportType,
} from "../enums";

export class PlaceBetSelectionDto {
  @IsUUID("4")
  eventId!: string;

  @IsUUID("4")
  marketId!: string;

  @IsUUID("4")
  selectionId!: string;

  @IsNumber()
  @Min(1.01)
  oddsAtSelection!: number;

  @IsOptional()
  @IsNumber()
  handicapValue?: number;

  @IsOptional()
  @IsNumber()
  totalLineValue?: number;

  @IsOptional()
  @IsObject()
  specifiers?: Record<string, string | number>;
}

export class PlaceBetDto {
  @IsEnum(BetType)
  betType!: BetType;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlaceBetSelectionDto)
  @Min(1)
  selections!: PlaceBetSelectionDto[];

  @IsNumber()
  @Min(0.1)
  @Max(10000)
  stakeAmount!: number;

  @IsOptional()
  @IsEnum(BetAcceptanceType)
  acceptanceType?: BetAcceptanceType;

  @IsOptional()
  cashoutEnabled?: boolean;

  @IsOptional()
  @IsNumber()
  autoCashoutValue?: number;

  @IsOptional()
  @IsUUID("4")
  bonusIdUsed?: string;

  @IsOptional()
  @IsUUID("4")
  freebetIdUsed?: string;

  @IsOptional()
  @IsString()
  promocode?: string;
}

export class RequestCashoutDto {
  @IsUUID("4")
  betId!: string;

  @IsEnum(CashoutType)
  type!: CashoutType;

  @IsOptional()
  @IsNumber()
  @Min(0.1)
  partialAmount?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  partialPercent?: number;

  @IsOptional()
  acceptedValue?: number;
}

export class BetsHistoryQueryDto {
  @IsOptional()
  @IsArray()
  @IsEnum(BetStatus, { each: true })
  statuses?: BetStatus[];

  @IsOptional()
  @IsArray()
  @IsEnum(BetType, { each: true })
  types?: BetType[];

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  fromDate?: Date;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  toDate?: Date;

  @IsOptional()
  onlyActiveCashoutAvailable?: boolean;

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
  limit?: number = 25;
}

export class AdminSettleEventDto {
  @IsUUID("4")
  eventId!: string;

  @IsObject()
  results!: {
    winnerSide?: SelectionOutcome;
    homeScore?: number;
    awayScore?: number;
    homeHalfScore?: number;
    awayHalfScore?: number;
    setScores?: Array<{ home: number; away: number }>;
    selectionResults?: Array<{ selectionId: string; outcome: SelectionOutcome }>;
    void?: boolean;
    voidReason?: string;
  };

  @IsOptional()
  @IsString()
  note?: string;
}

export class AdminOddOverrideDto {
  @IsUUID("4")
  selectionId!: string;

  @IsNumber()
  @Min(1.01)
  newOdds!: number;

  @IsOptional()
  @IsString()
  reason?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  expiresAt?: Date;
}

export class AdminMarketStatusDto {
  @IsEnum(MarketStatus)
  status!: MarketStatus;

  @IsOptional()
  @IsString()
  reason?: string;
}

export class BetPlacementResponse {
  @IsUUID("4")
  betId!: string;

  @IsEnum(BetStatus)
  status!: BetStatus;

  @IsNumber()
  stakeAmount!: number;

  @IsNumber()
  totalOdds!: number;

  @IsNumber()
  potentialReturn!: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PlaceBetSelectionDto)
  acceptedSelections?: PlaceBetSelectionDto[];
}
