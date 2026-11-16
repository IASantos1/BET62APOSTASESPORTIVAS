import https from 'node:https';
import { FileCache } from './store';

// API-Football / API-Sports (chave API_FOOTBALL_KEY): emblemas das equipas (as estatísticas dos
// jogos vêm da BETBY). Como no outro projeto: só o cabeçalho da chave
// (a API recusa pedidos com outros cabeçalhos), poucos pedidos por minuto e um limite por dia
// (100 no plano grátis), tudo guardado em cache.

export const API_KEY = () =>
  (process.env.API_FOOTBALL_KEY || process.env.APIFOOTBALL_KEY || process.env.API_SPORTS_KEY || '').trim();

const DAILY = Number(process.env.API_FOOTBALL_DAILY || 95);
const PER_MINUTE = Number(process.env.API_FOOTBALL_PER_MINUTE || 9);

type Api = 'football' | 'basketball' | 'hockey' | 'american-football' | 'baseball' | 'volleyball' | 'handball' | 'rugby';
const HOST: Record<Api, string> = {
  football: 'v3.football.api-sports.io',
  basketball: 'v1.basketball.api-sports.io',
  hockey: 'v1.hockey.api-sports.io',
  'american-football': 'v1.american-football.api-sports.io',
  baseball: 'v1.baseball.api-sports.io',
  volleyball: 'v1.volleyball.api-sports.io',
  handball: 'v1.handball.api-sports.io',
  rugby: 'v1.rugby.api-sports.io',
};

const API_NAMES: Api[] = Object.keys(HOST) as Api[];
const usage = Object.fromEntries(API_NAMES.map((api) => [api, {
  day: '', used: 0, minute: 0, minuteCalls: 0, remaining: null as number | null,
}])) as Record<Api, { day: string; used: number; minute: number; minuteCalls: number; remaining: number | null }>;

const state = {
  lastError: null as string | null,
  lastOkAt: null as string | null,
};

export function apiSportsStatus() {
  const usedToday = API_NAMES.reduce((sum, api) => sum + usage[api].used, 0);
  const remainingValues = API_NAMES.map((api) => usage[api].remaining);
  const remaining = remainingValues.every((v) => v !== null)
    ? remainingValues.reduce((sum, v) => sum + (v ?? 0), 0)
    : null;
  return {
    configured: !!API_KEY(),
    usedToday,
    dailyLimit: DAILY * API_NAMES.length,
    remaining,
    bySportApi: Object.fromEntries(API_NAMES.map((api) => [api, { usedToday: usage[api].used, dailyLimit: DAILY, remaining: usage[api].remaining }])),
    lastError: state.lastError,
    lastOkAt: state.lastOkAt,
  };
}

function canCall(api: Api) {
  const current = usage[api];
  const day = new Date().toISOString().slice(0, 10);
  if (current.day !== day) {
    current.day = day;
    current.used = 0;
    current.remaining = null;
  }
  const minute = Math.floor(Date.now() / 60_000);
  if (current.minute !== minute) {
    current.minute = minute;
    current.minuteCalls = 0;
  }
  return !!API_KEY() && current.used < DAILY && current.minuteCalls < PER_MINUTE && current.remaining !== 0;
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
  if (!canCall(api)) throw new Error(`Limite de pedidos atingido para API-Sports (${api}).`);
  usage[api].used += 1;
  usage[api].minuteCalls += 1;
  const r = await plainGet(`https://${HOST[api]}/${pathAndQuery}`, { 'x-apisports-key': API_KEY() });
  if (r.remaining !== undefined && Number.isFinite(Number(r.remaining))) usage[api].remaining = Number(r.remaining);
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

// Cache positivo sem expiração: depois de encontrado, o URL do emblema fica guardado.
 // A persistência entre deploys depende de DATA_DIR / RAILWAY_VOLUME_MOUNT_PATH estar num volume.
const logos = new FileCache<string | null>('team-logos-v2');
const missingLogos = new FileCache<boolean>('team-logos-missing-v2');
const NEGATIVE_CACHE = 10 * 60_000;
const FOREVER = Number.POSITIVE_INFINITY;
const inflight = new Map<string, Promise<string | null>>();

// Equipas de uma liga inteira num só pedido (as ligas principais): poupa a quota diária.
const packs = new FileCache<{ name: string; logo: string }[]>('league-packs-v2');
const packInflight = new Map<number, Promise<{ name: string; logo: string }[]>>();
// Épocas que o plano aceita: o plano grátis responde "try from 2022 to 2024" — guarda-se o máximo
// e a época que funcionou, para cada liga gastar um pedido só (em vez de 2–3 tentativas recusadas).
const seasonMemo = new FileCache<number>('apif-seasons');
function seasonsToTry() {
  const d = new Date();
  const y = d.getUTCFullYear();
  const euro = d.getUTCMonth() >= 6 ? y : y - 1;
  const max = seasonMemo.get('max', 7 * 86_400_000);
  const ok = seasonMemo.get('ok', 7 * 86_400_000);
  const all = [...new Set([...(ok ? [ok] : []), euro, y, euro - 1, y - 1, y - 2, y - 3])];
  return max ? all.filter((s) => s <= max) : all;
}
function learnSeasonLimit(message: string) {
  const m = /(?:from\s+)?(\d{4})\s*(?:to|-)\s*(\d{4})/i.exec(message);
  if (m) seasonMemo.set('max', Number(m[2]));
}
async function leaguePack(leagueId: number) {
  const hit = packs.get(String(leagueId), FOREVER);
  if (hit) return hit;
  if (packInflight.has(leagueId)) return packInflight.get(leagueId)!;
  const p = (async () => {
    for (const season of seasonsToTry()) {
      if (!canCall('football')) return [];
      try {
        const list = await apiCall<{ team: { name: string; logo: string } }>('football', `teams?league=${leagueId}&season=${season}`);
        if (list.length) {
          const teams = list.map((x) => ({ name: x.team.name, logo: x.team.logo }));
          packs.set(String(leagueId), teams);
          seasonMemo.set('ok', season);
          return teams;
        }
      } catch (e) {
        // Época fora do plano: aprende o limite e tenta a anterior.
        const msg = e instanceof Error ? e.message : '';
        if (!/season|plan/i.test(msg)) return [];
        learnSeasonLimit(msg);
      }
    }
    return [];
  })().finally(() => packInflight.delete(leagueId));
  packInflight.set(leagueId, p);
  return p;
}

// Ligas principais (os mesmos ids do Logos.tsx): descarregadas em segundo plano, uma a cada ~7 s, e
// guardadas para sempre. Um clube que mudou de divisão (ou joga a Champions) é encontrado na liga
// onde estava na época que o plano permite, sem gastar uma pesquisa.
export const LEAGUE_IDS = [71, 72, 39, 40, 45, 140, 141, 143, 135, 136, 137, 78, 79, 81, 61, 62, 66, 94, 95, 96, 88, 89, 144, 179,
  203, 197, 207, 218, 119, 113, 103, 106, 345, 2, 3, 848, 13, 11, 1, 4, 5, 128, 253, 262, 307, 98];
let warming = false;
export function warmLeaguePacks() {
  if (warming || !API_KEY()) return;
  warming = true;
  void (async () => {
    try {
      for (const id of LEAGUE_IDS) {
        if (packs.get(String(id), FOREVER)) continue;
        while (!canCall('football')) {
          if (usage.football.used >= DAILY || usage.football.remaining === 0) return;
          await new Promise((r) => setTimeout(r, 7000));
        }
        await leaguePack(id).catch(() => []);
        await new Promise((r) => setTimeout(r, 7000));
      }
    } finally {
      warming = false;
    }
  })();
}
export function logoCacheStatus() {
  const loaded = LEAGUE_IDS.filter((id) => (packs.get(String(id), FOREVER)?.length ?? 0) > 0).length;
  return { leaguesLoaded: loaded, leaguesTotal: LEAGUE_IDS.length, warming };
}
function fromPacks(name: string, leagueId?: number) {
  const order = leagueId ? [leagueId, ...LEAGUE_IDS.filter((x) => x !== leagueId)] : LEAGUE_IDS;
  for (const id of order) {
    const t = packs.get(String(id), FOREVER)?.find((x) => sameTeam(x.name, name));
    if (t) return t.logo;
  }
  return null;
}

/**
 * Emblema de uma equipa (URL do media.api-sports.io) ou null. Com `leagueId` (ligas principais),
 * procura primeiro nas equipas da liga; senão pelo nome. O URL encontrado fica guardado sem expiração.
 */
const API_BY_SPORT: Partial<Record<string, Api>> = {
  futebol: 'football',
  basquetebol: 'basketball',
  hoquei: 'hockey',
  futamericano: 'american-football',
  basebol: 'baseball',
  voleibol: 'volleyball',
  andebol: 'handball',
  raguebi: 'rugby',
};

/** Emblema de equipa nos desportos com endpoint oficial de equipas da API-Sports. */
export async function teamLogo(sport: string, name: string, leagueId?: number): Promise<string | null> {
  const api = API_BY_SPORT[sport] ?? null;
  if (!api || !name) return null;
  const key = `${api}|${loose(name)}`;
  const hit = logos.get(key, FOREVER);
  if (typeof hit === 'string' && hit) return hit;
  if (missingLogos.get(key, NEGATIVE_CACHE)) return null;
  if (api === 'football') {
    warmLeaguePacks();
    if (leagueId) await leaguePack(leagueId).catch(() => []);
    const packed = fromPacks(name, leagueId);
    if (packed) {
      logos.set(key, packed);
      return packed;
    }
    // Enquanto as ligas principais descarregam, um clube de uma delas espera por elas (sem gastar
    // uma pesquisa); um clube de outra liga pode ser procurado já pelo nome.
    if (warming && leagueId) return null;
  }
  if (inflight.has(key)) return inflight.get(key)!;
  const p = (async () => {
    const terms = [...new Set([name, name.replace(/\s*\(.*?\)\s*/g, ' '), loose(name)])]
      .map((t) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-zA-Z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim())
      .filter((t) => t.length >= 3);
    for (const q of terms) {
      if (!canCall(api)) return null; // sem quota: não guarda, tenta mais tarde
      const list = await apiCall<{ team?: { name: string; logo: string }; name?: string; logo?: string }>(api, `teams?search=${encodeURIComponent(q)}`);
      const teams = list.map((x) => x.team || (x as { name: string; logo: string }));
      const t = teams.find((x) => x.logo && sameTeam(x.name, name)) || (teams.length === 1 ? teams[0] : undefined);
      if (t?.logo) {
        logos.set(key, t.logo);
        return t.logo;
      }
    }
    missingLogos.set(key, true);
    return null;
  })()
    .catch((e) => {
      state.lastError = e instanceof Error ? e.message.slice(0, 200) : String(e).slice(0, 200);
      return null;
    })
    .finally(() => inflight.delete(key));
  inflight.set(key, p);
  return p;
}
