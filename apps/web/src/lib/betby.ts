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

// ---------- side feed: widgets por jogo (minicampo, estatísticas e transmissão) ----------
// O feed de odds (live/prematch) não traz os widgets de cada jogo. Esses vêm num feed próprio
// (sem locale), com o mesmo esquema de versões/deltas:
//   GET {base}/api/v1/side/brand/{brand}/0          -> índice { version }
//   GET {base}/api/v1/side/brand/{brand}/{version}  -> { items, version, snapshot_complete? }
// Cada item é [[idDoJogo, tipo], valor|null]; o tipo é "widget" (minicampo/estatísticas) ou
// "broadcasts" (transmissão). A chave é o MESMO id de evento do feed de odds. Cada valor:
//   { id: "statscore", type: "scoreboard", event_id: 6820840 }   <- Statscore: id do jogo no fornecedor
//   { id: "oddin", type: "statistics", url: "https://…" }        <- Oddin/Betgenius: endereço pronto
export interface BetbySideItem {
  /** Fornecedor/id do widget: statscore, oddin, betgenius… */
  id: string;
  /** scoreboard, statistics, iframe… */
  type: string;
  /** Evento no fornecedor (Statscore) — é o que abre o minicampo. */
  event_id?: number | string;
  /** Endereço pronto do widget (Oddin, Betgenius, transmissões). */
  url?: string;
}

export type BetbySideKind = 'widget' | 'broadcasts';

export function sideFeedUrl(cursor: string | number) {
  const { baseUrl, brandId } = BETBY_CONFIG;
  return `${baseUrl}/api/v1/side/brand/${brandId}/${cursor}`;
}

/** Aplica um pedaço do side feed (índice ou delta) a um mapa evento -> itens, para um dos tipos. */
export function applySideItems(store: Map<string, BetbySideItem[]>, payload: Record<string, unknown> | null, kind: BetbySideKind) {
  const items = payload?.items;
  if (!Array.isArray(items)) return;
  for (const item of items) {
    if (!Array.isArray(item) || item.length !== 2) continue;
    const key = item[0];
    if (!Array.isArray(key) || key.length !== 2 || key[1] !== kind) continue;
    const eventId = String(key[0]);
    const value = item[1];
    if (value === null || value === undefined) store.delete(eventId);
    else if (Array.isArray(value)) store.set(eventId, value as BetbySideItem[]);
  }
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

const SNAPSHOT_MAX_AGE = 10 * 60_000;
interface Snapshot {
  at: number;
  events: [string, BetbyEvent][];
  dict: BetbyDictionaries;
  applied: string[];
}
const snapshotKey = (feed: BetbyFeed) => `bet62-feed-${BETBY_CONFIG.brandId}-${feed}`;
function readSnapshot(feed: BetbyFeed): Snapshot | null {
  try {
    const s = JSON.parse(localStorage.getItem(snapshotKey(feed)) || 'null') as Snapshot | null;
    return s && Date.now() - s.at < SNAPSHOT_MAX_AGE ? s : null;
  } catch {
    return null;
  }
}
function writeSnapshot(feed: BetbyFeed, s: Snapshot) {
  try {
    localStorage.setItem(snapshotKey(feed), JSON.stringify(s));
  } catch {
    // Sem espaço ou bloqueado: a página funciona na mesma, só não abre com o último quadro.
  }
}

/** Lê várias versões em paralelo (no máximo `n` de cada vez), devolvidas pela ordem pedida. */
async function fetchVersions(feed: BetbyFeed, versions: string[], signal: AbortSignal, n = 6) {
  const out: (Record<string, unknown> | null)[] = new Array(versions.length).fill(null);
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(n, versions.length) }, async () => {
      while (next < versions.length) {
        const i = next++;
        out[i] = await getJson(feedUrl(feed, versions[i]), signal);
      }
    }),
  );
  return out;
}

/**
 * Lê o feed no navegador a cada `intervalMs` e mantém o estado atual de cada jogo.
 * Só as versões novas do índice são descarregadas (as já aplicadas não mudam), em paralelo; o último
 * quadro fica guardado no navegador para a página seguinte abrir logo com ele.
 */
export function useBetbyFeed(feed: BetbyFeed, intervalMs = 15000) {
  const storeRef = React.useRef(new Map<string, BetbyEvent>());
  const dictRef = React.useRef(emptyDictionaries());
  const appliedRef = React.useRef(new Set<string>());
  const busyRef = React.useRef(false);
  const [events, setEvents] = React.useState<BetbyEvent[]>([]);
  const [dictionaries, setDictionaries] = React.useState<BetbyDictionaries>(emptyDictionaries());
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [updatedAt, setUpdatedAt] = React.useState<Date | null>(null);

  const publish = React.useCallback(() => {
    const dict = dictRef.current;
    setEvents([...storeRef.current.values()]);
    setDictionaries({ sports: { ...dict.sports }, categories: { ...dict.categories }, tournaments: { ...dict.tournaments } });
  }, []);

  // Abre com o último quadro guardado (até 10 min), enquanto o novo chega.
  React.useEffect(() => {
    const snap = readSnapshot(feed);
    if (!snap || storeRef.current.size) return;
    storeRef.current = new Map(snap.events);
    dictRef.current = snap.dict;
    appliedRef.current = new Set(snap.applied);
    publish();
    setUpdatedAt(new Date(snap.at));
    setLoading(false);
  }, [feed, publish]);

  const load = React.useCallback(async () => {
    if (busyRef.current) return;
    busyRef.current = true;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    try {
      const store = storeRef.current;
      const dict = dictRef.current;
      const index = await getJson(feedUrl(feed, 0), controller.signal);
      applyDictionaries(dict, index);
      applyDeltas(store, index);
      const versions = versionsOf(index);
      const fresh = versions.filter((v) => !appliedRef.current.has(v));
      const payloads = await fetchVersions(feed, fresh, controller.signal);
      payloads.forEach((payload, i) => {
        applyDictionaries(dict, payload);
        applyDeltas(store, payload);
        appliedRef.current.add(fresh[i]);
      });
      // Esquece versões que já saíram do índice (a lista não cresce para sempre).
      const current = new Set(versions);
      for (const v of appliedRef.current) if (!current.has(v)) appliedRef.current.delete(v);
      publish();
      setUpdatedAt(new Date());
      setError(null);
      writeSnapshot(feed, { at: Date.now(), events: [...store.entries()], dict, applied: [...appliedRef.current] });
    } catch (err) {
      setError(err instanceof Error ? (err.name === 'AbortError' ? 'A BETBY não respondeu a tempo.' : err.message) : 'Falha ao ler a BETBY.');
    } finally {
      clearTimeout(timer);
      busyRef.current = false;
      setLoading(false);
    }
  }, [feed, publish]);

  React.useEffect(() => {
    void load();
    const id = setInterval(() => void load(), intervalMs);
    return () => clearInterval(id);
  }, [load, intervalMs]);

  return { events, dictionaries, loading, error, updatedAt, reload: load };
}

/**
 * Lê o "side feed" da BETBY a cada `intervalMs`: os widgets por jogo (minicampo e estatísticas) e as
 * transmissões. Não substitui o feed de odds — é o único sítio onde vem, p. ex., o id Statscore que
 * abre o minicampo. Se falhar, o site continua a funcionar sem estes extras.
 */
export function useBetbySide(intervalMs = 20000) {
  const widgetsRef = React.useRef(new Map<string, BetbySideItem[]>());
  const broadcastsRef = React.useRef(new Map<string, BetbySideItem[]>());
  const versionRef = React.useRef<string | null>(null);
  const busyRef = React.useRef(false);
  const [widgets, setWidgets] = React.useState(new Map<string, BetbySideItem[]>());
  const [broadcasts, setBroadcasts] = React.useState(new Map<string, BetbySideItem[]>());
  const [loading, setLoading] = React.useState(true);

  const load = React.useCallback(async () => {
    if (busyRef.current) return;
    busyRef.current = true;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    try {
      // Ainda sem versão: o índice /0 diz qual é a atual.
      if (!versionRef.current) {
        const index = await getJson(sideFeedUrl(0), controller.signal);
        if (index.version !== undefined && index.version !== null) versionRef.current = String(index.version);
      }
      if (!versionRef.current) return;
      const payload = await getJson(sideFeedUrl(versionRef.current), controller.signal);
      applySideItems(widgetsRef.current, payload, 'widget');
      applySideItems(broadcastsRef.current, payload, 'broadcasts');
      if (payload.version !== undefined && payload.version !== null) versionRef.current = String(payload.version);
      setWidgets(new Map(widgetsRef.current));
      setBroadcasts(new Map(broadcastsRef.current));
    } catch {
      // O side feed é um extra: sem ele a página mostra os mercados, só não mostra o minicampo.
    } finally {
      clearTimeout(timer);
      busyRef.current = false;
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    void load();
    const id = setInterval(() => void load(), intervalMs);
    return () => clearInterval(id);
  }, [load, intervalMs]);

  return { widgets, broadcasts, loading };
}
