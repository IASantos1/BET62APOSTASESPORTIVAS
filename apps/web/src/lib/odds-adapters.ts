type LiveScore = {
  home?: number | null;
  away?: number | null;
  homeHalf?: number | null;
  awayHalf?: number | null;
};

type LiveClock = {
  minute?: number | null;
  injuryMinutes?: number | null;
  status?: string;
};

export type UiSelection = {
  id: string;
  name: string;
  price: number;
  suspended?: boolean;
  selectionId?: string;
  outcome?: string;
};

export type UiMarketCategory = {
  name: string;
  code?: string;
  odds: UiSelection[];
  group?: string;
};

export type UiMatchPreview = {
  homeTeam: { name: string; logoUrl?: string };
  awayTeam: { name: string; logoUrl?: string };
  score: { home: number | null; away: number | null };
  league: { name: string; logoUrl?: string };
  clock: { minute: number | null; period: string; running: boolean; stoppage?: number };
  status?: string;
  events?: Array<{
    type: string;
    team: 'h' | 'a' | 'neutral';
    minute: number;
    label: string;
    icon: never;
    color: string;
  }>;
};

export type UiEventMarketsModalEvent = {
  id: string;
  home: string;
  away: string;
  league: string;
  minute?: number;
  period?: string;
  live?: boolean;
  markets: Array<{
    id: string;
    name: string;
    status?: string;
    selections: Array<{
      id: string;
      name: string;
      odds: number;
      status?: string;
      outcome?: string;
    }>;
  }>;
};

type AdapterSelection = {
  id: string;
  name: string;
  odds: number;
  status?: string;
  outcome?: string;
};

type AdapterMarket = {
  id: string;
  type?: string | null;
  name: string;
  status?: string;
  selections?: AdapterSelection[] | null;
};

type AdapterEvent = {
  id: string;
  matchId?: string;
  name: string;
  homeTeamName?: string;
  awayTeamName?: string;
  leagueName?: string;
  sportType: string;
  status: string;
  liveScoreJson?: LiveScore | null;
  liveClockJson?: LiveClock | null | unknown;
  markets?: AdapterMarket[] | null;
};

function readScore(event: Pick<AdapterEvent, 'liveScoreJson'>): LiveScore {
  return (event.liveScoreJson as LiveScore | null | undefined) ?? {};
}

function readClock(event: Pick<AdapterEvent, 'liveClockJson'>): LiveClock {
  return (event.liveClockJson as LiveClock | null | undefined) ?? {};
}

function marketSelectionsToUi(market: AdapterMarket): UiSelection[] {
  return (market.selections ?? []).map((selection) => ({
    id: selection.id,
    name: selection.name,
    price: selection.odds,
    suspended: selection.status === 'SUSPENDED',
    selectionId: selection.id,
    outcome: selection.outcome,
  }));
}

export function eventToUiMarketCategories(event: Pick<AdapterEvent, 'markets'>): UiMarketCategory[] {
  return (event.markets ?? []).map((market) => ({
    name: market.name,
    code: market.type ?? market.id,
    group: market.type ?? undefined,
    odds: marketSelectionsToUi(market),
  }));
}

export function eventToUiModal(event: AdapterEvent): UiEventMarketsModalEvent {
  const clock = readClock(event);
  return {
    id: event.matchId ?? event.id,
    home: event.homeTeamName ?? event.name.split(' vs ')[0] ?? 'Casa',
    away: event.awayTeamName ?? event.name.split(' vs ')[1] ?? 'Fora',
    league: event.leagueName ?? event.sportType,
    minute: typeof clock.minute === 'number' ? clock.minute : undefined,
    period: clock.status,
    live: event.status === 'LIVE' || event.status === 'HALF_TIME',
    markets: (event.markets ?? []).map((market) => ({
      id: market.id,
      name: market.name,
      status: market.status,
      selections: (market.selections ?? []).map((selection) => ({
        id: selection.id,
        name: selection.name,
        odds: selection.odds,
        status: selection.status,
        outcome: selection.outcome,
      })),
    })),
  };
}

export function eventToUiMatchPreview(event: AdapterEvent): UiMatchPreview {
  const score = readScore(event);
  const clock = readClock(event);
  const period =
    event.status === 'HALF_TIME'
      ? 'HT'
      : event.status === 'FINISHED'
        ? 'FT'
        : event.status === 'LIVE'
          ? 'LIVE'
          : 'PRE';
  return {
    homeTeam: { name: event.homeTeamName ?? event.name.split(' vs ')[0] ?? 'Casa' },
    awayTeam: { name: event.awayTeamName ?? event.name.split(' vs ')[1] ?? 'Fora' },
    score: {
      home: score.home ?? null,
      away: score.away ?? null,
    },
    league: { name: event.leagueName ?? event.sportType },
    clock: {
      minute: typeof clock.minute === 'number' ? clock.minute : null,
      period,
      running: event.status === 'LIVE' || event.status === 'HALF_TIME',
      stoppage: typeof clock.injuryMinutes === 'number' ? clock.injuryMinutes : undefined,
    },
    status: event.status,
    events: [],
  };
}
