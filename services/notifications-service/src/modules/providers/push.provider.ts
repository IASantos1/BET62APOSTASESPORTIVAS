import { Injectable, Logger } from '@nestjs/common';

export interface WebPushSubscription {
  endpoint: string;
  keys?: { p256dh: string; auth: string };
}

export interface PushSendInput {
  userId: string;
  tokens: Array<{
    token: string;
    platform: string;
    deviceId?: string;
  }>;
  title: string;
  body: string;
  imageUrl?: string;
  deepLink?: string;
  payload?: Record<string, unknown>;
}

@Injectable()
export class PushProvider {
  private readonly logger = new Logger(PushProvider.name);

  async send(input: PushSendInput) {
    const results: Array<{ token: string; platform: string; success: boolean; messageId?: string; error?: string }> = [];
    for (const t of input.tokens) {
      const ok = Math.random() > 0.02;
      this.logger.debug(
        `[MOCK PUSH ${t.platform}] userId=${input.userId} token=${t.token.slice(0, 16)}... title="${input.title}" => ${ok ? 'OK' : 'FAIL'}`,
      );
      results.push({
        token: t.token,
        platform: t.platform,
        success: ok,
        messageId: ok ? `mock-${t.platform}-${crypto.randomUUID()}` : undefined,
        error: ok ? undefined : 'MOCK_RANDOM_FAILURE',
      });
    }
    const successCount = results.filter((r) => r.success).length;
    return {
      sent: successCount,
      failed: results.length - successCount,
      results,
    };
  }
}
