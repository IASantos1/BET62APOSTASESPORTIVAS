import {
  Injectable,
  Logger,
  BadRequestException,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaService } from '../prisma/prisma.service';
import { StripeService } from './payments/stripe.service';
import { WithdrawalRiskEngineService, WithdrawalRiskResult } from './withdrawal-risk-engine.service';
import {
  LedgerAccountType,
  LedgerEntryType,
  TransactionType,
  PaymentProvider,
  PaymentStatus,
  BET62_EVENTS,
  BET62_STREAMS,
  createEnvelope,
  CreateDepositDto,
  RequestWithdrawalDto,
  WalletTransactionsQueryDto,
  WalletDepositCompletedPayload,
  WalletWithdrawalRequestedPayload,
  WalletBalanceUpdatedPayload,
} from '@bet62/shared';

interface LedgerReference {
  referenceId: string;
  referenceType: string;
  externalReferenceId?: string;
  correlationId?: string;
  note?: string;
  metadata?: Record<string, unknown>;
  operatedBy?: string;
}

interface ApplyResult {
  wallet: {
    userId: string;
    currency: string;
    realBalance: number;
    bonusBalance: number;
    pendingDeposits: number;
    pendingWithdrawals: number;
    reservedBets: number;
  };
  ledgerEntries: unknown[];
  deltaReal: number;
  deltaBonus: number;
}

interface WagerProgressBonus {
  grantedAmount: number;
  rolloverRequiredTotal: number;
  rolloverCompletedWeighted: number;
  status: string;
}

export interface BalanceResponse {
  real: number;
  bonus: number;
  withdrawable: number;
  rolloverRemaining: number;
  totalTurnover: number;
}

export interface WithdrawalProcessingResult {
  withdrawal: unknown;
  transaction: unknown;
  riskResult: WithdrawalRiskResult;
  payoutInitiated: boolean;
  pendingReview: boolean;
  blocked: boolean;
}

@Injectable()
export class WalletService {
  private readonly logger = new Logger(WalletService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly stripe: StripeService,
    private readonly eventEmitter: EventEmitter2,
    private readonly riskEngine: WithdrawalRiskEngineService,
  ) {}

  async getOrCreateWallet(userId: string, currency: string = 'EUR') {
    return this.prisma.wallet.upsert({
      where: { userId_currency: { userId, currency } },
      create: { userId, currency },
      update: {},
    });
  }

  async getBalance(userId: string, currency: string = 'EUR'): Promise<BalanceResponse> {
    const wallet = await this.getOrCreateWallet(userId, currency);
    const wagerProgress = await this.fetchWagerProgress(userId, currency);
    return this.computeWithdrawableAndRollover(wallet, wagerProgress);
  }

  private async fetchWagerProgress(userId: string, _currency: string): Promise<WagerProgressBonus[]> {
    try {
      const result = await this.prisma.$queryRawUnsafe<
        Array<{
          granted_amount: string;
          rollover_required_total: string;
          rollover_completed_weighted: string;
          status: string;
        }>
      >(
        `SELECT
          granted_amount,
          rollover_required_total,
          rollover_completed_weighted,
          status
         FROM bonus.user_bonus
         WHERE user_id = $1
           AND status IN ('ACTIVE', 'ROLLOVER_COMPLETE')`,
        userId,
      );
      return result.map((r) => ({
        grantedAmount: parseFloat(r.granted_amount),
        rolloverRequiredTotal: parseFloat(r.rollover_required_total),
        rolloverCompletedWeighted: parseFloat(r.rollover_completed_weighted),
        status: r.status,
      }));
    } catch (err) {
      this.logger.debug(`fetchWagerProgress fallback (schema bonus not available): ${(err as Error).message}`);
      return [];
    }
  }

  private computeWithdrawableAndRollover(
    wallet: {
      realBalance: number;
      bonusBalance: number;
      totalTurnover: string | number | unknown;
    },
    wagerProgress: WagerProgressBonus[],
  ): BalanceResponse {
    const real = Number(wallet.realBalance) || 0;
    const bonus = Number(wallet.bonusBalance) || 0;
    const totalTurnoverNum = Number(wallet.totalTurnover) || 0;

    let rolloverRemaining = 0;
    let bonusReleasedPart = 0;
    let bonusLockedPart = 0;

    if (wagerProgress.length === 0) {
      bonusReleasedPart = bonus;
    } else {
      const totalGranted = wagerProgress.reduce((s, b) => s + b.grantedAmount, 0);
      let weightReleased = 0;
      let weightRemaining = 0;

      for (const b of wagerProgress) {
        const progress = b.rolloverRequiredTotal > 0
          ? Math.min(1, b.rolloverCompletedWeighted / b.rolloverRequiredTotal)
          : (b.status === 'ROLLOVER_COMPLETE' ? 1 : 0);
        const share = totalGranted > 0 ? b.grantedAmount / totalGranted : 0;
        weightReleased += share * progress;
        weightRemaining += share * Math.max(0, 1 - progress);
        if (b.rolloverRequiredTotal > 0) {
          rolloverRemaining += Math.max(0, b.rolloverRequiredTotal - b.rolloverCompletedWeighted);
        }
      }

      const denom = weightReleased + weightRemaining;
      if (denom > 0) {
        bonusReleasedPart = bonus * (weightReleased / denom);
        bonusLockedPart = bonus * (weightRemaining / denom);
      } else {
        bonusReleasedPart = bonus;
      }
    }

    const withdrawable = real + bonusReleasedPart;

    void bonusLockedPart;

    return {
      real: Math.round(real * 100) / 100,
      bonus: Math.round(bonus * 100) / 100,
      withdrawable: Math.round(withdrawable * 100) / 100,
      rolloverRemaining: Math.round(rolloverRemaining * 100) / 100,
      totalTurnover: Math.round(totalTurnoverNum * 100) / 100,
    };
  }

  async getTransactions(userId: string, query: WalletTransactionsQueryDto, currency: string = 'EUR') {
    const where: Record<string, unknown> = { userId, walletCurrency: currency };
    if (query.types?.length) where.type = { in: query.types };
    if (query.fromDate) where.createdAt = { ...(where.createdAt as object ?? {}), gte: query.fromDate };
    if (query.toDate) where.createdAt = { ...(where.createdAt as object ?? {}), lte: query.toDate };
    return this.prisma.transaction.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
  }

  async listWithdrawals(userId: string, currency: string = 'EUR') {
    return this.prisma.withdrawal.findMany({
      where: { userId, walletCurrency: currency },
      orderBy: { requestedAt: 'desc' },
      take: 100,
    });
  }

  async createStripeDepositIntent(userId: string, dto: CreateDepositDto) {
    const wallet = await this.getOrCreateWallet(userId, dto.currency);
    if (wallet.isFrozen) throw new ForbiddenException('Wallet is frozen');

    const amountCents = Math.round(dto.amount * 100);

    let intentResult;
    let providerRefType: string;
    let providerRefId: string;
    let clientSecret: string | undefined;
    let checkoutUrl: string | undefined;
    let sessionId: string | undefined;

    if (dto.paymentMethod) {
      const session = await this.stripe.createCheckoutSession({
        userId,
        amountCents,
        currency: dto.currency,
        paymentMethod: dto.paymentMethod,
        returnUrl: dto.returnUrl ?? '',
        promoCode: dto.promoCode ?? '',
      });
      intentResult = session;
      providerRefType = 'STRIPE_CHECKOUT_SESSION';
      providerRefId = session.sessionId;
      checkoutUrl = session.url;
      sessionId = session.sessionId;
      clientSecret = session.clientSecret;
      dto.paymentMethod = session.paymentMethod;
    } else {
      const intent = await this.stripe.createPaymentIntent(
        userId,
        amountCents,
        dto.currency,
        { returnUrl: dto.returnUrl ?? '', promoCode: dto.promoCode ?? '' },
      );
      intentResult = intent;
      providerRefType = 'STRIPE_PAYMENT_INTENT';
      providerRefId = intent.intentId;
      clientSecret = intent.clientSecret;
    }

    const { deposit } = await this.prisma.$transaction(
      async (tx) => {
        const transaction = await tx.transaction.create({
          data: {
            userId,
            walletId: wallet.userId,
            walletCurrency: wallet.currency,
            type: TransactionType.DEPOSIT,
            amountAmount: dto.amount,
            amountCurrency: dto.currency,
            status: PaymentStatus.PENDING,
            provider: dto.provider,
            externalId: providerRefId,
            referenceId: providerRefId,
            referenceType: providerRefType,
            kycLevelAtTime: wallet.kycLevelApplied,
          },
        });
        const deposit = await tx.deposit.create({
          data: {
            userId,
            walletId: wallet.userId,
            walletCurrency: wallet.currency,
            transactionId: transaction.id,
            amountAmount: dto.amount,
            amountCurrency: dto.currency,
            provider: dto.provider,
            providerTransactionId: providerRefId,
            status: PaymentStatus.PENDING,
            returnUrl: dto.returnUrl,
            paymentMethodType: dto.paymentMethod,
          },
        });
        await tx.wallet.update({
          where: { userId_currency: { userId, currency: dto.currency } },
          data: { pendingDeposits: { increment: dto.amount } },
        });
        return { deposit };
      },
      { isolationLevel: 'Serializable', timeout: 10000 },
    );

    return {
      deposit,
      clientSecret,
      intentId: providerRefId,
      sessionId,
      checkoutUrl,
      paymentMethod: dto.paymentMethod,
    };
  }

  async handleStripeWebhook(rawBody: Buffer, signature: string) {
    const { event, valid } = this.stripe.constructWebhookEvent(rawBody, signature);
    if (!valid) throw new BadRequestException('Invalid stripe webhook signature');

    let userId: string | undefined;
    let providerTransactionId: string | undefined;
    let amount = 0;
    let currency = '';
    let handled = false;

    if (event.type === 'payment_intent.succeeded') {
      const pi = event.data.object as {
        id: string;
        amount: number;
        currency: string;
        metadata?: { userId?: string };
      };
      userId = pi.metadata?.userId;
      providerTransactionId = pi.id;
      amount = pi.amount / 100;
      currency = pi.currency.toUpperCase();
      handled = true;
    } else if (event.type === 'checkout.session.completed') {
      const cs = event.data.object as {
        id: string;
        amount_total: number | null;
        currency: string | null;
        metadata?: { userId?: string };
        payment_intent?: string | null;
      };
      userId = cs.metadata?.userId;
      providerTransactionId = cs.payment_intent ?? cs.id;
      amount = (cs.amount_total ?? 0) / 100;
      currency = (cs.currency ?? 'eur').toUpperCase();
      handled = true;
    }

    if (handled && userId && providerTransactionId && amount > 0) {
      await this.completeDeposit(userId, providerTransactionId, amount, currency, event.data.object);
      return { handled: true, eventType: event.type };
    }

    return { handled: false, reason: 'unhandled_event_type', eventType: event.type };
  }

  private async completeDeposit(
    userId: string,
    providerTransactionId: string,
    amount: number,
    currency: string,
    providerRaw: unknown,
  ) {
    const walletBefore = await this.getOrCreateWallet(userId, currency);

    const result = await this.prisma.$transaction(
      async (tx) => {
        const deposit = await tx.deposit.findFirst({
          where: {
            OR: [
              { userId, walletCurrency: currency, providerTransactionId },
              { userId, walletCurrency: currency, transactionId: providerTransactionId },
            ],
          },
        });
        if (!deposit) throw new NotFoundException('Deposit not found');
        if (deposit.status === PaymentStatus.COMPLETED) return { skipped: true, deposit };

        await tx.transaction.updateMany({
          where: { id: deposit.transactionId },
          data: { status: PaymentStatus.COMPLETED, processedAt: new Date(), externalId: providerTransactionId },
        });
        await tx.deposit.update({
          where: { id: deposit.id },
          data: {
            status: PaymentStatus.COMPLETED,
            confirmedAt: new Date(),
            netAmountAmount: amount,
            netAmountCurrency: currency,
            providerRawResponse: providerRaw as object,
          },
        });

        const apply = await this.applyLedgerDoubleEntry(tx, {
          userId,
          currency,
          real: amount,
          bonus: 0,
          pendingDepositsDelta: -amount,
          transactionType: TransactionType.DEPOSIT,
          ref: {
            referenceId: deposit.id,
            referenceType: 'DEPOSIT',
            externalReferenceId: providerTransactionId,
          },
        });

        const updatedWallet = await tx.wallet.update({
          where: { userId_currency: { userId, currency } },
          data: {
            totalDeposited: { increment: amount },
            lastDepositAt: new Date(),
          },
        });

        return { deposit, apply, updatedWallet, skipped: false };
      },
      { isolationLevel: 'Serializable', timeout: 10000 },
    );

    if (result.skipped) return result;

    const { deposit, apply, updatedWallet } = result as {
      deposit: unknown;
      apply: ApplyResult;
      updatedWallet: Awaited<ReturnType<any>>;
    };
    const depositPayload: WalletDepositCompletedPayload = {
      userId,
      walletId: updatedWallet.userId,
      depositId: (deposit as { id: string }).id,
      transactionId: (deposit as { transactionId: string }).transactionId,
      provider: PaymentProvider.STRIPE,
      providerId: providerTransactionId,
      amount: { amount, currency },
      netAmount: { amount, currency },
      balanceAfter: {
        real: updatedWallet.realBalance,
        bonus: updatedWallet.bonusBalance,
        pendingDeposits: updatedWallet.pendingDeposits,
      },
      appliedBonusId: (deposit as { appliedBonusId?: string }).appliedBonusId ?? undefined,
      timestamp: new Date().toISOString(),
    };
    this.emitEnvelope(BET62_EVENTS.WALLET.DEPOSIT_COMPLETED, 'WALLET', userId, depositPayload);
    this.emitBalanceUpdate(userId, currency, TransactionType.DEPOSIT, apply, (deposit as { id: string }).id);
    this.logger.log(`Deposit completed user=${userId} amount=${amount}${currency} id=${(deposit as { id: string }).id}`);
    return result;
  }

  async requestWithdrawal(
    userId: string,
    dto: RequestWithdrawalDto,
    riskContext: { ipAddress?: string; userAgent?: string; deviceFingerprint?: string; email?: string } = {},
  ): Promise<WithdrawalProcessingResult> {
    const wallet = await this.getOrCreateWallet(userId, dto.currency);
    if (wallet.isFrozen) throw new ForbiddenException('Wallet is frozen');

    const balance = await this.getBalance(userId, dto.currency);
    const available = balance.withdrawable - wallet.pendingWithdrawals;
    if (available < dto.amount) {
      throw new BadRequestException(`Insufficient withdrawable balance: available ${available.toFixed(2)}${dto.currency}`);
    }

    const riskResult = await this.riskEngine.evaluateWithdrawalRisk(
      userId,
      dto.amount,
      dto.provider ?? 'STRIPE',
      riskContext,
    );

    this.logger.log(
      `Withdrawal risk check user=${userId} amount=${dto.amount} status=${riskResult.status} score=${riskResult.score}`,
    );

    if (riskResult.status === 'BLOCKED') {
      this.eventEmitter.emit(
        BET62_EVENTS.WALLET.WITHDRAWAL_REJECTED,
        createEnvelope({
          event: BET62_EVENTS.WALLET.WITHDRAWAL_REJECTED,
          aggregateType: 'Wallet',
          aggregateId: userId,
          producer: 'wallet-service',
          payload: {
            userId,
            withdrawalId: null,
            amount: dto.amount,
            currency: dto.currency,
            reason: riskResult.factors.join('; '),
            riskScore: riskResult.score,
            rejectedAt: new Date().toISOString(),
          },
        }),
      );
      throw new BadRequestException({
        message: 'Saque bloqueado pelo motor de risco',
        riskFactors: riskResult.factors,
        riskScore: riskResult.score,
      });
    }

    const initialStatus: PaymentStatus = riskResult.status === 'RISK_REVIEW'
      ? PaymentStatus.UNDER_REVIEW
      : PaymentStatus.PENDING;

    const result = await this.prisma.$transaction(
      async (tx) => {
        const transaction = await tx.transaction.create({
          data: {
            userId,
            walletId: wallet.userId,
            walletCurrency: wallet.currency,
            type: TransactionType.WITHDRAWAL,
            amountAmount: dto.amount,
            amountCurrency: dto.currency,
            status: initialStatus,
            provider: dto.provider,
            referenceType: 'WITHDRAWAL_REQUEST',
            kycLevelAtTime: wallet.kycLevelApplied,
            riskScore: riskResult.score,
            note: riskResult.factors.length > 0 ? riskResult.factors.join(' | ') : null,
            metadata: { riskFactors: riskResult.factors, riskDetails: riskResult.details },
          },
        });
        const withdrawal = await tx.withdrawal.create({
          data: {
            userId,
            walletId: wallet.userId,
            walletCurrency: wallet.currency,
            transactionId: transaction.id,
            amountAmount: dto.amount,
            amountCurrency: dto.currency,
            provider: dto.provider,
            beneficiaryAccountJson: dto.beneficiary as unknown as object,
            status: initialStatus,
            kycLevelAtRequest: wallet.kycLevelApplied,
            pendingDocumentIds: [],
            riskScore: riskResult.score,
            correlationId: `wd-${Date.now()}-${userId.slice(0, 8)}`,
          },
        });
        await tx.wallet.update({
          where: { userId_currency: { userId, currency: dto.currency } },
          data: {
            pendingWithdrawals: { increment: dto.amount },
          },
        });
        return { withdrawal, transaction };
      },
      { isolationLevel: 'Serializable', timeout: 10000 },
    );

    let payoutInitiated = false;
    let pendingReview = false;
    let blocked = false;

    if (riskResult.status === 'ALLOWED') {
      try {
        if (dto.provider === 'STRIPE') {
          const amountCents = Math.round(dto.amount * 100);
          this.logger.log(`Initiating STRIPE payout for withdrawal=${result.withdrawal.id} amount=${dto.amount}`);
          await this.stripe.createPayout(
            userId,
            amountCents,
            dto.currency,
            dto.beneficiary.stripeConnectId as string,
            { withdrawalId: result.withdrawal.id },
          ).catch((err) => {
            this.logger.error(`Failed to initiate stripe payout withdrawal=${result.withdrawal.id}`, err as Error);
          });
          payoutInitiated = true;
        }
      } catch (err) {
        this.logger.error(`Payout initiation failed`, err as Error);
      }
    } else if (riskResult.status === 'RISK_REVIEW') {
      pendingReview = true;
      this.logger.log(
        `Withdrawal PENDING_REVIEW id=${result.withdrawal.id} user=${userId} factors=${riskResult.factors.join(', ')}`,
      );
    }

    const payload: WalletWithdrawalRequestedPayload = {
      userId,
      walletId: wallet.userId,
      withdrawalId: result.withdrawal.id,
      transactionId: result.transaction.id,
      provider: dto.provider,
      amount: { amount: dto.amount, currency: dto.currency },
      netAmount: { amount: dto.amount, currency: dto.currency },
      balanceBefore: { real: wallet.realBalance, bonus: wallet.bonusBalance },
      kycLevelAtRequest: wallet.kycLevelApplied,
      requestedAt: new Date().toISOString(),
      requiresManualApproval: pendingReview || wallet.kycLevelApplied < 1 || dto.amount >= 10000,
    };
    this.emitEnvelope(BET62_EVENTS.WALLET.WITHDRAWAL_REQUESTED, 'WALLET', userId, payload);
    this.logger.log(
      `Withdrawal ${initialStatus} user=${userId} id=${result.withdrawal.id} amount=${dto.amount}${dto.currency} risk=${riskResult.status}/${riskResult.score}`,
    );

    return {
      withdrawal: result.withdrawal,
      transaction: result.transaction,
      riskResult,
      payoutInitiated,
      pendingReview,
      blocked,
    };
  }

  async internalDebit(
    userId: string,
    currency: string,
    amount: number,
    transactionType: TransactionType,
    ref: LedgerReference,
    useBonus = false,
  ) {
    return this.prisma.$transaction(
      async (tx) => {
        const wallet = await tx.wallet.findUnique({
          where: { userId_currency: { userId, currency } },
        });
        if (!wallet) throw new NotFoundException('Wallet not found');
        if (wallet.isFrozen) throw new ForbiddenException('Wallet is frozen');

        const realPart = useBonus ? 0 : amount;
        const bonusPart = useBonus ? amount : 0;
        const available = useBonus ? wallet.bonusBalance : wallet.realBalance - wallet.reservedBets - wallet.pendingWithdrawals;
        if (available < amount) {
          throw new BadRequestException(`Insufficient ${useBonus ? 'bonus' : 'real'} balance`);
        }

        const apply = await this.applyLedgerDoubleEntry(tx, {
          userId,
          currency,
          real: -realPart,
          bonus: -bonusPart,
          reservedBetsDelta: transactionType === TransactionType.BET_PLACED ? amount : 0,
          transactionType,
          ref,
        });

        const totalsUpdate: Record<string, { increment: number }> = {};
        if (transactionType === TransactionType.BET_PLACED) totalsUpdate.totalWagered = { increment: amount };
        if (useBonus && transactionType === TransactionType.BET_PLACED) totalsUpdate.totalBonusWagered = { increment: amount };
        if (Object.keys(totalsUpdate).length > 0) {
          await tx.wallet.update({
            where: { userId_currency: { userId, currency } },
            data: totalsUpdate,
          });
        }

        return apply;
      },
      { isolationLevel: 'Serializable', timeout: 10000 },
    ).then((apply) => {
      this.emitBalanceUpdate(userId, currency, transactionType, apply, ref.referenceId);
      return apply;
    });
  }

  async internalCredit(
    userId: string,
    currency: string,
    amount: number,
    transactionType: TransactionType,
    ref: LedgerReference,
    toBonus = false,
  ) {
    return this.prisma.$transaction(
      async (tx) => {
        const isBetSettle = [
          TransactionType.BET_SETTLED_WON,
          TransactionType.BET_SETTLED_HALF_WON,
          TransactionType.BET_SETTLED_VOID,
          TransactionType.BET_CASHOUT,
        ].includes(transactionType);

        const apply = await this.applyLedgerDoubleEntry(tx, {
          userId,
          currency,
          real: toBonus ? 0 : amount,
          bonus: toBonus ? amount : 0,
          reservedBetsDelta: isBetSettle ? -Math.abs(amount) : 0,
          transactionType,
          ref,
        });

        const totalsUpdate: Record<string, { increment: number }> = {};
        if (transactionType === TransactionType.BET_SETTLED_WON) totalsUpdate.totalWon = { increment: amount };
        if (transactionType === TransactionType.BET_SETTLED_LOST) totalsUpdate.totalLost = { increment: amount };
        if (transactionType === TransactionType.BONUS_GRANTED) totalsUpdate.totalBonusGranted = { increment: amount };
        if (transactionType === TransactionType.BONUS_RELEASED) totalsUpdate.totalBonusReleased = { increment: amount };
        if (Object.keys(totalsUpdate).length > 0) {
          await tx.wallet.update({
            where: { userId_currency: { userId, currency } },
            data: totalsUpdate,
          });
        }

        return apply;
      },
      { isolationLevel: 'Serializable', timeout: 10000 },
    ).then((apply) => {
      this.emitBalanceUpdate(userId, currency, transactionType, apply, ref.referenceId);
      return apply;
    });
  }

  async updateKycLevel(userId: string, newLevel: number, currency: string = 'EUR') {
    const wallet = await this.getOrCreateWallet(userId, currency);
    if (wallet.kycLevelApplied === newLevel) return wallet;
    return this.prisma.wallet.update({
      where: { userId_currency: { userId, currency } },
      data: { kycLevelApplied: newLevel },
    });
  }

  private async applyLedgerDoubleEntry(
    tx: any,
    params: {
      userId: string;
      currency: string;
      real: number;
      bonus: number;
      pendingDepositsDelta?: number;
      pendingWithdrawalsDelta?: number;
      reservedBetsDelta?: number;
      transactionType: TransactionType;
      ref: LedgerReference;
    },
  ): Promise<ApplyResult> {
    const { userId, currency, real, bonus, transactionType, ref } = params;
    const pd = params.pendingDepositsDelta ?? 0;
    const pw = params.pendingWithdrawalsDelta ?? 0;
    const rb = params.reservedBetsDelta ?? 0;

    const isBetStake = [TransactionType.BET_PLACED, TransactionType.CASINO_BET].includes(transactionType);
    const isBetWin = [
      TransactionType.BET_SETTLED_WON,
      TransactionType.BET_SETTLED_HALF_WON,
      TransactionType.CASINO_WIN,
      TransactionType.BET_CASHOUT,
    ].includes(transactionType);
    const turnoverAbs =
      isBetStake ? Math.abs(real) + Math.abs(bonus) :
      isBetWin ? Math.abs(real) + Math.abs(bonus) : 0;

    const walletUpdateData: Record<string, unknown> = {
      realBalance: { increment: real },
      bonusBalance: { increment: bonus },
      pendingDeposits: { increment: pd },
      pendingWithdrawals: { increment: pw },
      reservedBets: { increment: rb },
    };
    if (turnoverAbs > 0) {
      walletUpdateData.totalTurnover = { increment: turnoverAbs };
    }

    const wallet = await tx.wallet.update({
      where: { userId_currency: { userId, currency } },
      data: walletUpdateData,
    });

    const entries: Array<Record<string, unknown>> = [];

    const writeLeg = async (
      accountType: LedgerAccountType,
      accountDelta: number,
      balanceField: 'realBalance' | 'bonusBalance',
    ) => {
      if (accountDelta === 0) return;
      const entryType: LedgerEntryType = accountDelta > 0 ? LedgerEntryType.CREDIT : LedgerEntryType.DEBIT;
      const amount = Math.abs(accountDelta);
      const running = (wallet as unknown as Record<string, number>)[balanceField];
      entries.push(
        await tx.walletLedgerEntry.create({
          data: {
            userId,
            walletId: wallet.userId,
            walletCurrency: wallet.currency,
            entryType,
            accountType,
            amount,
            currency,
            runningBalanceAfter: running,
            transactionType,
            referenceId: ref.referenceId,
            referenceType: ref.referenceType,
            externalReferenceId: ref.externalReferenceId,
            correlationId: ref.correlationId,
            note: ref.note,
            metadata: ref.metadata as object | undefined,
            operatedBy: ref.operatedBy,
          },
        }),
      );
    };

    if (real !== 0) {
      await writeLeg(LedgerAccountType.USER_REAL_BALANCE, real, 'realBalance');
      await writeLeg(LedgerAccountType.HOUSE_BALANCE, -real, 'realBalance');
    }
    if (bonus !== 0) {
      await writeLeg(LedgerAccountType.USER_BONUS_BALANCE, bonus, 'bonusBalance');
      await writeLeg(LedgerAccountType.BONUS_EXPENSE, -bonus, 'bonusBalance');
    }

    return {
      wallet: {
        userId: wallet.userId,
        currency: wallet.currency,
        realBalance: wallet.realBalance,
        bonusBalance: wallet.bonusBalance,
        pendingDeposits: wallet.pendingDeposits,
        pendingWithdrawals: wallet.pendingWithdrawals,
        reservedBets: wallet.reservedBets,
      },
      ledgerEntries: entries,
      deltaReal: real,
      deltaBonus: bonus,
    };
  }

  private emitBalanceUpdate(
    userId: string,
    currency: string,
    transactionType: TransactionType,
    apply: ApplyResult,
    referenceId?: string,
  ) {
    const payload: WalletBalanceUpdatedPayload = {
      userId,
      walletId: apply.wallet.userId,
      transactionType,
      referenceId,
      delta: { real: apply.deltaReal, bonus: apply.deltaBonus },
      balanceAfter: {
        real: apply.wallet.realBalance,
        bonus: apply.wallet.bonusBalance,
        pendingDeposits: apply.wallet.pendingDeposits,
        pendingWithdrawals: apply.wallet.pendingWithdrawals,
        reservedBets: apply.wallet.reservedBets,
      },
      currency,
      timestamp: new Date().toISOString(),
    };
    this.emitEnvelope(BET62_EVENTS.WALLET.BALANCE_UPDATED, 'WALLET', userId, payload);
  }

  private emitEnvelope<TPayload>(
    event: string,
    aggregateType: string,
    aggregateId: string,
    payload: TPayload,
    correlationId?: string,
  ) {
    const envelope = createEnvelope({
      event,
      aggregateType,
      aggregateId,
      payload,
      correlationId,
      producer: 'wallet-service',
    });
    this.eventEmitter.emit(event, envelope);
    this.eventEmitter.emit(`${BET62_STREAMS.WALLET}:emit`, envelope);
  }
}
