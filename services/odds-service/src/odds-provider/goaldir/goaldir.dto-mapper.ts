import {
  MarketStatus,
  MarketType,
  SelectionOutcome,
  SportType,
} from '@bet62/shared';
import type {
  ProviderEvent,
  ProviderLeague,
  ProviderMarket,
  ProviderMarketSelection,
} from '../odds-provider.interface';
import type { League, Sport } from '@bet62/shared';

export const FOOTBALL: SportType.FOOTBALL = SportType.FOOTBALL;
export const TENNIS: SportType.TENNIS = SportType.TENNIS;
export const BASKETBALL: SportType.BASKETBALL = SportType.BASKETBALL;
export const HOCKEY: SportType.HOCKEY = SportType.HOCKEY;

export const GOALDIR_SPORT_PREFIX: Record<SportType, string> = {
  [SportType.FOOTBALL]: 'football',
  [SportType.TENNIS]: 'tennis',
  [SportType.BASKETBALL]: 'basketball',
  [SportType.HOCKEY]: 'hockey',
  [SportType.VOLLEYBALL]: 'volleyball',
  [SportType.F1]: 'f1',
  [SportType.UFC]: 'ufc',
  [SportType.GOLF]: 'golf',
  [SportType.DARTS]: 'darts',
  [SportType.TABLE_TENNIS]: 'table_tennis',
  [SportType.ESPORTS]: 'esports',
};

export const GOALDIR_PREFIX_TO_SPORT: Record<string, SportType> = {
  football: SportType.FOOTBALL,
  tennis: SportType.TENNIS,
  basketball: SportType.BASKETBALL,
  hockey: SportType.HOCKEY,
};

export const GOALDIR_SPORT_API_PREFIX: Record<SportType, string> = {
  [SportType.FOOTBALL]: '/api/v2',
  [SportType.TENNIS]: '/tennis/api/v2',
  [SportType.BASKETBALL]: '/basketball/api/v2',
  [SportType.HOCKEY]: '/hockey/api/v2',
  [SportType.VOLLEYBALL]: '',
  [SportType.F1]: '',
  [SportType.UFC]: '',
  [SportType.GOLF]: '',
  [SportType.DARTS]: '',
  [SportType.TABLE_TENNIS]: '',
  [SportType.ESPORTS]: '',
};

export function buildCompositeId(sportCode: SportType | string, numericId: number | string): string {
  const prefix = typeof sportCode === 'string' && sportCode in GOALDIR_SPORT_PREFIX
    ? GOALDIR_SPORT_PREFIX[sportCode as SportType]
    : sportCode.toString().toLowerCase();
  return `${prefix}:${String(numericId)}`;
}

export function parseCompositeId(compositeId: string): { sportType: SportType | null; numericId: number | null; prefix: string } {
  const idx = compositeId.indexOf(':');
  if (idx === -1) {
    return { sportType: null, numericId: null, prefix: '' };
  }
  const prefix = compositeId.slice(0, idx);
  const idPart = compositeId.slice(idx + 1);
  const numericId = Number(idPart);
  const sportType: SportType | null = prefix in GOALDIR_PREFIX_TO_SPORT
    ? GOALDIR_PREFIX_TO_SPORT[prefix]
    : null;
  return {
    sportType,
    numericId: Number.isFinite(numericId) ? numericId : null,
    prefix,
  };
}

type GoaldirEventStatus =
  | 'upcoming'
  | 'live'
  | 'interrupted'
  | 'halftime'
  | 'finished'
  | 'ended'
  | 'awarded'
  | 'postponed'
  | 'cancelled'
  | 'walkover'
  | 'retired'
  | 'suspended'
  | string;

type ProviderEventStatus = ProviderEvent['status'];

export function mapEventStatus(status: GoaldirEventStatus | undefined | null): ProviderEventStatus {
  if (!status) return 'PRE_MATCH';
  const s = String(status).trim().toLowerCase();
  switch (s) {
    case 'upcoming':
    case 'not_started':
    case 'ns':
      return 'PRE_MATCH';
    case 'live':
    case 'in_progress':
    case 'ip':
    case 'first_half':
    case 'second_half':
    case 'extra_time':
    case 'penalties':
      return 'LIVE';
    case 'halftime':
    case 'half_time':
    case 'ht':
      return 'HALF_TIME';
    case 'interrupted':
    case 'suspended':
      return 'SUSPENDED';
    case 'finished':
    case 'ended':
    case 'awarded':
    case 'ft':
    case 'aet':
      return 'FINISHED';
    case 'postponed':
      return 'POSTPONED';
    case 'cancelled':
    case 'canceled':
    case 'walkover':
    case 'retired':
    case 'abandoned':
      return 'CANCELLED';
    default:
      return 'PRE_MATCH';
  }
}

export function mapMarketStatus(rawStatus?: string | null): MarketStatus {
  if (!rawStatus) return MarketStatus.ACTIVE;
  const s = String(rawStatus).trim().toLowerCase();
  if (s === 'suspended' || s === 'paused' || s === 'locked') return MarketStatus.SUSPENDED;
  if (s === 'closed' || s === 'halted') return MarketStatus.CLOSED;
  if (s === 'settled' || s === 'final' || s === 'resulted') return MarketStatus.SETTLED;
  return MarketStatus.ACTIVE;
}

export function toNumberOrNull(v: unknown): number | null {
  if (v === null || v === undefined || v === '') return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

function safeOdds(v: unknown): number | null {
  const n = toNumberOrNull(v);
  if (n === null) return null;
  if (!Number.isFinite(n) || n <= 1 || n > 1000) return null;
  return Number(Number(n).toFixed(2));
}

function selectionId(eventComposite: string, marketKey: string, outcome: SelectionOutcome | string): string {
  return `${eventComposite}:${marketKey}:${String(outcome).toLowerCase()}`;
}

function marketId(eventComposite: string, marketKey: string): string {
  return `${eventComposite}:${marketKey}`;
}

interface FootballOddsShape {
  home_win?: unknown;
  draw?: unknown;
  away_win?: unknown;
  over_05?: unknown;
  under_05?: unknown;
  over_15?: unknown;
  under_15?: unknown;
  over_25?: unknown;
  under_25?: unknown;
  over_35?: unknown;
  under_35?: unknown;
  over_45?: unknown;
  under_45?: unknown;
  btts_yes?: unknown;
  btts_no?: unknown;
  double_chance_1x?: unknown;
  double_chance_12?: unknown;
  double_chance_x2?: unknown;
  draw_no_bet_home?: unknown;
  draw_no_bet_away?: unknown;
  asian_handicap_home?: unknown;
  asian_handicap_away?: unknown;
  asian_handicap_line?: unknown;
  total_corners_over?: unknown;
  total_corners_under?: unknown;
  total_corners_line?: unknown;
  update_interval_seconds?: unknown;
}

interface FootballOddsContext {
  eventCompositeId: string;
}

export function mapFootballOddsToMarkets(
  odds: FootballOddsShape | null | undefined,
  ctx: FootballOddsContext,
): ProviderMarket[] {
  if (!odds || typeof odds !== 'object') return [];
  const markets: ProviderMarket[] = [];
  const evId = ctx.eventCompositeId;

  const hw = safeOdds(odds.home_win);
  const dr = safeOdds(odds.draw);
  const aw = safeOdds(odds.away_win);
  if (hw !== null || dr !== null || aw !== null) {
    const selections: ProviderMarketSelection[] = [];
    if (hw !== null) {
      selections.push({
        id: selectionId(evId, '1x2', SelectionOutcome.HOME),
        providerSelectionId: selectionId(evId, '1x2', SelectionOutcome.HOME),
        name: '1',
        outcome: SelectionOutcome.HOME,
        odds: hw,
        oddsDisplay: hw.toFixed(2),
      });
    }
    if (dr !== null) {
      selections.push({
        id: selectionId(evId, '1x2', SelectionOutcome.DRAW),
        providerSelectionId: selectionId(evId, '1x2', SelectionOutcome.DRAW),
        name: 'X',
        outcome: SelectionOutcome.DRAW,
        odds: dr,
        oddsDisplay: dr.toFixed(2),
      });
    }
    if (aw !== null) {
      selections.push({
        id: selectionId(evId, '1x2', SelectionOutcome.AWAY),
        providerSelectionId: selectionId(evId, '1x2', SelectionOutcome.AWAY),
        name: '2',
        outcome: SelectionOutcome.AWAY,
        odds: aw,
        oddsDisplay: aw.toFixed(2),
      });
    }
    if (selections.length > 0) {
      markets.push({
        id: marketId(evId, '1x2'),
        providerMarketId: marketId(evId, '1x2'),
        eventId: evId,
        type: MarketType.MATCH_WINNER_1X2,
        name: 'Resultado Final (1X2)',
        displayedName: '1X2',
        cashoutAvailable: true,
        selections,
      });
    }
  }

  const ouLines: Array<{ line: string; lineValue: number; over: unknown; under: unknown; label: string }> = [
    { line: '05', lineValue: 0.5, over: odds.over_05, under: odds.under_05, label: 'Mais/Menos 0.5' },
    { line: '15', lineValue: 1.5, over: odds.over_15, under: odds.under_15, label: 'Mais/Menos 1.5' },
    { line: '25', lineValue: 2.5, over: odds.over_25, under: odds.under_25, label: 'Mais/Menos 2.5' },
    { line: '35', lineValue: 3.5, over: odds.over_35, under: odds.under_35, label: 'Mais/Menos 3.5' },
    { line: '45', lineValue: 4.5, over: odds.over_45, under: odds.under_45, label: 'Mais/Menos 4.5' },
  ];
  for (const ou of ouLines) {
    const o = safeOdds(ou.over);
    const u = safeOdds(ou.under);
    if (o === null && u === null) continue;
    const selections: ProviderMarketSelection[] = [];
    if (o !== null) {
      selections.push({
        id: selectionId(evId, `ou_${ou.line}`, SelectionOutcome.OVER),
        providerSelectionId: selectionId(evId, `ou_${ou.line}`, SelectionOutcome.OVER),
        name: `Mais de ${ou.lineValue}`,
        outcome: SelectionOutcome.OVER,
        odds: o,
        oddsDisplay: o.toFixed(2),
        totalLineValue: ou.lineValue,
      });
    }
    if (u !== null) {
      selections.push({
        id: selectionId(evId, `ou_${ou.line}`, SelectionOutcome.UNDER),
        providerSelectionId: selectionId(evId, `ou_${ou.line}`, SelectionOutcome.UNDER),
        name: `Menos de ${ou.lineValue}`,
        outcome: SelectionOutcome.UNDER,
        odds: u,
        oddsDisplay: u.toFixed(2),
        totalLineValue: ou.lineValue,
      });
    }
    if (selections.length > 0) {
      markets.push({
        id: marketId(evId, `ou_${ou.line}`),
        providerMarketId: marketId(evId, `ou_${ou.line}`),
        eventId: evId,
        type: MarketType.OVER_UNDER_TOTAL,
        name: ou.label,
        displayedName: ou.label,
        totalLineValue: ou.lineValue,
        cashoutAvailable: true,
        selections,
      });
    }
  }

  const bttsY = safeOdds(odds.btts_yes);
  const bttsN = safeOdds(odds.btts_no);
  if (bttsY !== null || bttsN !== null) {
    const selections: ProviderMarketSelection[] = [];
    if (bttsY !== null) {
      selections.push({
        id: selectionId(evId, 'btts', SelectionOutcome.YES),
        providerSelectionId: selectionId(evId, 'btts', SelectionOutcome.YES),
        name: 'Sim (Ambas Marcam)',
        outcome: SelectionOutcome.YES,
        odds: bttsY,
        oddsDisplay: bttsY.toFixed(2),
      });
    }
    if (bttsN !== null) {
      selections.push({
        id: selectionId(evId, 'btts', SelectionOutcome.NO),
        providerSelectionId: selectionId(evId, 'btts', SelectionOutcome.NO),
        name: 'Nao (Ambas Marcam)',
        outcome: SelectionOutcome.NO,
        odds: bttsN,
        oddsDisplay: bttsN.toFixed(2),
      });
    }
    if (selections.length > 0) {
      markets.push({
        id: marketId(evId, 'btts'),
        providerMarketId: marketId(evId, 'btts'),
        eventId: evId,
        type: MarketType.BTTS_YES_NO,
        name: 'Ambas Equipas Marcam',
        displayedName: 'BTTS',
        cashoutAvailable: true,
        selections,
      });
    }
  }

  const dc1x = safeOdds(odds.double_chance_1x);
  const dc12 = safeOdds(odds.double_chance_12);
  const dcx2 = safeOdds(odds.double_chance_x2);
  if (dc1x !== null || dc12 !== null || dcx2 !== null) {
    const selections: ProviderMarketSelection[] = [];
    if (dc1x !== null) {
      selections.push({
        id: selectionId(evId, 'dc', '1x'),
        providerSelectionId: selectionId(evId, 'dc', '1x'),
        name: '1X (Casa ou Empate)',
        outcome: SelectionOutcome.HOME,
        odds: dc1x,
        oddsDisplay: dc1x.toFixed(2),
      });
    }
    if (dc12 !== null) {
      selections.push({
        id: selectionId(evId, 'dc', '12'),
        providerSelectionId: selectionId(evId, 'dc', '12'),
        name: '12 (Casa ou Fora)',
        outcome: SelectionOutcome.DRAW,
        odds: dc12,
        oddsDisplay: dc12.toFixed(2),
      });
    }
    if (dcx2 !== null) {
      selections.push({
        id: selectionId(evId, 'dc', 'x2'),
        providerSelectionId: selectionId(evId, 'dc', 'x2'),
        name: 'X2 (Empate ou Fora)',
        outcome: SelectionOutcome.AWAY,
        odds: dcx2,
        oddsDisplay: dcx2.toFixed(2),
      });
    }
    if (selections.length > 0) {
      markets.push({
        id: marketId(evId, 'dc'),
        providerMarketId: marketId(evId, 'dc'),
        eventId: evId,
        type: MarketType.DOUBLE_CHANCE,
        name: 'Dupla Hipotese',
        displayedName: 'Dupla Hipotese',
        cashoutAvailable: true,
        selections,
      });
    }
  }

  return markets;
}

interface TennisOddsShape {
  odds_player1?: unknown;
  odds_player2?: unknown;
  set1_p1?: unknown;
  set1_p2?: unknown;
  set2_p1?: unknown;
  set2_p2?: unknown;
  update_interval_seconds?: unknown;
}

interface TennisOddsContext {
  eventCompositeId: string;
}

export function mapTennisOddsToMarkets(
  odds: TennisOddsShape | null | undefined,
  ctx: TennisOddsContext,
): ProviderMarket[] {
  if (!odds || typeof odds !== 'object') return [];
  const markets: ProviderMarket[] = [];
  const evId = ctx.eventCompositeId;

  const p1 = safeOdds(odds.odds_player1);
  const p2 = safeOdds(odds.odds_player2);
  if (p1 !== null || p2 !== null) {
    const selections: ProviderMarketSelection[] = [];
    if (p1 !== null) {
      selections.push({
        id: selectionId(evId, 'ml', SelectionOutcome.HOME),
        providerSelectionId: selectionId(evId, 'ml', SelectionOutcome.HOME),
        name: 'Jogador 1 (Casa)',
        outcome: SelectionOutcome.HOME,
        odds: p1,
        oddsDisplay: p1.toFixed(2),
      });
    }
    if (p2 !== null) {
      selections.push({
        id: selectionId(evId, 'ml', SelectionOutcome.AWAY),
        providerSelectionId: selectionId(evId, 'ml', SelectionOutcome.AWAY),
        name: 'Jogador 2 (Fora)',
        outcome: SelectionOutcome.AWAY,
        odds: p2,
        oddsDisplay: p2.toFixed(2),
      });
    }
    if (selections.length > 0) {
      markets.push({
        id: marketId(evId, 'ml'),
        providerMarketId: marketId(evId, 'ml'),
        eventId: evId,
        type: MarketType.MONEYLINE,
        name: 'Vencedor do Jogo',
        displayedName: 'Moneyline',
        cashoutAvailable: true,
        selections,
      });
    }
  }
  return markets;
}

interface BasketballOddsShape {
  odds_home?: unknown;
  odds_away?: unknown;
  spread_home?: unknown;
  spread_away?: unknown;
  spread_line?: unknown;
  total_points_over?: unknown;
  total_points_under?: unknown;
  total_points_line?: unknown;
  update_interval_seconds?: unknown;
}

interface BasketballOddsContext {
  eventCompositeId: string;
}

export function mapBasketballOddsToMarkets(
  odds: BasketballOddsShape | null | undefined,
  ctx: BasketballOddsContext,
): ProviderMarket[] {
  if (!odds || typeof odds !== 'object') return [];
  const markets: ProviderMarket[] = [];
  const evId = ctx.eventCompositeId;

  const home = safeOdds(odds.odds_home);
  const away = safeOdds(odds.odds_away);
  if (home !== null || away !== null) {
    const selections: ProviderMarketSelection[] = [];
    if (home !== null) {
      selections.push({
        id: selectionId(evId, 'ml', SelectionOutcome.HOME),
        providerSelectionId: selectionId(evId, 'ml', SelectionOutcome.HOME),
        name: 'Casa',
        outcome: SelectionOutcome.HOME,
        odds: home,
        oddsDisplay: home.toFixed(2),
      });
    }
    if (away !== null) {
      selections.push({
        id: selectionId(evId, 'ml', SelectionOutcome.AWAY),
        providerSelectionId: selectionId(evId, 'ml', SelectionOutcome.AWAY),
        name: 'Fora',
        outcome: SelectionOutcome.AWAY,
        odds: away,
        oddsDisplay: away.toFixed(2),
      });
    }
    if (selections.length > 0) {
      markets.push({
        id: marketId(evId, 'ml'),
        providerMarketId: marketId(evId, 'ml'),
        eventId: evId,
        type: MarketType.MONEYLINE,
        name: 'Vencedor (Moneyline)',
        displayedName: 'Moneyline',
        cashoutAvailable: true,
        selections,
      });
    }
  }

  const spreadH = safeOdds(odds.spread_home);
  const spreadA = safeOdds(odds.spread_away);
  const spreadLine = toNumberOrNull(odds.spread_line);
  if ((spreadH !== null || spreadA !== null) && spreadLine !== null) {
    const selections: ProviderMarketSelection[] = [];
    if (spreadH !== null) {
      selections.push({
        id: selectionId(evId, 'spread', SelectionOutcome.HOME),
        providerSelectionId: selectionId(evId, 'spread', SelectionOutcome.HOME),
        name: `Casa (Handicap ${spreadLine > 0 ? '+' : ''}${spreadLine})`,
        outcome: SelectionOutcome.HOME,
        odds: spreadH,
        oddsDisplay: spreadH.toFixed(2),
        handicapValue: spreadLine,
      });
    }
    if (spreadA !== null) {
      selections.push({
        id: selectionId(evId, 'spread', SelectionOutcome.AWAY),
        providerSelectionId: selectionId(evId, 'spread', SelectionOutcome.AWAY),
        name: `Fora (Handicap ${-spreadLine > 0 ? '+' : ''}${-spreadLine})`,
        outcome: SelectionOutcome.AWAY,
        odds: spreadA,
        oddsDisplay: spreadA.toFixed(2),
        handicapValue: -spreadLine,
      });
    }
    if (selections.length > 0) {
      markets.push({
        id: marketId(evId, 'spread'),
        providerMarketId: marketId(evId, 'spread'),
        eventId: evId,
        type: MarketType.SPREAD,
        name: 'Handicap Asiatico (Spread)',
        displayedName: 'Spread',
        handicapValue: spreadLine,
        cashoutAvailable: true,
        selections,
      });
    }
  }

  const tpOver = safeOdds(odds.total_points_over);
  const tpUnder = safeOdds(odds.total_points_under);
  const tpLine = toNumberOrNull(odds.total_points_line);
  if ((tpOver !== null || tpUnder !== null) && tpLine !== null) {
    const selections: ProviderMarketSelection[] = [];
    if (tpOver !== null) {
      selections.push({
        id: selectionId(evId, 'tp', SelectionOutcome.OVER),
        providerSelectionId: selectionId(evId, 'tp', SelectionOutcome.OVER),
        name: `Mais de ${tpLine} pontos`,
        outcome: SelectionOutcome.OVER,
        odds: tpOver,
        oddsDisplay: tpOver.toFixed(2),
        totalLineValue: tpLine,
      });
    }
    if (tpUnder !== null) {
      selections.push({
        id: selectionId(evId, 'tp', SelectionOutcome.UNDER),
        providerSelectionId: selectionId(evId, 'tp', SelectionOutcome.UNDER),
        name: `Menos de ${tpLine} pontos`,
        outcome: SelectionOutcome.UNDER,
        odds: tpUnder,
        oddsDisplay: tpUnder.toFixed(2),
        totalLineValue: tpLine,
      });
    }
    if (selections.length > 0) {
      markets.push({
        id: marketId(evId, 'tp'),
        providerMarketId: marketId(evId, 'tp'),
        eventId: evId,
        type: MarketType.TOTAL_POINTS,
        name: 'Total de Pontos',
        displayedName: 'Total Pontos',
        totalLineValue: tpLine,
        cashoutAvailable: true,
        selections,
      });
    }
  }

  return markets;
}

interface HockeyOddsShape {
  odds_home?: unknown;
  odds_draw?: unknown;
  odds_away?: unknown;
  update_interval_seconds?: unknown;
}

interface HockeyOddsContext {
  eventCompositeId: string;
}

export function mapHockeyOddsToMarkets(
  odds: HockeyOddsShape | null | undefined,
  ctx: HockeyOddsContext,
): ProviderMarket[] {
  if (!odds || typeof odds !== 'object') return [];
  const markets: ProviderMarket[] = [];
  const evId = ctx.eventCompositeId;
  const h = safeOdds(odds.odds_home);
  const d = safeOdds(odds.odds_draw);
  const a = safeOdds(odds.odds_away);
  if (h !== null || d !== null || a !== null) {
    const selections: ProviderMarketSelection[] = [];
    if (h !== null) {
      selections.push({
        id: selectionId(evId, '1x2', SelectionOutcome.HOME),
        providerSelectionId: selectionId(evId, '1x2', SelectionOutcome.HOME),
        name: '1 (Casa)',
        outcome: SelectionOutcome.HOME,
        odds: h,
        oddsDisplay: h.toFixed(2),
      });
    }
    if (d !== null) {
      selections.push({
        id: selectionId(evId, '1x2', SelectionOutcome.DRAW),
        providerSelectionId: selectionId(evId, '1x2', SelectionOutcome.DRAW),
        name: 'X (Empate)',
        outcome: SelectionOutcome.DRAW,
        odds: d,
        oddsDisplay: d.toFixed(2),
      });
    }
    if (a !== null) {
      selections.push({
        id: selectionId(evId, '1x2', SelectionOutcome.AWAY),
        providerSelectionId: selectionId(evId, '1x2', SelectionOutcome.AWAY),
        name: '2 (Fora)',
        outcome: SelectionOutcome.AWAY,
        odds: a,
        oddsDisplay: a.toFixed(2),
      });
    }
    if (selections.length > 0) {
      markets.push({
        id: marketId(evId, '1x2'),
        providerMarketId: marketId(evId, '1x2'),
        eventId: evId,
        type: MarketType.MATCH_WINNER_1X2,
        name: 'Resultado Final (1X2)',
        displayedName: '1X2',
        cashoutAvailable: true,
        selections,
      });
    }
  }
  return markets;
}

export interface GoaldirLeagueRaw {
  id: unknown;
  name?: unknown;
  country?: unknown;
  country_code?: unknown;
  tier?: unknown;
  is_top?: unknown;
  logo?: unknown;
}

export function mapGoaldirLeague(
  raw: GoaldirLeagueRaw,
  sportType: SportType,
): ProviderLeague {
  const numericId = toNumberOrNull(raw.id) ?? String(raw.id ?? Math.random()).replace(/\D/g, '');
  const id = buildCompositeId(sportType, numericId);
  const name = String(raw.name ?? `Liga ${numericId}`);
  const countryCodeRaw = raw.country_code ?? raw.country;
  return {
    id,
    providerLeagueId: id,
    name,
    sportCode: sportType,
    countryCode: countryCodeRaw ? String(countryCodeRaw).toUpperCase().slice(0, 3) : undefined,
    tier: toNumberOrNull(raw.tier) ?? undefined,
    isTop: Boolean(raw.is_top),
  };
}

export interface GoaldirTeamRaw {
  id: unknown;
  name?: unknown;
  short_name?: unknown;
  logo?: unknown;
  country?: unknown;
  country_code?: unknown;
}

export function mapGoaldirTeam(
  raw: GoaldirTeamRaw,
  sportType: SportType,
): { id: string; providerTeamId: string; name: string; shortName?: string; logoUrl?: string; sportCode: string; countryCode?: string } {
  const numericId = toNumberOrNull(raw.id) ?? String(raw.id ?? Math.random()).replace(/\D/g, '');
  const id = buildCompositeId(sportType, numericId);
  return {
    id,
    providerTeamId: id,
    name: String(raw.name ?? `Equipa ${numericId}`),
    shortName: raw.short_name ? String(raw.short_name) : undefined,
    logoUrl: raw.logo ? String(raw.logo) : undefined,
    sportCode: sportType,
    countryCode: raw.country_code ? String(raw.country_code).toUpperCase().slice(0, 3) : raw.country ? String(raw.country).toUpperCase().slice(0, 3) : undefined,
  };
}

export interface GoaldirEventRaw {
  id: unknown;
  status?: unknown;
  kickoff?: unknown;
  start_date?: unknown;
  start_time?: unknown;
  date?: unknown;
  league?: { id?: unknown; name?: unknown } | unknown;
  league_id?: unknown;
  league_name?: unknown;
  home?: { id?: unknown; name?: unknown; short_name?: unknown; logo?: unknown } | unknown;
  away?: { id?: unknown; name?: unknown; short_name?: unknown; logo?: unknown } | unknown;
  home_id?: unknown;
  away_id?: unknown;
  home_name?: unknown;
  away_name?: unknown;
  home_score?: unknown;
  away_score?: unknown;
  score?: { home?: unknown; away?: unknown; ht_home?: unknown; ht_away?: unknown } | unknown;
  minute?: unknown;
  injury_time?: unknown;
  is_live?: unknown;
  is_top?: unknown;
  has_live_coverage?: unknown;
  has_stream?: unknown;
  stream_url?: unknown;
  slug?: unknown;
  odds?: unknown;
  markets_count?: unknown;
  home_half_score?: unknown;
  away_half_score?: unknown;
  [k: string]: unknown;
}

export function mapGoaldirEvent(
  raw: GoaldirEventRaw,
  sportType: SportType,
  options?: { includeOddsMarkets?: boolean },
): ProviderEvent {
  const numericId = toNumberOrNull(raw.id) ?? String(raw.id ?? Math.random()).replace(/\D/g, '');
  const compositeId = buildCompositeId(sportType, numericId);

  const kickoffRaw = raw.kickoff ?? raw.start_date ?? raw.start_time ?? raw.date;
  let kickoffAt: Date;
  if (kickoffRaw instanceof Date) {
    kickoffAt = kickoffRaw;
  } else if (typeof kickoffRaw === 'number') {
    kickoffAt = new Date(kickoffRaw * (kickoffRaw > 1e12 ? 1 : 1000));
  } else {
    const parsed = kickoffRaw ? new Date(String(kickoffRaw)) : new Date(Date.now() + 86400_000);
    kickoffAt = Number.isFinite(parsed.getTime()) ? parsed : new Date(Date.now() + 86400_000);
  }

  const status = mapEventStatus(raw.status as GoaldirEventStatus | undefined);

  let homeTeamName = raw.home_name;
  let awayTeamName = raw.away_name;
  let homeTeamId = raw.home_id;
  let awayTeamId = raw.away_id;
  if (raw.home && typeof raw.home === 'object') {
    const h = raw.home as { name?: unknown; id?: unknown };
    if (h.name !== undefined && homeTeamName === undefined) homeTeamName = h.name;
    if (h.id !== undefined && homeTeamId === undefined) homeTeamId = h.id;
  }
  if (raw.away && typeof raw.away === 'object') {
    const a = raw.away as { name?: unknown; id?: unknown };
    if (a.name !== undefined && awayTeamName === undefined) awayTeamName = a.name;
    if (a.id !== undefined && awayTeamId === undefined) awayTeamId = a.id;
  }
  const homeNameStr = String(homeTeamName ?? 'Casa');
  const awayNameStr = String(awayTeamName ?? 'Fora');

  let homeScore = toNumberOrNull(raw.home_score);
  let awayScore = toNumberOrNull(raw.away_score);
  let homeHalfScore = toNumberOrNull(raw.home_half_score);
  let awayHalfScore = toNumberOrNull(raw.away_half_score);
  if (raw.score && typeof raw.score === 'object') {
    const sc = raw.score as { home?: unknown; away?: unknown; ht_home?: unknown; ht_away?: unknown };
    if (homeScore === null && sc.home !== undefined) homeScore = toNumberOrNull(sc.home);
    if (awayScore === null && sc.away !== undefined) awayScore = toNumberOrNull(sc.away);
    if (homeHalfScore === null && sc.ht_home !== undefined) homeHalfScore = toNumberOrNull(sc.ht_home);
    if (awayHalfScore === null && sc.ht_away !== undefined) awayHalfScore = toNumberOrNull(sc.ht_away);
  }

  let leagueIdRaw = raw.league_id;
  let leagueNameRaw = raw.league_name;
  if (raw.league && typeof raw.league === 'object') {
    const lg = raw.league as { id?: unknown; name?: unknown };
    if (lg.id !== undefined && leagueIdRaw === undefined) leagueIdRaw = lg.id;
    if (lg.name !== undefined && leagueNameRaw === undefined) leagueNameRaw = lg.name;
  }
  const leagueNumeric = toNumberOrNull(leagueIdRaw) ?? String(leagueIdRaw ?? 'unknown-league');
  const leagueComposite = buildCompositeId(sportType, leagueNumeric);

  const minute = toNumberOrNull(raw.minute);
  const injuryMinutes = toNumberOrNull(raw.injury_time);
  const marketsCount = toNumberOrNull(raw.markets_count);

  const baseEvent: ProviderEvent = {
    id: compositeId,
    providerEventId: compositeId,
    name: `${homeNameStr} vs ${awayNameStr}`,
    sportCode: sportType,
    leagueId: leagueComposite,
    leagueName: String(leagueNameRaw ?? sportType),
    homeTeamId: homeTeamId !== undefined && homeTeamId !== null ? buildCompositeId(sportType, homeTeamId as string | number) : undefined,
    awayTeamId: awayTeamId !== undefined && awayTeamId !== null ? buildCompositeId(sportType, awayTeamId as string | number) : undefined,
    homeTeamName: homeNameStr,
    awayTeamName: awayNameStr,
    homeScore: homeScore ?? undefined,
    awayScore: awayScore ?? undefined,
    homeHalfScore: homeHalfScore ?? undefined,
    awayHalfScore: awayHalfScore ?? undefined,
    status,
    kickoffAt,
    minuteOfMatch: minute ?? undefined,
    injuryMinutes: injuryMinutes ?? undefined,
    liveCoverageAvailable: Boolean(raw.has_live_coverage ?? raw.is_live),
    liveStreamAvailable: Boolean(raw.has_stream),
    streamUrl: raw.stream_url ? String(raw.stream_url) : undefined,
    isTop: Boolean(raw.is_top),
    isFeatured: Boolean(raw.is_top),
    slug: raw.slug ? String(raw.slug) : undefined,
    marketsCount: marketsCount ?? undefined,
    markets: options?.includeOddsMarkets ? mapOddsBySport(raw.odds, sportType, compositeId) : undefined,
  };

  return baseEvent;
}

export function mapOddsBySport(
  odds: unknown,
  sportType: SportType,
  eventCompositeId: string,
): ProviderMarket[] {
  if (!odds || typeof odds !== 'object') return [];
  switch (sportType) {
    case SportType.FOOTBALL:
      return mapFootballOddsToMarkets(odds as FootballOddsShape, { eventCompositeId });
    case SportType.TENNIS:
      return mapTennisOddsToMarkets(odds as TennisOddsShape, { eventCompositeId });
    case SportType.BASKETBALL:
      return mapBasketballOddsToMarkets(odds as BasketballOddsShape, { eventCompositeId });
    case SportType.HOCKEY:
      return mapHockeyOddsToMarkets(odds as HockeyOddsShape, { eventCompositeId });
    default:
      return [];
  }
}

export function providerLeagueToSharedLeague(pl: ProviderLeague, sportId: string): League {
  const now = new Date();
  return {
    id: pl.id,
    sportId,
    providerLeagueId: pl.providerLeagueId,
    externalId: pl.providerLeagueId,
    name: pl.name,
    slug: pl.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || `league-${pl.id}`,
    countryCode: pl.countryCode ?? null,
    tier: pl.tier ? String(pl.tier) : null,
    logoUrl: null,
    active: true,
    featured: Boolean(pl.isTop),
    displayOrder: pl.isTop ? 1 : 100,
    totalLiveEvents: 0,
    totalPrematchEvents: 0,
    createdAt: now,
    updatedAt: now,
  };
}

export function sportTypeToSharedSport(st: SportType, override?: Partial<Sport>): Sport {
  const now = new Date();
  const base: Record<SportType, Omit<Sport, keyof Partial<Sport> | 'createdAt' | 'updatedAt'>> = {
    [SportType.FOOTBALL]: {
      id: 'sport-football',
      slug: 'football',
      name: 'Futebol',
      sportType: SportType.FOOTBALL,
      active: true,
      featured: true,
      displayOrder: 1,
      totalLiveEvents: 0,
      totalPrematchEvents: 0,
      iconUrl: null,
      colorHex: '#e11d48',
    },
    [SportType.BASKETBALL]: {
      id: 'sport-basketball',
      slug: 'basketball',
      name: 'Basquetebol',
      sportType: SportType.BASKETBALL,
      active: true,
      featured: true,
      displayOrder: 2,
      totalLiveEvents: 0,
      totalPrematchEvents: 0,
      iconUrl: null,
      colorHex: '#e11d48',
    },
    [SportType.TENNIS]: {
      id: 'sport-tennis',
      slug: 'tennis',
      name: 'Tenis',
      sportType: SportType.TENNIS,
      active: true,
      featured: true,
      displayOrder: 3,
      totalLiveEvents: 0,
      totalPrematchEvents: 0,
      iconUrl: null,
      colorHex: '#e11d48',
    },
    [SportType.HOCKEY]: {
      id: 'sport-hockey',
      slug: 'hockey',
      name: 'Hoquei no Gelo',
      sportType: SportType.HOCKEY,
      active: true,
      featured: false,
      displayOrder: 4,
      totalLiveEvents: 0,
      totalPrematchEvents: 0,
      iconUrl: null,
      colorHex: '#e11d48',
    },
    [SportType.VOLLEYBALL]: {
      id: 'sport-volleyball', slug: 'volleyball', name: 'Voleibol', sportType: SportType.VOLLEYBALL,
      active: true, featured: false, displayOrder: 5, totalLiveEvents: 0, totalPrematchEvents: 0, iconUrl: null, colorHex: '#e11d48',
    },
    [SportType.F1]: {
      id: 'sport-f1', slug: 'f1', name: 'Formula 1', sportType: SportType.F1,
      active: false, featured: false, displayOrder: 90, totalLiveEvents: 0, totalPrematchEvents: 0, iconUrl: null, colorHex: '#e11d48',
    },
    [SportType.UFC]: {
      id: 'sport-ufc', slug: 'ufc', name: 'UFC / MMA', sportType: SportType.UFC,
      active: false, featured: false, displayOrder: 91, totalLiveEvents: 0, totalPrematchEvents: 0, iconUrl: null, colorHex: '#e11d48',
    },
    [SportType.GOLF]: {
      id: 'sport-golf', slug: 'golf', name: 'Golfe', sportType: SportType.GOLF,
      active: false, featured: false, displayOrder: 92, totalLiveEvents: 0, totalPrematchEvents: 0, iconUrl: null, colorHex: '#e11d48',
    },
    [SportType.DARTS]: {
      id: 'sport-darts', slug: 'darts', name: 'Dardos', sportType: SportType.DARTS,
      active: false, featured: false, displayOrder: 93, totalLiveEvents: 0, totalPrematchEvents: 0, iconUrl: null, colorHex: '#e11d48',
    },
    [SportType.TABLE_TENNIS]: {
      id: 'sport-table-tennis', slug: 'table-tennis', name: 'Tenis de Mesa', sportType: SportType.TABLE_TENNIS,
      active: false, featured: false, displayOrder: 94, totalLiveEvents: 0, totalPrematchEvents: 0, iconUrl: null, colorHex: '#e11d48',
    },
    [SportType.ESPORTS]: {
      id: 'sport-esports', slug: 'esports', name: 'E-Sports', sportType: SportType.ESPORTS,
      active: false, featured: false, displayOrder: 95, totalLiveEvents: 0, totalPrematchEvents: 0, iconUrl: null, colorHex: '#e11d48',
    },
  };
  const b = base[st] as unknown as Sport;
  const over = (override ?? {}) as Partial<Sport>;
  const createdAtVal = over.createdAt ?? now;
  const updatedAtVal = over.updatedAt ?? now;
  const merged: Sport = {
    id: (over.id ?? b.id) as string,
    slug: (over.slug ?? b.slug) as string,
    name: (over.name ?? b.name) as string,
    nameTranslations: over.nameTranslations !== undefined ? over.nameTranslations : b.nameTranslations,
    sportType: (over.sportType ?? b.sportType) as SportType,
    providerSportId: over.providerSportId !== undefined ? over.providerSportId : b.providerSportId,
    active: over.active !== undefined ? over.active : b.active,
    featured: over.featured !== undefined ? over.featured : b.featured,
    displayOrder: over.displayOrder !== undefined ? over.displayOrder : b.displayOrder,
    iconUrl: over.iconUrl !== undefined ? over.iconUrl : b.iconUrl,
    colorHex: over.colorHex !== undefined ? over.colorHex : b.colorHex,
    totalLiveEvents: over.totalLiveEvents !== undefined ? over.totalLiveEvents : b.totalLiveEvents,
    totalPrematchEvents: over.totalPrematchEvents !== undefined ? over.totalPrematchEvents : b.totalPrematchEvents,
    metadata: over.metadata !== undefined ? over.metadata : b.metadata,
    createdAt: createdAtVal,
    updatedAt: updatedAtVal,
  };
  return merged;
}
