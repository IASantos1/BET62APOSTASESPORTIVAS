import { Injectable, Logger } from '@nestjs/common';

export interface SmsSendInput {
  userId?: string;
  toPhoneNumber: string;
  text: string;
  correlationId?: string;
}

@Injectable()
export class SmsProvider {
  private readonly logger = new Logger(SmsProvider.name);

  async send(input: SmsSendInput) {
    this.logger.log(
      `[MOCK SMS] to=${input.toPhoneNumber} userId=${input.userId ?? '-'} length=${input.text.length} chars`,
    );
    this.logger.debug(`[MOCK SMS] body=${JSON.stringify(input.text.slice(0, 120))}`);
    const success = Math.random() > 0.03;
    return {
      success,
      providerMessageId: success ? `mock-sms-${crypto.randomUUID()}` : undefined,
      error: success ? undefined : 'MOCK_RANDOM_SMS_FAILURE',
    };
  }
}
