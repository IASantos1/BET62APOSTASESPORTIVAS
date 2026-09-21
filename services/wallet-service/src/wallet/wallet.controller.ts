import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Req,
  Res,
  Headers,
  HttpCode,
  HttpStatus,
  BadRequestException,
  UnauthorizedException,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiHeader } from '@nestjs/swagger';
import { Request as ExpressRequest, Response } from 'express';
import { WalletService } from './wallet.service';
import {
  CreateDepositDto,
  RequestWithdrawalDto,
  WalletTransactionsQueryDto,
  AdminWalletAdjustmentDto,
  TransactionType,
} from '@bet62/shared';

@ApiTags('wallet')
@Controller()
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Get('balance')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Saldo da carteira do usuário autenticado' })
  async getBalance(@Request() req: { user: { sub: string } }, @Query('currency') currency = 'EUR') {
    return this.walletService.getBalance(req.user.sub, currency);
  }

  @Get('internal/balance')
  @ApiOperation({ summary: '[INTERNAL] Saldo de carteira por userId' })
  async getInternalBalance(
    @Query('userId') userId: string,
    @Query('currency') currency = 'EUR',
  ) {
    if (!userId) {
      throw new BadRequestException('userId is required');
    }
    return this.walletService.getBalance(userId, currency);
  }

  @Get('transactions')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Extrato de transações da carteira' })
  async getTransactions(
    @Request() req: { user: { sub: string } },
    @Query() query: WalletTransactionsQueryDto,
    @Query('currency') currency = 'EUR',
  ) {
    return this.walletService.getTransactions(req.user.sub, query, currency);
  }

  @Post('deposit/stripe/create-intent')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Cria PaymentIntent do Stripe para depósito' })
  async createStripeIntent(
    @Request() req: { user: { sub: string } },
    @Body() dto: CreateDepositDto,
  ) {
    return this.walletService.createStripeDepositIntent(req.user.sub, dto);
  }

  @Post('webhook/stripe')
  @HttpCode(HttpStatus.OK)
  @ApiHeader({ name: 'stripe-signature', required: true })
  @ApiOperation({ summary: 'Webhook do Stripe para eventos de pagamento/payout' })
  async handleStripeWebhook(
    @Req() req: ExpressRequest,
    @Res() res: Response,
    @Headers('stripe-signature') signature?: string,
  ) {
    if (!signature) throw new UnauthorizedException('Missing stripe-signature header');
    const rawBody = (req as unknown as { rawBody?: Buffer }).rawBody ??
      (req.body instanceof Buffer ? req.body : Buffer.from(JSON.stringify(req.body ?? {})));
    try {
      const result = await this.walletService.handleStripeWebhook(rawBody, signature);
      res.status(HttpStatus.OK).json({ received: true, ...result });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      throw new BadRequestException(message);
    }
  }

  @Post('withdraw')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Solicita saque (com Risk Engine) - endpoint principal' })
  async withdraw(
    @Request() req: { user: { sub: string; email?: string }; ip?: string; headers?: Record<string, string> },
    @Body() dto: RequestWithdrawalDto,
  ) {
    const ipAddress =
      (req.headers?.['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
      (req.headers?.['x-real-ip'] as string) ||
      req.ip;
    const userAgent = req.headers?.['user-agent'] as string | undefined;
    const deviceFingerprint = req.headers?.['x-device-fingerprint'] as string | undefined;

    try {
      const result = await this.walletService.requestWithdrawal(req.user.sub, dto, {
        ipAddress,
        userAgent,
        deviceFingerprint,
        email: req.user.email,
      });

      if (result.pendingReview) {
        return {
          status: 'PENDING_REVIEW',
          message: 'Saque em revisão manual. Será processado em até 24h.',
          withdrawalId: (result.withdrawal as { id: string }).id,
          riskScore: result.riskResult.score,
          riskFactors: result.riskResult.factors,
          withdrawal: result.withdrawal,
        };
      }

      if (result.riskResult.status === 'ALLOWED') {
        return {
          status: 'PROCESSING',
          message: result.payoutInitiated
            ? 'Saque autorizado e pagamento iniciado.'
            : 'Saque autorizado. Aguardando processamento do provedor.',
          withdrawalId: (result.withdrawal as { id: string }).id,
          payoutInitiated: result.payoutInitiated,
          riskScore: result.riskResult.score,
          withdrawal: result.withdrawal,
        };
      }

      return {
        status: 'ERROR',
        message: 'Erro ao processar saque',
      };
    } catch (err: unknown) {
      if (err instanceof BadRequestException) {
        const resp = err.getResponse() as Record<string, unknown>;
        if (resp && typeof resp === 'object' && (resp as { riskFactors?: unknown[] }).riskFactors) {
          return {
            statusCode: HttpStatus.BAD_REQUEST,
            status: 'BLOCKED',
            message: (resp as { message: string }).message || 'Saque bloqueado',
            riskScore: (resp as { riskScore?: number }).riskScore,
            riskFactors: (resp as { riskFactors?: string[] }).riskFactors ?? [],
          };
        }
      }
      throw err;
    }
  }

  @Post('withdraw/request')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Solicita saque da carteira (legado)' })
  async requestWithdrawal(
    @Request() req: { user: { sub: string; email?: string }; ip?: string; headers?: Record<string, string> },
    @Body() dto: RequestWithdrawalDto,
  ) {
    const ipAddress =
      (req.headers?.['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
      (req.headers?.['x-real-ip'] as string) ||
      req.ip;
    const userAgent = req.headers?.['user-agent'] as string | undefined;
    return this.walletService.requestWithdrawal(req.user.sub, dto, {
      ipAddress,
      userAgent,
      email: req.user.email,
    });
  }

  @Get('withdraw/list')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Lista saques do usuário autenticado' })
  async listWithdrawals(
    @Request() req: { user: { sub: string } },
    @Query('currency') currency = 'EUR',
  ) {
    return this.walletService.listWithdrawals(req.user.sub, currency);
  }

  @Post('internal/debit')
  @ApiBearerAuth()
  @ApiOperation({ summary: '[INTERNAL] Débito interno (serviços autenticados)' })
  async internalDebit(
    @Request() req: { user: { sub: string; role?: string } },
    @Body()
    body: {
      userId: string;
      currency?: string;
      amount: number;
      transactionType: TransactionType;
      referenceId: string;
      referenceType: string;
      useBonus?: boolean;
      correlationId?: string;
      note?: string;
      operatedBy?: string;
    },
  ) {
    const currency = body.currency ?? 'EUR';
    const result = await this.walletService.internalDebit(
      body.userId,
      currency,
      body.amount,
      body.transactionType,
      {
        referenceId: body.referenceId,
        referenceType: body.referenceType,
        correlationId: body.correlationId,
        note: body.note,
        operatedBy: body.operatedBy,
      },
      body.useBonus,
    );
    return { ok: true, ...result.wallet };
  }

  @Post('internal/credit')
  @ApiBearerAuth()
  @ApiOperation({ summary: '[INTERNAL] Crédito interno (serviços autenticados)' })
  async internalCredit(
    @Request() req: { user: { sub: string; role?: string } },
    @Body()
    body: {
      userId: string;
      currency?: string;
      amount: number;
      transactionType: TransactionType;
      referenceId: string;
      referenceType: string;
      toBonus?: boolean;
      correlationId?: string;
      note?: string;
      operatedBy?: string;
    },
  ) {
    const currency = body.currency ?? 'EUR';
    const result = await this.walletService.internalCredit(
      body.userId,
      currency,
      body.amount,
      body.transactionType,
      {
        referenceId: body.referenceId,
        referenceType: body.referenceType,
        correlationId: body.correlationId,
        note: body.note,
        operatedBy: body.operatedBy,
      },
      body.toBonus,
    );
    return { ok: true, ...result.wallet };
  }
}
