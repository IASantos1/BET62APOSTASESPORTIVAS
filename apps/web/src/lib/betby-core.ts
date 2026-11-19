// Núcleo do feed da BETBY, sem React: tipos e a aplicação das atualizações (deltas). Usado no
// navegador (lib/betby.ts) e no servidor (lib/server/betby-feed.ts, validação das apostas).

export type BetbyFeed = 'live' | 'prematch';

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
    home_gamescore?: string | number;
    away_gamescore?: string | number;
    period_scores?: { number: number; home_score: number; away_score: number; match_status_code?: number }[];
    [key: string]: unknown;
  };
  markets: BetbyMarkets;
  /** quando chegaram odds novas deste jogo (ms; aqui, não da BETBY) */
  marketsAt?: number;
  /** quando o placar mudou pela última vez (ms) */
  scoreChangedAt?: number;
}

interface Delta {
  desc?: BetbyDesc;
  state?: BetbyEvent['state'];
  score?: BetbyEvent['score'];
  markets?: Record<string, Record<string, Record<string, BetbyOutcome> | null> | null>;
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

/** Tolerância entre o placar e as odds novas (a BETBY manda-os em atualizações separadas). */
const SCORE_ODDS_GRACE_MS = 3_000;

/** Ao vivo: odds de antes do último golo (o placar mudou e não chegaram odds novas) → suspensas. */
export function oddsStale(raw: Pick<BetbyEvent, 'marketsAt' | 'scoreChangedAt'>) {
  return !!raw.scoreChangedAt && (!raw.marketsAt || raw.marketsAt < raw.scoreChangedAt - SCORE_ODDS_GRACE_MS);
}

export function applyDeltas(
  store: Map<string, BetbyEvent>,
  payload: Record<string, unknown> | null,
  lastEventUpdates?: Map<string, number>,
) {
  const events = payload?.events;
  if (!events || typeof events !== 'object' || Array.isArray(events)) return;
  for (const [id, raw] of Object.entries(events as Record<string, Delta | null>)) {
    if (raw === null) {
      store.delete(id);
      lastEventUpdates?.delete(id);
      continue;
    }
    if (!raw || typeof raw !== 'object') continue;
    lastEventUpdates?.set(id, Date.now());
    const current: BetbyEvent = store.get(id) ?? { id, markets: {} };
    if (raw.desc) current.desc = { ...current.desc, ...raw.desc };
    if (raw.state) current.state = { ...current.state, ...raw.state };
    if (raw.score) {
      const before = `${current.score?.home_score ?? ''}-${current.score?.away_score ?? ''}`;
      current.score = { ...current.score, ...raw.score };
      const after = `${current.score?.home_score ?? ''}-${current.score?.away_score ?? ''}`;
      // Golo (ou correção do placar): as odds anteriores deixam de valer até chegarem novas.
      if (before !== '-' && before !== after) current.scoreChangedAt = Date.now();
    }
    if (raw.markets) {
      // "Odds novas" só quando alguma muda de facto (uma releitura das mesmas versões não conta).
      let changed = false;
      for (const [marketId, variants] of Object.entries(raw.markets)) {
        if (variants === null) {
          if (current.markets[marketId]) changed = true;
          delete current.markets[marketId];
          continue;
        }
        const before = current.markets[marketId];
        const merged = { ...before };
        for (const [variant, outcomes] of Object.entries(variants)) {
          if (outcomes === null) delete merged[variant];
          else merged[variant] = outcomes;
        }
        if (!changed && JSON.stringify(before ?? null) !== JSON.stringify(merged)) changed = true;
        current.markets[marketId] = merged;
      }
      if (changed) current.marketsAt = Date.now();
    }
    store.set(id, current);
  }
}

export function versionsOf(index: Record<string, unknown>) {
  const list = [
    ...(Array.isArray(index.top_events_versions) ? index.top_events_versions : []),
    ...(Array.isArray(index.rest_events_versions) ? index.rest_events_versions : []),
  ];
  return [...new Set(list.map(String).filter((v) => /^\d+$/.test(v)))];
}


/**
 * O feed da BETBY por fotografias: o índice traz poucas versões (top / rest) e cada uma é a
 * fotografia completa dos seus jogos; a cada ~30 s há versões novas e as antigas saem. Por isso o
 * quadro é refeito a partir das versões atuais, sem juntar com o anterior: um mercado que não vem
 * (suspenso num lance perigoso, depois de um golo) desaparece em vez de ficar com a odd antiga, e
 * um jogo que não vem sai. Do quadro anterior só se guarda quando as odds/placar mudaram.
 */
export function rebuildFromSnapshots(
  prev: Map<string, BetbyEvent>,
  payloads: Record<string, unknown>[],
  lastEventUpdates?: Map<string, number>,
  now = Date.now(),
) {
  const next = new Map<string, BetbyEvent>();
  for (const payload of payloads) {
    const events = payload?.events;
    if (!events || typeof events !== 'object' || Array.isArray(events)) continue;
    for (const [id, raw] of Object.entries(events as Record<string, Delta | null>)) {
      if (raw === null) {
        next.delete(id);
        continue;
      }
      if (!raw || typeof raw !== 'object') continue;
      const old = prev.get(id);
      const markets: BetbyMarkets = {};
      for (const [m, variants] of Object.entries(raw.markets ?? {})) {
        if (!variants) continue;
        const clean: Record<string, Record<string, BetbyOutcome>> = {};
        for (const [v, outcomes] of Object.entries(variants)) if (outcomes) clean[v] = outcomes;
        if (Object.keys(clean).length) markets[m] = clean;
      }
      const ev: BetbyEvent = {
        id,
        desc: raw.desc ?? old?.desc,
        state: raw.state ?? old?.state,
        score: raw.score ?? old?.score,
        markets,
        marketsAt: old?.marketsAt,
        scoreChangedAt: old?.scoreChangedAt,
      };
      const marketsChanged = !old || JSON.stringify(old.markets) !== JSON.stringify(markets);
      if (marketsChanged) ev.marketsAt = now;
      const s = (x?: BetbyEvent['score']) => `${x?.home_score ?? ''}-${x?.away_score ?? ''}`;
      if (old && s(old.score) !== '-' && s(old.score) !== s(ev.score)) ev.scoreChangedAt = now;
      if (!old || marketsChanged || JSON.stringify(old.state) !== JSON.stringify(ev.state) || s(old.score) !== s(ev.score)) lastEventUpdates?.set(id, now);
      next.set(id, ev);
    }
  }
  if (lastEventUpdates) for (const id of lastEventUpdates.keys()) if (!next.has(id)) lastEventUpdates.delete(id);
  return next;
}
