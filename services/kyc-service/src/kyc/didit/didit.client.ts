import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createHmac, timingSafeEqual } from 'crypto';
import { KYCLevel, requireEnv } from '@bet62/shared';

export interface DiditSession {
  sessionId: string;
  url: string;
  sessionToken: string;
}

export interface DiditWebhookPayload {
  event_id?: string;
  id?: string;
  event?: string;
  session_id: string;
  vendor_data?: string;
  status?: string;
  created_at?: string;
  [key: string]: unknown;
}

export interface DiditDecision {
  session_id: string;
  status: string;
  vendor_data?: string;
  id_verifications?: Array<Record<string, unknown>>;
  liveness_checks?: Array<Record<string, unknown>>;
  face_matches?: Array<Record<string, unknown>>;
  aml_screenings?: Array<Record<string, unknown>>;
  [key: string]: unknown;
}

export interface DiditAmlScreeningInput {
  fullName: string;
  entityType?: 'person' | 'company';
  dateOfBirth?: string;
  nationality?: string;
  documentNumber?: string;
  includeAdverseMedia?: boolean;
  includeOngoingMonitoring?: boolean;
}

export interface DiditAmlResult {
  request_id: string;
  aml: {
    status: string;
    total_hits: number;
    score?: number;
    hits?: Array<Record<string, unknown>>;
    entity_type?: string;
  };
}

export class DiditApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message);
    this.name = 'DiditApiError';
  }
}

const DEFAULT_TIMEOUT_MS = 15_000;

@Injectable()
export class DiditClient {
  private readonly logger = new Logger(DiditClient.name);
  private readonly baseUrl: string;
  private readonly apiKey: string;
  private readonly webhookSecret?: string;
  private readonly workflowIdsByLevel: Partial<Record<KYCLevel, string>>;
  private readonly defaultWorkflowId?: string;

  constructor(private readonly configService: ConfigService) {
    this.baseUrl = this.configService
      .get<string>('DIDIT_BASE_URL', 'https://verification.didit.me')
      .replace(/\/$/, '');
    this.apiKey = requireEnv(this.configService.get<string>('DIDIT_API_KEY'), 'DIDIT_API_KEY');
    this.webhookSecret = this.configService.get<string>('DIDIT_WEBHOOK_SECRET');
    this.defaultWorkflowId = this.configService.get<string>('DIDIT_WORKFLOW_ID');
    this.workflowIdsByLevel = {
      [KYCLevel.L1]: this.configService.get<string>('DIDIT_WORKFLOW_ID_L1'),
      [KYCLevel.L2]: this.configService.get<string>('DIDIT_WORKFLOW_ID_L2'),
    };
  }

  private resolveWorkflowId(targetLevel: KYCLevel): string {
    const workflowId = this.workflowIdsByLevel[targetLevel] ?? this.defaultWorkflowId;
    return requireEnv(
      workflowId,
      `DIDIT_WORKFLOW_ID_L${targetLevel} or DIDIT_WORKFLOW_ID`,
    );
  }

  private async request<T>(method: 'GET' | 'POST', path: string, body?: unknown): Promise<T> {
    const url = `${this.baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT_MS);

    try {
      const res = await fetch(url, {
        method,
        headers: {
          'x-api-key': this.apiKey,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
        signal: controller.signal,
      });

      const text = await res.text();
      const data = text ? (JSON.parse(text) as T) : (undefined as T);

      if (!res.ok) {
        const detail = (data as unknown as { detail?: string })?.detail ?? res.statusText;
        throw new DiditApiError(`Didit ${method} ${path} failed: ${res.status} ${detail}`, res.status);
      }

      return data;
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        throw new Error(`Didit request timeout after ${DEFAULT_TIMEOUT_MS}ms: ${method} ${path}`);
      }
      throw err;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  async createSession(
    userId: string,
    targetLevel: KYCLevel,
    callbackUrl?: string,
  ): Promise<DiditSession> {
    const workflowId = this.resolveWorkflowId(targetLevel);
    const response = await this.request<{
      session_id: string;
      url: string;
      session_token: string;
    }>('POST', '/v3/session/', {
      workflow_id: workflowId,
      vendor_data: userId,
      ...(callbackUrl ? { callback: callbackUrl } : {}),
    });
    return {
      sessionId: response.session_id,
      url: response.url,
      sessionToken: response.session_token,
    };
  }

  async getDecision(sessionId: string): Promise<DiditDecision> {
    return this.request<DiditDecision>('GET', `/v3/session/${sessionId}/decision/`);
  }

  async screenAml(input: DiditAmlScreeningInput): Promise<DiditAmlResult> {
    return this.request<DiditAmlResult>('POST', '/v3/aml/', {
      full_name: input.fullName,
      entity_type: input.entityType ?? 'person',
      ...(input.dateOfBirth ? { date_of_birth: input.dateOfBirth } : {}),
      ...(input.nationality ? { nationality: input.nationality } : {}),
      ...(input.documentNumber ? { document_number: input.documentNumber } : {}),
      ...(input.includeAdverseMedia !== undefined
        ? { include_adverse_media: input.includeAdverseMedia }
        : {}),
      ...(input.includeOngoingMonitoring !== undefined
        ? { include_ongoing_monitoring: input.includeOngoingMonitoring }
        : {}),
    });
  }

  validateWebhookHMAC(payload: Buffer, signature: string): boolean {
    if (!signature) {
      return false;
    }

    if (!this.webhookSecret) {
      this.logger.error('DIDIT_WEBHOOK_SECRET is not configured; refusing to accept webhook');
      return false;
    }

    const expectedDigest = createHmac('sha256', this.webhookSecret).update(payload).digest('hex');
    const expectedBuffer = Buffer.from(expectedDigest, 'utf-8');
    const signatureBuffer = Buffer.from(signature, 'utf-8');

    if (expectedBuffer.length !== signatureBuffer.length) {
      return false;
    }

    return timingSafeEqual(expectedBuffer, signatureBuffer);
  }
}
