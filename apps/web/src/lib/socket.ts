'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { Socket as ISocket } from 'socket.io-client';

const WS_URL =
  (typeof process !== 'undefined' && (process as unknown as { env?: Record<string, string> }).env?.NEXT_PUBLIC_WS_URL) ||
  (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000');

type AnyListener = (...args: unknown[]) => void;

export type LiveMatchScore = { home: number | null; away: number | null };
export type LiveMatchClock = {
  minute: number | null;
  stoppage: number | null;
  period: 'q1' | 'q2' | 'q3' | 'q4' | 'ht' | 'ft' | 'et' | 'pens' | null;
  periodLabel: string | null;
  running: boolean;
};
export type LiveMatchMarket = {
  code: string;
  label: string;
  group: string;
  status: 'active' | 'suspended' | 'settled';
  selections: Array<{
    id: string;
    name: string;
    price: number;
    status: 'active' | 'suspended' | 'void';
  }>;
  updatedAt: string;
};
export type LiveMatchStats = {
  possessionHome: number | null;
  possessionAway: number | null;
  cornersHome: number | null;
  cornersAway: number | null;
  yellowHome: number | null;
  yellowAway: number | null;
  redHome: number | null;
  redAway: number | null;
  shotsOnTargetHome: number | null;
  shotsOnTargetAway: number | null;
};
export type LiveMatchCommentary = {
  id: string;
  minute: number | null;
  text: string;
  teamSide: 'home' | 'away' | 'neutral' | null;
  zone: string | null;
  timestamp: string;
};
export type LiveMatchStateShape = {
  matchId: string;
  homeName: string;
  awayName: string;
  homeLogo: string | null;
  awayLogo: string | null;
  leagueName: string | null;
  leagueLogo: string | null;
  kickoffAt: string;
  score: LiveMatchScore;
  clock: LiveMatchClock;
  markets: LiveMatchMarket[];
  stats: LiveMatchStats | null;
  recentEvents: Array<{ id: string; type: string; minute: number | null; side: 'home' | 'away' | null; description: string | null }>;
  lastCommentary: LiveMatchCommentary | null;
  suspended: boolean;
  suspensionReason: string | null;
  stale: boolean;
  lastUpdateAt: string;
};

export type LiveMatchUpdateEnvelope =
  | { kind: 'state'; state: Partial<LiveMatchStateShape>; full: boolean }
  | { kind: 'market_delta'; market: LiveMatchMarket }
  | { kind: 'score_change'; score: LiveMatchScore; clock?: Partial<LiveMatchClock> }
  | { kind: 'status'; suspended: boolean; reason: string | null }
  | { kind: 'event'; event: LiveMatchStateShape['recentEvents'][number] }
  | { kind: 'commentary'; commentary: LiveMatchCommentary }
  | { kind: 'stats_delta'; stats: Partial<LiveMatchStats> }
  | { kind: 'hello'; connected: boolean; serverTime: string };

class MockSocket {
  private listeners: Map<string, Set<AnyListener>> = new Map();
  public connected = false;
  public id: string | undefined;

  constructor(public ns: string) {
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        this.connected = true;
        this.id = 'mock-' + Math.random().toString(36).slice(2, 10);
        this.emitSelf('connect');
      }, 50);
    }
  }
  private emitSelf(ev: string, ...args: unknown[]) {
    const set = this.listeners.get(ev);
    if (set) for (const fn of [...set]) fn(...args);
  }
  on(ev: string, fn: AnyListener) {
    if (!this.listeners.has(ev)) this.listeners.set(ev, new Set());
    this.listeners.get(ev)!.add(fn);
    return this;
  }
  off(ev: string, fn?: AnyListener) {
    if (!fn) this.listeners.delete(ev);
    else this.listeners.get(ev)?.delete(fn);
    return this;
  }
  emit(ev: string, ...args: unknown[]) {
    queueMicrotask(() => this.emitSelf(`${ev}:ack`, { ok: true, args }));
    return this;
  }
  disconnect() {
    this.connected = false;
    this.emitSelf('disconnect', 'io client disconnect');
    return this;
  }
  connect() {
    this.connected = true;
    this.emitSelf('connect');
    return this;
  }
}

export type Bet62Socket = MockSocket;

let oddsSocket: MockSocket | null = null;
let notifSocket: MockSocket | null = null;

export function getOddsSocket(): MockSocket {
  if (typeof window === 'undefined') return new MockSocket('/odds-ws');
  if (!oddsSocket) {
    oddsSocket = new MockSocket('/odds-ws');
  }
  return oddsSocket;
}

export function getNotificationsSocket(): MockSocket {
  if (typeof window === 'undefined') return new MockSocket('/notifications-ws');
  if (!notifSocket) {
    notifSocket = new MockSocket('/notifications-ws');
  }
  return notifSocket;
}

export function disconnectAll() {
  oddsSocket?.disconnect();
  notifSocket?.disconnect();
  oddsSocket = null;
  notifSocket = null;
}

export const realIoWsUrl = WS_URL;

const DEFAULT_STATE: LiveMatchStateShape = {
  matchId: '',
  homeName: 'Equipa Casa',
  awayName: 'Equipa Fora',
  homeLogo: null,
  awayLogo: null,
  leagueName: null,
  leagueLogo: null,
  kickoffAt: new Date().toISOString(),
  score: { home: 0, away: 0 },
  clock: { minute: 0, stoppage: null, period: null, periodLabel: 'Em Breve', running: false },
  markets: [],
  stats: null,
  recentEvents: [],
  lastCommentary: null,
  suspended: false,
  suspensionReason: null,
  stale: false,
  lastUpdateAt: new Date(0).toISOString(),
};

export function applyMatchUpdate(state: LiveMatchStateShape, env: LiveMatchUpdateEnvelope): LiveMatchStateShape {
  switch (env.kind) {
    case 'state':
      return { ...state, ...env.state, lastUpdateAt: new Date().toISOString() };
    case 'market_delta': {
      const next = state.markets.filter((m) => m.code !== env.market.code);
      next.push(env.market);
      return { ...state, markets: next, lastUpdateAt: new Date().toISOString() };
    }
    case 'score_change':
      return {
        ...state,
        score: env.score,
        clock: { ...state.clock, ...(env.clock ?? {}) },
        lastUpdateAt: new Date().toISOString(),
      };
    case 'status':
      return { ...state, suspended: env.suspended, suspensionReason: env.reason, lastUpdateAt: new Date().toISOString() };
    case 'event': {
      const next = [env.event, ...state.recentEvents].slice(0, 20);
      return { ...state, recentEvents: next, lastUpdateAt: new Date().toISOString() };
    }
    case 'commentary':
      return { ...state, lastCommentary: env.commentary, lastUpdateAt: new Date().toISOString() };
    case 'stats_delta':
      return { ...state, stats: { ...(state.stats ?? ({} as LiveMatchStats)), ...env.stats }, lastUpdateAt: new Date().toISOString() };
    case 'hello':
      return state;
    default:
      return state;
  }
}

export type UseLiveMatchReturn = {
  match: LiveMatchStateShape;
  connected: boolean;
  subscribed: boolean;
  lastUpdateAt: Date | null;
  lastEnvelope: LiveMatchUpdateEnvelope | null;
  subscribe: () => void;
  unsubscribe: () => void;
  forceRefresh: () => void;
};

export function useLiveMatch(matchId: string | null | undefined, options?: { autoSubscribe?: boolean; mockSeedState?: Partial<LiveMatchStateShape> }): UseLiveMatchReturn {
  const autoSubscribe = options?.autoSubscribe ?? true;
  const socketRef = useRef<MockSocket | null>(null);
  const subscribedRef = useRef(false);
  const [connected, setConnected] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [lastEnvelope, setLastEnvelope] = useState<LiveMatchUpdateEnvelope | null>(null);
  const [match, setMatch] = useState<LiveMatchStateShape>(() => {
    const s: LiveMatchStateShape = matchId ? { ...DEFAULT_STATE, matchId } : DEFAULT_STATE;
    if (options?.mockSeedState) Object.assign(s, options.mockSeedState);
    return s;
  });
  const [lastUpdateAt, setLastUpdateAt] = useState<Date | null>(null);

  const handleEnvelope = useCallback((env: LiveMatchUpdateEnvelope) => {
    setLastEnvelope(env);
    setLastUpdateAt(new Date());
    setMatch((prev) => applyMatchUpdate(prev, env));
  }, []);

  const subscribe = useCallback(() => {
    if (!matchId || subscribedRef.current) return;
    const sock = socketRef.current ?? getOddsSocket();
    socketRef.current = sock;
    subscribedRef.current = true;
    setSubscribed(true);
    const matchChan = `match:${matchId}`;
    sock.on(matchChan, (raw) => {
      try {
        const env = (typeof raw === 'string' ? JSON.parse(raw) : raw) as LiveMatchUpdateEnvelope;
        handleEnvelope(env);
      } catch {
        /* skip */
      }
    });
    sock.on('connect', () => setConnected(true));
    sock.on('disconnect', () => setConnected(false));
    sock.emit('live:subscribe', { matchId });
    setConnected(sock.connected);
    void matchChan;
  }, [matchId, handleEnvelope]);

  const unsubscribe = useCallback(() => {
    const sock = socketRef.current;
    if (matchId && sock) {
      sock.off(`match:${matchId}`);
      sock.emit('live:unsubscribe', { matchId });
    }
    subscribedRef.current = false;
    setSubscribed(false);
  }, [matchId]);

  const forceRefresh = useCallback(() => {
    const sock = socketRef.current ?? getOddsSocket();
    socketRef.current = sock;
    sock.emit('live:refresh', { matchId });
  }, [matchId]);

  useEffect(() => {
    if (!matchId) return undefined;
    setMatch((prev) => ({ ...prev, matchId }));
    if (autoSubscribe) subscribe();
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchId, autoSubscribe]);

  return useMemo(
    () => ({ match, connected, subscribed, lastUpdateAt, lastEnvelope, subscribe, unsubscribe, forceRefresh }),
    [match, connected, subscribed, lastUpdateAt, lastEnvelope, subscribe, unsubscribe, forceRefresh],
  );
}
