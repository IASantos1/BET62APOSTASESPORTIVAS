import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { PaymentProvider } from '@bet62/shared';

@Injectable()
export class StripeService {
  private readonly logger = new Logger(StripeService.name);
  private readonly stripe: Stripe | null;
  private readonly secretKey: string;
  private readonly webhookSecret: string;

  constructor(private readonly configService: ConfigService) {
    this.secretKey = this.configService.get('STRIPE_SECRET_KEY', 'sk_test_mock');
    this.webhookSecret = this.configService.get('STRIPE_WEBHOOK_SECRET', 'whsec_mock');
    this.stripe = this.secretKey.startsWith('sk_test_mock') || this.secretKey === ''
      ? null
      : new Stripe(this.secretKey, { apiVersion: '2023-10-16' });
  }

  async createPaymentIntent(
    userId: string,
    amountCents: number,
    currency: string,
    metadata: Record<string, string> = {},
  ): Promise<{
    clientSecret: string;
    intentId: string;
    status: string;
    provider: PaymentProvider;
  }> {
    if (!this.stripe) {
      this.logger.debug(`[MOCK] createPaymentIntent user=${userId} amount=${amountCents} currency=${currency}`);
      return {
        clientSecret: `pi_mock_${userId}_${Date.now()}_secret_${Math.random().toString(36).slice(2)}`,
        intentId: `pi_mock_${userId}_${Date.now()}`,
        status: 'requires_payment_method',
        provider: PaymentProvider.STRIPE,
      };
    }
    const intent = await this.stripe.paymentIntents.create({
      amount: amountCents,
      currency: currency.toLowerCase(),
      metadata: { userId, ...metadata },
    });
    return {
      clientSecret: intent.client_secret ?? '',
      intentId: intent.id,
      status: intent.status,
      provider: PaymentProvider.STRIPE,
    };
  }

  constructWebhookEvent(
    rawBody: Buffer,
    signature: string,
  ): { event: Stripe.Event; valid: boolean } {
    if (!this.stripe || this.webhookSecret.startsWith('whsec_mock')) {
      let parsed: Stripe.Event;
      try {
        parsed = JSON.parse(rawBody.toString('utf-8')) as Stripe.Event;
      } catch (err) {
        throw new Error('Invalid webhook payload JSON');
      }
      return { event: parsed, valid: true };
    }
    const event = this.stripe.webhooks.constructEvent(rawBody, signature, this.webhookSecret);
    return { event, valid: true };
  }

  async createPayout(
    userId: string,
    amountCents: number,
    currency: string,
    destination: string,
    metadata: Record<string, string> = {},
  ): Promise<{ payoutId: string; status: string; provider: PaymentProvider }> {
    if (!this.stripe) {
      this.logger.debug(`[MOCK] createPayout user=${userId} amount=${amountCents} dest=${destination}`);
      return {
        payoutId: `po_mock_${userId}_${Date.now()}`,
        status: 'pending',
        provider: PaymentProvider.STRIPE,
      };
    }
    const payout = await this.stripe.payouts.create({
      amount: amountCents,
      currency: currency.toLowerCase(),
      destination,
      metadata: { userId, ...metadata },
    });
    return { payoutId: payout.id, status: payout.status, provider: PaymentProvider.STRIPE };
  }
}
