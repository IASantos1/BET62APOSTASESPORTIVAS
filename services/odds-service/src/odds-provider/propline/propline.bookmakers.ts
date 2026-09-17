import type { ProplineBookmaker } from './propline.types';

const PROPLINE_BOOKMAKERS_RAW: ProplineBookmaker[] = [
  { id: 1, code: 'bet365', name: 'Bet365', priority: 1, isPushBased: true },
  { id: 2, code: 'pinnacle', name: 'Pinnacle', priority: 2, isPushBased: true },
  { id: 3, code: 'betfair', name: 'Betfair (Exchange)', priority: 3, isPushBased: true },
  { id: 4, code: 'williamhill', name: 'William Hill', priority: 4, isPushBased: false },
  { id: 5, code: '1xbet', name: '1xBet', priority: 5, isPushBased: false },
  { id: 6, code: 'betano', name: 'Betano', priority: 6, isPushBased: true },
  { id: 7, code: 'sportingbet', name: 'Sportingbet', priority: 7, isPushBased: false },
  { id: 8, code: 'estrelabet', name: 'Estrela Bet', priority: 8, isPushBased: false },
  { id: 9, code: 'kto', name: 'KTO', priority: 9, isPushBased: false },
  { id: 10, code: 'betvictor', name: 'BetVictor', priority: 10, isPushBased: false },
  { id: 11, code: 'unibet', name: 'Unibet / Kindred', priority: 11, isPushBased: false },
  { id: 12, code: '888sport', name: '888sport', priority: 12, isPushBased: false },
  { id: 13, code: 'draftkings', name: 'DraftKings', priority: 13, isPushBased: true },
  { id: 14, code: 'fanduel', name: 'FanDuel', priority: 14, isPushBased: true },
  { id: 15, code: 'betmgm', name: 'BetMGM', priority: 15, isPushBased: false },
  { id: 16, code: 'caesars', name: 'Caesars Sportsbook', priority: 16, isPushBased: false },
  { id: 17, code: 'smarkets', name: 'Smarkets (Exchange)', priority: 17, isPushBased: true },
  { id: 18, code: 'matchbook', name: 'Matchbook', priority: 18, isPushBased: false },
  { id: 19, code: 'marathonbet', name: 'Marathonbet', priority: 19, isPushBased: false },
  { id: 20, code: 'intertops', name: 'Intertops / Everygame', priority: 20, isPushBased: false },
  { id: 21, code: 'coral', name: 'Coral', priority: 21, isPushBased: false },
  { id: 22, code: 'ladbrokes', name: 'Ladbrokes', priority: 22, isPushBased: false },
  { id: 23, code: 'bwin', name: 'bwin / Entain', priority: 23, isPushBased: false },
  { id: 24, code: 'paddy_power', name: 'Paddy Power', priority: 24, isPushBased: false },
  { id: 25, code: 'sbobet', name: 'SBOBet', priority: 25, isPushBased: false },
  { id: 26, code: 'betway', name: 'Betway', priority: 26, isPushBased: false },
  { id: 27, code: 'tipico', name: 'Tipico', priority: 27, isPushBased: false },
  { id: 28, code: 'skybet', name: 'Sky Bet', priority: 28, isPushBased: false },
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
