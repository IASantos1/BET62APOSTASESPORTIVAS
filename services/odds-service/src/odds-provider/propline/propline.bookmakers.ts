import type { ProplineBookmaker } from './propline.types';

// Lista alinhada 1:1 com a tabela "Bookmakers" da documentacao oficial da
// PropLine (api.prop-line.com/docs). A lista anterior (bet365, betfair,
// williamhill, betano, sportingbet, estrelabet, kto, betvictor, caesars,
// marathonbet, intertops, coral, ladbrokes, bwin, paddy_power, sbobet,
// betway, tipico, skybet) nao corresponde a nenhum book real da PropLine —
// nenhuma chave dessa lista aparece na resposta real da API, entao todo
// bookmaker vindo da PropLine falhava a resolucao por code/id.
// isPushBased = true para os 5 books com feed push proprio (latencia ~1s):
// DraftKings, FanDuel, Fanatics, Kalshi e Polymarket (ver docs, secao
// "Latency: push books vs polled books"). Os demais sao sondados (polled).
// Prioridade: livros sharp/exchange primeiro (usados como ancora de fair
// value no /ev), depois retail, depois DFS por ultimo — PrizePicks e
// Underdog usam precificacao sintetica (+100/+100 ou paga por multiplicador,
// nao um preco de mercado real), entao nao devem ganhar empates de "melhor
// odd" contra um bookmaker de verdade.
const PROPLINE_BOOKMAKERS_RAW: ProplineBookmaker[] = [
  { id: 'pinnacle', code: 'pinnacle', name: 'Pinnacle', priority: 1, isPushBased: false },
  { id: 'novig', code: 'novig', name: 'Novig', priority: 2, isPushBased: false },
  { id: 'prophetx', code: 'prophetx', name: 'ProphetX', priority: 3, isPushBased: false },
  { id: 'polymarket', code: 'polymarket', name: 'Polymarket', priority: 4, isPushBased: true },
  { id: 'polymarket_us', code: 'polymarket_us', name: 'Polymarket US', priority: 5, isPushBased: false },
  { id: 'kalshi', code: 'kalshi', name: 'Kalshi', priority: 6, isPushBased: true },
  { id: 'smarkets', code: 'smarkets', name: 'Smarkets', priority: 7, isPushBased: false },
  { id: 'matchbook', code: 'matchbook', name: 'Matchbook', priority: 8, isPushBased: false },
  { id: 'draftkings', code: 'draftkings', name: 'DraftKings', priority: 9, isPushBased: true },
  { id: 'fanduel', code: 'fanduel', name: 'FanDuel', priority: 10, isPushBased: true },
  { id: 'fanatics', code: 'fanatics', name: 'Fanatics', priority: 11, isPushBased: true },
  { id: 'betmgm', code: 'betmgm', name: 'BetMGM', priority: 12, isPushBased: false },
  { id: 'betrivers', code: 'betrivers', name: 'BetRivers', priority: 13, isPushBased: false },
  { id: 'hardrock', code: 'hardrock', name: 'Hard Rock Bet', priority: 14, isPushBased: false },
  { id: 'unibet', code: 'unibet', name: 'Unibet', priority: 15, isPushBased: false },
  { id: 'bovada', code: 'bovada', name: 'Bovada', priority: 16, isPushBased: false },
  { id: 'betus', code: 'betus', name: 'BetUS', priority: 17, isPushBased: false },
  { id: 'betonlineag', code: 'betonlineag', name: 'BetOnline.ag', priority: 18, isPushBased: false },
  { id: 'lowvig', code: 'lowvig', name: 'LowVig.ag', priority: 19, isPushBased: false },
  { id: 'onexbet', code: 'onexbet', name: '1xBet', priority: 20, isPushBased: false },
  { id: 'tab_au', code: 'tab_au', name: 'TAB (Australia)', priority: 21, isPushBased: false },
  { id: 'prizepicks', code: 'prizepicks', name: 'PrizePicks', priority: 22, isPushBased: false },
  { id: 'underdog', code: 'underdog', name: 'Underdog Fantasy', priority: 23, isPushBased: false },
];

const PROPLINE_BOOKMAKERS_SORTED: ProplineBookmaker[] = [...PROPLINE_BOOKMAKERS_RAW].sort(
  (a, b) => a.priority - b.priority,
);

export const PROPLINE_BOOKMAKERS: readonly ProplineBookmaker[] = PROPLINE_BOOKMAKERS_SORTED;

export const PROPLINE_BOOKMAKER_BY_CODE: Readonly<Record<string, ProplineBookmaker>> =
  PROPLINE_BOOKMAKERS_SORTED.reduce((acc, b) => {
    acc[b.code] = b;
    return acc;
  }, {} as Record<string, ProplineBookmaker>);

export const PROPLINE_BOOKMAKER_BY_ID: Readonly<Record<string, ProplineBookmaker>> =
  PROPLINE_BOOKMAKERS_SORTED.reduce((acc, b) => {
    acc[String(b.id)] = b;
    return acc;
  }, {} as Record<string, ProplineBookmaker>);

export function resolveBookmaker(
  codeOrId?: string | number | null,
): ProplineBookmaker | null {
  if (codeOrId === null || codeOrId === undefined || codeOrId === '') return null;
  const key = typeof codeOrId === 'number' ? String(codeOrId) : String(codeOrId);
  return PROPLINE_BOOKMAKER_BY_CODE[key] ?? PROPLINE_BOOKMAKER_BY_ID[key] ?? null;
}

export function getPushBasedBookmakers(): readonly ProplineBookmaker[] {
  return PROPLINE_BOOKMAKERS.filter((b) => b.isPushBased);
}

export function getPolledBookmakers(): readonly ProplineBookmaker[] {
  return PROPLINE_BOOKMAKERS.filter((b) => !b.isPushBased);
}

export function getTopPriorityBookmakers(limit = 3): readonly ProplineBookmaker[] {
  return PROPLINE_BOOKMAKERS_SORTED.slice(0, Math.max(0, Math.min(PROPLINE_BOOKMAKERS_SORTED.length, limit)));
}

// DFS (daily-fantasy) books usam precificacao sintetica — PrizePicks cota
// +100/+100 fixo em ambos os lados (o payout varia por acerto no parlay, nao
// pelo preco), e Underdog usa payout_multiplier em vez de odds tradicionais.
// Nao sao um preco de mercado "batível" como um bookmaker real, entao nunca
// devem vencer uma comparacao de "melhor odd" contra um book tradicional.
export function isDfsBookmaker(codeOrId?: string | number | null): boolean {
  const b = resolveBookmaker(codeOrId);
  return b?.code === 'prizepicks' || b?.code === 'underdog';
}
