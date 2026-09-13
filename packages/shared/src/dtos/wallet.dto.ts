import { Type } from "class-transformer";
import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
  Max,
  MaxLength,
  Min,
  ValidateNested,
} from "class-validator";
import type {
  PaymentProvider,
  TransactionType,
  BetType,
  BetAcceptanceType,
  SelectionOutcome,
  CashoutType,
  BonusStatus,
  BonusTrigger,
  CasinoGameStatus,
} from "../enums";

export class CreateDepositDto {
  @IsEnum({
    STRIPE: "STRIPE",
    SKRILL: "SKRILL",
    NETELLER: "NETELLER",
    PAYPAL: "PAYPAL",
    APPLE_PAY: "APPLE_PAY",
    GOOGLE_PAY: "GOOGLE_PAY",
    MB_WAY: "MB_WAY",
    MULTIBANCO: "MULTIBANCO",
  })
  provider!: PaymentProvider;

  @IsNumber()
  @Min(10)
  @Max(25000)
  amount!: number;

  @IsString()
  currency: string = "EUR";

  @IsOptional()
  @IsString()
  paymentMethodId?: string;

  @IsOptional()
  @IsEnum(["card", "mbway", "multibanco"])
  paymentMethod?: "card" | "mbway" | "multibanco";

  @IsOptional()
  @IsString()
  promoCode?: string;

  @IsOptional()
  @IsString()
  @Matches(/^https?:\/\//i)
  returnUrl?: string;

  @IsOptional()
  @IsObject()
  metadata?: Record<string, unknown>;
}

export class RequestWithdrawalDto {
  @IsEnum({
    STRIPE: "STRIPE",
    SKRILL: "SKRILL",
    NETELLER: "NETELLER",
    BANK_TRANSFER: "BANK_TRANSFER",
    PAYPAL: "PAYPAL",
  })
  provider!: PaymentProvider;

  @IsNumber()
  @Min(20)
  @Max(100000)
  amount!: number;

  @IsString()
  currency: string = "EUR";

  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  @Type(() => WithdrawalBeneficiaryDto)
  beneficiary!: WithdrawalBeneficiaryDto;

  @IsOptional()
  @IsString()
  note?: string;

  @IsOptional()
  tfaCode?: string;
}

export class WithdrawalBeneficiaryDto {
  @IsOptional()
  @IsString()
  accountHolderName?: string;

  @IsOptional()
  @IsString()
  iban?: string;

  @IsOptional()
  @IsString()
  bicSwift?: string;

  @IsOptional()
  @IsString()
  bankName?: string;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsObject()
  stripeConnectId?: unknown;
}

export class WalletTransactionsQueryDto {
  @IsOptional()
  @IsArray()
  @IsEnum(
    {
      DEPOSIT: "DEPOSIT",
      WITHDRAWAL: "WITHDRAWAL",
      BET_PLACED: "BET_PLACED",
      BET_SETTLED_WON: "BET_SETTLED_WON",
      BET_SETTLED_LOST: "BET_SETTLED_LOST",
      BET_CASHOUT: "BET_CASHOUT",
      BONUS_GRANTED: "BONUS_GRANTED",
      MANUAL_ADJUSTMENT: "MANUAL_ADJUSTMENT",
      CASINO_BET: "CASINO_BET",
      CASINO_WIN: "CASINO_WIN",
    },
    { each: true },
  )
  types?: TransactionType[];

  @IsOptional()
  @Type(() => Date)
  fromDate?: Date;

  @IsOptional()
  @Type(() => Date)
  toDate?: Date;
}

export class AdminWalletAdjustmentDto {
  @IsNumber()
  amount!: number;

  @IsEnum({
    MANUAL_ADJUSTMENT: "MANUAL_ADJUSTMENT",
    BONUS_GRANTED: "BONUS_GRANTED",
    BONUS_RELEASED: "BONUS_RELEASED",
  })
  transactionType!: TransactionType;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  reason?: string;

  @IsEnum(["REAL", "BONUS"])
  balanceType!: "REAL" | "BONUS";

  @IsOptional()
  @IsUUID("4")
  referencedBetId?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  externalReference?: string;
}

export class ApproveWithdrawalDto {
  @IsOptional()
  @IsString()
  @MaxLength(500)
  adminNote?: string;

  @IsOptional()
  priority?: "NORMAL" | "URGENT";
}

export class RejectWithdrawalDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(500)
  reason!: string;
}
