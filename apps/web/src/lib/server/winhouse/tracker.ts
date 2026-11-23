import type { WinHouseClient } from './client';

export type WinHouseStats = Record<string, { home: number; away: number }>;

const FIRST = (...values: unknown[]) => values.find((value) => value !== undefined && value !== null && value !== '');
const NUMBER = (value: unknown) => value === null || value === undefined || value === '' || !Number.isFinite(Number(value)) ? null : Number(value);

function pair(value: unknown): [number | null, number | null] {
  if (Array.isArray(value) && value.length >= 2) return [NUMBER(value[0]), NUMBER(value[1])];
  if (value && typeof value === 'object') {
    const row = value as Record<string, unknown>;
    return [NUMBER(FIRST(row.home, row.h, row[1], row['1'], row.team1, row.t1)), NUMBER(FIRST(row.away, row.a, row[2], row['2'], row.team2, row.t2))];
  }
  const match = /^\s*([\d.]+)\s*[:\-/|]\s*([\d.]+)\s*$/.exec(String(value ?? ''));
  return match ? [NUMBER(match[1]), NUMBER(match[2])] : [null, null];
}

const STAT_NAMES: [RegExp, string][] = [
  [/possess|posse/i, 'ball_possession'],
  [/dangerous/i, 'dangerous_attacks'],
  [/attack/i, 'attacks'],
  [/on.?target|no alvo|shots? on/i, 'shots_on_target'],
  [/off.?target|fora/i, 'shots_off_target'],
  [/corner|canto/i, 'corners'],
  [/yellow|amarel/i, 'yellow_cards'],
  [/red|vermelh/i, 'red_cards'],
  [/penalt/i, 'penalties'],
  [/substitut/i, 'substitutions'],
  [/offside|fora de jogo/i, 'offsides'],
  [/foul|falta/i, 'fouls'],
  [/expected goals|\bxg\b/i, 'xg'],
  [/total shots|remates totais/i, 'shots_total'],
];

function statKey(name: string) {
  return STAT_NAMES.find(([pattern]) => pattern.test(name))?.[1] ?? null;
}

/** Normaliza os formatos de estatísticas usados pelo endpoint /ajax/tracker/{id}. */
export function normalizeWinHouseStats(body: unknown): WinHouseStats | null {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return null;
  const outer = body as Record<string, unknown>;
  const data = outer.data && typeof outer.data === 'object' && !Array.isArray(outer.data)
    ? { ...outer, ...(outer.data as Record<string, unknown>) }
    : outer;
  const out: WinHouseStats = {};
  const add = (name: unknown, value: unknown) => {
    const key = statKey(String(name ?? ''));
    if (!key || out[key]) return;
    const [home, away] = pair(value);
    if (home !== null && away !== null) out[key] = { home, away };
  };

  const rawStats = data.stats ?? data.statistics;
  if (Array.isArray(rawStats)) {
    for (const stat of rawStats) {
      if (!stat || typeof stat !== 'object') continue;
      const row = stat as Record<string, unknown>;
      add(FIRST(row.name, row.type, row.title, row.label, row.key), row.home !== undefined || row.away !== undefined ? row : FIRST(row.value, row.values, row.data, row));
    }
  } else if (rawStats && typeof rawStats === 'object') {
    for (const [name, value] of Object.entries(rawStats)) add(name, value);
  }

  // The plain tracker route uses these compact fields instead of a stats collection.
  for (const [field, label] of [
    ['on_target', 'shots on target'], ['off_target', 'shots off target'], ['attacks', 'attacks'],
    ['dangerous', 'dangerous attacks'], ['possession', 'possession'], ['red', 'red cards'], ['redc', 'red cards'],
    ['corner', 'corners'], ['corners', 'corners'], ['yelc', 'yellow cards'], ['yellow', 'yellow cards'],
    ['yellow_cards', 'yellow cards'], ['red_cards', 'red cards'], ['penalties', 'penalties'], ['offsides', 'offsides'],
    ['subs', 'substitutions'], ['fouls', 'fouls'],
  ]) add(label, data[field]);

  const plus = data.plus && typeof data.plus === 'object' ? (data.plus as Record<string, unknown>).stats : null;
  if (plus && typeof plus === 'object') {
    const values = plus as Record<string, unknown>;
    add('expected goals', values.xg);
    add('fouls', values.fouls);
    add('total shots', values.shots);
  }
  if (data.sc && typeof data.sc === 'object' && !Array.isArray(data.sc)) {
    for (const [name, value] of Object.entries(data.sc)) add(name.replace(/_/g, ' '), value);
  }

  return Object.keys(out).length ? out : null;
}

const cache = new Map<string, { at: number; stats: WinHouseStats | null }>();
const pending = new Map<string, Promise<WinHouseStats | null>>();

/** Caches watched-match stats to keep the browser's 5s detail refresh from over-polling WinHouse. */
export async function readWinHouseStats(client: WinHouseClient, gameId: string): Promise<WinHouseStats | null> {
  if ((process.env.WINHOUSE_TRACKER ?? 'on').toLowerCase() === 'off') return null;
  const ttl = Math.min(120, Math.max(5, Number(process.env.WINHOUSE_TRACKER_CACHE_SECONDS) || 15)) * 1000;
  const cached = cache.get(gameId);
  if (cached && Date.now() - cached.at < ttl) return cached.stats;
  const inProgress = pending.get(gameId);
  if (inProgress) return inProgress;

  const request = client.tracker(gameId).then((response) => response.ok ? normalizeWinHouseStats(response.body) : null).catch(() => null).then((stats) => {
    cache.set(gameId, { at: Date.now(), stats });
    if (cache.size > 300) {
      const oldest = cache.keys().next().value;
      if (oldest) cache.delete(oldest);
    }
    return stats;
  }).finally(() => pending.delete(gameId));
  pending.set(gameId, request);
  return request;
}
