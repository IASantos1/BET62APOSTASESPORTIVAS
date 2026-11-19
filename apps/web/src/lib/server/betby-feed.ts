import { isEventFinished } from '../lifecycle';
import { applyDeltas, applyDictionaries, emptyDictionaries, oddsStale, versionsOf, type BetbyEvent, type BetbyFeed } from '../betby-core';

// O feed da BETBY também no servidor (o Railway é aceite pela BETBY): ao vivo a cada 3 s, pré-jogo
// a cada 30 s, para validar as apostas no momento em que são feitas — odd atual, seleção suspensa
// (lances perigosos, VAR…), golo entretanto. O navegador mostra as odds; quem aceita é o servidor.

const base = () => (process.env.NEXT_PUBLIC_BETBY_BASE_URL || 'https://demoapi.betby.com').replace(/\/$/, '');
const brand = () => process.env.NEXT_PUBLIC_BETBY_BRAND_ID || '1653815133341880320';
const locale = () => process.env.NEXT_PUBLIC_BETBY_LOCALE || 'en-GB';

const EVERY_MS: Record<BetbyFeed, number> = { live: 3_000, prematch: 30_000 };
const FULL_SYNC_MS = 60_000;
/** O feed conta como fiável enquanto a última leitura boa tiver menos do que isto. */
const HEALTHY_MS: Record<BetbyFeed, number> = { live: 20_000, prematch: 120_000 };

interface FeedState {
  store: Map<string, BetbyEvent>;
  applied: Set<string>;
  okAt: number;
  fullAt: number;
  error: string | null;
  busy: boolean;
}

const g = globalThis as unknown as { __bbFeeds?: Record<BetbyFeed, FeedState>; __bbFeedTimers?: boolean };
const feeds = (g.__bbFeeds ??= {
  live: { store: new Map(), applied: new Set(), okAt: 0, fullAt: 0, error: null, busy: false },
  prematch: { store: new Map(), applied: new Set(), okAt: 0, fullAt: 0, error: null, busy: false },
});

async function getJson(url: string) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), 10_000);
  try {
    const r = await fetch(url, { headers: { accept: 'application/json' }, cache: 'no-store', signal: ctl.signal });
    const text = await r.text();
    if (!r.ok) throw new Error(`HTTP ${r.status} ${text.slice(0, 80)}`);
    return JSON.parse(text) as Record<string, unknown>;
  } finally {
    clearTimeout(t);
  }
}

/** Uma leitura (o índice e as versões novas; todas a cada 60 s), como no navegador. */
export async function syncFeed(feed: BetbyFeed) {
  const s = feeds[feed];
  if (s.busy) return;
  s.busy = true;
  try {
    const url = (v: string | number) => `${base()}/api/v4/${feed}/brand/${brand()}/${locale()}/${v}`;
    const dict = emptyDictionaries();
    const index = await getJson(url(0));
    applyDictionaries(dict, index);
    applyDeltas(s.store, index);
    const versions = versionsOf(index);
    const full = Date.now() - s.fullAt >= FULL_SYNC_MS;
    const fresh = full ? versions : versions.filter((v) => !s.applied.has(v));
    const pages: (Record<string, unknown> | null)[] = new Array(fresh.length).fill(null);
    let i = 0;
    await Promise.all(
      Array.from({ length: Math.min(6, fresh.length) }, async () => {
        while (i < fresh.length) {
          const k = i++;
          pages[k] = await getJson(url(fresh[k])).catch(() => null);
        }
      }),
    );
    let ok = true;
    for (let k = 0; k < pages.length; k++) {
      if (!pages[k]) {
        ok = false;
        break; // as seguintes ficam para a próxima leitura, pela ordem
      }
      applyDeltas(s.store, pages[k]);
      s.applied.add(fresh[k]);
    }
    const current = new Set(versions);
    for (const v of s.applied) if (!current.has(v)) s.applied.delete(v);
    if (full && ok) s.fullAt = Date.now();
    s.okAt = Date.now();
    s.error = ok ? null : 'algumas versões falharam';
  } catch (e) {
    s.error = (e as Error).message;
  } finally {
    s.busy = false;
  }
}

export function startBetbyFeeds() {
  if (g.__bbFeedTimers) return;
  g.__bbFeedTimers = true;
  for (const feed of ['live', 'prematch'] as BetbyFeed[]) {
    const tick = async () => {
      await syncFeed(feed).catch(() => undefined);
      setTimeout(tick, EVERY_MS[feed]).unref?.();
    };
    setTimeout(tick, feed === 'live' ? 2_000 : 5_000).unref?.();
  }
}

export const feedHealthy = (feed: BetbyFeed) => Date.now() - feeds[feed].okAt < HEALTHY_MS[feed];
export function feedStatus() {
  return Object.fromEntries((['live', 'prematch'] as BetbyFeed[]).map((f) => [f, { events: feeds[f].store.size, okAt: feeds[f].okAt ? new Date(feeds[f].okAt).toISOString() : null, healthy: feedHealthy(f), error: feeds[f].error }]));
}

export type LegCheck =
  | { ok: true; price: number }
  | { ok: false; reason: 'suspended' | 'closed' | 'finished'; message: string }
  | { ok: null }; // o servidor não sabe (feed parado / jogo fora do feed): fica a confirmação normal

/** A seleção agora, no feed do servidor: odd atual, suspensa, mercado fechado, jogo acabado. */
export function checkLeg(eventId: string, marketId: string, variant: string, outcomeId: string, live: boolean): LegCheck {
  const order: BetbyFeed[] = live ? ['live', 'prematch'] : ['prematch', 'live'];
  for (const feed of order) {
    if (!feedHealthy(feed)) continue;
    const ev = feeds[feed].store.get(eventId);
    if (!ev) continue;
    if (isEventFinished(ev.state)) return { ok: false, reason: 'finished', message: 'jogo terminado' };
    if (feed === 'live' && oddsStale(ev)) return { ok: false, reason: 'suspended', message: 'odds suspensas (golo)' };
    const o = ev.markets[marketId]?.[variant]?.[outcomeId];
    if (!o) return { ok: false, reason: 'closed', message: 'mercado fechado' };
    const k = Number(o.k);
    if (o.b === 1 || !(k > 1)) return { ok: false, reason: 'suspended', message: 'odd suspensa' };
    return { ok: true, price: k };
  }
  return { ok: null };
}
