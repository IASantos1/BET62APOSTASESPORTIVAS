import { Type } from "class-transformer";
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsEnum,
  IsIn,
  IsInt,
  IsJSON,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  MaxLength,
  Min,
  ValidateNested,
} from "class-validator";
import {
  SportType,
  MarketType,
  MarketStatus,
  EventStatus,
  SelectionOutcome,
} from "../enums";

export class PrematchEventsQueryDto {
  @IsOptional()
  @IsEnum(SportType, { each: true })
  @IsArray()
  sports?: SportType[];

  @IsOptional()
  @IsArray()
  @IsUUID("4", { each: true })
  leagueIds?: string[];

  @IsOptional()
  @IsString()
  searchTerm?: string;

  @IsOptional()
  @IsIn(["TODAY", "TOMORROW", "NEXT_24H", "NEXT_72H", "THIS_WEEK", "NEXT_WEEK", "LIVE", "UPCOMING"])
  period?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  fromDate?: Date;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  toDate?: Date;

  @IsOptional()
  @IsBoolean()
  topEventsOnly?: boolean;

  @IsOptional()
  onlyWithLiveStream?: boolean;

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
  limit?: number = 50;
}

export class LiveEventsQueryDto {
  @IsOptional()
  @IsEnum(SportType, { each: true })
  @IsArray()
  sports?: SportType[];

  @IsOptional()
  @IsArray()
  @IsUUID("4", { each: true })
  leagueIds?: string[];

  @IsOptional()
  onlyWithActiveMarkets?: boolean;

  @IsOptional()
  onlyWithLiveStream?: boolean;

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
  limit?: number = 50;
}

export class EventDetailQueryDto {
  @IsUUID("4")
  eventId!: string;

  @IsOptional()
  @IsEnum(MarketStatus, { each: true })
  @IsArray()
  marketStatuses?: MarketStatus[];

  @IsOptional()
  includeSettledMarkets?: boolean;
}

export class LeagueQueryDto {
  @IsOptional()
  @IsEnum(SportType)
  sportType?: SportType;

  @IsOptional()
  @IsString()
  countryCode?: string;

  @IsOptional()
  onlyTop?: boolean;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  @Min(1)
  limit?: number = 200;
}

export class OddsUpdatePayloadDto {
  @IsUUID("4")
  selectionId!: string;

  @IsNumber()
  @Min(1.01)
  newOdds!: number;

  @IsEnum(MarketStatus)
  status!: MarketStatus;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  validUntil?: Date;

  @IsOptional()
  @IsString()
  providerChangeId?: string;
}

export class MarketSelectionDto {
  @IsUUID("4")
  id!: string;

  @IsString()
  @MaxLength(256)
  name!: string;

  @IsEnum(SelectionOutcome)
  outcome!: SelectionOutcome;

  @IsNumber()
  @Min(1.01)
  odds!: number;

  @IsEnum(MarketStatus)
  status!: MarketStatus;

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

export class MarketDto {
  @IsUUID("4")
  id!: string;

  @IsEnum(MarketType)
  type!: MarketType;

  @IsString()
  name!: string;

  @IsEnum(MarketStatus)
  status!: MarketStatus;

  @IsOptional()
  @IsNumber()
  handicapValue?: number;

  @IsOptional()
  @IsNumber()
  totalLineValue?: number;

  @IsOptional()
  @IsJSON()
  specifiers?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MarketSelectionDto)
  selections!: MarketSelectionDto[];
}

export class EventDto {
  @IsUUID("4")
  id!: string;

  @IsEnum(SportType)
  sportType!: SportType;

  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  homeTeamName?: string;

  @IsOptional()
  @IsString()
  awayTeamName?: string;

  @IsOptional()
  @IsUUID("4")
  leagueId?: string;

  @IsOptional()
  @IsString()
  leagueName?: string;

  @IsOptional()
  @IsString()
  countryName?: string;

  @IsEnum(EventStatus)
  status!: EventStatus;

  @IsDate()
  @Type(() => Date)
  kickoffAt!: Date;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  liveUpdatedAt?: Date;

  @IsOptional()
  @IsObject()
  liveScoreJson?: unknown;

  @IsOptional()
  @IsObject()
  liveClockJson?: unknown;

  @IsOptional()
  @IsBoolean()
  liveStreamAvailable?: boolean;

  @IsOptional()
  @IsArray()
  markets?: unknown[];

  @IsOptional()
  @IsNumber()
  @Min(0)
  marketsCount?: number;

  @IsOptional()
  @IsString()
  providerEventId?: string;
}

export class LiveMatchUpdateDto {
  @IsUUID("4")
  eventId!: string;

  @IsEnum(EventStatus)
  status!: EventStatus;

  @IsOptional()
  @IsObject()
  scoreBoard?: Record<string, unknown>;

  @IsOptional()
  @IsObject()
  matchClock?: Record<string, unknown>;

  @IsOptional()
  @IsString()
  incidentType?: string;

  @IsOptional()
  @IsObject()
  incidentData?: Record<string, unknown>;

  @IsDate()
  @Type(() => Date)
  updatedAt!: Date;
}
