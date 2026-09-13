import { Logger } from '@nestjs/common';
import type { WebSocket } from 'ws';

export interface GoaldirWsClientConfig {
  apiKey: string;
  footballWsUrl?: string;
  tennisWsUrl?: string;
  reconnectMaxDelaySeconds?: number;
  reconnectBaseDelaySeconds?: number;
}

export type GoaldirWsSport = 'football' | 'tennis';

export interface GoaldirWsOddsFrame {
  event_id?: number | string;
  match_id?: number | string;
  sport?: GoaldirWsSport | string;
  type?: 'odds' | 'event' | 'status' | 'heartbeat' | string;
  data?: Record<string, unknown>;
  home_win?: unknown;
  draw?: unknown;
  away_win?: unknown;
  odds_player1?: unknown;
  odds_player2?: unknown;
  odds_home?: unknown;
  odds_away?: unknown;
  status?: string;
  minute?: unknown;
  score?: { home?: unknown; away?: unknown } | unknown;
  updated_at?: string | number;
  [k: string]: unknown;
}

export type GoaldirWsFrameCallback = (sport: GoaldirWsSport, frame: GoaldirWsOddsFrame) => void | Promise<void>;

const DEFAULT_FOOTBALL_WS = 'wss://sports.bzzoiro.com/live/football/';
const DEFAULT_TENNIS_WS = 'wss://sports.bzzoiro.com/ws/live/';
const DEFAULT_BASE_DELAY = 1;
const DEFAULT_MAX_DELAY = 60;

function maskWsUrl(url: string): string {
  try {
    const u = new URL(url);
    const token = u.searchParams.get('token');
    if (token) u.searchParams.set('token', token.length > 6 ? `${token.slice(0, 3)}***${token.slice(-3)}` : '***');
    return u.toString();
  } catch {
    return url.replace(/token=[^&]+/gi, 'token=***');
  }
}

class SportSocket {
  private ws: WebSocket | null = null;
  private reconnectAttempts = 0;
  private reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  private subscribed = new Set<string>();
  private permanentlyDisabled = false;
  private heartbeatTimer: ReturnType<typeof setInterval> | null = null;
  private lastReceivedAt = 0;

  constructor(
    public readonly sport: GoaldirWsSport,
    private readonly buildUrl: () => string,
    private readonly makeWs: (url: string) => WebSocket,
    private readonly logger: Logger,
    private readonly onMessage: (frame: GoaldirWsOddsFrame) => void,
    private readonly baseDelay: number,
    private readonly maxDelay: number,
    private readonly maskUrl: (url: string) => string = maskWsUrl,
  ) {}

  isOpen(): boolean {
    return this.ws !== null && this.ws.readyState === 1;
  }

  isPermanentlyDisabled(): boolean {
    return this.permanentlyDisabled;
  }

  subscribe(eventCompositeId: string): void {
    if (this.permanentlyDisabled) return;
    this.subscribed.add(eventCompositeId);
    if (this.isOpen()) {
      this.sendSubscribe(eventCompositeId);
    }
  }

  unsubscribe(eventCompositeId: string): void {
    this.subscribed.delete(eventCompositeId);
    if (this.isOpen()) {
      try {
        this.ws?.send(JSON.stringify({ action: 'unsubscribe', event_id: this.extractNumericId(eventCompositeId), sport: this.sport }));
      } catch {
      }
    }
  }

  private extractNumericId(composite: string): number | string {
    const idx = composite.indexOf(':');
    if (idx === -1) return composite;
    const raw = composite.slice(idx + 1);
    const n = Number(raw);
    return Number.isFinite(n) ? n : raw;
  }

  private sendSubscribe(composite: string): void {
    if (!this.isOpen()) return;
    try {
      const id = this.extractNumericId(composite);
      this.ws?.send(JSON.stringify({ action: 'subscribe', event_id: id, sport: this.sport }));
    } catch (err) {
      this.logger.verbose(`Goaldir WS ${this.sport} send subscribe ${composite} erro: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  connect(): void {
    if (this.permanentlyDisabled) return;
    if (this.ws && (this.ws.readyState === 0 || this.ws.readyState === 1)) return;
    this.clearHeartbeat();
    try {
      const url = this.buildUrl();
      this.logger.debug(`Goaldir WS ${this.sport} a conectar ${this.maskUrl(url)}`);
      const ws = this.makeWs(url);
      this.ws = ws;

      ws.onopen = () => {
        this.logger.log(`Goaldir WS ${this.sport} conectado. Subscricoes activas: ${this.subscribed.size}`);
        this.reconnectAttempts = 0;
        this.lastReceivedAt = Date.now();
        for (const composite of this.subscribed) {
          this.sendSubscribe(composite);
        }
        this.startHeartbeat();
      };

      ws.onmessage = (ev) => {
        this.lastReceivedAt = Date.now();
        try {
          const data = typeof ev.data === 'string' ? ev.data : Buffer.isBuffer(ev.data) ? ev.data.toString('utf8') : null;
          if (!data) return;
          if (data.trim() === '' || data === 'pong' || data.startsWith('ping')) {
            return;
          }
          const frame = JSON.parse(data) as GoaldirWsOddsFrame;
          if (frame && !frame.sport) frame.sport = this.sport;
          this.onMessage(frame);
        } catch (err) {
          this.logger.verbose(`Goaldir WS ${this.sport} parse frame erro: ${err instanceof Error ? err.message : String(err)}`);
        }
      };

      ws.onerror = (err) => {
        const msg = err && 'message' in (err as object) ? String((err as { message: unknown }).message) : String(err);
        this.logger.verbose(`Goaldir WS ${this.sport} erro: ${msg}`);
      };

      ws.onclose = (ev) => {
        const code = ev?.code ?? 0;
        const reason = ev?.reason ?? '';
        this.clearHeartbeat();
        this.ws = null;
        if (code === 4401) {
          this.logger.error(`Goaldir WS ${this.sport} fechado com code 4401 (token invalido). Desativar WS permanentemente nesta sessao.`);
          this.permanentlyDisabled = true;
          this.closeInternal();
          return;
        }
        if (code === 4402) {
          this.logger.warn(`Goaldir WS ${this.sport} fechado com code 4402 (WebSocket Addon nao activo). Desativar WS permanentemente nesta sessao.`);
          this.permanentlyDisabled = true;
          this.closeInternal();
          return;
        }
        this.logger.warn(`Goaldir WS ${this.sport} fechado code=${code} reason="${reason.slice(0, 100)}". Tentar reconnect exponencial.`);
        this.scheduleReconnect();
      };
    } catch (err) {
      this.logger.warn(`Goaldir WS ${this.sport} connect excepcao: ${err instanceof Error ? err.message : String(err)}`);
      this.scheduleReconnect();
    }
  }

  private scheduleReconnect(): void {
    if (this.permanentlyDisabled) return;
    if (this.reconnectTimer) return;
    this.reconnectAttempts += 1;
    const delay = Math.min(this.maxDelay, this.baseDelay * Math.pow(2, this.reconnectAttempts - 1));
    this.logger.debug(`Goaldir WS ${this.sport} reconnect #${this.reconnectAttempts} em ${delay}s`);
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null;
      this.connect();
    }, delay * 1000);
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
        this.logger.verbose(`Goaldir WS ${this.sport} heartbeat timeout 45s. Forcar reconnect.`);
        try { this.ws?.close(4000, 'idle-timeout'); } catch { /**/ }
        this.ws = null;
        this.scheduleReconnect();
      } else {
        try {
          this.ws?.ping?.();
        } catch {
          try { this.ws?.send(JSON.stringify({ action: 'ping' })); } catch { /**/ }
        }
      }
    }, 15_000);
  }

  private clearHeartbeat(): void {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
  }

  private closeInternal(): void {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    this.clearHeartbeat();
    try { this.ws?.removeAllListeners?.(); } catch { /**/ }
    try { this.ws?.close(1000, 'shutdown'); } catch { /**/ }
    this.ws = null;
  }

  close(): void {
    this.subscribed.clear();
    this.closeInternal();
  }
}

export class GoaldirWsClient {
  private readonly logger = new Logger(GoaldirWsClient.name);
  private readonly config: Required<Omit<GoaldirWsClientConfig, 'footballWsUrl' | 'tennisWsUrl'>> & { footballWsUrl: string; tennisWsUrl: string };
  private football: SportSocket | null = null;
  private tennis: SportSocket | null = null;
  private callbacks = new Set<GoaldirWsFrameCallback>();

  constructor(config: GoaldirWsClientConfig) {
    this.config = {
      apiKey: config.apiKey,
      footballWsUrl: config.footballWsUrl ?? DEFAULT_FOOTBALL_WS,
      tennisWsUrl: config.tennisWsUrl ?? DEFAULT_TENNIS_WS,
      reconnectBaseDelaySeconds: config.reconnectBaseDelaySeconds ?? DEFAULT_BASE_DELAY,
      reconnectMaxDelaySeconds: config.reconnectMaxDelaySeconds ?? DEFAULT_MAX_DELAY,
    };
  }

  private buildSportSocket(sport: GoaldirWsSport): SportSocket | null {
    if (!this.config.apiKey) {
      this.logger.warn('Goaldir WS: API key vazia. WS desativado.');
      return null;
    }
    const baseUrl = sport === 'football' ? this.config.footballWsUrl : this.config.tennisWsUrl;
    const buildUrl = () => {
      const sep = baseUrl.includes('?') ? '&' : '?';
      return `${baseUrl}${sep}token=${encodeURIComponent(this.config.apiKey)}`;
    };
    const makeWs = (url: string): WebSocket => {
      const { default: WebSocketCtor } = require('ws') as { default: new (url: string) => WebSocket };
      return new WebSocketCtor(url);
    };
    return new SportSocket(
      sport,
      buildUrl,
      makeWs,
      this.logger,
      (frame) => {
        for (const cb of this.callbacks) {
          try {
            const result = cb(sport, frame);
            if (result && typeof (result as Promise<unknown>).catch === 'function') {
              (result as Promise<unknown>).catch((err) => this.logger.verbose(`Goaldir WS cb erro: ${err instanceof Error ? err.message : String(err)}`));
            }
          } catch (err) {
            this.logger.verbose(`Goaldir WS cb sync erro: ${err instanceof Error ? err.message : String(err)}`);
          }
        }
      },
      this.config.reconnectBaseDelaySeconds,
      this.config.reconnectMaxDelaySeconds,
    );
  }

  connect(sport: GoaldirWsSport): void {
    try {
      if (sport === 'football') {
        if (!this.football) this.football = this.buildSportSocket('football');
        this.football?.connect();
      } else if (sport === 'tennis') {
        if (!this.tennis) this.tennis = this.buildSportSocket('tennis');
        this.tennis?.connect();
      }
    } catch (err) {
      this.logger.warn(`Goaldir WS connect ${sport} erro: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  subscribe(sport: GoaldirWsSport, eventCompositeId: string): void {
    if (sport === 'football') {
      if (!this.football) this.football = this.buildSportSocket('football');
      if (!this.football) return;
      if (!this.football.isOpen() && !this.football.isPermanentlyDisabled()) this.football.connect();
      this.football.subscribe(eventCompositeId);
    } else if (sport === 'tennis') {
      if (!this.tennis) this.tennis = this.buildSportSocket('tennis');
      if (!this.tennis) return;
      if (!this.tennis.isOpen() && !this.tennis.isPermanentlyDisabled()) this.tennis.connect();
      this.tennis.subscribe(eventCompositeId);
    }
  }

  unsubscribe(sport: GoaldirWsSport, eventCompositeId: string): void {
    if (sport === 'football') this.football?.unsubscribe(eventCompositeId);
    else if (sport === 'tennis') this.tennis?.unsubscribe(eventCompositeId);
  }

  onFrame(callback: GoaldirWsFrameCallback): () => void {
    this.callbacks.add(callback);
    return () => {
      this.callbacks.delete(callback);
    };
  }

  isEnabled(sport: GoaldirWsSport): boolean {
    if (sport === 'football') return !!this.football && !this.football.isPermanentlyDisabled();
    if (sport === 'tennis') return !!this.tennis && !this.tennis.isPermanentlyDisabled();
    return false;
  }

  closeAll(): void {
    try { this.football?.close(); } catch { /**/ }
    try { this.tennis?.close(); } catch { /**/ }
    this.football = null;
    this.tennis = null;
    this.callbacks.clear();
  }
}
