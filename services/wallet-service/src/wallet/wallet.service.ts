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

@Injectable()
export class WalletService {
  private readonly logger = new Logger(WalletService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly stripe: StripeService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  async getOrCreateWallet(userId: string, currency: string = 'EUR') {
    return this.prisma.wallet.upsert({
      where: { userId_currency: { userId, currency } },
      create: { userId, currency },
      update: {},
    });
  }

  async getBalance(userId: string, currency: string = 'EUR') {
    return this.getOrCreateWallet(userId, currency);
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
    const intent = await this.stripe.createPaymentIntent(
      userId,
      amountCents,
      dto.currency,
      { returnUrl: dto.returnUrl ?? '', promoCode: dto.promoCode ?? '' },
    );

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
            externalId: intent.intentId,
            referenceId: intent.intentId,
            referenceType: 'STRIPE_PAYMENT_INTENT',
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
            providerTransactionId: intent.intentId,
            status: PaymentStatus.PENDING,
            returnUrl: dto.returnUrl,
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

    return { deposit, clientSecret: intent.clientSecret, intentId: intent.intentId };
  }

  async handleStripeWebhook(rawBody: Buffer, signature: string) {
    const { event, valid } = this.stripe.constructWebhookEvent(rawBody, signature);
    if (!valid) throw new BadRequestException('Invalid stripe webhook signature');

    if (event.type === 'payment_intent.succeeded') {
      const pi = event.data.object as { id: string; amount: number; currency: string; metadata?: { userId?: string } };
      const userId = pi.metadata?.userId;
      if (!userId) return { handled: false, reason: 'no_user_in_metadata' };
      const amount = pi.amount / 100;
      const currency = pi.currency.toUpperCase();
      await this.completeDeposit(userId, pi.id, amount, currency, pi);
    }
    return { handled: true, eventType: event.type };
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
          where: { userId, walletCurrency: currency, providerTransactionId },
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
          data: { totalDeposited: { increment: amount } },
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

  async requestWithdrawal(userId: string, dto: RequestWithdrawalDto) {
    const wallet = await this.getOrCreateWallet(userId, dto.currency);
    if (wallet.isFrozen) throw new ForbiddenException('Wallet is frozen');
    const available = wallet.realBalance - wallet.pendingWithdrawals;
    if (available < dto.amount) {
      throw new BadRequestException(`Insufficient balance: available ${available.toFixed(2)}${dto.currency}`);
    }

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
            status: PaymentStatus.PENDING,
            provider: dto.provider,
            referenceType: 'WITHDRAWAL_REQUEST',
            kycLevelAtTime: wallet.kycLevelApplied,
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
            kycLevelAtRequest: wallet.kycLevelApplied,
            pendingDocumentIds: [],
          },
        });
        await tx.wallet.update({
          where: { userId_currency: { userId, currency: dto.currency } },
          data: { pendingWithdrawals: { increment: dto.amount } },
        });
        return { withdrawal, transaction };
      },
      { isolationLevel: 'Serializable', timeout: 10000 },
    );

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
      requiresManualApproval: wallet.kycLevelApplied < 1 || dto.amount >= 10000,
    };
    this.emitEnvelope(BET62_EVENTS.WALLET.WITHDRAWAL_REQUESTED, 'WALLET', userId, payload);
    this.logger.log(`Withdrawal requested user=${userId} amount=${dto.amount}${dto.currency}`);
    return result;
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

    const wallet = await tx.wallet.update({
      where: { userId_currency: { userId, currency } },
      data: {
        realBalance: { increment: real },
        bonusBalance: { increment: bonus },
        pendingDeposits: { increment: pd },
        pendingWithdrawals: { increment: pw },
        reservedBets: { increment: rb },
      },
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
