import type { Socket as ISocket } from 'socket.io-client';

const WS_URL =
  (typeof process !== 'undefined' && (process as unknown as { env?: Record<string, string> }).env?.NEXT_PUBLIC_WS_URL) ||
  (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000');

type AnyListener = (...args: unknown[]) => void;

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
