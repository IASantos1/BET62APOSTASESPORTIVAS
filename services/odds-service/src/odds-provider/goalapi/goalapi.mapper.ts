import type {
  Bet62Match,
  Bet62Score,
  Bet62Clock,
  Bet62LiveEvent,
  Bet62LiveEventType,
  FootballStats,
  Period,
  MatchStatusCode,
} from '@bet62/shared';
import type {
  GoalApiFixture,
  GoalApiLiveEvent,
  GoalApiStats,
  GoalApiScore,
  GoalApiClock,
  GoalApiCommentary,
  GoalApiStatItem,
  GoalApiTeamStats,
} from './goalapi.types';
import {
  GOAL_STATUS_TO_BET62,
  GOAL_PERIOD_TO_BET62,
} from './goalapi.types';

function toNumberOrNull(v: unknown): number | null {
  if (v === null || v === undefined) return null;
  if (typeof v === 'number') return Number.isFinite(v) ? v : null;
  if (typeof v === 'string') {
    const trimmed = v.trim();
    if (trimmed.length === 0) return null;
    const n = Number(trimmed);
    return Number.isFinite(n) ? n : null;
  }
  return null;
}

function toIntOrNull(v: unknown): number | null {
  const n = toNumberOrNull(v);
  return n === null ? null : Math.trunc(n);
}

function toDateOrNow(v: unknown): Date {
  if (!v) return new Date();
  if (v instanceof Date) return v;
  if (typeof v === 'number') return new Date(v * 1000);
  if (typeof v === 'string') {
    try {
      const d = new Date(v);
      if (Number.isFinite(d.getTime())) return d;
    } catch {
      /* */
    }
  }
  return new Date();
}

function normaliseStatus(raw: string | undefined | null): MatchStatusCode {
  if (!raw) return 'scheduled';
  const upper = String(raw).toUpperCase();
  if (upper === 'NS') return 'scheduled';
  const mapped = GOAL_STATUS_TO_BET62[upper];
  if (mapped) return mapped as MatchStatusCode;
  return 'scheduled';
}

function normalisePeriod(raw: string | undefined | null): Period {
  if (!raw) return null;
  const upper = String(raw).toUpperCase();
  const mapped = GOAL_PERIOD_TO_BET62[upper];
  if (!mapped) return null;
  if (mapped === 'null') return null;
  return mapped as Period;
}

export function clockFromFixture(g: GoalApiFixture): Bet62Clock {
  const clock: GoalApiClock | undefined = g.clock;
  const status = String(g.status ?? 'NS').toUpperCase();
  const minute =
    toIntOrNull(clock?.minute) ??
    (status === '1H' || status === 'LIVE'
      ? 0
      : status === '2H'
        ? 45
        : status === 'ET'
          ? 90
          : null);
  const second = toIntOrNull(clock?.second) ?? null;
  const stoppage = toIntOrNull(clock?.stoppage) ?? null;
  const periodName =
    (clock?.period_name as string) ??
    (status === '1H'
      ? '1st Half'
      : status === 'HT'
        ? 'Halftime'
        : status === '2H'
          ? '2nd Half'
          : status === 'ET'
            ? 'Extra Time'
            : status === 'PEN'
              ? 'Penalties'
              : status === 'FT' || status === 'AET'
                ? 'Full Time'
                : status === 'CANC'
                  ? 'Cancelled'
                  : status === 'PST' || status === 'INT' || status === 'TBD'
                    ? 'Suspended'
                    : null);
  const period: Period = normalisePeriod(
    (clock?.period as string) ?? g.status ?? 'NS',
  );
  const running =
    typeof clock?.running === 'boolean'
      ? clock.running
      : status === '1H' || status === '2H' || status === 'ET' || status === 'LIVE';
  return {
    minute,
    second,
    stoppage,
    periodName,
    period,
    running,
    updatedAt: toDateOrNow(g.last_updated_at ?? clock?.updated_at),
    source: 'goal_api',
  };
}

export function scoreFromFixture(g: GoalApiFixture): Bet62Score {
  const score: GoalApiScore | undefined = g.score;
  const status = normaliseStatus(g.status);
  let home: number | null = null;
  let away: number | null = null;
  if (score?.current) {
    home = toNumberOrNull(score.current.home);
    away = toNumberOrNull(score.current.away);
  }
  if (
    (home === null || away === null) &&
    score?.fulltime &&
    status === 'final'
  ) {
    home = home ?? toNumberOrNull(score.fulltime.home);
    away = away ?? toNumberOrNull(score.fulltime.away);
  }
  if ((home === null || away === null) && score?.total) {
    home = home ?? toNumberOrNull(score.total.home);
    away = away ?? toNumberOrNull(score.total.away);
  }
  return {
    home,
    away,
    status,
    updatedAt: toDateOrNow(g.last_updated_at),
  };
}

function findStatValue(
  stats: GoalApiTeamStats | undefined,
  keys: string[],
): string | number | null {
  if (!stats?.stats) return null;
  const arr = stats.stats as GoalApiStatItem[];
  for (const k of keys) {
    const low = k.toLowerCase();
    const item = arr.find(
      (s) =>
        s &&
        (String(s.type ?? '').toLowerCase() === low ||
          String(s.type ?? '').toLowerCase().includes(low)),
    );
    if (item && item.value !== undefined && item.value !== null) {
      return item.value;
    }
  }
  return null;
}

function parsePercent(v: unknown): number | null {
  if (v === null || v === undefined) return null;
  if (typeof v === 'number') return v;
  const s = String(v).replace('%', '').trim();
  if (s.length === 0) return null;
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}

export function statsToFootballStats(g: GoalApiStats): FootballStats {
  const home = g?.home;
  const away = g?.away;
  const homePossession = parsePercent(
    findStatValue(home, ['possession', 'ball_possession', 'Ball Possession']),
  );
  const awayPossession =
    homePossession !== null ? 100 - homePossession : parsePercent(
      findStatValue(away, ['possession', 'ball_possession', 'Ball Possession']),
    );
  return {
    possessionHome: homePossession,
    possessionAway: awayPossession,
    shotsHome: toIntOrNull(
      findStatValue(home, ['total_shots', 'shots', 'Total Shots']),
    ),
    shotsAway: toIntOrNull(
      findStatValue(away, ['total_shots', 'shots', 'Total Shots']),
    ),
    shotsOnTargetHome: toIntOrNull(
      findStatValue(home, ['shots_on_target', 'Shots on Goal', 'On Target']),
    ),
    shotsOnTargetAway: toIntOrNull(
      findStatValue(away, ['shots_on_target', 'Shots on Goal', 'On Target']),
    ),
    cornersHome: toIntOrNull(
      findStatValue(home, ['corner_kicks', 'corners', 'Corner Kicks']),
    ),
    cornersAway: toIntOrNull(
      findStatValue(away, ['corner_kicks', 'corners', 'Corner Kicks']),
    ),
    foulsHome: toIntOrNull(
      findStatValue(home, ['fouls', 'fouls_committed', 'Fouls']),
    ),
    foulsAway: toIntOrNull(
      findStatValue(away, ['fouls', 'fouls_committed', 'Fouls']),
    ),
    offsidesHome: toIntOrNull(
      findStatValue(home, ['offsides', 'Offsides']),
    ),
    offsidesAway: toIntOrNull(
      findStatValue(away, ['offsides', 'Offsides']),
    ),
    yellowCardsHome: toIntOrNull(
      findStatValue(home, ['yellow_cards', 'Yellow Cards']),
    ),
    yellowCardsAway: toIntOrNull(
      findStatValue(away, ['yellow_cards', 'Yellow Cards']),
    ),
    redCardsHome: toIntOrNull(
      findStatValue(home, ['red_cards', 'Red Cards']),
    ),
    redCardsAway: toIntOrNull(
      findStatValue(away, ['red_cards', 'Red Cards']),
    ),
    savesHome: toIntOrNull(
      findStatValue(home, ['saves', 'goalkeeper_saves', 'Saves']),
    ),
    savesAway: toIntOrNull(
      findStatValue(away, ['saves', 'goalkeeper_saves', 'Saves']),
    ),
    xgHome: toNumberOrNull(
      findStatValue(home, ['expected_goals', 'xg', 'Expected Goals']),
    ),
    xgAway: toNumberOrNull(
      findStatValue(away, ['expected_goals', 'xg', 'Expected Goals']),
    ),
  };
}

function mapEventType(
  ev: GoalApiLiveEvent,
): Bet62LiveEventType {
  const t = String(ev.type ?? '').toLowerCase();
  switch (t) {
    case 'goal':
      return 'goal';
    case 'own_goal':
      return 'own_goal';
    case 'penalty_goal':
      return 'penalty_goal';
    case 'penalty_miss':
      return 'penalty_missed';
    case 'yellow_card':
    case 'second_yellow':
      return 'yellow_card';
    case 'red_card':
      return 'red_card';
    case 'substitution':
      return 'substitution';
    case 'var_review':
      return 'var_review';
    default:
      return 'commentary';
  }
}

export function eventToBet62LiveEvent(
  e: GoalApiLiveEvent,
  matchId: string,
): Bet62LiveEvent {
  const payload: Record<string, unknown> = {};
  if (e.player_name !== undefined) payload.playerName = e.player_name;
  if (e.player_number !== undefined) payload.playerNumber = e.player_number;
  if (e.assist_name !== undefined) payload.assistPlayerName = e.assist_name;
  if (e.team_id !== undefined) payload.teamId = e.team_id;
  if (e.team_name !== undefined) payload.teamName = e.team_name;
  if (e.detail !== undefined) payload.detail = e.detail;
  if (e.var_decision !== undefined) payload.varDecision = e.var_decision;
  if (e.score_after !== undefined) payload.scoreAfter = e.score_after;
  if (e.extra_minute !== undefined) payload.extraMinute = e.extra_minute;
  if (e.period !== undefined) payload.period = e.period;
  if (e.minute !== undefined) payload.minute = e.minute;
  return {
    id: String(e.id ?? `${matchId}-${e.type}-${e.minute}-${e.player_name ?? 'x'}`),
    provider: 'goal_api',
    matchId,
    type: mapEventType(e),
    timestamp: toDateOrNow(e.created_at),
    sequence: toIntOrNull(e.id),
    payload,
  };
}

export function commentaryToLastCommentary(
  comments: GoalApiCommentary[],
  fixtureId: string | number,
): Bet62Match['lastCommentary'] | null {
  if (!comments || comments.length === 0) return null;
  const sorted = [...comments].sort((a, b) => {
    const at = Number(a.minute ?? 0) + Number(a.extra_minute ?? 0) / 1000;
    const bt = Number(b.minute ?? 0) + Number(b.extra_minute ?? 0) / 1000;
    return bt - at;
  });
  const last = sorted[0];
  if (!last) return null;
  return {
    id: String(last.id ?? `c-${fixtureId}-${last.minute ?? 0}`),
    minute: toIntOrNull(last.minute),
    text: String(last.comment ?? ''),
    team: (last.team_name as 'home' | 'away' | 'neutral') ?? null,
    zone: last.zone ?? null,
    timestamp: toDateOrNow(last.created_at),
  };
}

export function fixtureToBet62Match(
  g: GoalApiFixture,
  providers?: Bet62Match['providers'],
): Bet62Match {
  const fixtureId = g.id;
  const homeTeam = g.home;
  const awayTeam = g.away;
  const league = g.league;
  const kickoffStr = g.kickoff_at ?? g.date;
  let kickoffAt: Date;
  if (g.timestamp && typeof g.timestamp === 'number') {
    kickoffAt = new Date(g.timestamp * 1000);
  } else if (kickoffStr) {
    const d = new Date(kickoffStr);
    kickoffAt = Number.isFinite(d.getTime()) ? d : new Date();
  } else {
    kickoffAt = new Date();
  }
  const matchId = `goal:${fixtureId}`;
  return {
    id: matchId,
    sport: 'FOOTBALL',
    league: {
      id: league?.id ?? null,
      name: league?.name ?? 'Unknown League',
      logoUrl: league?.logo ?? null,
      countryCode: league?.country_code ?? league?.country ?? null,
    },
    homeTeam: {
      id: homeTeam?.id ?? null,
      name: homeTeam?.name ?? 'Home',
      shortName: homeTeam?.name ?? null,
      logoUrl: homeTeam?.logo ?? null,
      providerIds: { goal_api: String(homeTeam?.id ?? '') },
    },
    awayTeam: {
      id: awayTeam?.id ?? null,
      name: awayTeam?.name ?? 'Away',
      shortName: awayTeam?.name ?? null,
      logoUrl: awayTeam?.logo ?? null,
      providerIds: { goal_api: String(awayTeam?.id ?? '') },
    },
    kickoffAt,
    score: scoreFromFixture(g),
    clock: clockFromFixture(g),
    providers: providers ?? {
      goalApi: {
        fixtureId,
        leagueId: league?.id ?? null,
        homeTeamId: homeTeam?.id ?? null,
        awayTeamId: awayTeam?.id ?? null,
      },
      propline: null,
    },
    venue: g.venue ?? g.venue_city ?? null,
    lastCommentary: null,
    updatedAt: toDateOrNow(g.last_updated_at),
    dataFreshness: 'goal_api',
  };
}
