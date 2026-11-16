'use client';

import * as React from 'react';

// Dados da BETBY lidos diretamente das URLs públicas da API, no navegador do visitante.
// O servidor (Railway) recebe "503 access blocked" da BETBY; o navegador é aceite e a API
// responde com access-control-allow-origin: *.
//
// Formato observado (deduzido de respostas reais; confirmar com a BETBY):
//   GET {base}/api/v4/{feed}/brand/{brand}/{locale}/0  -> índice com top_events_versions / rest_events_versions
//   GET {base}/api/v4/{feed}/brand/{brand}/{locale}/{versão} -> { events: { idDoJogo: delta | null } }
// Cada delta traz só o que mudou: state (estado/relógio), score (placar/parciais) e
// markets { idMercado: { variante: { idSeleção: { k: odd, b: 1 = bloqueada } } } }; null remove.

export type BetbyFeed = 'live' | 'prematch';

export const BETBY_CONFIG = {
  baseUrl: (process.env.NEXT_PUBLIC_BETBY_BASE_URL || 'https://demoapi.betby.com').replace(/\/$/, ''),
  brandId: process.env.NEXT_PUBLIC_BETBY_BRAND_ID || '1653815133341880320',
  locale: process.env.NEXT_PUBLIC_BETBY_LOCALE || 'en-GB',
};

export interface BetbyOutcome {
  k?: string;
  b?: number;
}
export type BetbyMarkets = Record<string, Record<string, Record<string, BetbyOutcome>>>;

export interface BetbyDesc {
  scheduled?: number;
  type?: string;
  virtual?: boolean;
  slug?: string;
  sport?: string;
  category?: string;
  tournament?: string;
  competitors?: { id: string; name: string; country_code?: string }[];
}

export interface BetbyEvent {
  id: string;
  desc?: BetbyDesc;
  state?: {
    provider?: string;
    status?: number;
    match_status?: number;
    clock?: { match_time?: string; stopped?: boolean; timestamp?: number };
  };
  score?: {
    home_score?: string | number;
    away_score?: string | number;
    period_scores?: { number: number; home_score: number; away_score: number; match_status_code?: number }[];
    [key: string]: unknown;
  };
  markets: BetbyMarkets;
}

interface Delta {
  desc?: BetbyDesc;
  state?: BetbyEvent['state'];
  score?: BetbyEvent['score'];
  markets?: Record<string, Record<string, Record<string, BetbyOutcome> | null> | null>;
}

export function feedUrl(feed: BetbyFeed, cursor: string | number) {
  const { baseUrl, brandId, locale } = BETBY_CONFIG;
  return `${baseUrl}/api/v4/${feed}/brand/${brandId}/${locale}/${cursor}`;
}

export interface BetbyDescriptions {
  markets?: Record<
    string,
    { name: string; variants?: Record<string, { name: string; outcomes: { id: string; name: string }[] }[]> }
  >;
}

export interface BetbyDistribution {
  markets?: { market_id: number; outcomes: { outcome_id: number; percentage: number }[] }[];
}

/** Nomes dos mercados e seleções de um jogo (sobretudo mercados com jogadores ou variantes). */
export async function fetchDescriptions(eventId: string): Promise<BetbyDescriptions> {
  const { baseUrl, brandId, locale } = BETBY_CONFIG;
  return getJson(`${baseUrl}/api/v3/descriptions/brand/${brandId}/event/${eventId}/${locale}`) as Promise<BetbyDescriptions>;
}

/** Percentagem das apostas em cada seleção (ex.: 1X2). */
export async function fetchBetDistribution(eventId: string): Promise<BetbyDistribution> {
  const { baseUrl, brandId } = BETBY_CONFIG;
  return getJson(`${baseUrl}/api/v1/betdistribution/brand/${brandId}/event/${eventId}`) as Promise<BetbyDistribution>;
}

async function getJson(url: string, signal?: AbortSignal) {
  const res = await fetch(url, { headers: { accept: 'application/json' }, cache: 'no-store', signal });
  const text = await res.text();
  if (!res.ok) {
    const reason = res.headers.get('bb-rsn');
    throw new Error(`HTTP ${res.status}${reason ? ` (bb-rsn: ${reason})` : ''}: ${text.slice(0, 160)}`);
  }
  return JSON.parse(text) as Record<string, unknown>;
}

// Nomes de desportos, categorias e torneios: chegam nas respostas (sports / categories / tournaments).
export interface BetbyDictionaries {
  sports: Record<string, { name: string; slug?: string }>;
  categories: Record<string, { sport_id?: string; name: string; country_code?: string }>;
  tournaments: Record<string, { category_id?: string; name: string }>;
}

export function emptyDictionaries(): BetbyDictionaries {
  return { sports: {}, categories: {}, tournaments: {} };
}

export function applyDictionaries(dict: BetbyDictionaries, payload: Record<string, unknown> | null) {
  for (const key of ['sports', 'categories', 'tournaments'] as const) {
    const part = payload?.[key];
    if (part && typeof part === 'object') Object.assign(dict[key], part);
  }
}

export function applyDeltas(store: Map<string, BetbyEvent>, payload: Record<string, unknown> | null) {
  const events = payload?.events;
  if (!events || typeof events !== 'object' || Array.isArray(events)) return;
  for (const [id, raw] of Object.entries(events as Record<string, Delta | null>)) {
    if (raw === null) {
      store.delete(id);
      continue;
    }
    if (!raw || typeof raw !== 'object') continue;
    const current: BetbyEvent = store.get(id) ?? { id, markets: {} };
    if (raw.desc) current.desc = { ...current.desc, ...raw.desc };
    if (raw.state) current.state = { ...current.state, ...raw.state };
    if (raw.score) current.score = { ...current.score, ...raw.score };
    if (raw.markets) {
      for (const [marketId, variants] of Object.entries(raw.markets)) {
        if (variants === null) {
          delete current.markets[marketId];
          continue;
        }
        const merged = { ...current.markets[marketId] };
        for (const [variant, outcomes] of Object.entries(variants)) {
          if (outcomes === null) delete merged[variant];
          else merged[variant] = outcomes;
        }
        current.markets[marketId] = merged;
      }
    }
    store.set(id, current);
  }
}

function versionsOf(index: Record<string, unknown>) {
  const list = [
    ...(Array.isArray(index.top_events_versions) ? index.top_events_versions : []),
    ...(Array.isArray(index.rest_events_versions) ? index.rest_events_versions : []),
  ];
  return [...new Set(list.map(String).filter((v) => /^\d+$/.test(v)))];
}

// Mercados principais (ids no padrão Betradar usado pela BETBY): 1 = 1X2; 186/219/340 = vencedor.
const MAIN_MARKETS: { id: string; labels: Record<string, string> }[] = [
  { id: '1', labels: { '1': '1', '2': 'X', '3': '2' } },
  { id: '186', labels: { '4': '1', '5': '2' } },
  { id: '219', labels: { '4': '1', '5': '2' } },
  { id: '340', labels: { '4': '1', '5': '2' } },
];

export function mainOdds(event: BetbyEvent) {
  for (const { id, labels } of MAIN_MARKETS) {
    const outcomes = event.markets[id]?.[''];
    if (!outcomes) continue;
    return Object.keys(labels)
      .filter((o) => outcomes[o])
      .map((o) => ({ label: labels[o], odd: outcomes[o].k ?? '—', blocked: outcomes[o].b === 1 }));
  }
  return [];
}

export function shortId(id: string) {
  return `#${id.slice(-6)}`;
}

/** "Casa vs Fora" quando a BETBY já enviou o desc do jogo; senão "Jogo #id". */
export function eventTitle(event: BetbyEvent) {
  const names = event.desc?.competitors?.map((c) => c.name).filter(Boolean) ?? [];
  return names.length >= 2 ? `${names[0]} vs ${names[1]}` : names[0] ?? `Jogo ${shortId(event.id)}`;
}

/** "Desporto · Torneio" a partir dos dicionários. */
export function eventLabel(event: BetbyEvent, dict: BetbyDictionaries) {
  const sport = event.desc?.sport ? dict.sports[event.desc.sport]?.name : undefined;
  const tournament = event.desc?.tournament ? dict.tournaments[event.desc.tournament]?.name : undefined;
  return [sport, tournament].filter(Boolean).join(' · ');
}

export function eventStart(event: BetbyEvent) {
  return event.desc?.scheduled ? new Date(event.desc.scheduled * 1000) : null;
}

/** Lê o feed no navegador a cada `intervalMs` e mantém o estado atual de cada jogo. */
export function useBetbyFeed(feed: BetbyFeed, intervalMs = 15000) {
  const storeRef = React.useRef(new Map<string, BetbyEvent>());
  const dictRef = React.useRef(emptyDictionaries());
  const [events, setEvents] = React.useState<BetbyEvent[]>([]);
  const [dictionaries, setDictionaries] = React.useState<BetbyDictionaries>(emptyDictionaries());
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [updatedAt, setUpdatedAt] = React.useState<Date | null>(null);

  const load = React.useCallback(async () => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    try {
      const store = storeRef.current;
      const dict = dictRef.current;
      const index = await getJson(feedUrl(feed, 0), controller.signal);
      applyDictionaries(dict, index);
      applyDeltas(store, index);
      for (const version of versionsOf(index)) {
        const payload = await getJson(feedUrl(feed, version), controller.signal);
        applyDictionaries(dict, payload);
        applyDeltas(store, payload);
      }
      setEvents([...store.values()]);
      setDictionaries({ sports: { ...dict.sports }, categories: { ...dict.categories }, tournaments: { ...dict.tournaments } });
      setUpdatedAt(new Date());
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? (err.name === 'AbortError' ? 'A BETBY não respondeu a tempo.' : err.message) : 'Falha ao ler a BETBY.');
    } finally {
      clearTimeout(timer);
      setLoading(false);
    }
  }, [feed]);

  React.useEffect(() => {
    void load();
    const id = setInterval(() => void load(), intervalMs);
    return () => clearInterval(id);
  }, [load, intervalMs]);

  return { events, dictionaries, loading, error, updatedAt, reload: load };
}
