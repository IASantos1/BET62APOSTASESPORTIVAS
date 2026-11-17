// Mercados do WinHouse no formato do site (o mesmo da BETBY: mercado → variante → seleção → { k, b }).
// Usado no servidor (página do jogo, validação da odd ao apostar, preços do cash out) e no navegador.
//
// Os mercados que o motor de liquidação conhece ficam com o id Betradar/BETBY equivalente, para os
// cartões, o boletim e a liquidação automática funcionarem igual:
//   futebol 1001 → 1 (1X2), 1005 → 10 (dupla hipótese), 1007 → 29 (ambas marcam), 1018 → 18 (total),
//   1725 / 1714 → 19 / 20 (total da casa / de fora), 1011 → 16 (handicap asiático);
//   1X2 de andebol / futsal / hóquei → 1; vencedor: basquetebol 1022 → 219, ténis 1016 / ténis de
//   mesa e badminton 1044 / voleibol 1001 → 186.
// Os restantes ficam "wh<id>" (nome e seleções do próprio WinHouse; liquidados pelo operador, exceto o
// resultado exato de futebol, que o motor decide pelo nome).
import { ptWords, type WhOdd } from './server/winhouse/parse';

export type WhOutcome = { k: string; b?: number };
export type WhBoardMarkets = Record<string, Record<string, Record<string, WhOutcome>>>;

export interface WhConverted {
  markets: WhBoardMarkets;
  /** nome de cada mercado "wh…" */
  names: Record<string, string>;
  /** nome de cada seleção "mercado|variante|seleção" dos mercados "wh…" */
  outcomes: Record<string, string>;
}

const FOOTBALLISH = new Set(['futebol', 'andebol', 'futsal']);
const YES = /^(yes|sim|po)$/i;
const NO = /^(no|não|nao|jo)$/i;

/** "over 2.5", "Mais de 2,5", "2.5 over", ou "over" + linha à parte → ['12' | '13', 2.5]. */
function overUnder(sel: string, special: string | null): ['12' | '13', number] | null {
  let s = sel.toLowerCase().replace(/[()[\]]/g, ' ').replace(/\s+/g, ' ').trim();
  if (special && !/\d/.test(s)) s = `${s} ${special}`;
  const W = '(over|under|mais(?: de)?|menos(?: de)?|acima(?: de)?|abaixo(?: de)?|sipër|siper|poshtë|poshte|o|u)';
  let m = new RegExp(`^${W}\\s*([\\d.,]+)$`, 'i').exec(s);
  if (!m) {
    const r = new RegExp(`^([\\d.,]+)\\s*${W}$`, 'i').exec(s);
    if (r) m = [r[0], r[2], r[1]] as unknown as RegExpExecArray;
  }
  if (!m) return null;
  const line = Number(m[2].replace(',', '.'));
  if (!Number.isFinite(line) || line <= 0 || line > 500) return null;
  return [/^(over|mais|acima|sip|o)/i.test(m[1]) ? '12' : '13', line];
}

const fmtLine = (n: number) => String(Math.round(n * 100) / 100);

/** Uma cotação → [mercado, variante, seleção] do site, ou null (fica "wh…"). */
function mapped(o: WhOdd, sport: string): [string, string, string] | null {
  const s = o.s.trim().toLowerCase();
  if (sport === 'futebol') {
    if (o.m === 1001) {
      const id = ({ 1: '1', x: '2', 2: '3' } as Record<string, string>)[s];
      return id ? ['1', '', id] : null;
    }
    if (o.m === 1005) {
      const id = ({ '1x': '9', 12: '10', x2: '11' } as Record<string, string>)[s];
      return id ? ['10', '', id] : null;
    }
    if (o.m === 1007) return YES.test(s) ? ['29', '', '74'] : NO.test(s) ? ['29', '', '76'] : null;
    if (o.m === 1018 || o.m === 1725 || o.m === 1714) {
      const ou = overUnder(o.s, o.v);
      if (!ou) return null;
      return [o.m === 1018 ? '18' : o.m === 1725 ? '19' : '20', `total=${fmtLine(ou[1])}`, ou[0]];
    }
    if (o.m === 1011) {
      // A linha é a da casa ("1 [-1.5]" e "2 [-1.5]" = casa −1.5 / fora +1.5).
      const line = Number(String(o.v ?? '').replace(',', '.'));
      if ((s !== '1' && s !== '2') || o.v === null || !Number.isFinite(line) || Math.abs(line) > 50) return null;
      return ['16', `hcp=${fmtLine(line)}`, s === '1' ? '1714' : '1715'];
    }
    return null;
  }
  if (FOOTBALLISH.has(sport) || sport === 'hoquei') {
    const id = ({ 1: '1', x: '2', 2: '3' } as Record<string, string>)[s];
    if ((o.m === 1001 && sport !== 'hoquei') || (o.m === 1045 && sport === 'hoquei')) return id ? ['1', '', id] : null;
    return null;
  }
  const two = ({ 1: '4', 2: '5' } as Record<string, string>)[s];
  if (sport === 'basquetebol' && o.m === 1022) return two ? ['219', '', two] : null;
  if (sport === 'tenis' && o.m === 1016) return two ? ['186', '', two] : null;
  if ((sport === 'tenismesa' || sport === 'badminton') && o.m === 1044) return two ? ['186', '', two] : null;
  if (sport === 'voleibol' && o.m === 1001) return two ? ['186', '', two] : null;
  return null;
}

const slug = (v: string) => v.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9:.+-]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 60);

/** Nome de uma seleção "wh…" ("1" → casa, "x" → Empate…, resto traduzido). */
function label(o: WhOdd, home: string, away: string) {
  const s = o.s.trim();
  const sides: Record<string, string> = { 1: home, x: 'Empate', 2: away, '1x': `${home} ou Empate`, x2: `Empate ou ${away}`, 12: `${home} ou ${away}` };
  return (sides[s.toLowerCase()] ?? ptWords(s)).replace(/\s+/g, ' ').trim().slice(0, 80);
}

/**
 * Cotações do WinHouse → mercados do site. `suspended`: todas as seleções fechadas (jogo suspenso).
 * Uma seleção repetida fica com o último preço (mergeOdds põe as da lista, mais frescas, no fim).
 */
export function toBoardMarkets(odds: WhOdd[], sport: string, home: string, away: string, suspended = false): WhConverted {
  const markets: WhBoardMarkets = {};
  const names: Record<string, string> = {};
  const outcomes: Record<string, string> = {};
  const put = (m: string, v: string, o: string, price: number) => {
    const row = ((markets[m] ??= {})[v] ??= {});
    row[o] = suspended ? { k: price.toFixed(2), b: 1 } : { k: price.toFixed(2) };
  };
  for (const o of odds) {
    if (!(o.p > 1.001) || !o.s) continue;
    const hit = mapped(o, sport);
    if (hit) {
      put(hit[0], hit[1], hit[2], o.p);
      continue;
    }
    const m = `wh${o.m}`;
    names[m] ??= (ptWords(o.n || '').replace(/\s+/g, ' ').trim().slice(0, 80) || `Mercado ${o.m}`);
    // Resultado exato de futebol: nome que o motor de liquidação reconhece, seleção "2:1".
    const cs = sport === 'futebol' && o.m === 1708 ? /^(\d{1,2})\s*[:-]\s*(\d{1,2})$/.exec(o.s.trim()) : null;
    if (sport === 'futebol' && o.m === 1708) names[m] = 'Resultado exato';
    const v = o.v ? `total=${o.v.replace(',', '.').slice(0, 20)}` : '';
    const oid = cs ? `${Number(cs[1])}:${Number(cs[2])}` : slug(o.s) || String(o.i);
    put(m, v, oid, o.p);
    outcomes[`${m}|${v}|${oid}`] = cs ? `${Number(cs[1])}:${Number(cs[2])}` : label(o, home, away);
  }
  return { markets, names, outcomes };
}

/** Ids de mercado do site que vêm do WinHouse (os equivalentes BETBY e os "wh…"). */
export const WH_MAPPED_IDS = new Set(['1', '10', '16', '18', '19', '20', '29', '186', '219']);
export const isWhMarket = (marketId: string) => marketId.startsWith('wh') || WH_MAPPED_IDS.has(marketId);
