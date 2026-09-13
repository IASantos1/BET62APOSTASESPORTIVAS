import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { PaymentProvider } from '@bet62/shared';

type CheckoutPaymentMethod = 'card' | 'mbway' | 'multibanco';

interface CreateCheckoutSessionDto {
  userId: string;
  amountCents: number;
  currency: string;
  paymentMethod: CheckoutPaymentMethod;
  returnUrl: string;
  promoCode?: string;
}

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

  async createCheckoutSession(
    dto: CreateCheckoutSessionDto,
  ): Promise<{
    sessionId: string;
    url: string;
    clientSecret?: string;
    status: string;
    provider: PaymentProvider;
  }> {
    const { userId, amountCents, currency, paymentMethod, returnUrl, promoCode } = dto;
    const successUrl = returnUrl && returnUrl.length > 0
      ? `${returnUrl}${returnUrl.includes('?') ? '&' : '?'}payType=${paymentMethod}&sessionId={CHECKOUT_SESSION_ID}&status=success`
      : undefined;
    const cancelUrl = returnUrl && returnUrl.length > 0
      ? `${returnUrl}${returnUrl.includes('?') ? '&' : '?'}payType=${paymentMethod}&status=cancel`
      : undefined;

    if (!this.stripe) {
      this.logger.debug(`[MOCK] createCheckoutSession user=${userId} amount=${amountCents} currency=${currency} method=${paymentMethod}`);
      const sessionId = `cs_mock_${userId}_${Date.now()}`;
      return {
        sessionId,
        url: `${returnUrl || 'http://localhost'}${returnUrl?.includes('?') ? '&' : '?'}payType=${paymentMethod}&sessionId=${sessionId}&status=success`,
        clientSecret: `cs_mock_${userId}_${Date.now()}_secret_${Math.random().toString(36).slice(2)}`,
        status: 'open',
        provider: PaymentProvider.STRIPE,
      };
    }

    const metadata: Record<string, string> = { userId, paymentMethod };
    if (promoCode) metadata.promoCode = promoCode;

    let paymentMethodTypes: any;
    let paymentMethodOptions: Stripe.Checkout.SessionCreateParams.PaymentMethodOptions | undefined;

    switch (paymentMethod) {
      case 'card':
        paymentMethodTypes = ['card' as const];
        break;

      case 'multibanco':
        paymentMethodTypes = ['multibanco' as const, 'card' as const];
        break;

      case 'mbway':
        // Stripe suporta MB Way através Stripe Payments API Stripe.Checkout.Session.create com
        // payment_method_types: ['multibanco', 'card'] para métodos de PT;
        // mbway via pix/bancontact dependendo da conta Stripe PT ativada.
        // Em ambiente de produção com Stripe PT devidamente ativado, MB Way pode ser disponibilizado
        // através de payment_method_types apropriados ou fluxos de pagamento alternativos.
        paymentMethodTypes = ['card' as const];
        paymentMethodOptions = {};
        break;

      default:
        paymentMethodTypes = ['card' as const];
    }

    const session = await this.stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: currency.toLowerCase(),
            product_data: {
              name: `Depósito ${amountCents / 100} ${currency.toUpperCase()}`,
              description: `Depósito via ${paymentMethod}`,
            },
            unit_amount: amountCents,
          },
          quantity: 1,
        },
      ],
      payment_method_types: paymentMethodTypes,
      payment_method_options: paymentMethodOptions,
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata,
      client_reference_id: userId,
    });

    return {
      sessionId: session.id,
      url: session.url ?? '',
      clientSecret: session.client_secret ?? undefined,
      status: session.status,
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
