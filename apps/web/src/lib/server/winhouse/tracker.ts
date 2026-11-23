import type { WinHouseClient } from './client';

export type WinHouseStats = Record<string, { home: number; away: number }>;

const FIRST = (...values: unknown[]) => values.find((value) => value !== undefined && value !== null && value !== '');
const NUMBER = (value: unknown) => value === null || value === undefined || value === '' || !Number.isFinite(Number(String(value).replace('%', '').replace(',', '.'))) ? null : Number(String(value).replace('%', '').replace(',', '.'));

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
  if (/^(goals?|score|home_score|away_score|h1|h2|ht|timer|time|period|status|points|t|s\d+)$/i.test(name.trim())) return null;
  const known = STAT_NAMES.find(([pattern]) => pattern.test(name))?.[1];
  if (known) return known;
  const key = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
  return key && key.length <= 60 ? key : null;
}

/** Normaliza as estatísticas do widget-data rico e do endpoint alternativo /ajax/tracker/{id}. */
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
    for (const [name, value] of Object.entries(values)) add(name === 'xg' ? 'expected goals' : name === 'shots' ? 'total shots' : name, value);
  }
  if (data.sc && typeof data.sc === 'object' && !Array.isArray(data.sc)) {
    for (const [name, value] of Object.entries(data.sc)) add(name.replace(/_/g, ' '), value);
  }

  return Object.keys(out).length ? out : null;
}

const cache = new Map<string, { at: number; stats: WinHouseStats | null }>();
const pending = new Map<string, Promise<WinHouseStats | null>>();

function widgetCredentials(body: unknown, text = '') {
  const raw = body && typeof body === 'object' ? body as Record<string, unknown> : {};
  const data = raw.data && typeof raw.data === 'object' ? { ...raw, ...(raw.data as Record<string, unknown>) } : raw;
  const eid = FIRST(data.eid, data.EID, data.event_id, data.eventId, data.tracker_id, data.match_id);
  const akey = FIRST(data.akey, data.AKEY, data.api_key, data.apiKey, data.key, data.token);
  if (eid && akey) return { eid: String(eid), akey: String(akey) };
  const source = String(text || '');
  const pick = (names: string[]) => {
    for (const name of names) {
      const match = new RegExp(`[?&"'\\s{,]${name}["']?\\s*(?:=|:)\\s*["']?([A-Za-z0-9_.:-]{2,128})`, 'i').exec(source);
      if (match) return match[1];
    }
    return null;
  };
  const url = /(?:widget-data|ws-widget)[^"'\s<>]*/.exec(source)?.[0] || '';
  const fromUrl = (names: string[]) => {
    for (const name of names) {
      const m = new RegExp(`[?&]${name}=([A-Za-z0-9_.:-]{2,128})`, 'i').exec(url);
      if (m) return m[1];
    }
    return null;
  };
  const parsedEid = fromUrl(['event_id']) || pick(['EID', 'eid', 'eventId', 'event_id']);
  const parsedKey = fromUrl(['api_key']) || pick(['AKEY', 'akey', 'apiKey', 'api_key']);
  return parsedEid && parsedKey ? { eid: parsedEid, akey: parsedKey } : null;
}

async function readRichTracker(client: WinHouseClient, gameId: string) {
  // The widget-data feed has richer statistics (including xG) than the plain tracker endpoint.
  try {
    const widget = await client.widget(gameId);
    const credentials = widget.ok ? widgetCredentials(widget.body, widget.text) : null;
    if (credentials) {
      const rich = await client.widgetData(credentials.eid, credentials.akey);
      if (rich.ok) {
        const stats = normalizeWinHouseStats(rich.body);
        if (stats && Object.keys(stats).length) return stats;
      }
    }
  } catch {
    // Some games do not have the richer widget; use the plain WinHouse tracker below.
  }
  const response = await client.tracker(gameId);
  return response.ok ? normalizeWinHouseStats(response.body) : null;
}

/** Caches watched-match stats to keep the browser's 5s detail refresh from over-polling WinHouse. */
export async function readWinHouseStats(client: WinHouseClient, gameId: string): Promise<WinHouseStats | null> {
  if ((process.env.WINHOUSE_TRACKER ?? 'on').toLowerCase() === 'off') return null;
  const ttl = Math.min(120, Math.max(5, Number(process.env.WINHOUSE_TRACKER_CACHE_SECONDS) || 15)) * 1000;
  const cached = cache.get(gameId);
  if (cached && Date.now() - cached.at < ttl) return cached.stats;
  const inProgress = pending.get(gameId);
  if (inProgress) return inProgress;

  const request = readRichTracker(client, gameId).catch(() => null).then((stats) => {
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
