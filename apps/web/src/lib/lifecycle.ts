// Ciclo de vida dos jogos e dos mercados (o que deixa de aparecer no site e quando).
//
// A BETBY usa os códigos do Sportradar/Betradar (os mesmos ids de mercado: 1 = 1X2, 18 = Total…):
//   state.status        0 não começou · 1 ao vivo · 2 suspenso · 3 terminado · 4 fechado
//                       5 cancelado · 6 atrasado · 7 interrompido · 8 adiado · 9 abandonado
//   state.match_status  6/7 1.ª/2.ª parte · 31 intervalo · 32/33… prolongamento/penáltis
//                       70 cancelado · 80 interrompido · 90 abandonado · 91–99 walkover/desistência
//                       100 terminado · 110 após prolongamento · 120 após penáltis (≥100 = fim)
//
// Regras (todas no navegador, sobre o feed da BETBY):
//  1. Jogo terminado: sai assim que o feed o diz (status 3/4/5/9 ou match_status 70, ≥90).
//  2. Futebol parado depois dos 89': sai após 5 min sem atualizações (board.tsx).
//  3. Qualquer jogo ao vivo sem atualizações há 30 min sai (betby.ts, LIVE_EVENT_STALE_MS).
//  4. Linhas já decididas pelo resultado atual deixam de aparecer (closeDecidedMarkets), mesmo
//     que a BETBY ainda as mande: totais de golos abaixo dos golos marcados e "ambas marcam"
//     depois de as duas equipas marcarem.
// A liquidação dos bilhetes (ganho/perdido/pagamento) é nossa e fica no servidor, quando existir
// o registo de apostas; estas regras só decidem o que se pode apostar.
import type { BetbyEvent, BetbyMarkets } from './betby';

const ENDED_STATUS = new Set([3, 4, 5, 9]);

export function isEventFinished(state: BetbyEvent['state'] | undefined) {
  if (!state) return false;
  const ms = state.match_status;
  if (typeof ms === 'number' && (ms === 70 || ms >= 90)) return true;
  return typeof state.status === 'number' && ENDED_STATUS.has(state.status);
}

const num = (v: unknown) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
};

/** Linha de uma variante "total=2.5" (ou "total=2.5|…"). */
function lineOf(variant: string) {
  const m = /(?:^|\|)total=([\d.]+)/.exec(variant);
  return m ? Number(m[1]) : null;
}

// Mercados de golos de futebol (ids Betradar) e de que golos dependem.
//   18 Total · 19 Total da casa · 20 Total de fora      → jogo inteiro
//   68 Total 1.ª parte · 69/70 Total da casa/fora 1.ª parte → só golos da 1.ª parte
const TOTALS: Record<string, { who: 'all' | 'home' | 'away'; half?: 1 }> = {
  '18': { who: 'all' },
  '19': { who: 'home' },
  '20': { who: 'away' },
  '68': { who: 'all', half: 1 },
  '69': { who: 'home', half: 1 },
  '70': { who: 'away', half: 1 },
};
const BTTS = '29';

/**
 * Remove as linhas que o resultado atual já decidiu (futebol ao vivo). Um "Mais de X" com mais de X
 * golos já ganhou e o "Menos" já perdeu: a linha inteira sai. Linhas asiáticas (2.25, 2.75) e
 * inteiras (2) seguem a mesma regra: saem quando os golos passam a linha.
 */
export function closeDecidedMarkets(markets: BetbyMarkets, score: BetbyEvent['score'] | undefined): BetbyMarkets {
  if (!score) return markets;
  const home = num(score.home_score);
  const away = num(score.away_score);
  if (home === null || away === null) return markets;
  const first = score.period_scores?.find((p) => p.number === 1);
  const goals = (who: 'all' | 'home' | 'away', half?: 1) => {
    const h = half ? num(first?.home_score) : home;
    const a = half ? num(first?.away_score) : away;
    if (h === null || a === null) return null;
    return who === 'home' ? h : who === 'away' ? a : h + a;
  };
  let out: BetbyMarkets | null = null;
  const edit = () => (out ??= { ...markets });
  for (const [marketId, rule] of Object.entries(TOTALS)) {
    const variants = markets[marketId];
    if (!variants) continue;
    const g = goals(rule.who, rule.half);
    if (g === null) continue;
    const keep = Object.fromEntries(Object.entries(variants).filter(([v]) => {
      const line = lineOf(v);
      return line === null || line >= g;
    }));
    if (Object.keys(keep).length === Object.keys(variants).length) continue;
    if (Object.keys(keep).length) edit()[marketId] = keep;
    else delete edit()[marketId];
  }
  if (markets[BTTS] && home > 0 && away > 0) delete edit()[BTTS];
  return out ?? markets;
}
