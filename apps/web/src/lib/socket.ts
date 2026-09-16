'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { io, Socket as IoSocket } from 'socket.io-client';

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
  homeName: string | null;
  awayName: string | null;
  homeLogo: string | null;
  awayLogo: string | null;
  leagueName: string | null;
  leagueLogo: string | null;
  kickoffAt: string | null;
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

export type Bet62Socket = IoSocket;

let oddsSocket: IoSocket | null = null;
let notifSocket: IoSocket | null = null;

function createSocket(ns: string): IoSocket {
  const base = WS_URL.replace(/\/+$/, '');
  const url = ns.startsWith('/') ? `${base}${ns}` : `${base}/${ns}`;
  return io(url, {
    transports: ['websocket', 'polling'],
    autoConnect: true,
    reconnection: true,
    reconnectionAttempts: 10,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 10000,
    timeout: 20000,
  });
}

export function getOddsSocket(): IoSocket {
  if (typeof window === 'undefined') {
    return createSocket('/odds-ws');
  }
  if (!oddsSocket) {
    oddsSocket = createSocket('/odds-ws');
  }
  return oddsSocket;
}

export function getNotificationsSocket(): IoSocket {
  if (typeof window === 'undefined') {
    return createSocket('/notifications-ws');
  }
  if (!notifSocket) {
    notifSocket = createSocket('/notifications-ws');
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

const EMPTY_STATE: LiveMatchStateShape = {
  matchId: '',
  homeName: null,
  awayName: null,
  homeLogo: null,
  awayLogo: null,
  leagueName: null,
  leagueLogo: null,
  kickoffAt: null,
  score: { home: null, away: null },
  clock: { minute: null, stoppage: null, period: null, periodLabel: null, running: false },
  markets: [],
  stats: null,
  recentEvents: [],
  lastCommentary: null,
  suspended: false,
  suspensionReason: null,
  stale: false,
  lastUpdateAt: new Date(0).toISOString(),
};

function eventPayloadToState(matchId: string, payload: Record<string, unknown>): Partial<LiveMatchStateShape> {
  const score = (payload.liveScoreJson as { home?: number | null; away?: number | null } | null | undefined) ?? {};
  const clock = (payload.liveClockJson as { minute?: number | null; injuryMinutes?: number | null; status?: string } | null | undefined) ?? {};
  const leagueName = typeof payload.leagueName === 'string' ? payload.leagueName : null;
  return {
    matchId,
    homeName: typeof payload.homeTeamName === 'string' ? payload.homeTeamName : null,
    awayName: typeof payload.awayTeamName === 'string' ? payload.awayTeamName : null,
    leagueName,
    kickoffAt: typeof payload.kickoffAt === 'string' ? payload.kickoffAt : null,
    score: {
      home: typeof score.home === 'number' ? score.home : null,
      away: typeof score.away === 'number' ? score.away : null,
    },
    clock: {
      minute: typeof clock.minute === 'number' ? clock.minute : null,
      stoppage: typeof clock.injuryMinutes === 'number' ? clock.injuryMinutes : null,
      period: null,
      periodLabel: typeof clock.status === 'string' ? clock.status : null,
      running: payload.status === 'LIVE' || payload.status === 'HALF_TIME',
    },
    markets: Array.isArray(payload.markets)
      ? (payload.markets as Array<Record<string, unknown>>).map((market) => ({
          code: String(market.type ?? market.id ?? 'market'),
          label: String(market.name ?? market.type ?? 'Mercado'),
          group: String(market.type ?? 'general'),
          status: String(market.status ?? 'active').toLowerCase() as LiveMatchMarket['status'],
          selections: Array.isArray(market.selections)
            ? (market.selections as Array<Record<string, unknown>>).map((selection) => ({
                id: String(selection.id ?? ''),
                name: String(selection.name ?? ''),
                price: typeof selection.odds === 'number' ? selection.odds : 0,
                status: String(selection.status ?? 'active').toLowerCase() as LiveMatchMarket['selections'][number]['status'],
              }))
            : [],
          updatedAt: new Date().toISOString(),
        }))
      : [],
    lastUpdateAt: new Date().toISOString(),
  };
}

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

export function useLiveMatch(matchId: string | null | undefined, options?: { autoSubscribe?: boolean; seedState?: Partial<LiveMatchStateShape> }): UseLiveMatchReturn {
  const autoSubscribe = options?.autoSubscribe ?? true;
  const socketRef = useRef<IoSocket | null>(null);
  const subscribedRef = useRef(false);
  const [connected, setConnected] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [lastEnvelope, setLastEnvelope] = useState<LiveMatchUpdateEnvelope | null>(null);
  const [match, setMatch] = useState<LiveMatchStateShape>(() => {
    const s: LiveMatchStateShape = matchId ? { ...EMPTY_STATE, matchId } : EMPTY_STATE;
    if (options?.seedState) Object.assign(s, options.seedState);
    return s;
  });
  const [lastUpdateAt, setLastUpdateAt] = useState<Date | null>(null);

  const handleEnvelope = useCallback((env: LiveMatchUpdateEnvelope) => {
    setLastEnvelope(env);
    setLastUpdateAt(new Date());
    setMatch((prev) => applyMatchUpdate(prev, env));
  }, []);

  const handleGatewayPayload = useCallback((raw: unknown) => {
    if (!matchId) return;
    try {
      const payload = typeof raw === 'string' ? JSON.parse(raw) : raw;
      if (!payload || typeof payload !== 'object') return;
      const data = payload as { eventId?: string; payload?: Record<string, unknown> };
      if (data.eventId && data.eventId !== matchId) return;
      handleEnvelope({
        kind: 'state',
        full: false,
        state: eventPayloadToState(matchId, data.payload ?? {}),
      });
    } catch {
      /* skip malformed payload */
    }
  }, [handleEnvelope, matchId]);

  const subscribe = useCallback(() => {
    if (!matchId || subscribedRef.current) return;
    const sock = socketRef.current ?? getOddsSocket();
    socketRef.current = sock;
    subscribedRef.current = true;
    setSubscribed(true);
    sock.on('event:update', handleGatewayPayload as AnyListener);
    sock.on('connect', () => {
      setConnected(true);
      handleEnvelope({ kind: 'hello', connected: true, serverTime: new Date().toISOString() });
    });
    sock.on('disconnect', () => setConnected(false));
    sock.on('connect_error', () => setConnected(false));
    sock.emit('subscribe:event', { eventId: matchId });
    setConnected(sock.connected);
  }, [matchId, handleEnvelope, handleGatewayPayload]);

  const unsubscribe = useCallback(() => {
    const sock = socketRef.current;
    if (matchId && sock) {
      sock.off('event:update', handleGatewayPayload as AnyListener);
      sock.emit('unsubscribe:event', { eventId: matchId });
    }
    subscribedRef.current = false;
    setSubscribed(false);
  }, [matchId, handleGatewayPayload]);

  const forceRefresh = useCallback(() => {
    const sock = socketRef.current ?? getOddsSocket();
    socketRef.current = sock;
    if (matchId) sock.emit('subscribe:event', { eventId: matchId });
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
