import type { Identifiable, Timestamped } from "./common.interface";

export interface NotificationPreference extends Identifiable, Timestamped {
  userId: string;
  emailMarketing: boolean;
  emailTransactional: boolean;
  emailSecurity: boolean;
  emailFinancial: boolean;
  pushMarketing: boolean;
  pushTransactional: boolean;
  pushSecurity: boolean;
  pushFinancial: boolean;
  pushLive: boolean;
  inAppBetting: boolean;
  inAppFinancial: boolean;
  inAppPromotional: boolean;
  inAppSecurity: boolean;
  smsPromotional: boolean;
  smsSecurity: boolean;
  smsFinancial: boolean;
  soundOn: boolean;
  desktopBanner: boolean;
}

export interface PushSubscriptionEndpoint extends Identifiable, Timestamped {
  userId: string;
  userAgent?: string | null;
  endpoint: string;
  p256dh: string;
  auth: string;
  deviceType?: "desktop" | "mobile" | "tablet" | null;
  browserName?: string | null;
  osName?: string | null;
  lastUsedAt?: Date | null;
  active: boolean;
  expired?: boolean;
  failedCount?: number;
}

export interface Notification extends Identifiable, Timestamped {
  userId: string;
  channel: "IN_APP" | "EMAIL" | "PUSH" | "SMS";
  category:
    | "SECURITY"
    | "AUTH"
    | "FINANCIAL"
    | "BETTING"
    | "PROMOTIONAL"
    | "SYSTEM"
    | "KYC"
    | "SUPPORT"
    | "LIVE_ALERT";
  priority: "LOW" | "NORMAL" | "HIGH" | "URGENT";
  title: string;
  titleI18nKey?: string | null;
  body: string;
  bodyI18nKey?: string | null;
  templateVars?: unknown | null;
  imageUrl?: string | null;
  deepLinkUrl?: string | null;
  language: string;
  relatedBetId?: string | null;
  relatedTransactionId?: string | null;
  relatedEventId?: string | null;
  relatedBonusId?: string | null;
  expiresAt?: Date | null;
  scheduledAt?: Date | null;
  sentAt?: Date | null;
  failedAt?: Date | null;
  failureReason?: string | null;
  retryCount: number;
  status: "PENDING" | "SCHEDULED" | "PROCESSING" | "SENT" | "FAILED" | "EXPIRED" | "CANCELLED";
  deliveryStatus?: string | null;
  providerResponseId?: string | null;
  providerRawResponse?: unknown | null;
  readAt?: Date | null;
  isRead: boolean;
  dismissedAt?: Date | null;
  isDismissed: boolean;
  correlationId?: string | null;
  requestId?: string | null;
}

export interface EmailTemplate extends Identifiable, Timestamped {
  code: string;
  name: string;
  description?: string | null;
  category: string;
  subjectDefault: string;
  subjectI18n?: Record<string, string> | null;
  bodyMjmlDefault: string;
  bodyMjmlI18n?: Record<string, string> | null;
  textVersionDefault?: string | null;
  fromNameDefault?: string | null;
  fromEmailDefault?: string | null;
  replyToDefault?: string | null;
  layout: "DEFAULT" | "MARKETING" | "SECURITY" | "FINANCIAL";
  variablesRequired?: string[] | null;
  variablesDefaultJson?: unknown | null;
  active: boolean;
  previewImageUrl?: string | null;
}

export interface EmailLog extends Identifiable, Timestamped {
  notificationId?: string | null;
  templateCode?: string | null;
  fromEmail: string;
  fromName?: string | null;
  toEmail: string;
  toUserId?: string | null;
  subject: string;
  language?: string | null;
  provider: string;
  providerMessageId?: string | null;
  status: "QUEUED" | "SENT" | "DELIVERED" | "OPENED" | "CLICKED" | "BOUNCED" | "COMPLAINED" | "FAILED";
  sentAt?: Date | null;
  openedAt?: Date | null;
  clickedAt?: Date | null;
  failedReason?: string | null;
  smtpCode?: string | null;
  ipAddress?: string | null;
  linksClicked?: string[] | null;
  correlationId?: string | null;
  requestId?: string | null;
}

export interface PushTemplate extends Identifiable, Timestamped {
  code: string;
  name: string;
  titleDefault: string;
  titleI18n?: Record<string, string> | null;
  bodyDefault: string;
  bodyI18n?: Record<string, string> | null;
  variablesRequired?: string[] | null;
  iconDefault?: string | null;
  badgeDefault?: string | null;
  soundDefault?: string | null;
  deepLinkPatternDefault?: string | null;
  active: boolean;
}
