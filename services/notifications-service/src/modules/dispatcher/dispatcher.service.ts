import { Injectable, Logger } from '@nestjs/common';
import { Processor, WorkerHost, OnWorkerEvent } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import {
  NotificationChannel,
  NotificationCategory,
  NotificationStatus,
} from '@bet62/shared';
import { NotificationsService } from '../notifications/notifications.service';
import { EmailProvider } from '../providers/email.provider';
import { PushProvider } from '../providers/push.provider';
import { SmsProvider } from '../providers/sms.provider';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { BET62_EVENTS, createEnvelope } from '@bet62/shared';

export interface DispatchNotificationJobData {
  notificationId: string;
  userId?: string;
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
  email?: { to?: string; from?: string; replyTo?: string; templateVars?: Record<string, unknown> };
  sms?: { to?: string };
  eventKey?: string;
  correlationId?: string;
}

@Injectable()
@Processor('NOTIFICATION_DISPATCH', { concurrency: 10 })
export class DispatcherService extends WorkerHost {
  private readonly logger = new Logger(DispatcherService.name);

  constructor(
    private readonly notificationsService: NotificationsService,
    private readonly emailProvider: EmailProvider,
    private readonly pushProvider: PushProvider,
    private readonly smsProvider: SmsProvider,
    private readonly eventEmitter: EventEmitter2,
  ) {
    super();
  }

  async process(job: Job<DispatchNotificationJobData>): Promise<{ status: NotificationStatus; providerMessageId?: string; error?: string }> {
    const data = job.data;
    const channel = data.channel;
    const userId = data.userId;

    if (userId) {
      const allowed = await this.notificationsService.isChannelAllowedForUser(
        userId,
        data.category,
        channel,
        data.eventKey,
      );
      if (!allowed) {
        await this.notificationsService.updateStatus(data.notificationId, NotificationStatus.OPTED_OUT, {
          error: 'OPTED_OUT_BY_PREFERENCES',
        });
        return { status: NotificationStatus.OPTED_OUT, error: 'OPTED_OUT_BY_PREFERENCES' };
      }
    }

    try {
      await this.notificationsService.updateStatus(data.notificationId, NotificationStatus.SENDING);
      switch (channel) {
        case NotificationChannel.IN_APP:
          return this.handleInApp(data);
        case NotificationChannel.EMAIL:
          return this.handleEmail(data);
        case NotificationChannel.SMS:
          return this.handleSms(data);
        case NotificationChannel.PUSH_WEB:
        case NotificationChannel.PUSH_FCM:
        case NotificationChannel.PUSH_APNS:
          return this.handlePush(data);
        case NotificationChannel.WHATSAPP:
        case NotificationChannel.TELEGRAM:
        default:
          this.logger.warn(`Unsupported channel ${channel}, marking as sent (mock).`);
          return this.handleInApp(data);
      }
    } catch (err) {
      const error = (err as Error).message;
      this.logger.error(`Dispatch failed for notification ${data.notificationId}: ${error}`);
      await this.notificationsService.updateStatus(data.notificationId, NotificationStatus.FAILED, {
        error,
        attempts: 1,
      });
      return { status: NotificationStatus.FAILED, error };
    }
  }

  private async handleInApp(data: DispatchNotificationJobData) {
    await this.notificationsService.updateStatus(data.notificationId, NotificationStatus.DELIVERED, {
      providerMessageId: `inapp-${data.notificationId}`,
    });
    this.emitSent(data, 'IN_APP', `inapp-${data.notificationId}`);
    return { status: NotificationStatus.DELIVERED as const, providerMessageId: `inapp-${data.notificationId}` };
  }

  private async handleEmail(data: DispatchNotificationJobData) {
    const toEmail = data.email?.to ?? '';
    const queued = await this.emailProvider.queue({
      toEmail,
      fromName: data.email?.from,
      replyTo: data.email?.replyTo,
      subject: data.title,
      textBody: data.body,
      htmlBody: data.htmlBody,
      templateVars: data.email?.templateVars,
      correlationId: data.correlationId,
    });
    const result = await this.emailProvider.deliver(queued.id);
    if (result.success) {
      await this.notificationsService.updateStatus(data.notificationId, NotificationStatus.SENT, {
        providerMessageId: result.providerMessageId,
        attempts: 1,
      });
      this.emitSent(data, 'EMAIL', result.providerMessageId);
      return { status: NotificationStatus.SENT as const, providerMessageId: result.providerMessageId };
    }
    return { status: NotificationStatus.FAILED as const, error: result.error };
  }

  private async handleSms(data: DispatchNotificationJobData) {
    const to = data.sms?.to ?? '';
    const result = await this.smsProvider.send({
      userId: data.userId,
      toPhoneNumber: to,
      text: data.body,
      correlationId: data.correlationId,
    });
    if (result.success) {
      await this.notificationsService.updateStatus(data.notificationId, NotificationStatus.SENT, {
        providerMessageId: result.providerMessageId,
        attempts: 1,
      });
      this.emitSent(data, 'SMS', result.providerMessageId);
      return { status: NotificationStatus.SENT as const, providerMessageId: result.providerMessageId };
    }
    return { status: NotificationStatus.FAILED as const, error: result.error };
  }

  private async handlePush(data: DispatchNotificationJobData) {
    if (!data.userId) {
      return { status: NotificationStatus.FAILED as const, error: 'NO_USER_FOR_PUSH' };
    }
    const platformFilter =
      data.channel === NotificationChannel.PUSH_FCM
        ? ['FCM_ANDROID', 'FCM_IOS']
        : data.channel === NotificationChannel.PUSH_APNS
        ? ['APNS_IOS', 'APNS_MACOS']
        : ['WEB_PUSH'];

    const devices = await this.notificationsService.getUserDeviceTokens(data.userId, platformFilter);
    if (devices.length === 0) {
      await this.notificationsService.updateStatus(data.notificationId, NotificationStatus.CANCELLED, {
        error: 'NO_REGISTERED_DEVICES',
      });
      return { status: NotificationStatus.CANCELLED as const, error: 'NO_REGISTERED_DEVICES' };
    }

    const result = await this.pushProvider.send({
      userId: data.userId,
      tokens: devices.map((d) => ({ token: d.token, platform: d.platform, deviceId: d.deviceId })),
      title: data.title,
      body: data.body,
      imageUrl: data.imageUrl,
      deepLink: data.deepLink,
      payload: data.payload,
    });

    const firstSuccess = result.results.find((r) => r.success);
    if (firstSuccess) {
      await this.notificationsService.updateStatus(data.notificationId, NotificationStatus.SENT, {
        providerMessageId: firstSuccess.messageId,
        attempts: 1,
      });
      this.emitSent(data, 'PUSH', firstSuccess.messageId);
      return { status: NotificationStatus.SENT as const, providerMessageId: firstSuccess.messageId };
    }
    const error = result.results.find((r) => !r.success)?.error ?? 'UNKNOWN_PUSH_ERROR';
    await this.notificationsService.updateStatus(data.notificationId, NotificationStatus.FAILED, {
      error,
      attempts: 1,
    });
    return { status: NotificationStatus.FAILED as const, error };
  }

  private emitSent(data: DispatchNotificationJobData, channelLabel: string, providerMessageId?: string) {
    this.eventEmitter.emit(
      BET62_EVENTS.NOTIFICATIONS.SENT,
      createEnvelope({
        event: BET62_EVENTS.NOTIFICATIONS.SENT,
        aggregateType: 'Notification',
        aggregateId: data.notificationId,
        producer: 'notifications-service',
        payload: {
          notificationId: data.notificationId,
          userId: data.userId,
          channel: channelLabel,
          category: data.category,
          providerMessageId,
        },
      }),
    );
  }

  @OnWorkerEvent('failed')
  onFailed(job: Job | undefined, err: Error) {
    if (!job) return;
    this.logger.error(`Job ${job.id} failed permanently: ${err.message}`);
  }
}
