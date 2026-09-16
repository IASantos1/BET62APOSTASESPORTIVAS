import { Injectable, Logger } from '@nestjs/common';
import { createHmac, timingSafeEqual } from 'crypto';
import type { GoalApiWebhookEvent, GoalApiFixtureStatus } from './goalapi.types';

type WebhookHeaders = Record<string, string | string[] | undefined>;

function normalizeRawBody(body: unknown): Buffer {
  if (body instanceof Buffer) return body;
  if (typeof body === 'string') return Buffer.from(body, 'utf8');
  if (body === null || body === undefined) return Buffer.from('', 'utf8');
  return Buffer.from(JSON.stringify(body), 'utf8');
}

function firstHeaderValue(
  headers: WebhookHeaders,
  names: string[],
): string | null {
  for (const n of names) {
    const lower = n.toLowerCase();
    for (const k of Object.keys(headers)) {
      if (k.toLowerCase() === lower) {
        const v = headers[k];
        if (Array.isArray(v)) return v[0] ?? null;
        return v ?? null;
      }
    }
  }
  return null;
}

@Injectable()
export class GoalApiWebhookService {
  private readonly logger = new Logger(GoalApiWebhookService.name);

  validateSignature(
    reqHeaders: WebhookHeaders,
    rawBody: unknown,
    secret: string,
  ): boolean {
    try {
      if (!secret) {
        this.logger.verbose('validateSignature: secret vazio, retornar false.');
        return false;
      }
      const signature = firstHeaderValue(reqHeaders, [
        'X-Goal-Signature',
        'X-GoalApi-Signature',
        'X-Signature',
        'signature',
      ]);
      const timestamp = firstHeaderValue(reqHeaders, [
        'X-Goal-Timestamp',
        'X-Timestamp',
        'timestamp',
      ]);
      if (!signature) {
        this.logger.verbose('validateSignature: header signature ausente.');
        return false;
      }
      const bodyBuf = normalizeRawBody(rawBody);
      const algo = signature.startsWith('sha256=')
        ? 'sha256'
        : signature.startsWith('sha1=')
          ? 'sha1'
          : 'sha256';
      const signedPortion = timestamp
        ? `${timestamp}.${bodyBuf.toString('utf8')}`
        : bodyBuf.toString('utf8');
      const expectedHmac = createHmac(algo, secret)
        .update(signedPortion)
        .digest('hex');
      const receivedSig = signature.replace(/^(sha256=|sha1=)/, '');
      if (
        receivedSig.length !== expectedHmac.length ||
        receivedSig.length === 0
      ) {
        return false;
      }
      const receivedBuf = Buffer.from(receivedSig, 'hex');
      const expectedBuf = Buffer.from(expectedHmac, 'hex');
      if (receivedBuf.length !== expectedBuf.length) return false;
      return timingSafeEqual(receivedBuf, expectedBuf);
    } catch (err) {
      this.logger.verbose(
        `validateSignature excepcao: ${err instanceof Error ? err.message : String(err)}`,
      );
      return false;
    }
  }

  parseEvent<T = unknown>(rawBody: unknown): GoalApiWebhookEvent<T> {
    try {
      if (rawBody === null || rawBody === undefined) {
        return { type: '', payload: undefined as T };
      }
      if (typeof rawBody === 'string') {
        try {
          return JSON.parse(rawBody) as GoalApiWebhookEvent<T>;
        } catch {
          return {
            type: 'raw',
            payload: rawBody as unknown as T,
          };
        }
      }
      if (rawBody instanceof Buffer) {
        try {
          return JSON.parse(rawBody.toString('utf8')) as GoalApiWebhookEvent<T>;
        } catch {
          return {
            type: 'raw',
            payload: rawBody.toString('utf8') as unknown as T,
          };
        }
      }
      const obj = rawBody as Record<string, unknown>;
      return {
        id: (obj.id as string) ?? undefined,
        type: (obj.type as string) ?? '',
        timestamp: (obj.timestamp as string | number) ?? undefined,
        fixture_id: (obj.fixture_id as number | string) ?? undefined,
        payload: (obj.payload as T) ?? (rawBody as T),
        signature: (obj.signature as string) ?? undefined,
      };
    } catch (err) {
      this.logger.verbose(
        `parseEvent excepcao, retornar vazio: ${err instanceof Error ? err.message : String(err)}`,
      );
      return { type: '', payload: undefined as T };
    }
  }

  private resolveMatchIdFromEvent(
    evt: GoalApiWebhookEvent<unknown>,
  ): string | undefined {
    const f = evt.fixture_id;
    if (f !== undefined && f !== null && String(f).length > 0) {
      return `goal:${String(f)}`;
    }
    const p = evt.payload;
    if (p && typeof p === 'object') {
      const obj = p as Record<string, unknown>;
      const candidates = [
        obj.fixture_id,
        obj.fixtureId,
        obj.match_id,
        obj.matchId,
        obj.event_id,
        obj.eventId,
      ];
      for (const c of candidates) {
        if (c !== undefined && c !== null && String(c).length > 0) {
          return `goal:${String(c)}`;
        }
      }
    }
    return undefined;
  }

  private isPayloadStatusFinal(statusStr: string): boolean {
    const s = String(statusStr).toUpperCase();
    return s === 'FT' || s === 'AET' || s === 'PEN' || s === 'CANC';
  }

  async processEvent(
    evt: GoalApiWebhookEvent<unknown>,
  ): Promise<{ ok: boolean; matchId?: string }> {
    const result: { ok: boolean; matchId?: string } = {
      ok: true,
      matchId: this.resolveMatchIdFromEvent(evt),
    };
    try {
      if (!evt.type) {
        result.ok = false;
        return result;
      }
      const t = String(evt.type).toLowerCase();
      this.logger.log(
        `processEvent: type=${evt.type} fixture=${evt.fixture_id ?? 'n/a'} matchId=${result.matchId ?? 'n/a'}`,
      );
      if (
        t === 'fixture.status' ||
        t === 'fixture.score' ||
        t === 'fixture.events' ||
        t === 'fixture.statistics'
      ) {
        if (evt.payload && typeof evt.payload === 'object') {
          const obj = evt.payload as Record<string, unknown>;
          if (t === 'fixture.status') {
            const status = String(
              obj.status ?? obj.status_short ?? '',
            ).toUpperCase();
            if (this.isPayloadStatusFinal(status)) {
              this.logger.log(
                `processEvent: fixture ${evt.fixture_id} status final ${status}. Settlement sera executado pelo odds-service.`,
              );
            }
          }
        }
      } else {
        this.logger.verbose(
          `processEvent: tipo webhook desconhecido ${evt.type} (aceite, ok=true).`,
        );
      }
      return result;
    } catch (err) {
      this.logger.warn(
        `processEvent excepcao (retornar ok=false): ${err instanceof Error ? err.message : String(err)}`,
      );
      result.ok = false;
      return result;
    }
  }
}
