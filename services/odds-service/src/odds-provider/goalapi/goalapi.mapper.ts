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
  GoalApiTeam,
  GoalApiLeague,
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
  const matchStatusRaw = (g.matchStatus as string | undefined) ?? g.status ?? 'NS';
  const status = String(matchStatusRaw).toUpperCase();
  const live =
    typeof g.matchLive === 'boolean'
      ? g.matchLive
      : String(g.matchLive ?? '').trim() === '1' || String(g.matchLive ?? '').toLowerCase() === 'true';
  const minute =
    toIntOrNull(g.matchMinute) ??
    toIntOrNull(clock?.minute) ??
    (live || status === '1H' || status === 'LIVE'
      ? 0
      : status === '2H'
        ? 45
        : status === 'ET'
          ? 90
          : null);
  const second = toIntOrNull(clock?.second) ?? null;
  const stoppage = toIntOrNull(clock?.stoppage) ?? toIntOrNull(g.matchExtra) ?? null;
  const periodRaw = (g.matchPeriod as string | undefined) ?? (clock?.period_name as string) ?? (clock?.period as string);
  const periodUp = String(periodRaw ?? status).toUpperCase();
  const periodName =
    (clock?.period_name as string) ??
    (periodUp === 'FIRST_HALF' || status === '1H'
      ? '1st Half'
      : periodUp === 'HALFTIME' || status === 'HT'
        ? 'Halftime'
        : periodUp === 'SECOND_HALF' || status === '2H'
          ? '2nd Half'
          : periodUp === 'EXTRA_TIME' || status === 'ET'
            ? 'Extra Time'
            : periodUp === 'PENALTIES' || status === 'PEN'
              ? 'Penalties'
              : status === 'FT' || status === 'AET' || periodUp === 'FINAL'
                ? 'Full Time'
                : status === 'CANC'
                  ? 'Cancelled'
                  : status === 'PST' || status === 'INT' || status === 'TBD' || periodUp === 'SUSPENDED'
                    ? 'Suspended'
                    : periodUp === 'NOT_STARTED' || status === 'SCHEDULED' || status === 'NS'
                      ? null
                      : null);
  const period: Period = normalisePeriod(
    periodRaw ?? g.status ?? 'NS',
  );
  const running =
    typeof clock?.running === 'boolean'
      ? clock.running
      : live || status === '1H' || status === '2H' || status === 'ET' || status === 'LIVE';
  return {
    minute,
    second,
    stoppage,
    periodName,
    period,
    running,
    updatedAt: toDateOrNow(g.updatedAt ?? g.clockUpdatedAt ?? g.last_updated_at ?? clock?.updated_at),
    source: 'goal_api',
  };
}

export function scoreFromFixture(g: GoalApiFixture): Bet62Score {
  const score: GoalApiScore | undefined = g.score;
  const matchStatusRaw = (g.matchStatus as string | undefined) ?? g.status;
  const status = normaliseStatus(matchStatusRaw);
  let home: number | null = null;
  let away: number | null = null;
  home = toNumberOrNull(g.homeTeamScore);
  away = toNumberOrNull(g.awayTeamScore);
  if (home === null || away === null) {
    const hFt = toNumberOrNull(g.homeTeamFtScore);
    const aFt = toNumberOrNull(g.awayTeamFtScore);
    if (hFt !== null) home = home ?? hFt;
    if (aFt !== null) away = away ?? aFt;
  }
  if (home === null || away === null) {
    const hHt = toNumberOrNull(g.homeTeamHalftimeScore);
    const aHt = toNumberOrNull(g.awayTeamHalftimeScore);
    if (status === 'halftime') {
      if (hHt !== null) home = home ?? hHt;
      if (aHt !== null) away = away ?? aHt;
    }
  }
  if (home === null || away === null) {
    const hExt = toNumberOrNull(g.homeTeamExtraScore);
    const aExt = toNumberOrNull(g.awayTeamExtraScore);
    if (hExt !== null) home = home ?? hExt;
    if (aExt !== null) away = away ?? aExt;
  }
  if (home === null || away === null) {
    const hPen = toNumberOrNull(g.homeTeamPenaltyScore);
    const aPen = toNumberOrNull(g.awayTeamPenaltyScore);
    if (hPen !== null) home = home ?? hPen;
    if (aPen !== null) away = away ?? aPen;
  }
  if (home === null || away === null) {
    if (score?.current) {
      home = home ?? toNumberOrNull(score.current.home);
      away = away ?? toNumberOrNull(score.current.away);
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
  }
  return {
    home,
    away,
    status,
    updatedAt: toDateOrNow(g.updatedAt ?? g.last_updated_at),
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
  const homeNested = g.home as GoalApiTeam | undefined;
  const awayNested = g.away as GoalApiTeam | undefined;
  const homeTeamAlt = g.homeTeam as { id?: unknown; name?: unknown; badge?: unknown; logo?: unknown } | undefined;
  const awayTeamAlt = g.awayTeam as { id?: unknown; name?: unknown; badge?: unknown; logo?: unknown } | undefined;
  const league = g.league as GoalApiLeague | undefined;

  const homeId: string | number | null =
    (g.homeTeamId as string | number | undefined) ??
    homeNested?.id ??
    (homeTeamAlt?.id as string | number | undefined) ??
    null;
  const awayId: string | number | null =
    (g.awayTeamId as string | number | undefined) ??
    awayNested?.id ??
    (awayTeamAlt?.id as string | number | undefined) ??
    null;
  const leagueId: string | number | null =
    (g.leagueId as string | number | undefined) ?? league?.id ?? null;

  const homeName: string = String(
    (g.homeTeamName as string | undefined) ??
      homeNested?.name ??
      (homeTeamAlt?.name as string | undefined) ??
      'Home',
  );
  const awayName: string = String(
    (g.awayTeamName as string | undefined) ??
      awayNested?.name ??
      (awayTeamAlt?.name as string | undefined) ??
      'Away',
  );
  const leagueName: string = String(
    (g.leagueName as string | undefined) ?? league?.name ?? 'Unknown League',
  );

  const homeLogo =
    g.teamHomeBadge ??
    homeNested?.logo ??
    (homeTeamAlt?.badge as string | undefined) ??
    (homeTeamAlt?.logo as string | undefined) ??
    null;
  const awayLogo =
    g.teamAwayBadge ??
    awayNested?.logo ??
    (awayTeamAlt?.badge as string | undefined) ??
    (awayTeamAlt?.logo as string | undefined) ??
    null;
  const leagueLogo =
    g.leagueLogo ?? league?.logo ?? null;
  const countryCode =
    (g.countryName as string | undefined) ??
    (g.countryId as string | undefined) ??
    g.countryLogo ??
    league?.country_code ??
    league?.country ??
    null;

  let kickoffAt: Date;
  const koUtc = g.kickoffUtc as string | undefined;
  const kickoffStrOld = g.kickoff_at ?? g.date;
  if (g.timestamp && typeof g.timestamp === 'number') {
    kickoffAt = new Date(g.timestamp * 1000);
  } else if (koUtc) {
    const d = new Date(String(koUtc));
    kickoffAt = Number.isFinite(d.getTime()) ? d : new Date();
  } else if (g.matchDate && typeof g.matchDate === 'string') {
    const combined = g.matchTime
      ? `${g.matchDate}T${String(g.matchTime).padStart(5, '0')}:00.000Z`
      : `${g.matchDate}T00:00:00.000Z`;
    const d = new Date(combined);
    kickoffAt = Number.isFinite(d.getTime())
      ? d
      : new Date(String(g.matchDate));
  } else if (kickoffStrOld) {
    const d = new Date(String(kickoffStrOld));
    kickoffAt = Number.isFinite(d.getTime()) ? d : new Date();
  } else {
    kickoffAt = new Date();
  }

  const round = g.matchRound != null ? String(g.matchRound) : (g.round as string | undefined) ?? null;
  const referee = (g.matchReferee as string | undefined) ?? (g.referee as string | undefined) ?? null;
  const venue =
    (g.matchStadium as string | undefined) ??
    (g.venue as string | undefined) ??
    (g.venue_city as string | undefined) ??
    null;
  const updatedAt = toDateOrNow(g.updatedAt ?? g.last_updated_at);

  const matchId = `goal:${fixtureId}`;
  return {
    id: matchId,
    sport: 'FOOTBALL',
    league: {
      id: leagueId != null ? leagueId : null,
      name: leagueName,
      logoUrl: leagueLogo,
      countryCode,
    },
    homeTeam: {
      id: homeId != null ? homeId : null,
      name: String(homeName),
      shortName: String(homeName),
      logoUrl: homeLogo,
      providerIds: { goal_api: String(homeId ?? '') },
    },
    awayTeam: {
      id: awayId != null ? awayId : null,
      name: String(awayName),
      shortName: String(awayName),
      logoUrl: awayLogo,
      providerIds: { goal_api: String(awayId ?? '') },
    },
    kickoffAt,
    score: scoreFromFixture(g),
    clock: clockFromFixture(g),
    providers: providers ?? {
      goalApi: {
        fixtureId,
        leagueId: leagueId != null ? leagueId : null,
        homeTeamId: homeId != null ? homeId : null,
        awayTeamId: awayId != null ? awayId : null,
      },
      propline: null,
    },
    venue,
    lastCommentary: null,
    updatedAt,
    dataFreshness: 'goal_api',
  };
}
