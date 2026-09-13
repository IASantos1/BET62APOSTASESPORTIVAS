import { Type } from "class-transformer";
import {
  IsArray,
  IsEnum,
  IsInt,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from "class-validator";
import {
  CasinoGameCategory,
  CasinoGameStatus,
  CasinoSessionStatus,
  CasinoBetStatus,
  CasinoGameProvider,
} from "../enums";

export class StartCasinoSessionDto {
  @IsUUID("4")
  gameId!: string;

  @IsOptional()
  @IsEnum(CasinoGameProvider)
  provider?: CasinoGameProvider;

  @IsOptional()
  @IsString()
  launchParams?: string;

  @IsOptional()
  @IsString()
  playerToken?: string;
}

export class EndCasinoSessionDto {
  @IsUUID("4")
  sessionId!: string;

  @IsOptional()
  @IsString()
  reason?: string;
}

export class PlaceCasinoBetDto {
  @IsUUID("4")
  gameId!: string;

  @IsOptional()
  @IsUUID("4")
  sessionId?: string;

  @IsNumber()
  @Min(0.01)
  @Max(20000)
  stakeAmount!: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(200)
  lines?: number;

  @IsOptional()
  @IsNumber()
  @Min(0.01)
  stakePerLine?: number;

  @IsOptional()
  @IsString()
  betType?: string;

  @IsOptional()
  @IsObject()
  extraParameters?: Record<string, unknown>;

  @IsOptional()
  @IsString()
  externalReferenceId?: string;
}

export class SettleCasinoBetDto {
  @IsUUID("4")
  betId!: string;

  @IsEnum(CasinoBetStatus)
  status!: CasinoBetStatus;

  @IsNumber()
  @Min(0)
  payoutAmount!: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  jackpotContributionAmount?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  jackpotWinAmount?: number;

  @IsOptional()
  @IsObject()
  roundDetails?: Record<string, unknown>;

  @IsOptional()
  @IsString()
  externalReferenceId?: string;
}

export class CasinoGamesQueryDto {
  @IsOptional()
  @IsEnum(CasinoGameCategory, { each: true })
  @IsArray()
  categories?: CasinoGameCategory[];

  @IsOptional()
  @IsEnum(CasinoGameProvider, { each: true })
  @IsArray()
  providers?: CasinoGameProvider[];

  @IsOptional()
  @IsEnum(CasinoGameStatus)
  status?: CasinoGameStatus;

  @IsOptional()
  @IsString()
  searchTerm?: string;

  @IsOptional()
  @IsString()
  sort?: "POPULAR" | "NEWEST" | "RTP" | "NAME" | "PROVIDER";

  @IsOptional()
  onlyFavorites?: boolean;

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
  limit?: number = 40;
}

export class SpinResultResponse {
  @IsUUID("4")
  betId!: string;

  @IsEnum(CasinoBetStatus)
  status!: CasinoBetStatus;

  @IsNumber()
  stakeAmount!: number;

  @IsNumber()
  payoutAmount!: number;

  @IsNumber()
  netResult!: number;

  @IsOptional()
  @IsArray()
  reelsResult?: unknown[];

  @IsOptional()
  @IsArray()
  winningLines?: unknown[];

  @IsOptional()
  @IsObject()
  extra?: Record<string, unknown>;
}
