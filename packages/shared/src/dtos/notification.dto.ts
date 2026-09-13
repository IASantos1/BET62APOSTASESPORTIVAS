import { Type } from "class-transformer";
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsEnum,
  IsIn,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  MaxLength,
  Min,
} from "class-validator";
import {
  NotificationChannel,
  NotificationCategory,
  NotificationPreferenceScope,
  NotificationStatus,
} from "../enums";

export class NotificationsPreferencesUpdateDto {
  @IsOptional()
  @IsBoolean()
  emailMarketing?: boolean;

  @IsOptional()
  @IsBoolean()
  emailTransactional?: boolean;

  @IsOptional()
  @IsBoolean()
  pushMarketing?: boolean;

  @IsOptional()
  @IsBoolean()
  pushTransactional?: boolean;

  @IsOptional()
  @IsBoolean()
  pushLive?: boolean;

  @IsOptional()
  @IsBoolean()
  inAppPromotional?: boolean;

  @IsOptional()
  @IsBoolean()
  smsPromotional?: boolean;

  @IsOptional()
  @IsBoolean()
  smsFinancial?: boolean;
}

export class PushTokenRegisterDto {
  @IsString()
  @MaxLength(1024)
  token!: string;

  @IsIn(["WEB_PUSH", "FCM_ANDROID", "FCM_IOS", "APNS_IOS", "APNS_MACOS"])
  platform!: string;

  @IsOptional()
  @IsString()
  deviceId?: string;

  @IsOptional()
  @IsString()
  deviceModel?: string;

  @IsOptional()
  @IsString()
  osVersion?: string;

  @IsOptional()
  @IsString()
  appVersion?: string;

  @IsOptional()
  locale?: string;
}

export class NotificationQueryDto {
  @IsOptional()
  @IsEnum(NotificationStatus, { each: true })
  @IsArray()
  statuses?: NotificationStatus[];

  @IsOptional()
  @IsEnum(NotificationChannel, { each: true })
  @IsArray()
  channels?: NotificationChannel[];

  @IsOptional()
  @IsEnum(NotificationCategory, { each: true })
  @IsArray()
  categories?: NotificationCategory[];

  @IsOptional()
  @IsEnum(NotificationPreferenceScope)
  scope?: NotificationPreferenceScope;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  since?: Date;

  @IsOptional()
  onlyUnread?: boolean;

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

export class MarkNotificationsReadDto {
  @IsOptional()
  @IsArray()
  @IsUUID("4", { each: true })
  ids?: string[];

  @IsOptional()
  readAll?: boolean;
}

export class SendPushDto {
  @IsOptional()
  @IsUUID("4")
  userId?: string;

  @IsOptional()
  @IsArray()
  @IsUUID("4", { each: true })
  userIds?: string[];

  @IsString()
  @MaxLength(256)
  title!: string;

  @IsString()
  @MaxLength(2048)
  body!: string;

  @IsOptional()
  @IsEnum(NotificationChannel)
  primaryChannel?: NotificationChannel;

  @IsOptional()
  @IsEnum(NotificationCategory)
  category?: NotificationCategory;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsString()
  deepLink?: string;
}
