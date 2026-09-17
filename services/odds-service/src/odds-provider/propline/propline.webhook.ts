import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createHmac, timingSafeEqual } from 'crypto';
import type {
  ProplineSettlementResponse,
  ProplineWsData,
  ProplineWsEvent,
  ProplineWsMessage,
  ProplineOddsResponse,
  ProplineScoreResponse,
  ProplineStatsResponse,
  ProplineEvent,
} from './propline.types';

export type ProplineWebhookEventType =
  | 'odds.update'
  | 'score.update'
  | 'event.status'
  | 'market.status'
  | 'stats.update'
  | 'settlement'
  | 'ping'
  | 'unknown';

export interface ProplineWebhookHeaders {
  'x-propline-signature'?: string;
  'x-propline-timestamp'?: string;
  'x-propline-event'?: string;
  'x-propline-delivery-id'?: string;
  authorization?: string;
  [key: string]: string | string[] | undefined;
}

export interface ProplineWebhookRaw {
  event_type?: ProplineWebhookEventType | string;
  delivery_id?: string;
  timestamp?: string;
  event_id?: string;
  sport_key?: string;
  payload?: unknown;
  data?: unknown;
  [key: string]: unknown;
}

export interface ParsedProplineWebhook {
  valid: boolean;
  signatureValid?: boolean;
  deliveryId: string | null;
  eventType: ProplineWebhookEventType;
  timestamp: Date;
  sportKey?: string | null;
  eventId?: string | null;
  raw: ProplineWebhookRaw;
  payload?: unknown;
  wsMessage?: ProplineWsMessage;
  odds?: ProplineOddsResponse | null;
  score?: ProplineScoreResponse | null;
  stats?: ProplineStatsResponse | null;
  settlement?: ProplineSettlementResponse | null;
  event?: ProplineEvent | null;
  parseError?: string | null;
}

@Injectable()
export class ProplineWebhookService {
  private readonly logger = new Logger(ProplineWebhookService.name);
  private readonly webhookSecret: string;
  private readonly signatureToleranceSec: number;
  private readonly requireSignature: boolean;

  constructor(private readonly configService: ConfigService) {
    this.webhookSecret =
      this.configService.get<string>('PROPLINE_WEBHOOK_SECRET')
      ?? process.env.PROPLINE_WEBHOOK_SECRET
      ?? '';
    this.signatureToleranceSec = Number(
      this.configService.get<string>('PROPLINE_WEBHOOK_TOLERANCE_SEC')
      ?? process.env.PROPLINE_WEBHOOK_TOLERANCE_SEC
      ?? '300',
    ) || 300;
    const rawReq =
      this.configService.get<string>('PROPLINE_WEBHOOK_REQUIRE_SIGNATURE')
      ?? process.env.PROPLINE_WEBHOOK_REQUIRE_SIGNATURE
      ?? 'true';
    this.requireSignature = rawReq !== 'false' && rawReq !== '0' && rawReq !== 'off';
  }

  private constantTimeEquals(a: string, b: string): boolean {
    try {
      const aBuf = Buffer.from(a || '', 'utf8');
      const bBuf = Buffer.from(b || '', 'utf8');
      if (aBuf.length !== bBuf.length) {
        const padLen = Math.max(aBuf.length, bBuf.length);
        const aPadded = Buffer.alloc(padLen, 0);
        const bPadded = Buffer.alloc(padLen, 0);
        aBuf.copy(aPadded);
        bBuf.copy(bPadded);
        return timingSafeEqual(aPadded, bPadded) && aBuf.length === bBuf.length;
      }
      return timingSafeEqual(aBuf, bBuf);
    } catch {
      return false;
    }
  }

  private computeSignature(rawBody: string, timestamp: string, secret: string): string {
    try {
      const payload = `${timestamp}.${rawBody}`;
      return createHmac('sha256', secret).update(payload).digest('hex');
    } catch {
      return '';
    }
  }

  validateSignature(
    rawBody: string,
    headers: ProplineWebhookHeaders,
  ): { valid: boolean; reason?: string; timestampSec?: number } {
    try {
      if (!this.requireSignature) {
        return { valid: true, reason: 'signature_check_disabled' };
      }
      if (!this.webhookSecret) {
        return { valid: false, reason: 'webhook_secret_not_configured' };
      }
      if (!rawBody || rawBody.length === 0) {
        return { valid: false, reason: 'empty_body' };
      }
      const headerSig = headers['x-propline-signature'];
      const headerTs = headers['x-propline-timestamp'];
      if (!headerSig || !headerTs) {
        return { valid: false, reason: 'missing_signature_headers' };
      }
      const tsNum = Number(headerTs);
      if (!Number.isFinite(tsNum)) {
        return { valid: false, reason: 'invalid_timestamp' };
      }
      const nowSec = Math.floor(Date.now() / 1000);
      const diff = Math.abs(nowSec - tsNum);
      if (diff > this.signatureToleranceSec) {
        return { valid: false, reason: `timestamp_outside_tolerance_${diff}s` };
      }
      const expected = this.computeSignature(rawBody, headerTs, this.webhookSecret);
      const provided = String(headerSig).startsWith('sha256=')
        ? String(headerSig).slice('sha256='.length)
        : String(headerSig);
      const ok = this.constantTimeEquals(expected, provided);
      if (!ok) {
        return { valid: false, reason: 'signature_mismatch', timestampSec: tsNum };
      }
      return { valid: true, timestampSec: tsNum };
    } catch (err) {
      return {
        valid: false,
        reason: `exception: ${err instanceof Error ? err.message : String(err)}`,
      };
    }
  }

  private normalizeEventType(raw: unknown): ProplineWebhookEventType {
    try {
      const s = String(raw || '').trim().toLowerCase();
      if (!s) return 'unknown';
      if (s === 'ping' || s === 'test' || s === 'health') return 'ping';
      if (s.includes('odds') || s.includes('odd') || s.includes('market')) {
        if (s.includes('status')) return 'market.status';
        return 'odds.update';
      }
      if (s.includes('score') || s.includes('result')) return 'score.update';
      if (s.includes('settle') || s.includes('settlement') || s.includes('final')) return 'settlement';
      if (s.includes('event') && (s.includes('status') || s.includes('state'))) return 'event.status';
      if (s.includes('stat') || s.includes('statistic')) return 'stats.update';
      if (s === 'odds.update' || s === 'score.update' || s === 'event.status'
          || s === 'market.status' || s === 'stats.update' || s === 'settlement') {
        return s as ProplineWebhookEventType;
      }
      return 'unknown';
    } catch {
      return 'unknown';
    }
  }

  private toWsDataIfPossible(
    eventType: ProplineWebhookEventType,
    raw: ProplineWebhookRaw,
    eventId: string,
    updatedAt: string,
  ): ProplineWsMessage | undefined {
    try {
      const inner = (raw.payload ?? raw.data) as Record<string, unknown> | undefined;
      if (!inner) return undefined;
      let wsEvent: ProplineWsEvent | null = null;
      let data: ProplineWsData | null = null;
      switch (eventType) {
        case 'odds.update':
          wsEvent = 'odds_change';
          data = {
            event: 'odds_change',
            event_id: eventId,
            market_code: String(inner['market_code'] ?? ''),
            book_code: (inner['book_code'] as string) ?? null,
            period: (inner['period'] as string) ?? null,
            line: typeof inner['line'] === 'number' ? inner['line'] : null,
            handicap: typeof inner['handicap'] === 'number' ? inner['handicap'] : null,
            old_price: typeof inner['old_price'] === 'number' ? inner['old_price'] : undefined,
            new_price: typeof inner['new_price'] === 'number' ? inner['new_price'] : undefined,
            updated_at: updatedAt,
          } as ProplineWsData;
          break;
        case 'market.status':
          wsEvent = 'market_status';
          data = {
            event: 'market_status',
            event_id: eventId,
            market_code: String(inner['market_code'] ?? ''),
            status:
              (inner['status'] as 'active' | 'suspended' | 'closed' | 'settled') ?? 'suspended',
            reason: (inner['reason'] as string) ?? null,
            updated_at: updatedAt,
          } as ProplineWsData;
          break;
        case 'score.update':
          wsEvent = 'score_change';
          data = {
            event: 'score_change',
            event_id: eventId,
            sport_key: String(raw.sport_key ?? ''),
            scores: (inner['scores'] as ProplineWsMessage['data'] extends infer U ? U extends { scores?: infer S } ? S : never : never) ?? {},
            status:
              (inner['status'] as ProplineWsMessage['data'] extends infer U ? U extends { status?: infer S } ? S : never : never) ?? 'in_progress',
            minute: typeof inner['minute'] === 'number' ? inner['minute'] : null,
            period: (inner['period'] as string) ?? null,
            updated_at: updatedAt,
          } as ProplineWsData;
          break;
        case 'event.status':
          wsEvent = 'event_status';
          data = {
            event: 'event_status',
            event_id: eventId,
            sport_key: String(raw.sport_key ?? ''),
            old_status:
              (inner['old_status'] as ProplineWsMessage['data'] extends infer U ? U extends { old_status?: infer S } ? S : never : never) ?? null,
            new_status:
              (inner['new_status'] as ProplineWsMessage['data'] extends infer U ? U extends { new_status?: infer S } ? S : never : never) ?? 'scheduled',
            minute: typeof inner['minute'] === 'number' ? inner['minute'] : null,
            period: (inner['period'] as string) ?? null,
            start_date: (inner['start_date'] as string) ?? null,
            reason: (inner['reason'] as string) ?? null,
            updated_at: updatedAt,
          } as ProplineWsData;
          break;
        default:
          return undefined;
      }
      if (!wsEvent || !data) return undefined;
      const msg: ProplineWsMessage = {
        seq: typeof raw['seq'] === 'number' && Number.isFinite(raw['seq']) ? raw['seq'] : 0,
        event: wsEvent,
        data,
        received_at: new Date().toISOString(),
      };
      return msg;
    } catch {
      return undefined;
    }
  }

  parseEvent(
    rawBody: string,
    headers: ProplineWebhookHeaders,
  ): ParsedProplineWebhook {
    try {
      const sigResult = this.validateSignature(rawBody, headers);
      const timestamp = new Date();
      const deliveryId = String(headers['x-propline-delivery-id'] ?? '').trim() || null;
      let parsedRaw: ProplineWebhookRaw;
      try {
        parsedRaw = JSON.parse(rawBody) as ProplineWebhookRaw;
      } catch (parseErr) {
        return {
          valid: false,
          signatureValid: sigResult.valid,
          deliveryId,
          eventType: 'unknown',
          timestamp,
          raw: {},
          parseError: `json_parse_error: ${parseErr instanceof Error ? parseErr.message : String(parseErr)}`,
        };
      }
      const eventType = this.normalizeEventType(
        parsedRaw.event_type ?? headers['x-propline-event'],
      );
      const sportKey = String(parsedRaw.sport_key ?? '').trim() || null;
      const eventId =
        String(parsedRaw.event_id ?? '').trim()
        || String((parsedRaw.payload as Record<string, unknown> | undefined)?.['event_id'] ?? '').trim()
        || String((parsedRaw.data as Record<string, unknown> | undefined)?.['event_id'] ?? '').trim()
        || null;
      const tsIso =
        String(parsedRaw.timestamp ?? '').trim()
        || new Date().toISOString();
      const updatedAt = tsIso;
      const wsMessage = eventId
        ? this.toWsDataIfPossible(eventType, parsedRaw, eventId, updatedAt)
        : undefined;

      const result: ParsedProplineWebhook = {
        valid: sigResult.valid || !this.requireSignature,
        signatureValid: sigResult.valid,
        deliveryId,
        eventType,
        timestamp,
        sportKey,
        eventId,
        raw: parsedRaw,
        payload: parsedRaw.payload ?? parsedRaw.data,
      };
      if (wsMessage) result.wsMessage = wsMessage;
      try {
        const inner = (parsedRaw.payload ?? parsedRaw.data) as Record<string, unknown> | undefined;
        switch (eventType) {
          case 'odds.update':
            result.odds = (inner as unknown as ProplineOddsResponse) ?? null;
            break;
          case 'score.update':
            result.score = (inner as unknown as ProplineScoreResponse) ?? null;
            break;
          case 'stats.update':
            result.stats = (inner as unknown as ProplineStatsResponse) ?? null;
            break;
          case 'settlement':
            result.settlement = (inner as unknown as ProplineSettlementResponse) ?? null;
            break;
          case 'event.status':
          case 'score.update':
            if (inner && 'event_id' in inner) {
              result.event = inner as unknown as ProplineEvent;
            }
            break;
          default:
            break;
        }
      } catch {
      }
      return result;
    } catch (err) {
      return {
        valid: false,
        deliveryId: null,
        eventType: 'unknown',
        timestamp: new Date(),
        raw: {},
        parseError: `top_level_exception: ${err instanceof Error ? err.message : String(err)}`,
      };
    }
  }

  async processEvent(
    parsed: ParsedProplineWebhook,
    handlers?: {
      onOddsUpdate?: (odds: ProplineOddsResponse, ev: ParsedProplineWebhook) => Promise<void> | void;
      onScoreUpdate?: (score: ProplineScoreResponse, ev: ParsedProplineWebhook) => Promise<void> | void;
      onStatsUpdate?: (stats: ProplineStatsResponse, ev: ParsedProplineWebhook) => Promise<void> | void;
      onEventStatus?: (ev: ParsedProplineWebhook) => Promise<void> | void;
      onMarketStatus?: (ev: ParsedProplineWebhook) => Promise<void> | void;
      onSettlement?: (s: ProplineSettlementResponse, ev: ParsedProplineWebhook) => Promise<void> | void;
      onWsMessage?: (msg: ProplineWsMessage, ev: ParsedProplineWebhook) => Promise<void> | void;
    },
  ): Promise<{ handled: boolean; eventType: ProplineWebhookEventType; error?: string }> {
    try {
      if (!parsed.valid) {
        this.logger.warn(`PropLine webhook inválido: deliveryId=${parsed.deliveryId}, error=${parsed.parseError ?? 'signature_invalid'}`);
        return { handled: false, eventType: parsed.eventType, error: parsed.parseError ?? 'invalid_webhook' };
      }
      const hs = handlers ?? {};
      let handled = false;
      try {
        if (parsed.wsMessage && hs.onWsMessage) {
          try {
            await Promise.resolve(hs.onWsMessage(parsed.wsMessage, parsed));
            handled = true;
          } catch (innerErr) {
            this.logger.verbose(`PropLine webhook onWsMessage erro: ${innerErr instanceof Error ? innerErr.message : String(innerErr)}`);
          }
        }
        switch (parsed.eventType) {
          case 'odds.update':
            if (parsed.odds && hs.onOddsUpdate) {
              try {
                await Promise.resolve(hs.onOddsUpdate(parsed.odds, parsed));
                handled = true;
              } catch (innerErr) {
                this.logger.verbose(`PropLine webhook onOddsUpdate erro: ${innerErr instanceof Error ? innerErr.message : String(innerErr)}`);
              }
            }
            break;
          case 'score.update':
            if (parsed.score && hs.onScoreUpdate) {
              try {
                await Promise.resolve(hs.onScoreUpdate(parsed.score, parsed));
                handled = true;
              } catch (innerErr) {
                this.logger.verbose(`PropLine webhook onScoreUpdate erro: ${innerErr instanceof Error ? innerErr.message : String(innerErr)}`);
              }
            }
            break;
          case 'stats.update':
            if (parsed.stats && hs.onStatsUpdate) {
              try {
                await Promise.resolve(hs.onStatsUpdate(parsed.stats, parsed));
                handled = true;
              } catch (innerErr) {
                this.logger.verbose(`PropLine webhook onStatsUpdate erro: ${innerErr instanceof Error ? innerErr.message : String(innerErr)}`);
              }
            }
            break;
          case 'event.status':
            if (hs.onEventStatus) {
              try {
                await Promise.resolve(hs.onEventStatus(parsed));
                handled = true;
              } catch (innerErr) {
                this.logger.verbose(`PropLine webhook onEventStatus erro: ${innerErr instanceof Error ? innerErr.message : String(innerErr)}`);
              }
            }
            break;
          case 'market.status':
            if (hs.onMarketStatus) {
              try {
                await Promise.resolve(hs.onMarketStatus(parsed));
                handled = true;
              } catch (innerErr) {
                this.logger.verbose(`PropLine webhook onMarketStatus erro: ${innerErr instanceof Error ? innerErr.message : String(innerErr)}`);
              }
            }
            break;
          case 'settlement':
            if (parsed.settlement && hs.onSettlement) {
              try {
                await Promise.resolve(hs.onSettlement(parsed.settlement, parsed));
                handled = true;
              } catch (innerErr) {
                this.logger.verbose(`PropLine webhook onSettlement erro: ${innerErr instanceof Error ? innerErr.message : String(innerErr)}`);
              }
            }
            break;
          case 'ping':
            handled = true;
            this.logger.verbose(`PropLine webhook ping recebido: deliveryId=${parsed.deliveryId}`);
            break;
          case 'unknown':
          default:
            this.logger.verbose(`PropLine webhook tipo desconhecido: ${parsed.eventType}, deliveryId=${parsed.deliveryId}`);
            break;
        }
      } catch (err) {
        return {
          handled,
          eventType: parsed.eventType,
          error: `handler_exception: ${err instanceof Error ? err.message : String(err)}`,
        };
      }
      return { handled, eventType: parsed.eventType };
    } catch (err) {
      return {
        handled: false,
        eventType: 'unknown',
        error: `top_level_exception: ${err instanceof Error ? err.message : String(err)}`,
      };
    }
  }

  isConfigured(): boolean {
    return Boolean(this.webhookSecret && this.webhookSecret.length > 0);
  }
}
