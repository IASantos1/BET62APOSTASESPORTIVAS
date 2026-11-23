import { FileCache } from './store';

// GOAL API: enriches WinHouse football fixtures with identity, match statistics,
// lineups, H2H and standings. The credential is read only on the server.
type Match = { id: string; home: string; away: string; startTime: string; sport: string; competition?: string | null };
type Fixture = { id: string; at: number; home: string; away: string; homeId: string; awayId: string; leagueId: string | null; raw: Record<string, unknown> };
const cache = new FileCache<unknown>('goal-api');
const HOUR = 3_600_000;
const pending = new Map<string, Promise<unknown>>();
const key = () => (process.env.GOAL_API_KEY || '').trim();
const base = () => (process.env.GOAL_API_BASE_URL || 'https://api.goal-api.com/v1').trim().replace(/\/+$/, '');
const norm = (v: unknown) => String(v ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\b(fc|cf|sc|ac|afc|club|de|the)\b/g, ' ').replace(/[^a-z0-9]+/g, ' ').trim();
const unwrap = (v: any): any[] => Array.isArray(v) ? v : ['fixtures', 'items', 'results', 'data'].map((k) => v?.[k]).find(Array.isArray) ?? [];
const compact = (raw: any): Fixture | null => {
  const home = raw?.homeTeam ?? raw?.home_team ?? raw?.home ?? {};
  const away = raw?.awayTeam ?? raw?.away_team ?? raw?.away ?? {};
  const at = Date.parse(raw?.kickoffUtc ?? raw?.kickoff ?? raw?.date ?? raw?.matchDate ?? '');
  const id = raw?.id ?? raw?.fixtureId ?? raw?.match_id;
  const homeName = typeof home === 'string' ? home : home?.name ?? raw?.homeTeamName ?? raw?.match_hometeam_name;
  const awayName = typeof away === 'string' ? away : away?.name ?? raw?.awayTeamName ?? raw?.match_awayteam_name;
  const homeId = home?.id ?? raw?.homeTeamId ?? raw?.match_hometeam_id;
  const awayId = away?.id ?? raw?.awayTeamId ?? raw?.match_awayteam_id;
  if (!id || !Number.isFinite(at) || !homeName || !awayName || !homeId || !awayId) return null;
  return { id: String(id), at, home: String(homeName), away: String(awayName), homeId: String(homeId), awayId: String(awayId), leagueId: String(raw?.leagueId ?? raw?.league?.id ?? raw?.league_id ?? '') || null, raw };
};
const similar = (a: string, b: string) => {
  const x = norm(a).split(' ').filter((s) => s.length > 2), y = norm(b).split(' ').filter((s) => s.length > 2);
  return !!x.length && !!y.length && (x.join(' ') === y.join(' ') || x.every((s) => y.includes(s)) || y.every((s) => x.includes(s)) || x.some((s) => y.some((t) => s.startsWith(t) || t.startsWith(s))));
};
const list = (body: any) => unwrap(body?.data ?? body);
const cacheGet = async <T>(k: string, ttl: number, load: () => Promise<T>): Promise<T> => {
  const saved = cache.get(k, ttl) as T | undefined;
  if (saved !== undefined) return saved;
  const active = pending.get(k);
  if (active) return active as Promise<T>;
  const request = load().then((value) => { cache.set(k, value); return value; }).finally(() => pending.delete(k));
  pending.set(k, request);
  return request;
};

async function request(path: string) {
  const credential = key();
  if (!credential) throw new Error('Goal API não configurada: defina GOAL_API_KEY no servidor.');
  const res = await fetch(`${base()}${path}`, { headers: { Authorization: `Bearer ${credential}`, Accept: 'application/json' }, signal: AbortSignal.timeout(10_000), cache: 'no-store' });
  if (!res.ok) throw new Error(`Goal API respondeu HTTP ${res.status}.`);
  const body: any = await res.json();
  if (body?.success === false) throw new Error(String(body.error ?? body.message ?? 'Resposta inválida da Goal API.'));
  return body;
}

async function fixtureFor(match: Match): Promise<Fixture | null> {
  const at = Date.parse(match.startTime);
  if (!Number.isFinite(at) || at < Date.now() - 3 * HOUR || at > Date.now() + 8 * 24 * HOUR) return null;
  const dates = [...new Set([-1, 0, 1].map((d) => new Date(at + d * 86_400_000).toISOString().slice(0, 10)))];
  const candidates = (await Promise.all(dates.map((date) => cacheGet(`fixtures:${date}`, 12 * HOUR, async () => {
    const result: any[] = [];
    for (let offset = 0; offset < 3_000; offset += 100) {
      const body = await request(`/fixtures/date/${date}?limit=100&offset=${offset}`);
      const page = list(body).map(compact).filter(Boolean) as Fixture[];
      result.push(...page);
      const pagination = body?.pagination ?? body?.data?.pagination ?? body?.meta;
      const more = pagination?.hasMore ?? pagination?.has_more ?? (Number.isFinite(Number(pagination?.total)) ? offset + page.length < Number(pagination.total) : page.length >= 100);
      if (!page.length || !more) break;
    }
    return result;
  })))).flat();
  const within = candidates.filter((f) => Math.abs(f.at - at) <= 3 * HOUR && similar(match.home, f.home) && similar(match.away, f.away));
  within.sort((a, b) => Math.abs(a.at - at) - Math.abs(b.at - at));
  if (!within.length || (within[1] && Math.abs(within[1].at - at) === Math.abs(within[0].at - at))) return null;
  return within[0];
}

/** Returns a best-effort football enrichment. Provider outages never break WinHouse odds/events. */
export async function goalApiMatch(match: Match) {
  if (!key() || match.sport !== 'futebol') return { configured: !!key(), linked: false, fixture: null, statistics: null, lineups: null, h2h: null, standings: null, error: null };
  try {
    const fixture = await fixtureFor(match);
    if (!fixture) return { configured: true, linked: false, fixture: null, statistics: null, lineups: null, h2h: null, standings: null, error: null };
    const get = (name: string, ttl: number, path: string) => cacheGet(`match:${fixture.id}:${name}`, ttl, () => request(path).then((v: any) => v?.data ?? v));
    const safe = (p: Promise<any>) => p.catch(() => null);
    const [stats, lineups, h2h, standings] = await Promise.all([
      safe(get('statistics', 60_000, `/fixtures/${encodeURIComponent(fixture.id)}/statistics`)),
      safe(get('lineups', 10 * 60_000, `/fixtures/${encodeURIComponent(fixture.id)}/lineups`)),
      safe(get('h2h', 12 * HOUR, `/h2h/${encodeURIComponent(fixture.homeId)}/${encodeURIComponent(fixture.awayId)}/direct`)),
      fixture.leagueId ? safe(get('standings', 6 * HOUR, `/standings/${encodeURIComponent(fixture.leagueId)}`)) : Promise.resolve(null),
    ]);
    const rows = Array.isArray(stats) ? stats : stats?.statistics ?? stats?.items ?? [];
    const normalizedStats: Record<string, { home: number; away: number }> = {};
    for (const row of rows) {
      const name = String(row?.type ?? row?.name ?? '').toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
      const values = row?.values ?? row?.teams ?? row;
      const home = Number(values?.home ?? values?.homeValue ?? values?.[0]?.value);
      const away = Number(values?.away ?? values?.awayValue ?? values?.[1]?.value);
      if (name && Number.isFinite(home) && Number.isFinite(away)) normalizedStats[name] = { home, away };
    }
    return { configured: true, linked: true, fixture: { id: fixture.id, home: fixture.home, away: fixture.away, competition: fixture.raw?.leagueName ?? fixture.raw?.league_name ?? null }, statistics: normalizedStats, lineups, h2h, standings, error: null };
  } catch (error) {
    return { configured: true, linked: false, fixture: null, statistics: null, lineups: null, h2h: null, standings: null, error: error instanceof Error ? error.message : 'Falha ao consultar Goal API.' };
  }
}
