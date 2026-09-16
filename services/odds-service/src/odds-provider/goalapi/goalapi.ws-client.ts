import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { WebSocket } from 'ws';
import { GoalApiHttpClient } from './goalapi.http-client';

const DEFAULT_WS_URL = 'wss://ws.goal-api.com/v1';
const RECONNECT_BASE_DELAY_SECONDS = 1;
const RECONNECT_MAX_DELAY_SECONDS = 32;

export interface GoalApiWsSubscription {
  channel: string;
  fixtureId?: string | number;
}

export type GoalApiWsEventHandler = (
  event: string,
  payload: Record<string, unknown>,
) => void | Promise<void>;

interface WsTokenResponse {
  token?: string;
  access_token?: string;
  data?: { token?: string };
  expires_at?: string;
}

@Injectable()
export class GoalApiWsClient {
  private readonly logger = new Logger(GoalApiWsClient.name);
  private ws: WebSocket | null = null;
  private reconnectAttempts = 0;
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  private permanentlyDisabled = false;
  private wsBaseUrl: string;
  private currentToken: string | null = null;
  private subscriptions: Array<GoalApiWsSubscription> = [];
  private listeners = new Map<string, Set<GoalApiWsEventHandler>>();
  private globalListeners = new Set<GoalApiWsEventHandler>();
  private heartbeatTimer: ReturnType<typeof setInterval> | null = null;
  private lastReceivedAt = 0;

  constructor(
    private readonly httpClient: GoalApiHttpClient,
    private readonly configService: ConfigService,
  ) {
    this.wsBaseUrl =
      (this.configService?.get<string>('GOAL_API_WS_URL') ||
        process.env.GOAL_API_WS_URL ||
        DEFAULT_WS_URL).replace(/\/$/, '');
  }

  async fetchWsToken(): Promise<string | null> {
    try {
      const baseUrl =
        (this.configService?.get<string>('GOAL_API_BASE_URL') ||
          process.env.GOAL_API_BASE_URL ||
          'https://api.goal-api.com/v1').replace(/\/$/, '');
      const apiKey =
        this.configService?.get<string>('GOAL_API_KEY') ||
        process.env.GOAL_API_KEY ||
        '';
      if (!apiKey) {
        this.logger.warn(
          'fetchWsToken: GOAL_API_KEY vazia. WebSocket GOAL API NAO conecta. Configurar GOAL_API_KEY no Railway vars.',
        );
        return null;
      }
      const url = `${baseUrl}/ws/token`;
      const [, body] = await this.httpClient.safeFetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });
      if (!body || typeof body !== 'object') return null;
      const resp = body as WsTokenResponse;
      const token = resp.token || resp.access_token || resp.data?.token || null;
      if (token) {
        this.currentToken = String(token);
      }
      return this.currentToken;
    } catch (err) {
      this.logger.verbose(
        `fetchWsToken erro: ${err instanceof Error ? err.message : String(err)}`,
      );
      return null;
    }
  }

  private maskUrl(url: string): string {
    try {
      const u = new URL(url);
      const token = u.searchParams.get('token');
      if (token) {
        u.searchParams.set(
          'token',
          token.length > 6 ? `${token.slice(0, 3)}***${token.slice(-3)}` : '***',
        );
      }
      return u.toString();
    } catch {
      return url.replace(/token=[^&]+/gi, 'token=***');
    }
  }

  private makeWs(url: string): WebSocket {
    const { default: WebSocketCtor } = require('ws') as {
      default: new (url: string) => WebSocket;
    };
    return new WebSocketCtor(url);
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
      if (!this.isOpen()) {
        this.clearHeartbeat();
        return;
      }
      const now = Date.now();
      if (now - this.lastReceivedAt > 45_000) {
        this.logger.verbose(
          'GOAL WS heartbeat timeout 45s. Forçar reconnect.',
        );
        try {
          this.ws?.close(4000, 'idle-timeout');
        } catch {
          /* */
        }
        this.ws = null;
        this.scheduleReconnect();
      } else {
        try {
          this.ws?.ping?.();
        } catch {
          try {
            this.ws?.send(JSON.stringify({ action: 'ping' }));
          } catch {
            /* */
          }
        }
      }
    }, 15_000);
  }

  private emitToListeners(
    event: string,
    payload: Record<string, unknown>,
  ): void {
    const listeners = this.listeners.get(event);
    if (listeners) {
      for (const cb of Array.from(listeners)) {
        try {
          const result = cb(event, payload);
          if (
            result &&
            typeof (result as Promise<unknown>).catch === 'function'
          ) {
            (result as Promise<unknown>).catch((err) =>
              this.logger.verbose(
                `GOAL WS listener async erro (${event}): ${
                  err instanceof Error ? err.message : String(err)
                }`,
              ),
            );
          }
        } catch (err) {
          this.logger.verbose(
            `GOAL WS listener sync erro (${event}): ${
              err instanceof Error ? err.message : String(err)
            }`,
          );
        }
      }
    }
    for (const cb of Array.from(this.globalListeners)) {
      try {
        const result = cb(event, payload);
        if (result && typeof (result as Promise<unknown>).catch === 'function') {
          (result as Promise<unknown>).catch((err) =>
            this.logger.verbose(
              `GOAL WS global listener async erro: ${
                err instanceof Error ? err.message : String(err)
              }`,
            ),
          );
        }
      } catch (err) {
        this.logger.verbose(
          `GOAL WS global listener sync erro: ${
            err instanceof Error ? err.message : String(err)
          }`,
        );
      }
    }
  }

  private sendSubscribe(sub: GoalApiWsSubscription): void {
    if (!this.isOpen()) return;
    try {
      const msg: Record<string, unknown> = {
        action: 'subscribe',
        channel: sub.channel,
      };
      if (sub.fixtureId !== undefined && sub.fixtureId !== null) {
        msg.fixtureId = sub.fixtureId;
        msg.fixture_id = sub.fixtureId;
      }
      this.ws?.send(JSON.stringify(msg));
    } catch (err) {
      this.logger.verbose(
        `GOAL WS send subscribe ${sub.channel} erro: ${
          err instanceof Error ? err.message : String(err)
        }`,
      );
    }
  }

  private sendAllSubscriptions(): void {
    for (const sub of this.subscriptions) {
      this.sendSubscribe(sub);
    }
  }

  isOpen(): boolean {
    return this.ws !== null && this.ws.readyState === 1;
  }

  isPermanentlyDisabled(): boolean {
    return this.permanentlyDisabled;
  }

  private scheduleReconnect(): void {
    if (this.permanentlyDisabled) return;
    if (this.reconnectTimer) return;
    this.reconnectAttempts += 1;
    const delay = Math.min(
      RECONNECT_MAX_DELAY_SECONDS,
      RECONNECT_BASE_DELAY_SECONDS * Math.pow(2, this.reconnectAttempts - 1),
    );
    this.logger.debug(
      `GOAL WS reconnect #${this.reconnectAttempts} em ${delay}s`,
    );
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null;
      void this.performConnect();
    }, delay * 1000);
  }

  private async performConnect(): Promise<boolean> {
    if (this.permanentlyDisabled) return false;
    if (this.ws && (this.ws.readyState === 0 || this.ws.readyState === 1))
      return true;

    this.clearHeartbeat();
    try {
      let token = this.currentToken;
      if (!token) {
        token = await this.fetchWsToken();
      }
      if (!token) {
        this.logger.verbose(
          'GOAL WS performConnect: sem token, agendar reconnect.',
        );
        this.scheduleReconnect();
        return false;
      }
      const sep = this.wsBaseUrl.includes('?') ? '&' : '?';
      const url = `${this.wsBaseUrl}${sep}token=${encodeURIComponent(token)}`;
      this.logger.debug(`GOAL WS a conectar ${this.maskUrl(url)}`);
      const ws = this.makeWs(url);
      this.ws = ws;

      ws.onopen = () => {
        this.logger.log(
          `GOAL WS conectado. Subscrições activas: ${this.subscriptions.length}`,
        );
        this.reconnectAttempts = 0;
        this.lastReceivedAt = Date.now();
        this.sendAllSubscriptions();
        this.startHeartbeat();
      };

      ws.onmessage = (ev) => {
        this.lastReceivedAt = Date.now();
        try {
          const data =
            typeof ev.data === 'string'
              ? ev.data
              : Buffer.isBuffer(ev.data)
                ? ev.data.toString('utf8')
                : null;
          if (!data) return;
          if (
            data.trim() === '' ||
            data === 'pong' ||
            data.startsWith('ping')
          ) {
            return;
          }
          const parsed = JSON.parse(data) as Record<string, unknown>;
          const eventName =
            (parsed.event as string) ||
            (parsed.type as string) ||
            (parsed.channel as string) ||
            'message';
          const payload =
            (parsed.payload as Record<string, unknown>) ||
            (parsed.data as Record<string, unknown>) ||
            parsed;
          this.emitToListeners(eventName, payload);
        } catch (err) {
          this.logger.verbose(
            `GOAL WS parse frame erro: ${
              err instanceof Error ? err.message : String(err)
            }`,
          );
        }
      };

      ws.onerror = (err) => {
        const msg =
          err && 'message' in (err as object)
            ? String((err as { message: unknown }).message)
            : String(err);
        this.logger.verbose(`GOAL WS erro: ${msg}`);
      };

      ws.onclose = (ev) => {
        const code = ev?.code ?? 0;
        const reason = ev?.reason ?? '';
        this.clearHeartbeat();
        this.ws = null;
        if (code === 4401) {
          this.logger.error(
            'GOAL WS fechado com code 4401 (token invalido). Desativar WS permanentemente nesta sessao.',
          );
          this.permanentlyDisabled = true;
          return;
        }
        if (code === 4402) {
          this.logger.warn(
            'GOAL WS fechado com code 4402 (WS Addon nao activo). Desativar WS permanentemente nesta sessao.',
          );
          this.permanentlyDisabled = true;
          return;
        }
        this.logger.warn(
          `GOAL WS fechado code=${code} reason="${reason.slice(0, 100)}". Tentar reconnect exponencial.`,
        );
        this.scheduleReconnect();
      };

      return true;
    } catch (err) {
      this.logger.warn(
        `GOAL WS connect excepcao: ${
          err instanceof Error ? err.message : String(err)
        }`,
      );
      this.scheduleReconnect();
      return false;
    }
  }

  async connect(
    subscriptions?: Array<GoalApiWsSubscription>,
  ): Promise<boolean> {
    try {
      if (subscriptions && subscriptions.length > 0) {
        this.subscriptions = [...subscriptions];
      }
      return await this.performConnect();
    } catch (err) {
      this.logger.warn(
        `GOAL WS connect fallback false: ${
          err instanceof Error ? err.message : String(err)
        }`,
      );
      return false;
    }
  }

  subscribe(sub: GoalApiWsSubscription): void {
    if (this.permanentlyDisabled) return;
    const exists = this.subscriptions.some(
      (s) =>
        s.channel === sub.channel &&
        String(s.fixtureId ?? '') === String(sub.fixtureId ?? ''),
    );
    if (!exists) this.subscriptions.push(sub);
    if (this.isOpen()) {
      this.sendSubscribe(sub);
    }
  }

  unsubscribe(sub: GoalApiWsSubscription): void {
    this.subscriptions = this.subscriptions.filter(
      (s) =>
        !(
          s.channel === sub.channel &&
          String(s.fixtureId ?? '') === String(sub.fixtureId ?? '')
        ),
    );
    if (this.isOpen()) {
      try {
        const msg: Record<string, unknown> = {
          action: 'unsubscribe',
          channel: sub.channel,
        };
        if (sub.fixtureId !== undefined && sub.fixtureId !== null) {
          msg.fixtureId = sub.fixtureId;
          msg.fixture_id = sub.fixtureId;
        }
        this.ws?.send(JSON.stringify(msg));
      } catch {
        /* */
      }
    }
  }

  on(event: string, handler: GoalApiWsEventHandler): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set<GoalApiWsEventHandler>());
    }
    const set = this.listeners.get(event)!;
    set.add(handler);
    return () => {
      set.delete(handler);
    };
  }

  off(event: string, handler: GoalApiWsEventHandler): void {
    const set = this.listeners.get(event);
    if (set) {
      set.delete(handler);
    }
  }

  onAny(handler: GoalApiWsEventHandler): () => void {
    this.globalListeners.add(handler);
    return () => {
      this.globalListeners.delete(handler);
    };
  }

  close(): void {
    this.subscriptions = [];
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    this.clearHeartbeat();
    try {
      (this.ws as { removeAllListeners?: () => void })?.removeAllListeners?.();
    } catch {
      /* */
    }
    try {
      this.ws?.close(1000, 'shutdown');
    } catch {
      /* */
    }
    this.ws = null;
    this.listeners.clear();
    this.globalListeners.clear();
  }
}
