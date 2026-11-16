import https from 'node:https';
import { FileCache } from './store';

// API-Football / API-Sports (chave API_FOOTBALL_KEY): emblemas das equipas (as estatísticas dos
// jogos vêm da BETBY). Como no outro projeto: só o cabeçalho da chave
// (a API recusa pedidos com outros cabeçalhos), poucos pedidos por minuto e um limite por dia
// (100 no plano grátis), tudo guardado em cache.

export const API_KEY = () =>
  (process.env.API_FOOTBALL_KEY || process.env.APIFOOTBALL_KEY || process.env.API_SPORTS_KEY || process.env.RAPIDAPI_KEY || '').trim();

const DAILY = Number(process.env.API_FOOTBALL_DAILY || 95);
const PER_MINUTE = Number(process.env.API_FOOTBALL_PER_MINUTE || 9);

type Api = 'football' | 'basketball';
const HOST: Record<Api, string> = { football: 'v3.football.api-sports.io', basketball: 'v1.basketball.api-sports.io' };

const state = {
  day: '',
  used: 0,
  minute: 0,
  minuteCalls: 0,
  remaining: null as number | null,
  lastError: null as string | null,
  lastOkAt: null as string | null,
};

export function apiSportsStatus() {
  return { configured: !!API_KEY(), usedToday: state.used, dailyLimit: DAILY, remaining: state.remaining, lastError: state.lastError, lastOkAt: state.lastOkAt };
}

function canCall() {
  const day = new Date().toISOString().slice(0, 10);
  if (state.day !== day) {
    state.day = day;
    state.used = 0;
  }
  const minute = Math.floor(Date.now() / 60_000);
  if (state.minute !== minute) {
    state.minute = minute;
    state.minuteCalls = 0;
  }
  return !!API_KEY() && state.used < DAILY && state.minuteCalls < PER_MINUTE && state.remaining !== 0;
}

function plainGet(url: string, headers: Record<string, string>): Promise<{ status: number; body: string; remaining: string | undefined }> {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers, timeout: 10_000 }, (res) => {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', (c) => (body += c));
      res.on('end', () =>
        resolve({ status: res.statusCode || 0, body, remaining: res.headers['x-ratelimit-requests-remaining'] as string | undefined }),
      );
    });
    req.on('timeout', () => req.destroy(new Error('timeout')));
    req.on('error', reject);
  });
}

/** Um pedido à API (conta para a quota). Devolve `response`, ou lança o erro da API. */
export async function apiCall<T = unknown>(api: Api, pathAndQuery: string): Promise<T[]> {
  if (!API_KEY()) throw new Error('API_FOOTBALL_KEY não está definida.');
  if (!canCall()) throw new Error('Limite de pedidos à API-Football atingido (minuto ou dia).');
  state.used += 1;
  state.minuteCalls += 1;
  const r = await plainGet(`https://${HOST[api]}/${pathAndQuery}`, { 'x-apisports-key': API_KEY() });
  if (r.remaining !== undefined && Number.isFinite(Number(r.remaining))) state.remaining = Number(r.remaining);
  let data: { response?: T[]; errors?: unknown } | null = null;
  try {
    data = JSON.parse(r.body);
  } catch {
    // não JSON
  }
  if (r.status !== 200 || !data) {
    state.lastError = `HTTP ${r.status}`;
    throw new Error(`API-Football HTTP ${r.status}`);
  }
  const errs = data.errors && (Array.isArray(data.errors) ? data.errors : Object.values(data.errors as object));
  if (errs && errs.length) {
    state.lastError = String(errs[0]).slice(0, 200);
    throw new Error(`API-Football: ${state.lastError}`);
  }
  state.lastOkAt = new Date().toISOString();
  return Array.isArray(data.response) ? data.response : data.response ? [data.response as T] : [];
}

// ---------- nomes ----------

export const loose = (s: string) =>
  String(s || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/\b(fc|cf|sc|ac|afc|cd|sd|ud|club|clube|de|futebol|football|calcio|sk|fk|bk|if|the)\b/g, ' ')
    .replace(/\b(sp|rj|mg|rs|pr|ba|ce|pe|go|sc)\b$/g, ' ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

/** Mesmo clube? "Coritiba FC PR" ~ "Coritiba", "Man Utd" ~ "Manchester United" (pelas palavras). */
export function sameTeam(a: string, b: string) {
  const x = loose(a);
  const y = loose(b);
  if (!x || !y) return false;
  if (x === y || x.includes(y) || y.includes(x)) return true;
  const wx = x.split(' ').filter((w) => w.length > 2);
  const wy = new Set(y.split(' ').filter((w) => w.length > 2));
  return wx.length > 0 && wx.filter((w) => wy.has(w)).length >= Math.min(2, wx.length);
}

// ---------- emblemas ----------

const logos = new FileCache<string | null>('team-logos');
const MONTH = 30 * 86_400_000;
const inflight = new Map<string, Promise<string | null>>();

// Equipas de uma liga inteira num só pedido (as ligas principais): poupa a quota diária.
const packs = new FileCache<{ name: string; logo: string }[]>('league-packs');
const packInflight = new Map<number, Promise<{ name: string; logo: string }[]>>();
function seasonsToTry() {
  const d = new Date();
  const y = d.getUTCFullYear();
  const euro = d.getUTCMonth() >= 6 ? y : y - 1;
  return [...new Set([euro, y, euro - 1, y - 1, y - 2])];
}
async function leaguePack(leagueId: number) {
  const hit = packs.get(String(leagueId), MONTH);
  if (hit) return hit;
  if (packInflight.has(leagueId)) return packInflight.get(leagueId)!;
  const p = (async () => {
    for (const season of seasonsToTry()) {
      if (!canCall()) return [];
      try {
        const list = await apiCall<{ team: { name: string; logo: string } }>('football', `teams?league=${leagueId}&season=${season}`);
        if (list.length) {
          const teams = list.map((x) => ({ name: x.team.name, logo: x.team.logo }));
          packs.set(String(leagueId), teams);
          return teams;
        }
      } catch (e) {
        // Época fora do plano: tenta a anterior.
        if (!/season|plan/i.test(e instanceof Error ? e.message : '')) return [];
      }
    }
    return [];
  })().finally(() => packInflight.delete(leagueId));
  packInflight.set(leagueId, p);
  return p;
}

/**
 * Emblema de uma equipa (URL do media.api-sports.io) ou null. Com `leagueId` (ligas principais),
 * procura primeiro nas equipas da liga; senão pelo nome. Cada resposta fica guardada um mês.
 */
export async function teamLogo(sport: string, name: string, leagueId?: number): Promise<string | null> {
  const api: Api | null = sport === 'futebol' ? 'football' : sport === 'basquetebol' ? 'basketball' : null;
  if (!api || !name) return null;
  const key = `${api}|${loose(name)}`;
  const hit = logos.get(key, MONTH);
  if (hit !== undefined) return hit;
  if (api === 'football' && leagueId) {
    const team = (await leaguePack(leagueId).catch(() => [])).find((t) => sameTeam(t.name, name));
    if (team) {
      logos.set(key, team.logo);
      return team.logo;
    }
  }
  if (inflight.has(key)) return inflight.get(key)!;
  const p = (async () => {
    const terms = [...new Set([name, name.replace(/\s*\(.*?\)\s*/g, ' '), loose(name)])]
      .map((t) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-zA-Z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim())
      .filter((t) => t.length >= 3);
    for (const q of terms) {
      if (!canCall()) return null; // sem quota: não guarda, tenta mais tarde
      const list = await apiCall<{ team?: { name: string; logo: string }; name?: string; logo?: string }>(api, `teams?search=${encodeURIComponent(q)}`);
      const teams = list.map((x) => x.team || (x as { name: string; logo: string }));
      const t = teams.find((x) => x.logo && sameTeam(x.name, name)) || (teams.length === 1 ? teams[0] : undefined);
      if (t?.logo) {
        logos.set(key, t.logo);
        return t.logo;
      }
    }
    logos.set(key, null);
    return null;
  })()
    .catch(() => null)
    .finally(() => inflight.delete(key));
  inflight.set(key, p);
  return p;
}
