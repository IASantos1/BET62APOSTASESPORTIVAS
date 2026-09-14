import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import type { Prisma } from '../../prisma/generated/client';
import {
  NotificationChannel,
  NotificationCategory,
  NotificationPreferenceScope,
  NotificationStatus,
} from '@bet62/shared';
import type {
  NotificationQueryDto,
  NotificationsPreferencesUpdateDto,
  PushTokenRegisterDto,
  MarkNotificationsReadDto,
  SendPushDto,
} from '@bet62/shared';

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);

  constructor(private readonly prisma: PrismaService) {}

  async getUnreadCount(userId: string) {
    const count = await this.prisma.notification.count({
      where: {
        userId,
        status: { in: [NotificationStatus.SENT, NotificationStatus.DELIVERED] },
        readAt: null,
      },
    });
    return { count, userId };
  }

  async list(userId: string, query: NotificationQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 50;
    const skip = (page - 1) * limit;

    const where: Record<string, unknown> = { userId };
    if (query.statuses && query.statuses.length > 0) {
      where.status = { in: query.statuses };
    }
    if (query.channels && query.channels.length > 0) {
      where.channel = { in: query.channels };
    }
    if (query.categories && query.categories.length > 0) {
      where.category = { in: query.categories };
    }
    if (query.onlyUnread) {
      where.readAt = null;
      (where.status as Record<string, unknown>) = {
        in: [NotificationStatus.SENT, NotificationStatus.DELIVERED],
      };
    }
    if (query.since) {
      where.createdAt = { gte: query.since };
    }

    const [items, total] = await Promise.all([
      this.prisma.notification.findMany({
        where,
        orderBy: [{ createdAt: 'desc' }],
        skip,
        take: limit,
      }),
      this.prisma.notification.count({ where }),
    ]);
    return { items, total, page, limit };
  }

  async markRead(userId: string, dto: MarkNotificationsReadDto) {
    if (dto.readAll) {
      await this.prisma.notification.updateMany({
        where: {
          userId,
          readAt: null,
          status: { in: [NotificationStatus.SENT, NotificationStatus.DELIVERED, NotificationStatus.QUEUED] },
        },
        data: { status: NotificationStatus.READ, readAt: new Date() },
      });
      return { readAll: true };
    }
    if (dto.ids && dto.ids.length > 0) {
      await this.prisma.notification.updateMany({
        where: { userId, id: { in: dto.ids }, readAt: null },
        data: { status: NotificationStatus.READ, readAt: new Date() },
      });
      return { readCount: dto.ids.length };
    }
    return { ok: true };
  }

  async getPreferences(userId: string) {
    const prefs = await this.prisma.notificationPreference.findMany({
      where: { userId },
    });
    const asMap: Record<string, boolean> = {};
    for (const p of prefs) {
      const key = [p.scope, p.category ?? '_', p.channel ?? '_', p.eventKey ?? '_'].join('::');
      asMap[key] = p.enabled;
    }
    // O client Prisma deste serviço gera seu próprio enum NotificationPreferenceScope
    // (estruturalmente idêntico ao de @bet62/shared, mas nominalmente distinto).
    const typedPrefs = prefs as unknown as Array<{
      scope: NotificationPreferenceScope;
      category?: NotificationCategory | null;
      channel?: NotificationChannel | null;
      eventKey?: string | null;
      enabled: boolean;
    }>;
    const defaults: NotificationsPreferencesUpdateDto = {
      emailMarketing: this.getPref(typedPrefs, NotificationPreferenceScope.CATEGORY, NotificationCategory.PROMOTIONAL, NotificationChannel.EMAIL),
      emailTransactional: this.getPref(typedPrefs, NotificationPreferenceScope.CHANNEL, undefined, NotificationChannel.EMAIL, undefined, true),
      pushMarketing: this.getPref(typedPrefs, NotificationPreferenceScope.CATEGORY, NotificationCategory.PROMOTIONAL, NotificationChannel.PUSH_WEB),
      pushTransactional: this.getPref(typedPrefs, NotificationPreferenceScope.CHANNEL, undefined, NotificationChannel.PUSH_WEB, undefined, true),
      pushLive: this.getPref(typedPrefs, NotificationPreferenceScope.CATEGORY, NotificationCategory.LIVE_EVENT_STARTED, NotificationChannel.PUSH_WEB, undefined, true),
      inAppPromotional: this.getPref(typedPrefs, NotificationPreferenceScope.CATEGORY, NotificationCategory.PROMOTIONAL, NotificationChannel.IN_APP, undefined, true),
      smsPromotional: this.getPref(typedPrefs, NotificationPreferenceScope.CATEGORY, NotificationCategory.PROMOTIONAL, NotificationChannel.SMS, undefined, false),
      smsFinancial: this.getPref(typedPrefs, NotificationPreferenceScope.CATEGORY, NotificationCategory.DEPOSIT_COMPLETED, NotificationChannel.SMS, undefined, true),
    };
    return { defaults, raw: prefs };
  }

  private getPref(
    prefs: Array<{ scope: NotificationPreferenceScope; category?: NotificationCategory | null; channel?: NotificationChannel | null; eventKey?: string | null; enabled: boolean }>,
    scope: NotificationPreferenceScope,
    category?: NotificationCategory,
    channel?: NotificationChannel,
    eventKey?: string,
    fallback = true,
  ): boolean {
    const found = prefs.find(
      (p) =>
        p.scope === scope &&
        (p.category ?? undefined) === category &&
        (p.channel ?? undefined) === channel &&
        (p.eventKey ?? undefined) === eventKey,
    );
    return found?.enabled ?? fallback;
  }

  async updatePreferences(userId: string, dto: NotificationsPreferencesUpdateDto) {
    const upserts: Array<Promise<unknown>> = [];

    const setPref = (
      enabled: boolean | undefined,
      scope: NotificationPreferenceScope,
      category?: NotificationCategory,
      channel?: NotificationChannel,
    ) => {
      if (enabled === undefined) return;
      upserts.push(
        this.prisma.notificationPreference.upsert({
          where: {
            userId_scope_category_channel_eventKey: {
              userId,
              scope,
              category: category ?? null,
              channel: channel ?? null,
              eventKey: null,
            },
          },
          create: { userId, scope, category, channel, enabled },
          update: { enabled },
        }),
      );
    };

    setPref(dto.emailMarketing, NotificationPreferenceScope.CATEGORY, NotificationCategory.PROMOTIONAL, NotificationChannel.EMAIL);
    setPref(dto.emailTransactional, NotificationPreferenceScope.CHANNEL, undefined, NotificationChannel.EMAIL);
    setPref(dto.pushMarketing, NotificationPreferenceScope.CATEGORY, NotificationCategory.PROMOTIONAL, NotificationChannel.PUSH_WEB);
    setPref(dto.pushTransactional, NotificationPreferenceScope.CHANNEL, undefined, NotificationChannel.PUSH_WEB);
    setPref(dto.pushLive, NotificationPreferenceScope.CATEGORY, NotificationCategory.LIVE_EVENT_STARTED, NotificationChannel.PUSH_WEB);
    setPref(dto.inAppPromotional, NotificationPreferenceScope.CATEGORY, NotificationCategory.PROMOTIONAL, NotificationChannel.IN_APP);
    setPref(dto.smsPromotional, NotificationPreferenceScope.CATEGORY, NotificationCategory.PROMOTIONAL, NotificationChannel.SMS);
    setPref(dto.smsFinancial, NotificationPreferenceScope.CATEGORY, NotificationCategory.DEPOSIT_COMPLETED, NotificationChannel.SMS);

    await Promise.all(upserts);
    return this.getPreferences(userId);
  }

  async registerPushToken(userId: string, dto: PushTokenRegisterDto) {
    const token = await this.prisma.deviceToken.upsert({
      where: { token: dto.token },
      create: {
        userId,
        token: dto.token,
        platform: dto.platform,
        deviceId: dto.deviceId,
        deviceModel: dto.deviceModel,
        osVersion: dto.osVersion,
        appVersion: dto.appVersion,
        locale: dto.locale,
        lastUsedAt: new Date(),
      },
      update: {
        userId,
        platform: dto.platform,
        deviceId: dto.deviceId,
        deviceModel: dto.deviceModel,
        osVersion: dto.osVersion,
        appVersion: dto.appVersion,
        locale: dto.locale,
        lastUsedAt: new Date(),
        enabledNotifications: true,
      },
    });
    return { ok: true, tokenId: token.id };
  }

  async isChannelAllowedForUser(
    userId: string,
    category: NotificationCategory,
    channel: NotificationChannel,
    eventKey?: string,
  ): Promise<boolean> {
    const prefs = await this.prisma.notificationPreference.findMany({
      where: { userId },
    });

    const globalPref = prefs.find(
      (p) =>
        p.scope === NotificationPreferenceScope.GLOBAL &&
        !p.category &&
        !p.channel &&
        !p.eventKey,
    );
    if (globalPref && !globalPref.enabled) return false;

    const byEvent = prefs.find(
      (p) =>
        p.scope === NotificationPreferenceScope.EVENT &&
        eventKey &&
        p.eventKey === eventKey,
    );
    if (byEvent) return byEvent.enabled;

    const byCategoryChannel = prefs.find(
      (p) =>
        p.scope === NotificationPreferenceScope.CATEGORY &&
        p.category === category &&
        p.channel === channel,
    );
    if (byCategoryChannel) return byCategoryChannel.enabled;

    const byCategory = prefs.find(
      (p) =>
        p.scope === NotificationPreferenceScope.CATEGORY &&
        p.category === category &&
        !p.channel,
    );
    if (byCategory) return byCategory.enabled;

    const byChannel = prefs.find(
      (p) =>
        p.scope === NotificationPreferenceScope.CHANNEL &&
        p.channel === channel &&
        !p.category,
    );
    if (byChannel) return byChannel.enabled;

    return true;
  }

  async getUserDeviceTokens(userId: string, platformFilter?: string[]) {
    return this.prisma.deviceToken.findMany({
      where: {
        userId,
        enabledNotifications: true,
        ...(platformFilter ? { platform: { in: platformFilter } } : {}),
      },
      orderBy: [{ lastUsedAt: 'desc' }],
    });
  }

  async createNotification(data: {
    userId?: string;
    correlationId?: string;
    channel: NotificationChannel;
    category: NotificationCategory;
    title: string;
    body: string;
    htmlBody?: string;
    imageUrl?: string;
    deepLink?: string;
    payload?: Record<string, unknown>;
    language?: string;
    priority?: number;
    status?: NotificationStatus;
  }) {
    return this.prisma.notification.create({
      data: {
        userId: data.userId,
        correlationId: data.correlationId,
        channel: data.channel,
        category: data.category,
        title: data.title,
        body: data.body,
        htmlBody: data.htmlBody,
        imageUrl: data.imageUrl,
        deepLink: data.deepLink,
        payload: data.payload as Prisma.InputJsonValue | undefined,
        language: data.language,
        priority: data.priority,
        status: data.status ?? NotificationStatus.PENDING,
      },
    });
  }

  async updateStatus(notificationId: string, status: NotificationStatus, extra?: { error?: string; attempts?: number; providerMessageId?: string }) {
    return this.prisma.notification.update({
      where: { id: notificationId },
      data: {
        status,
        lastAttemptAt: new Date(),
        attempts: extra?.attempts ? { increment: extra.attempts } : undefined,
        lastError: extra?.error,
        providerMessageId: extra?.providerMessageId,
        sentAt: status === NotificationStatus.SENT || status === NotificationStatus.DELIVERED ? new Date() : undefined,
        deliveredAt: status === NotificationStatus.DELIVERED ? new Date() : undefined,
      },
    });
  }

  async sendPushInternal(dto: SendPushDto) {
    const userIds = dto.userIds ?? (dto.userId ? [dto.userId] : []);
    const results: Array<{ userId: string; sent: boolean; tokens: number }> = [];
    for (const uid of userIds) {
      const tokens = await this.getUserDeviceTokens(uid);
      if (tokens.length === 0) {
        results.push({ userId: uid, sent: false, tokens: 0 });
        continue;
      }
      await Promise.all(
        tokens.map(async (t) => {
          const channel =
            t.platform === 'FCM_ANDROID' || t.platform === 'FCM_IOS'
              ? NotificationChannel.PUSH_FCM
              : t.platform === 'APNS_IOS' || t.platform === 'APNS_MACOS'
              ? NotificationChannel.PUSH_APNS
              : NotificationChannel.PUSH_WEB;
          return this.createNotification({
            userId: uid,
            channel,
            category: dto.category ?? NotificationCategory.GENERAL,
            title: dto.title,
            body: dto.body,
            imageUrl: dto.imageUrl,
            deepLink: dto.deepLink,
            status: NotificationStatus.QUEUED,
          });
        }),
      );
      results.push({ userId: uid, sent: true, tokens: tokens.length });
    }
    return { ok: true, results };
  }
}
