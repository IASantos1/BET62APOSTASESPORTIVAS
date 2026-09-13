import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { KYCLevel } from '@bet62/shared';

export interface SumsubApplicant {
  id: string;
  externalUserId: string;
  levelName: string;
  status: string;
  createdAt: string;
}

export interface SumsubAccessToken {
  token: string;
  userId: string;
  levelName: string;
  ttlInSecs: number;
}

export interface SumsubWebhookPayload {
  applicantId: string;
  externalUserId?: string;
  inspectionId?: string;
  correlationId?: string;
  levelName: string;
  type: string;
  reviewStatus?: string;
  rejectLabels?: string[];
  reviewResult?: {
    reviewAnswer: string;
    rejectLabels?: string[];
    moderationComment?: string;
  };
  createdAt: string;
}

@Injectable()
export class SumsubClient {
  private readonly logger = new Logger(SumsubClient.name);
  private readonly baseUrl: string;
  private readonly appToken: string;
  private readonly secretKey: string;

  constructor(private readonly configService: ConfigService) {
    this.baseUrl = this.configService.get('SUMSUB_BASE_URL', 'https://api.sumsub.com');
    this.appToken = this.configService.get('SUMSUB_APP_TOKEN', 'mock-app-token');
    this.secretKey = this.configService.get('SUMSUB_SECRET_KEY', 'mock-secret-key');
  }

  async createApplicant(
    userId: string,
    targetLevel: KYCLevel,
    applicantData?: Record<string, unknown>,
  ): Promise<SumsubApplicant> {
    this.logger.debug(`[MOCK] createApplicant userId=${userId} level=${targetLevel}`);
    return {
      id: `app_${userId}_${Date.now()}`,
      externalUserId: userId,
      levelName: `L${targetLevel}`,
      status: 'init',
      createdAt: new Date().toISOString(),
      ...applicantData,
    };
  }

  async getAccessToken(
    userId: string,
    applicantId: string,
    targetLevel: KYCLevel,
  ): Promise<SumsubAccessToken> {
    this.logger.debug(`[MOCK] getAccessToken userId=${userId} applicantId=${applicantId}`);
    const token = Buffer.from(
      JSON.stringify({ userId, applicantId, level: targetLevel, iat: Date.now() }),
    ).toString('base64');
    return {
      token,
      userId,
      levelName: `L${targetLevel}`,
      ttlInSecs: 900,
    };
  }

  parseWebhook(payload: Buffer, headers: Record<string, string>): SumsubWebhookPayload {
    const signature = headers['x-sumsub-signature'] ?? '';
    const payloadStr = payload.toString('utf-8');
    this.logger.debug(`[MOCK] parseWebhook signature=${signature} payloadLen=${payloadStr.length}`);
    return JSON.parse(payloadStr);
  }

  validateWebhookHMAC(payload: Buffer, signature: string): boolean {
    if (!this.secretKey || this.secretKey.startsWith('mock-')) {
      this.logger.debug('[MOCK] validateWebhookHMAC skipped (mock secret)');
      return true;
    }
    return signature.length > 0;
  }
}
