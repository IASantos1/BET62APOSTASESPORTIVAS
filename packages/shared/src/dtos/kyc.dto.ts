import { Type } from "class-transformer";
import {
  IsBase64,
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
  MaxLength,
} from "class-validator";
import type { KYCLevel } from "../enums";

export class InitKYCDto {
  @IsEnum({ L0: 0, L1: 1, L2: 2, L3: 3 })
  targetLevel!: KYCLevel;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  callbackUrl?: string;

  @IsOptional()
  @IsObject()
  applicantData?: Record<string, unknown>;
}

export class CreateKycSessionDto {
  @IsEnum({ L0: 0, L1: 1, L2: 2, L3: 3 })
  targetLevel!: KYCLevel;

  @IsOptional()
  @IsString()
  lang?: string;

  @IsOptional()
  @IsUrl()
  callbackUrl?: string;
}

export class KYCSumbitDocumentDto {
  @IsEnum({
    ID_CARD_FRONT: "id_card_front",
    ID_CARD_BACK: "id_card_back",
    PASSPORT: "passport",
    DRIVER_LICENSE_FRONT: "driver_license_front",
    DRIVER_LICENSE_BACK: "driver_license_back",
    SELFIE: "selfie",
    PROOF_OF_ADDRESS: "proof_of_address",
    BANK_STATEMENT: "bank_statement",
    UTILITY_BILL: "utility_bill",
  })
  documentType!: string;

  @IsNotEmpty()
  @IsBase64()
  fileBase64!: string;

  @IsOptional()
  @IsString()
  filename?: string;

  @IsOptional()
  @IsString()
  mimeType?: string;

  @IsOptional()
  issuingCountry?: string;
}

export class KYCWebhookHeadersDto {
  @IsString()
  "x-signature-v2"!: string;
}

export class KYCAdminUpdateLevelDto {
  @IsEnum({ L0: 0, L1: 1, L2: 2, L3: 3 })
  newLevel!: KYCLevel;

  @IsOptional()
  @IsString()
  note?: string;

  @IsOptional()
  @IsUUID("4")
  overrideReasonId?: string;
}
