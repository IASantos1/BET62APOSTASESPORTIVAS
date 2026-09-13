import { Type } from "class-transformer";
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsEnum,
  IsInt,
  IsJSON,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
  Max,
  Min,
  ValidateNested,
} from "class-validator";

export class PaginationQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(200)
  limit = 20;
}

export class SortQueryDto {
  @IsOptional()
  @IsString()
  sortBy?: string;

  @IsOptional()
  @IsEnum(["asc", "desc"])
  sortOrder?: "asc" | "desc" = "desc";
}

export class IdParamDto {
  @IsUUID("4")
  id!: string;
}

export class DateRangeDto {
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  from?: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  to?: Date;
}

export class ApiResponseDto<T> {
  @IsBoolean()
  success!: boolean;

  @IsOptional()
  @IsString()
  message?: string;

  @IsOptional()
  data?: T;

  @IsOptional()
  @IsObject()
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };

  @IsOptional()
  @IsObject()
  meta?: {
    timestamp: string;
    requestId: string;
  };
}

export class HealthCheckDto {
  @IsString()
  status!: "ok" | "degraded" | "down";

  @IsString()
  service!: string;

  @IsString()
  version!: string;

  @IsOptional()
  @IsObject()
  checks?: Record<string, { status: string; latencyMs?: number; error?: string }>;
}

export class MoneyDto {
  @IsNumber()
  @Min(0)
  amount!: number;

  @IsString()
  @Matches(/^[A-Z]{3}$/)
  currency: string = "EUR";
}
