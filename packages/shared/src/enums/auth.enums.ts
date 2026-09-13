export enum AuthProvider {
  EMAIL = "EMAIL",
  GOOGLE = "GOOGLE",
  FACEBOOK = "FACEBOOK",
  APPLE = "APPLE",
}

export enum TokenType {
  ACCESS = "ACCESS",
  REFRESH = "REFRESH",
  PASSWORD_RESET = "PASSWORD_RESET",
  EMAIL_VERIFY = "EMAIL_VERIFY",
}

export enum AuthRole {
  USER = "USER",
  VERIFIED_USER = "VERIFIED_USER",
  VIP = "VIP",
  ADMIN = "ADMIN",
  SUPER_ADMIN = "SUPER_ADMIN",
}

export enum TwoFactorType {
  NONE = "NONE",
  TOTP = "TOTP",
  SMS = "SMS",
  EMAIL = "EMAIL",
}
