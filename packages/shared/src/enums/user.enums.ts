export enum UserStatus {
  PENDING = "PENDING",
  ACTIVE = "ACTIVE",
  SUSPENDED = "SUSPENDED",
  SELF_EXCLUDED = "SELF_EXCLUDED",
  BANNED = "BANNED",
  CLOSED = "CLOSED",
}

export enum LanguageCode {
  PT_PT = "pt-PT",
  EN_US = "en-US",
  ES_ES = "es-ES",
}

export enum CountryCode {
  PT = "PT",
  BR = "BR",
  ES = "ES",
  FR = "FR",
  DE = "DE",
  IT = "IT",
  NL = "NL",
  MT = "MT",
  GB = "GB",
  OTHER = "OTHER",
}

export enum CurrencyCode {
  EUR = "EUR",
  USD = "USD",
  GBP = "GBP",
  BRL = "BRL",
}

export enum SelfExcludeDuration {
  DAYS_7 = "DAYS_7",
  DAYS_30 = "DAYS_30",
  DAYS_90 = "DAYS_90",
  DAYS_180 = "DAYS_180",
  DAYS_365 = "DAYS_365",
  PERMANENT = "PERMANENT",
}
