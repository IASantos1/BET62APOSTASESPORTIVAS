// WinHouse — leitura das respostas (sem rede, sem base de dados). Adaptado do repositório bet
// (server/winhouse.js), com os mesmos formatos que o WinHouse envia:
//
//  • listas (ao vivo / pré-jogo): [{ id, sport_id, league, name "Casa - Fora", home_team, away_team,
//    game_date "AAAA-MM-DD", game_time "HH:MM:SS" (hora local do WinHouse), result "2-1",
//    current_minute "56:21", odd "oddId|1.28|1|1001|1x2 [1x2],…" }]
//  • página de um jogo (prematchgame/{id}, livegame/{id}): objetos { id, odd: "1.89", market_id,
//    market: "1x2 [1x2]", market_option: "1 ", special_value: null | "2.5", mainCategory, game_status }

/** Uma cotação do WinHouse, em forma compacta (é assim que fica guardada em JSONB). */
export interface WhOdd {
  /** id da cotação no WinHouse */
  i: number;
  /** id do mercado (1001 = 1x2, 1005 = dupla hipótese, 1018 = total de golos…) */
  m: number;
  /** nome do mercado, sem a etiqueta [CÓDIGO] */
  n: string;
  /** código entre [ ] (1x2, DC, TG_O/U…) */
  c: string | null;
  /** seleção como vem ("1", "x", "over 2.5", "Sim"…) */
  s: string;
  /** linha separada (special_value: "2.5", "-1.5"…) */
  v: string | null;
  /** preço decimal */
  p: number;
  /** categoria da página (Main, Goals…) */
  g?: string | null;
}

/** Desportos do WinHouse (sport_id → o nosso nome). */
export const SPORTS: Record<number, string> = {
  1: 'futebol', 2: 'basquetebol', 3: 'basebol', 4: 'hoquei', 5: 'tenis', 6: 'andebol', 10: 'boxe', 12: 'raguebi',
  16: 'futamericano', 20: 'tenismesa', 21: 'criquete', 22: 'dardos', 23: 'voleibol', 29: 'futsal', 31: 'badminton', 117: 'mma',
};

export const SPORT_LABEL: Record<string, string> = {
  futebol: 'Futebol', basquetebol: 'Basquetebol', basebol: 'Basebol', hoquei: 'Hóquei no gelo', tenis: 'Ténis', andebol: 'Andebol',
  boxe: 'Boxe', raguebi: 'Râguebi', futamericano: 'Futebol americano', tenismesa: 'Ténis de mesa', criquete: 'Críquete',
  dardos: 'Dardos', voleibol: 'Voleibol', futsal: 'Futsal', badminton: 'Badminton', mma: 'MMA',
};

const num = (v: unknown) => (typeof v === 'number' ? v : Number(String(v ?? '').replace(',', '.')));

/** "1223894688|1.28|1|1001|1x2 [1x2]" → cotação, ou null (preço ≤ 1 = suspensa). */
export function parseOdd(raw: unknown): WhOdd | null {
  if (typeof raw !== 'string') return null;
  const parts = raw.split('|').map((p) => p.trim());
  if (parts.length < 5) return null;
  const [oddId, price, selection, marketId, ...rest] = parts;
  const label = rest.join('|');
  const m = /^(.*?)\s*\[([^\]]+)\]/.exec(label);
  const p = Number(price);
  if (!/^\d+$/.test(oddId) || !Number.isFinite(p) || p <= 1.001 || !/^\d+$/.test(marketId) || !selection) return null;
  return { i: Number(oddId), m: Number(marketId), n: (m ? m[1] : label).trim(), c: m ? m[2].trim() : null, s: selection, v: null, p };
}

/** O campo `odd` de um evento: lista, ou um texto com as cotações separadas por ; , \n ou #. */
export function parseOdds(field: unknown): WhOdd[] {
  const list: unknown[] = Array.isArray(field) ? field : typeof field === 'string' ? field.split(/[;\n#]+|,(?=\d+\|)/) : [];
  const out: WhOdd[] = [];
  for (const x of list) {
    const o = parseOdd(typeof x === 'string' ? x : (x as { odd?: unknown; raw?: unknown } | null)?.odd ?? (x as { raw?: unknown } | null)?.raw);
    if (o) out.push(o);
  }
  return out;
}

/** Os eventos de uma resposta, seja qual for o invólucro ({ data: [...] }, { games: [...] }, [...]). */
export function eventsOf(body: unknown): Record<string, unknown>[] {
  if (Array.isArray(body)) return body.filter((x) => x && typeof x === 'object');
  if (body && typeof body === 'object') {
    for (const k of ['data', 'games', 'events', 'items', 'result', 'results']) {
      const v = (body as Record<string, unknown>)[k];
      if (Array.isArray(v)) return v.filter((x) => x && typeof x === 'object');
    }
  }
  return [];
}

/** A página de um jogo → as suas cotações (todas as seleções abertas de todos os mercados). */
export function detailOdds(body: unknown): WhOdd[] {
  const out: WhOdd[] = [];
  const walk = (v: unknown, depth: number) => {
    if (depth > 7 || v === null || typeof v !== 'object') return;
    if (Array.isArray(v)) {
      for (const x of v) walk(x, depth + 1);
      return;
    }
    const o = v as Record<string, unknown>;
    const price = num(o.odd);
    const marketId = Number(o.market_id);
    const selection = String(o.market_option ?? '').trim();
    // Seleção suspensa: 1.00 ou game_status "0" (a regra do próprio livro).
    const suspended = o.game_status !== undefined && o.game_status !== null && String(o.game_status) === '0';
    if (o.market_id !== undefined && Number.isFinite(price) && Number.isInteger(marketId) && marketId > 0 && selection) {
      if (price > 1.001 && !suspended) {
        const m = /^(.*?)\s*\[([^\]]+)\]/.exec(String(o.market || ''));
        const special = o.special_value === null || o.special_value === undefined || o.special_value === '' ? null : String(o.special_value).trim();
        out.push({
          i: Number(o.id) || 0, m: marketId, n: (m ? m[1] : String(o.market || '')).trim(), c: m ? m[2].trim() : null,
          s: selection, v: special, p: Math.round(price * 1000) / 1000, g: typeof o.mainCategory === 'string' ? o.mainCategory : null,
        });
      }
      return;
    }
    for (const x of Object.values(o)) walk(x, depth + 1);
  };
  walk(body, 0);
  return out;
}

/** "56:21" → 56.35 minutos jogados. */
export const minutesOf = (v: unknown) => {
  const m = /^(\d{1,3}):(\d{2})$/.exec(String(v ?? '').trim());
  return m ? Number(m[1]) + Number(m[2]) / 60 : null;
};

export interface WhItem {
  id: string;
  sportId: number;
  sport: string;
  competition: string;
  country: string | null;
  home: string;
  away: string;
  /** início em UTC (ISO) */
  startTime: string;
  homeScore: number | null;
  awayScore: number | null;
  minutes: number | null;
  clockRaw: string | null;
  homeLogo: string | null;
  awayLogo: string | null;
  odds: WhOdd[];
}

const clean = (v: unknown, max: number) => String(v ?? '').replace(/[~|\n\r]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
const safeLogo = (...vs: unknown[]) => {
  const u = vs.find((x) => typeof x === 'string' && /^https:\/\/[\w.-]+\/[\w./%+=?&-]+$/.test(x.trim()));
  return typeof u === 'string' ? u.trim() : null;
};

/** Um item das listas → o nosso evento, ou null (desporto que não conhecemos / item incompleto). */
export function normalizeItem(ev: unknown, tzOffsetMinutes = 0): WhItem | null {
  if (!ev || typeof ev !== 'object') return null;
  const e = ev as Record<string, unknown>;
  if (e.id === undefined || e.id === null || !/^\d{1,20}$/.test(String(e.id))) return null;
  const sportId = Number(e.sport_id);
  const sport = SPORTS[sportId];
  if (!sport) return null;
  const [n1, n2] = String(e.name || '').split(/\s+-\s+/);
  const home = clean(e.home_team || n1, 80);
  const away = clean(e.away_team || n2, 80);
  const d = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e.game_date || ''));
  const t = /^(\d{2}):(\d{2})(?::(\d{2}))?$/.exec(String(e.game_time || ''));
  if (!home || !away || !d || !t) return null;
  // game_date / game_time estão na hora local do WinHouse; tzOffsetMinutes é a diferença para UTC.
  const start = Date.UTC(+d[1], +d[2] - 1, +d[3], +t[1], +t[2], +(t[3] || 0)) - tzOffsetMinutes * 60_000;
  const score = /^(\d+)\s*[-:]\s*(\d+)$/.exec(String(e.result ?? '').trim());
  const rawClock = String(e.current_minute ?? '').trim();
  const homeObj = e.home as Record<string, unknown> | undefined;
  const awayObj = e.away as Record<string, unknown> | undefined;
  return {
    id: String(e.id),
    sportId,
    sport,
    competition: clean(e.league || 'WinHouse', 100),
    country: e.country ? clean(e.country, 60) : null,
    home,
    away,
    startTime: new Date(start).toISOString(),
    homeScore: score ? Number(score[1]) : null,
    awayScore: score ? Number(score[2]) : null,
    minutes: minutesOf(rawClock),
    clockRaw: rawClock ? rawClock.slice(0, 20) : null,
    homeLogo: safeLogo(e.home_logo, e.home_team_logo, e.home_image, e.home_img, e.team1_logo, e.logo_home, homeObj?.logo),
    awayLogo: safeLogo(e.away_logo, e.away_team_logo, e.away_image, e.away_img, e.team2_logo, e.logo_away, awayObj?.logo),
    odds: parseOdds(e.odd ?? e.odds),
  };
}

/**
 * Fuso do relógio do WinHouse, a partir da lista ao vivo: um jogo de futebol na 1.ª parte começou
 * há (minutos jogados) e o seu game_time lido como UTC está adiantado pela diferença do fuso.
 * Mediana arredondada à hora; null com menos de 3 amostras.
 */
export function estimateOffset(items: unknown[], now = Date.now()) {
  const samples: number[] = [];
  for (const raw of items) {
    const ev = raw as Record<string, unknown> | null;
    if (ev?.sport_id !== undefined && ev?.sport_id !== null && SPORTS[Number(ev.sport_id)] !== 'futebol') continue;
    const mins = minutesOf(ev?.current_minute);
    const d = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(ev?.game_date || ''));
    const t = /^(\d{2}):(\d{2})/.exec(String(ev?.game_time || ''));
    if (mins === null || mins > 30 || !d || !t) continue;
    const asUtc = Date.UTC(+d[1], +d[2] - 1, +d[3], +t[1], +t[2]);
    samples.push((asUtc - (now - mins * 60_000)) / 60_000);
  }
  if (samples.length < 3) return null;
  samples.sort((a, b) => a - b);
  return Math.round(samples[Math.floor(samples.length / 2)] / 60) * 60;
}

// ---------- equipas (para ligar o mesmo jogo entre listas e entre fornecedores) ----------

/** Nome de equipa comparado sem maiúsculas, acentos, pontuação e espaços. */
export const teamKey = (name: unknown) =>
  String(name || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '');
export const sameTeam = (a: unknown, b: unknown) => !!teamKey(a) && teamKey(a) === teamKey(b);
// Palavras que não distinguem equipas ("FC Porto" = "Porto", "Sporting CP" = "Sporting").
const FILLER = /\b(fc|cf|sc|ac|cd|ud|sd|ca|cp|afc|sk|fk|bk|if|club|clube|de|da|do|the|real)\b/g;
const bareKey = (name: unknown) =>
  teamKey(String(name || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(FILLER, ' ')).replace(/[0-9]+/g, '');
/** Mesma equipa escrita mais longa num dos lados ("Zalgiris" / "Zalgiris Kaunas", "FC Porto" / "Porto"). */
export const closeTeam = (a: unknown, b: unknown) => {
  if (sameTeam(a, b)) return true;
  const [x, y] = [bareKey(a), bareKey(b)].sort((m, n) => m.length - n.length);
  return x.length >= 4 && (x === y || y.startsWith(x) || y.endsWith(x));
};
/** Duas listagens do mesmo jogo: uma equipa igual e a outra igual ou parecida. */
export const sameGame = (a: { home: string; away: string }, b: { home: string; away: string }) =>
  (sameTeam(a.home, b.home) && closeTeam(a.away, b.away)) || (closeTeam(a.home, b.home) && sameTeam(a.away, b.away)) ||
  (closeTeam(a.home, b.home) && closeTeam(a.away, b.away));

// ---------- relógio e fim de jogo ----------

const mmss = (secs: number) => `${String(Math.floor(secs / 60)).padStart(2, '0')}:${String(Math.floor(secs % 60)).padStart(2, '0')}`;

/** O relógio como se mostra, por desporto ("67'", "Q3 04:12", "2.º P 12:30"…), ou null (desportos de sets). */
export function clockText(sport: string, minutes: number | null, raw: string | null, competition = '') {
  if (minutes === null) return raw ? String(raw).slice(0, 20) : null;
  if (['futebol', 'andebol', 'futsal', 'raguebi'].includes(sport)) return `${Math.floor(minutes)}'`;
  const secs = Math.max(0, Math.round(minutes * 60));
  if (sport === 'basquetebol') {
    const q = (/\bNBA\b/i.test(competition) ? 12 : 10) * 60;
    if (secs < 4 * q) {
      const n = Math.floor(secs / q) + 1;
      return `Q${n} ${mmss(n * q - secs)}`;
    }
    const k = Math.floor((secs - 4 * q) / 300) + 1;
    return `Prol.${k > 1 ? ` ${k}` : ''} ${mmss(4 * q + k * 300 - secs)}`;
  }
  if (sport === 'hoquei') {
    if (secs < 3600) {
      const n = Math.floor(secs / 1200) + 1;
      return `${n}.º P ${mmss(n * 1200 - secs)}`;
    }
    return `Prol. ${mmss(Math.max(0, 4800 - secs))}`;
  }
  if (sport === 'futamericano') {
    if (secs < 3600) {
      const n = Math.floor(secs / 900) + 1;
      return `Q${n} ${mmss(n * 900 - secs)}`;
    }
    return `Prol. ${mmss(Math.max(0, 4200 - secs))}`;
  }
  if (sport === 'boxe' || sport === 'mma') {
    const len = (sport === 'boxe' ? 3 : 5) * 60;
    const n = Math.floor(secs / len) + 1;
    return `${n}.º assalto ${mmss(n * len - secs)}`;
  }
  return null;
}

const GRAND_SLAM = /australian open|roland garros|french open|wimbledon|us open/i;
const NOT_MEN_SINGLES = /\bwta\b|women|woman|feminin|ladies|\bw\b|doubles|duplas|\/|mixed|mist/i;
/** Sets que um lado precisa de ganhar (null = não é desporto de sets). */
export function setsToWin(sport: string, competition = '', home = '', away = '') {
  if (sport === 'tenis') return GRAND_SLAM.test(competition) && !NOT_MEN_SINGLES.test(`${competition} ${home} ${away}`) ? 3 : 2;
  if (sport === 'badminton') return 2;
  if (sport === 'tenismesa') return 3;
  if (sport === 'voleibol') return /beach|praia|4x4|duo/i.test(`${competition} ${home} ${away}`) ? 2 : 3;
  return null;
}

const FULL_TIME: Record<string, number> = { futebol: 90, futsal: 40, andebol: 60, hoquei: 60 };
const FROZEN_MS: Record<string, number> = { futebol: 10 * 60_000, futsal: 15 * 60_000, andebol: 10 * 60_000, hoquei: 15 * 60_000 };
const MAX_MINUTE: Record<string, number> = { futebol: 125, futsal: 60, andebol: 80 };
const MAX_LIVE_MS: Record<string, number> = { futebol: 3 * 3_600_000, tenis: 6 * 3_600_000 };
const SETS_DONE_MS: Record<string, number> = { tenis: 3 * 60_000, badminton: 3 * 60_000, voleibol: 5 * 60_000, tenismesa: 12 * 60_000 };

export interface LiveState {
  sport: string;
  competition: string;
  home: string;
  away: string;
  homeScore: number | null;
  awayScore: number | null;
  minutes: number | null;
}

/**
 * Porque é que um jogo que o WinHouse ainda lista ao vivo já acabou (ou null): sets ganhos e placar
 * parado, relógio parado depois do fim, relógio impossível, ou ao vivo há mais tempo do que um jogo dura.
 */
export function listedButOver(
  ev: LiveState,
  o: { clockSince?: number | null; clockMinute?: number | null; scoreSince?: number | null; scoreValue?: string | null; liveSince?: number | null; now?: number } = {},
) {
  const now = o.now ?? Date.now();
  const m = ev.minutes;
  const need = setsToWin(ev.sport, ev.competition, ev.home, ev.away);
  const h = ev.homeScore;
  const a = ev.awayScore;
  if (need && Number.isInteger(h) && Number.isInteger(a) && h !== a && Math.max(h!, a!) >= need && o.scoreValue === `${h}-${a}` && o.scoreSince && now - o.scoreSince >= SETS_DONE_MS[ev.sport]) {
    return `sets ${h}-${a}: jogo ganho há ${Math.round((now - o.scoreSince) / 60_000)} min`;
  }
  if (m !== null && MAX_MINUTE[ev.sport] && m > MAX_MINUTE[ev.sport]) return `relógio em ${Math.floor(m)}'`;
  if (m !== null && FULL_TIME[ev.sport] && m >= FULL_TIME[ev.sport] && o.clockMinute === m && o.clockSince && now - o.clockSince >= FROZEN_MS[ev.sport]) {
    return `relógio parado em ${Math.floor(m)}' há ${Math.round((now - o.clockSince) / 60_000)} min`;
  }
  if (o.liveSince && now - o.liveSince > (MAX_LIVE_MS[ev.sport] ?? 3.5 * 3_600_000)) return `ao vivo há ${Math.round((now - o.liveSince) / 60_000)} min`;
  return null;
}

export type Verdict = { home: number; away: number } | { review: string };

/**
 * Fim de um jogo que saiu da lista ao vivo: o último placar visto só conta como final quando o
 * jogo claramente acabou; tudo o resto vai para o operador (review).
 */
export function finishVerdict(row: LiveState & { startTime?: string | null }, now = Date.now()): Verdict {
  const m = row.minutes ?? 0;
  const h = row.homeScore;
  const a = row.awayScore;
  if (!Number.isInteger(h) || !Number.isInteger(a)) return { review: 'sem placar' };
  const H = h as number;
  const A = a as number;
  const left = { review: `saiu do ao vivo ao minuto ${Math.floor(m)}` };
  switch (row.sport) {
    case 'futebol':
      return m >= 88 ? { home: H, away: A } : left;
    case 'basquetebol':
      if (H === A) return { review: 'empate no último placar visto' };
      return m >= (/\bNBA\b/i.test(row.competition) ? 47 : 39) ? { home: H, away: A } : left;
    case 'hoquei':
      return m >= 59 ? { home: H, away: A } : left;
    case 'tenis':
    case 'badminton':
    case 'tenismesa':
    case 'voleibol': {
      const need = setsToWin(row.sport, row.competition, row.home, row.away) ?? 2;
      return Math.max(H, A) >= need && H !== A ? { home: H, away: A } : { review: `sets ${H}-${A}: jogo incompleto` };
    }
    case 'andebol':
      return m >= 58 ? { home: H, away: A } : left;
    case 'futsal':
      return m >= 38 ? { home: H, away: A } : left;
    case 'futamericano':
      if (H === A) return { review: 'empate no último placar visto' };
      return m >= 59 ? { home: H, away: A } : left;
    case 'raguebi':
      return m >= 79 ? { home: H, away: A } : left;
    case 'basebol': {
      if (H === A) return { review: 'empate no último placar visto' };
      const since = (now - Date.parse(row.startTime || '')) / 60_000;
      return since >= 135 ? { home: H, away: A } : { review: `saiu do ao vivo ${Number.isFinite(since) ? Math.round(since) : '?'} min depois do início` };
    }
    default:
      return { review: 'desporto sem regra de fim' };
  }
}

// ---------- mercados para mostrar ----------

// As páginas vêm em inglês ou albanês: tudo mostrado em português.
const WORDS: Record<string, string> = {
  over: 'Mais de', under: 'Menos de', yes: 'Sim', no: 'Não', odd: 'Ímpar', even: 'Par', exactly: 'Exatamente', exact: 'Exatamente',
  draw: 'Empate', neither: 'Nenhum', 'sipër': 'Mais de', siper: 'Mais de', 'poshtë': 'Menos de', poshte: 'Menos de', po: 'Sim',
  jo: 'Não', tek: 'Ímpar', 'çift': 'Par', cift: 'Par', 'saktë': 'Exatamente', sakte: 'Exatamente', skuadra: 'Equipa',
  golat: 'golos', gol: 'golo', dhe: 'e', ose: 'ou', 'asnjëri': 'Nenhum', pjesa: 'parte',
};
const WORD_RE = new RegExp(`(?<![\\p{L}\\d])(${Object.keys(WORDS).join('|')})(?![\\p{L}\\d])`, 'giu');
export const ptWords = (t: string) => t.replace(WORD_RE, (w) => WORDS[w.toLowerCase()] ?? w);

export interface WhSelection {
  /** id da cotação no WinHouse (estável enquanto a linha existir) */
  id: string;
  label: string;
  /** seleção original ("1", "x", "over") */
  raw: string;
  line: string | null;
  price: number;
}
export interface WhMarket {
  id: number;
  name: string;
  code: string | null;
  category: string | null;
  selections: WhSelection[];
}

/** Nome de cada seleção dos mercados de resultado: "1" → casa, "x" → Empate, "2" → fora. */
function selectionLabel(o: WhOdd, home: string, away: string) {
  const s = o.s.trim();
  const low = s.toLowerCase();
  const sides: Record<string, string> = { 1: home, x: 'Empate', 2: away, '1x': `${home} ou Empate`, x2: `Empate ou ${away}`, 12: `${home} ou ${away}` };
  let label = sides[low] ?? ptWords(s);
  if (o.v && !s.includes(o.v)) label = `${label} (${o.v})`;
  return clean(label, 80);
}

/** Cotações → mercados agrupados (o primeiro nome que a página dá a cada id), por ordem de id. */
export function groupMarkets(odds: WhOdd[], home: string, away: string): WhMarket[] {
  const by = new Map<number, WhMarket>();
  const seen = new Set<string>();
  for (const o of odds) {
    if (!(o.p > 1.001)) continue;
    let mk = by.get(o.m);
    if (!mk) {
      mk = { id: o.m, name: clean(ptWords(o.n || `Mercado ${o.m}`), 80) || `Mercado ${o.m}`, code: o.c, category: o.g ?? null, selections: [] };
      by.set(o.m, mk);
    }
    const label = selectionLabel(o, home, away);
    const key = `${o.m}|${label}`;
    if (!label || seen.has(key)) continue;
    seen.add(key);
    mk.selections.push({ id: String(o.i || key), label, raw: o.s, line: o.v, price: o.p });
  }
  return [...by.values()].filter((m) => m.selections.length).sort((a, b) => a.id - b.id);
}

/**
 * Junta as cotações da página do jogo (todos os mercados, lidas há pouco) com as da lista (mais
 * frescas, 2–3 mercados): as da lista ganham, e um mercado que a lista traz substitui o da página.
 */
export function mergeOdds(page: WhOdd[], list: WhOdd[]): WhOdd[] {
  const listMarkets = new Set(list.map((o) => o.m));
  return [...page.filter((o) => !listMarkets.has(o.m)), ...list];
}
