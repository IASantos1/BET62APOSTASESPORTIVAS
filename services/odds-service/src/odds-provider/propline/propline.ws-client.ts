import { Injectable, Logger, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SPORTS_PROVIDER_CONFIG } from '@bet62/shared';
import type { WebSocket } from 'ws';
import type {
  ProplineWsData,
  ProplineWsEvent,
  ProplineWsMessage,
  ProplineWsAckMessage,
  ProplineWsHelloMessage,
  ProplineWsSubscribeMessage,
} from './propline.types';

const RECONNECT_BASE_DELAY_SEC = 1;
const RECONNECT_MAX_DELAY_SEC = 32;
const JITTER_FRACTION = 0.1;
const HEARTBEAT_IDLE_MS = 45_000;
const HEARTBEAT_INTERVAL_MS = 15_000;

export type ProplineWsLifecycleEvent = 'open' | 'close' | 'error';

export type ProplineWsAnyCallback =
  | ((msg: ProplineWsMessage) => void | Promise<void>)
  | ((ev?: { code?: number; reason?: string; message?: string }) => void | Promise<void>);

@Injectable()
export class ProplineWsClient implements OnModuleDestroy {
  private readonly logger = new Logger(ProplineWsClient.name);
  private readonly wsUrl: string;
  private readonly apiKey: string;
  private readonly useQueryParam: boolean;

  private ws: WebSocket | null = null;
  private reconnectAttempts = 0;
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  private heartbeatTimer: ReturnType<typeof setInterval> | null = null;
  private lastReceivedAt = 0;
  private lastSeqMax: number = 0;
  private maxSeqFromServer: number = 0;
  private manuallyClosed = false;
  private permanentlyDisabled = false;

  private readonly eventListeners = new Map<ProplineWsEvent, Set<(msg: ProplineWsMessage) => void | Promise<void>>>();
  private readonly lifecycleListeners = new Map<ProplineWsLifecycleEvent, Set<ProplineWsAnyCallback>>();
  private readonly allMessageListeners = new Set<(msg: ProplineWsMessage) => void | Promise<void>>();

  constructor(private readonly configService: ConfigService) {
    const endpoint = SPORTS_PROVIDER_CONFIG.endpoints.propline;
    const envApiKey = this.configService.get<string>(endpoint.apiKeyEnvName)
      ?? process.env.PROPLINE_API_KEY
      ?? process.env[endpoint.apiKeyEnvName]
      ?? '';
    this.wsUrl = (
      this.configService.get<string>('PROPLINE_WS_URL')
      ?? process.env.PROPLINE_WS_URL
      ?? endpoint.wsUrl
    );
    this.apiKey = envApiKey;
    const rawQp = this.configService.get<string>('PROPLINE_WS_USE_QUERY_PARAM')
      ?? process.env.PROPLINE_WS_USE_QUERY_PARAM
      ?? 'true';
    this.useQueryParam = rawQp === 'true' || rawQp === '1' || rawQp === 'on';
  }

  private buildWsUrl(withSeq?: number): string {
    try {
      const u = new URL(this.wsUrl);
      if (this.useQueryParam && this.apiKey) {
        u.searchParams.set('api_key', this.apiKey);
      }
      if (withSeq !== undefined && withSeq !== null && Number.isFinite(withSeq)) {
        u.searchParams.set('seq', String(withSeq));
      }
      return u.toString();
    } catch {
      let url = this.wsUrl;
      const sep = url.includes('?') ? '&' : '?';
      const parts: string[] = [];
      if (this.useQueryParam && this.apiKey) {
        parts.push(`api_key=${encodeURIComponent(this.apiKey)}`);
      }
      if (withSeq !== undefined && withSeq !== null && Number.isFinite(withSeq)) {
        parts.push(`seq=${encodeURIComponent(String(withSeq))}`);
      }
      if (parts.length > 0) url = `${url}${sep}${parts.join('&')}`;
      return url;
    }
  }

  private buildWsHeaders(): Record<string, string> | undefined {
    if (this.useQueryParam) return undefined;
    if (!this.apiKey) return undefined;
    return {
      'X-API-Key': this.apiKey,
      'User-Agent': 'BET62-OddsService/1.0 (+https://bet62.pt)',
    };
  }

  private createWebSocket(url: string): WebSocket {
    const { default: WebSocketCtor } = require('ws') as { default: new (url: string, opts?: { headers?: Record<string, string> }) => WebSocket };
    const headers = this.buildWsHeaders();
    if (headers) {
      return new WebSocketCtor(url, { headers });
    }
    return new WebSocketCtor(url);
  }

  private jitterDelay(delaySec: number): number {
    const base = Math.min(RECONNECT_MAX_DELAY_SEC, delaySec);
    const jitterRange = base * JITTER_FRACTION;
    return base + (Math.random() * 2 - 1) * jitterRange;
  }

  private getReconnectDelaySec(): number {
    const attempt = Math.max(1, this.reconnectAttempts);
    const base = RECONNECT_BASE_DELAY_SEC * Math.pow(2, attempt - 1);
    const jittered = this.jitterDelay(base);
    return Math.max(RECONNECT_BASE_DELAY_SEC, Math.min(RECONNECT_MAX_DELAY_SEC, jittered));
  }

  private clearHeartbeat(): void {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
  }

  private startHeartbeat(): void {
    this.clearHeartbeat();
    this.heartbeatTimer = setInterval(() => {
      try {
        if (!this.isOpen()) {
          this.clearHeartbeat();
          return;
        }
        const now = Date.now();
        if (now - this.lastReceivedAt > HEARTBEAT_IDLE_MS) {
          this.logger.verbose(`PropLine WS idle timeout ${HEARTBEAT_IDLE_MS}ms. Forçar reconnect.`);
          try { this.ws?.close(4000, 'idle-timeout'); } catch { /**/ }
          this.ws = null;
          this.scheduleReconnect();
        } else {
          try {
            if (typeof (this.ws as unknown as { ping?: () => void }).ping === 'function') {
              (this.ws as unknown as { ping: () => void }).ping();
            } else {
              this.ws?.send(JSON.stringify({ action: 'ping' }));
            }
          } catch { /**/ }
        }
      } catch {
      }
    }, HEARTBEAT_INTERVAL_MS);
  }

  private clearReconnectTimer(): void {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
  }

  private scheduleReconnect(): void {
    if (this.manuallyClosed || this.permanentlyDisabled) return;
    this.clearReconnectTimer();
    this.reconnectAttempts += 1;
    const delaySec = this.getReconnectDelaySec();
    this.logger.debug(`PropLine WS reconnect #${this.reconnectAttempts} em ${delaySec.toFixed(2)}s (lastSeqMax=${this.lastSeqMax})`);
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null;
      this.connectInternal();
    }, Math.max(100, Math.round(delaySec * 1000)));
  }

  private sendSubscribeIfOpen(): void {
    if (!this.isOpen()) return;
    try {
      const msg: ProplineWsSubscribeMessage = {
        action: 'subscribe',
      };
      const replaySeq = this.lastSeqMax > 0 ? this.lastSeqMax + 1 : undefined;
      if (replaySeq !== undefined) {
        msg.seq = replaySeq;
      }
      this.ws?.send(JSON.stringify(msg));
    } catch (err) {
      this.logger.verbose(`PropLine WS send subscribe erro: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  private maskUrl(url: string): string {
    try {
      const u = new URL(url);
      const key = u.searchParams.get('api_key');
      if (key) u.searchParams.set('api_key', key.length > 6 ? `${key.slice(0, 3)}***${key.slice(-3)}` : '***');
      return u.toString();
    } catch {
      return url.replace(/api_key=[^&]+/gi, 'api_key=***');
    }
  }

  private parseIncoming(rawData: unknown): ProplineWsMessage | null {
    try {
      const text = typeof rawData === 'string' ? rawData :
        (Buffer.isBuffer(rawData) ? rawData.toString('utf8') :
          (typeof rawData === 'object' && rawData !== null ? JSON.stringify(rawData) : null));
      if (!text || text.trim() === '') return null;
      const trimmed = text.trim();
      if (trimmed === 'pong' || trimmed.startsWith('ping')) return null;
      const parsed = JSON.parse(trimmed);
      if (!parsed || typeof parsed !== 'object') return null;
      const p = parsed as Record<string, unknown>;
      if (p['type'] === 'hello' || p['type'] === 'ack') {
        if (p['type'] === 'hello') {
          const hello = parsed as ProplineWsHelloMessage;
          if (typeof hello.max_seq === 'number' && Number.isFinite(hello.max_seq)) {
            this.maxSeqFromServer = hello.max_seq;
            this.logger.verbose(`PropLine WS hello: server max_seq=${hello.max_seq}, lastSeqMax(local)=${this.lastSeqMax}`);
          }
        } else if (p['type'] === 'ack') {
          const ack = parsed as ProplineWsAckMessage;
          this.logger.verbose(`PropLine WS ack: action=${ack.action}`);
        }
        return null;
      }
      const seq = typeof p['seq'] === 'number' && Number.isFinite(p['seq']) ? p['seq'] : 0;
      const event = p['event'] as ProplineWsEvent | undefined;
      if (!event || typeof event !== 'string') return null;
      const data = p['data'] as ProplineWsData | undefined;
      if (!data || typeof data !== 'object') return null;
      const msg: ProplineWsMessage = {
        seq,
        event,
        data: data as ProplineWsData,
        received_at: new Date().toISOString(),
      };
      if (seq > this.lastSeqMax) this.lastSeqMax = seq;
      return msg;
    } catch (err) {
      this.logger.verbose(`PropLine WS parse erro: ${err instanceof Error ? err.message : String(err)}`);
      return null;
    }
  }

  private safeEmit(msg: ProplineWsMessage): void {
    try {
      const set = this.eventListeners.get(msg.event);
      if (set) {
        for (const cb of set) {
          try {
            const r = cb(msg);
            if (r && typeof (r as Promise<unknown>).catch === 'function') {
              (r as Promise<unknown>).catch((e) => this.logger.verbose(`PropLine WS cb ${msg.event} async erro: ${e instanceof Error ? e.message : String(e)}`));
            }
          } catch (err) {
            this.logger.verbose(`PropLine WS cb ${msg.event} sync erro: ${err instanceof Error ? err.message : String(err)}`);
          }
        }
      }
      for (const cb of this.allMessageListeners) {
        try {
          const r = cb(msg);
          if (r && typeof (r as Promise<unknown>).catch === 'function') {
            (r as Promise<unknown>).catch((e) => this.logger.verbose(`PropLine WS cb all async erro: ${e instanceof Error ? e.message : String(e)}`));
          }
        } catch (err) {
          this.logger.verbose(`PropLine WS cb all sync erro: ${err instanceof Error ? err.message : String(err)}`);
        }
      }
    } catch (err) {
      this.logger.verbose(`PropLine WS emit top-level erro: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  private safeLifecycle(event: ProplineWsLifecycleEvent, arg?: { code?: number; reason?: string; message?: string }): void {
    try {
      const set = this.lifecycleListeners.get(event);
      if (!set) return;
      for (const cb of set) {
        try {
          const r = (cb as (ev?: { code?: number; reason?: string; message?: string }) => void | Promise<void>)(arg);
          if (r && typeof (r as Promise<unknown>).catch === 'function') {
            (r as Promise<unknown>).catch((e) => this.logger.verbose(`PropLine WS lifecycle ${event} async erro: ${e instanceof Error ? e.message : String(e)}`));
          }
        } catch (err) {
          this.logger.verbose(`PropLine WS lifecycle ${event} sync erro: ${err instanceof Error ? err.message : String(err)}`);
        }
      }
    } catch (err) {
      this.logger.verbose(`PropLine WS lifecycle top-level erro: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  private connectInternal(): void {
    if (this.permanentlyDisabled) return;
    if (this.ws && (this.ws.readyState === 0 || this.ws.readyState === 1)) return;
    this.clearHeartbeat();
    if (!this.apiKey) {
      this.logger.warn('PropLine WS: PROPLINE_API_KEY vazia. WS permanecerá desligado.');
      this.permanentlyDisabled = true;
      return;
    }
    try {
      const replaySeq = this.lastSeqMax > 0 ? this.lastSeqMax + 1 : undefined;
      const url = this.buildWsUrl(replaySeq);
      this.logger.debug(`PropLine WS a conectar ${this.maskUrl(url)}`);
      const ws = this.createWebSocket(url);
      this.ws = ws;

      ws.onopen = () => {
        try {
          this.logger.log(`PropLine WS conectado. Replay desde seq=${replaySeq ?? 'novo stream'}.`);
          this.reconnectAttempts = 0;
          this.lastReceivedAt = Date.now();
          this.sendSubscribeIfOpen();
          this.startHeartbeat();
          this.safeLifecycle('open');
        } catch (err) {
          this.logger.verbose(`PropLine WS onopen erro: ${err instanceof Error ? err.message : String(err)}`);
        }
      };

      ws.onmessage = (ev) => {
        try {
          this.lastReceivedAt = Date.now();
          const msg = this.parseIncoming(ev.data);
          if (!msg) return;
          this.safeEmit(msg);
        } catch (err) {
          this.logger.verbose(`PropLine WS onmessage erro: ${err instanceof Error ? err.message : String(err)}`);
        }
      };

      ws.onerror = (err) => {
        try {
          const message = err && 'message' in (err as object) ? String((err as { message: unknown }).message) : String(err);
          this.logger.verbose(`PropLine WS erro: ${message}`);
          this.safeLifecycle('error', { message });
        } catch {
        }
      };

      ws.onclose = (ev) => {
        try {
          const code = ev?.code ?? 0;
          const reason = ev?.reason ?? '';
          this.clearHeartbeat();
          this.ws = null;
          if (code === 4401) {
            this.logger.error(`PropLine WS fechado code=4401 (chave invalida). Desativar permanentemente nesta sessão.`);
            this.permanentlyDisabled = true;
            this.safeLifecycle('close', { code, reason });
            return;
          }
          if (code === 4403) {
            this.logger.warn(`PropLine WS fechado code=4403 (assinatura WS não activa). Desativar permanentemente.`);
            this.permanentlyDisabled = true;
            this.safeLifecycle('close', { code, reason });
            return;
          }
          this.logger.debug(`PropLine WS fechado code=${code} reason="${reason.slice(0, 120)}". Schedule reconnect.`);
          this.safeLifecycle('close', { code, reason });
          this.scheduleReconnect();
        } catch (err) {
          this.logger.verbose(`PropLine WS onclose erro: ${err instanceof Error ? err.message : String(err)}`);
        }
      };
    } catch (err) {
      this.logger.warn(`PropLine WS connect excepção: ${err instanceof Error ? err.message : String(err)}`);
      this.scheduleReconnect();
    }
  }

  connect(): void {
    try {
      if (this.permanentlyDisabled) {
        this.logger.verbose('PropLine WS permanentemente desativado. Saltar connect.');
        return;
      }
      this.manuallyClosed = false;
      this.connectInternal();
    } catch (err) {
      this.logger.verbose(`PropLine WS connect top-level erro: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  disconnect(): void {
    try {
      this.manuallyClosed = true;
      this.clearReconnectTimer();
      this.clearHeartbeat();
      try { this.ws?.removeAllListeners?.(); } catch { /**/ }
      try { this.ws?.close(1000, 'client-shutdown'); } catch { /**/ }
      this.ws = null;
    } catch {
    }
  }

  isOpen(): boolean {
    return this.ws !== null && this.ws.readyState === 1;
  }

  isConnected(): boolean {
    return this.isOpen();
  }

  isPermanentlyDisabled(): boolean {
    return this.permanentlyDisabled;
  }

  on(event: ProplineWsEvent, callback: (msg: ProplineWsMessage) => void | Promise<void>): () => void {
    try {
      if (!this.eventListeners.has(event)) {
        this.eventListeners.set(event, new Set());
      }
      const set = this.eventListeners.get(event)!;
      set.add(callback);
      return () => {
        try { set.delete(callback); } catch { /**/ }
      };
    } catch {
      return () => { /* noop */ };
    }
  }

  onLifecycle(event: ProplineWsLifecycleEvent, callback: ProplineWsAnyCallback): () => void {
    try {
      if (!this.lifecycleListeners.has(event)) {
        this.lifecycleListeners.set(event, new Set());
      }
      const set = this.lifecycleListeners.get(event)!;
      set.add(callback);
      return () => {
        try { set.delete(callback); } catch { /**/ }
      };
    } catch {
      return () => { /* noop */ };
    }
  }

  onAnyMessage(callback: (msg: ProplineWsMessage) => void | Promise<void>): () => void {
    try {
      this.allMessageListeners.add(callback);
      return () => {
        try { this.allMessageListeners.delete(callback); } catch { /**/ }
      };
    } catch {
      return () => { /* noop */ };
    }
  }

  off(event: ProplineWsEvent, callback: (msg: ProplineWsMessage) => void | Promise<void>): void {
    try {
      const set = this.eventListeners.get(event);
      if (set) set.delete(callback);
    } catch {
    }
  }

  sendCustom(action: string, payload?: Record<string, unknown>): boolean {
    if (!this.isOpen()) return false;
    try {
      this.ws?.send(JSON.stringify({ action, ...(payload ?? {}) }));
      return true;
    } catch {
      return false;
    }
  }

  getLastSeqMax(): number {
    return this.lastSeqMax;
  }

  getMaxSeqFromServer(): number {
    return this.maxSeqFromServer;
  }

  hasApiKey(): boolean {
    return Boolean(this.apiKey && this.apiKey.length > 0);
  }

  onModuleDestroy(): void {
    try {
      this.disconnect();
      this.eventListeners.clear();
      this.lifecycleListeners.clear();
      this.allMessageListeners.clear();
    } catch {
    }
  }
}
