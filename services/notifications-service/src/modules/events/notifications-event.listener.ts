import { Injectable, Logger } from '@nestjs/common';
import { Queue } from 'bullmq';
import { InjectQueue } from '@nestjs/bullmq';
import { OnEvent } from '@nestjs/event-emitter';
import {
  NotificationChannel,
  NotificationCategory,
  NotificationStatus,
} from '@bet62/shared';
import { NotificationsService } from '../notifications/notifications.service';
import type { DispatchNotificationJobData } from '../dispatcher/dispatcher.service';
import { BET62_EVENTS } from '@bet62/shared';
import type {
  Bet62EventEnvelope,
  BetSettledPayload,
  WalletDepositCompletedPayload,
  WalletWithdrawalRequestedPayload,
  KycLevelUpdatedPayload,
  BonusGrantedPayload,
  CasinoBetSettledPayload,
  UserLoggedInPayload,
} from '@bet62/shared';

type ChannelPreference = { primary: NotificationChannel; fallback?: NotificationChannel };

const DEFAULT_CHANNELS: Partial<Record<NotificationCategory, ChannelPreference[]>> = {
  [NotificationCategory.BET_WON]: [
    { primary: NotificationChannel.IN_APP, fallback: NotificationChannel.PUSH_WEB },
  ],
  [NotificationCategory.BET_LOST]: [{ primary: NotificationChannel.IN_APP }],
  [NotificationCategory.BET_PLACED]: [{ primary: NotificationChannel.IN_APP }],
  [NotificationCategory.BET_SETTLED]: [{ primary: NotificationChannel.IN_APP }],
  [NotificationCategory.CASHOUT_COMPLETED]: [
    { primary: NotificationChannel.IN_APP, fallback: NotificationChannel.PUSH_WEB },
  ],
  [NotificationCategory.DEPOSIT_PENDING]: [
    { primary: NotificationChannel.EMAIL, fallback: NotificationChannel.IN_APP },
  ],
  [NotificationCategory.DEPOSIT_COMPLETED]: [
    { primary: NotificationChannel.EMAIL },
    { primary: NotificationChannel.IN_APP },
    { primary: NotificationChannel.PUSH_WEB },
  ],
  [NotificationCategory.DEPOSIT_FAILED]: [
    { primary: NotificationChannel.EMAIL, fallback: NotificationChannel.IN_APP },
  ],
  [NotificationCategory.WITHDRAWAL_REQUESTED]: [
    { primary: NotificationChannel.EMAIL },
    { primary: NotificationChannel.IN_APP },
  ],
  [NotificationCategory.WITHDRAWAL_COMPLETED]: [
    { primary: NotificationChannel.EMAIL },
    { primary: NotificationChannel.IN_APP },
    { primary: NotificationChannel.PUSH_WEB },
  ],
  [NotificationCategory.WITHDRAWAL_REJECTED]: [
    { primary: NotificationChannel.EMAIL },
    { primary: NotificationChannel.IN_APP },
  ],
  [NotificationCategory.KYC_STATUS_CHANGED]: [
    { primary: NotificationChannel.EMAIL },
    { primary: NotificationChannel.IN_APP },
  ],
  [NotificationCategory.KYC_REVIEW_REQUESTED]: [
    { primary: NotificationChannel.EMAIL },
    { primary: NotificationChannel.PUSH_WEB },
  ],
  [NotificationCategory.BONUS_GRANTED]: [
    { primary: NotificationChannel.IN_APP },
    { primary: NotificationChannel.PUSH_WEB },
    { primary: NotificationChannel.EMAIL },
  ],
  [NotificationCategory.BONUS_EXPIRING]: [
    { primary: NotificationChannel.PUSH_WEB, fallback: NotificationChannel.IN_APP },
  ],
  [NotificationCategory.BONUS_ROLLOVER_COMPLETE]: [
    { primary: NotificationChannel.IN_APP },
    { primary: NotificationChannel.PUSH_WEB },
  ],
  [NotificationCategory.CASINO_BIG_WIN]: [
    { primary: NotificationChannel.IN_APP },
    { primary: NotificationChannel.PUSH_WEB },
  ],
  [NotificationCategory.LIVE_EVENT_STARTED]: [{ primary: NotificationChannel.PUSH_WEB }],
  [NotificationCategory.SECURITY_LOGIN]: [
    { primary: NotificationChannel.EMAIL },
    { primary: NotificationChannel.IN_APP },
  ],
  [NotificationCategory.SECURITY_PASSWORD_CHANGED]: [
    { primary: NotificationChannel.EMAIL },
    { primary: NotificationChannel.IN_APP },
  ],
  [NotificationCategory.SECURITY_2FA_CHANGED]: [
    { primary: NotificationChannel.EMAIL },
    { primary: NotificationChannel.IN_APP },
  ],
  [NotificationCategory.GENERAL]: [{ primary: NotificationChannel.IN_APP }],
  [NotificationCategory.SYSTEM_MAINTENANCE]: [
    { primary: NotificationChannel.EMAIL },
    { primary: NotificationChannel.PUSH_WEB },
  ],
  [NotificationCategory.PROMOTIONAL]: [
    { primary: NotificationChannel.EMAIL },
    { primary: NotificationChannel.IN_APP },
    { primary: NotificationChannel.PUSH_WEB },
    { primary: NotificationChannel.SMS },
  ],
};

@Injectable()
export class NotificationsEventListener {
  private readonly logger = new Logger(NotificationsEventListener.name);

  constructor(
    @InjectQueue('NOTIFICATION_DISPATCH')
    private readonly dispatchQueue: Queue,
    private readonly notificationsService: NotificationsService,
  ) {}

  @OnEvent(BET62_EVENTS.BETS.WON, { async: true })
  async onBetWon(env: Bet62EventEnvelope<BetSettledPayload>) {
    const p = env.payload;
    await this.notify({
      userId: p.userId,
      category: NotificationCategory.BET_WON,
      title: '🎉 Aposta Ganha!',
      body: `Sua aposta de ${this.formatMoney(p.stakeAmount)} retornou ${this.formatMoney(p.actualReturn)}.`,
      payload: { betId: p.betId, return: p.actualReturn },
      correlationId: env.correlationId,
    });
  }

  @OnEvent(BET62_EVENTS.BETS.LOST, { async: true })
  async onBetLost(env: Bet62EventEnvelope<BetSettledPayload>) {
    const p = env.payload;
    await this.notify({
      userId: p.userId,
      category: NotificationCategory.BET_LOST,
      title: 'Aposta Perdida',
      body: `Infelizmente sua aposta (${this.formatMoney(p.stakeAmount)}) não resultou. Tente novamente!`,
      payload: { betId: p.betId },
      correlationId: env.correlationId,
    });
  }

  @OnEvent(BET62_EVENTS.BETS.PLACED, { async: true })
  async onBetPlaced(env: Bet62EventEnvelope<{ betId: string; userId: string; stakeAmount: number; totalOdds: number; selectionsCount: number }>) {
    const p = env.payload;
    await this.notify({
      userId: p.userId,
      category: NotificationCategory.BET_PLACED,
      title: 'Aposta Realizada',
      body: `Aposta de ${this.formatMoney(p.stakeAmount)} com odd total de ${p.totalOdds.toFixed(2)} (${p.selectionsCount} seleções).`,
      payload: { betId: p.betId },
      correlationId: env.correlationId,
    });
  }

  @OnEvent(BET62_EVENTS.WALLET.DEPOSIT_COMPLETED, { async: true })
  async onDepositCompleted(env: Bet62EventEnvelope<WalletDepositCompletedPayload>) {
    const p = env.payload;
    const amount = Number(p.amount?.amount ?? 0);
    await this.notify({
      userId: p.userId,
      category: NotificationCategory.DEPOSIT_COMPLETED,
      title: '💸 Depósito Confirmado',
      body: `Seu depósito de ${this.formatMoney(amount)} ${p.amount?.currency ?? 'EUR'} foi confirmado.`,
      payload: { depositId: p.depositId, amount },
      email: { to: '' },
      correlationId: env.correlationId,
    });
  }

  @OnEvent(BET62_EVENTS.WALLET.WITHDRAWAL_REQUESTED, { async: true })
  async onWithdrawalRequested(env: Bet62EventEnvelope<WalletWithdrawalRequestedPayload>) {
    const p = env.payload;
    const amount = Number(p.amount?.amount ?? 0);
    await this.notify({
      userId: p.userId,
      category: NotificationCategory.WITHDRAWAL_REQUESTED,
      title: 'Solicitação de Saque Recebida',
      body: `Saque de ${this.formatMoney(amount)} recebido e em processamento.`,
      payload: { withdrawalId: p.withdrawalId },
      correlationId: env.correlationId,
    });
  }

  @OnEvent(BET62_EVENTS.KYC.LEVEL_UPDATED, { async: true })
  async onKycChanged(env: Bet62EventEnvelope<KycLevelUpdatedPayload>) {
    const p = env.payload;
    await this.notify({
      userId: p.userId,
      category: NotificationCategory.KYC_STATUS_CHANGED,
      title: 'Status de Verificação Atualizado',
      body: `Seu nível KYC agora é ${p.newLevel}. Novos limites foram aplicados.`,
      payload: { newLevel: p.newLevel, status: p.status },
      correlationId: env.correlationId,
    });
  }

  @OnEvent(BET62_EVENTS.BONUS.GRANTED, { async: true })
  async onBonusGranted(env: Bet62EventEnvelope<BonusGrantedPayload>) {
    const p = env.payload;
    await this.notify({
      userId: p.userId,
      category: NotificationCategory.BONUS_GRANTED,
      title: '🎁 Bônus Recebido!',
      body: `Você recebeu ${this.formatMoney(p.originalAmount)} ${p.currency} em bônus (rollover ${p.rolloverRequirement.toFixed(2)}).`,
      payload: { userBonusId: p.userBonusId },
      correlationId: env.correlationId,
    });
  }

  @OnEvent(BET62_EVENTS.BONUS.ROLLOVER_COMPLETE, { async: true })
  async onRolloverComplete(env: Bet62EventEnvelope<{ userBonusId: string; userId: string; grantedAmount: number }>) {
    const p = env.payload;
    await this.notify({
      userId: p.userId,
      category: NotificationCategory.BONUS_ROLLOVER_COMPLETE,
      title: '✅ Rollover Completo',
      body: `O rollover do seu bônus foi finalizado. Valor liberado: ${this.formatMoney(p.grantedAmount)}.`,
      payload: { userBonusId: p.userBonusId },
      correlationId: env.correlationId,
    });
  }

  @OnEvent(BET62_EVENTS.CASINO.BET_WON, { async: true })
  async onCasinoBetWon(env: Bet62EventEnvelope<CasinoBetSettledPayload>) {
    const p = env.payload;
    const bigWin = p.win >= 500;
    if (bigWin) {
      await this.notify({
        userId: p.userId,
        category: NotificationCategory.CASINO_BIG_WIN,
        title: '🎰 Vitória Grande no Casino!',
        body: `${p.gameName}: você ganhou ${this.formatMoney(p.win)}!`,
        payload: { betId: p.betId, win: p.win },
        correlationId: env.correlationId,
      });
    }
  }

  @OnEvent(BET62_EVENTS.AUTH.USER_LOGGED_IN, { async: true })
  async onUserLoggedIn(env: Bet62EventEnvelope<UserLoggedInPayload>) {
    const p = env.payload;
    await this.notify({
      userId: p.userId,
      category: NotificationCategory.SECURITY_LOGIN,
      title: 'Novo Login',
      body: `Login detectado em ${new Date(p.timestamp).toLocaleString()}${p.ip ? ` a partir de ${p.ip}` : ''}.`,
      payload: { sessionId: p.sessionId, ip: p.ip },
      correlationId: env.correlationId,
    });
  }

  async notify(input: {
    userId?: string;
    category: NotificationCategory;
    title: string;
    body: string;
    htmlBody?: string;
    imageUrl?: string;
    deepLink?: string;
    payload?: Record<string, unknown>;
    language?: string;
    priority?: number;
    email?: { to?: string };
    sms?: { to?: string };
    eventKey?: string;
    correlationId?: string;
  }) {
    const channelPreferences =
      DEFAULT_CHANNELS[input.category] ?? [{ primary: NotificationChannel.IN_APP }];

    for (const pref of channelPreferences) {
      const channel = pref.primary;
      const notification = await this.notificationsService.createNotification({
        userId: input.userId,
        correlationId: input.correlationId,
        channel,
        category: input.category,
        title: input.title,
        body: input.body,
        htmlBody: input.htmlBody,
        imageUrl: input.imageUrl,
        deepLink: input.deepLink,
        payload: input.payload,
        language: input.language,
        priority: input.priority,
        status: NotificationStatus.QUEUED,
      });

      const jobData: DispatchNotificationJobData = {
        notificationId: notification.id,
        userId: input.userId,
        channel,
        category: input.category,
        title: input.title,
        body: input.body,
        htmlBody: input.htmlBody,
        imageUrl: input.imageUrl,
        deepLink: input.deepLink,
        payload: input.payload,
        language: input.language,
        priority: input.priority,
        email: input.email,
        sms: input.sms,
        eventKey: input.eventKey,
        correlationId: input.correlationId,
      };
      await this.dispatchQueue.add(`${channel}::${notification.id}`, jobData, {
        attempts: 3,
        backoff: { type: 'exponential', delay: 2000 },
        removeOnComplete: 200,
        removeOnFail: 500,
      });
    }
  }

  private formatMoney(amount: number): string {
    const v = Number(amount ?? 0);
    return `€${v.toFixed(2)}`;
  }
}
