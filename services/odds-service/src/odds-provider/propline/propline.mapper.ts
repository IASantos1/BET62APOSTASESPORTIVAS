import { Logger } from '@nestjs/common';
import { roundAmount } from '@bet62/shared';
import type {
  Bet62Bookmaker,
  Bet62Clock,
  Bet62Market,
  Bet62Match,
  Bet62Odd,
  Bet62Score,
  Bet62Selection,
  FootballStats,
  MatchStatusCode,
  Period,
} from '@bet62/shared';
import type {
  ProplineBookmaker,
  ProplineEvent,
  ProplineEventScores,
  ProplineFootballStatsFull,
  ProplineLeague,
  ProplineMarket,
  ProplineOddsResponse,
  ProplineOddsSelection,
  ProplineSelectionTrend,
  ProplineSport,
  ProplineStatsResponse,
  ProplineTeam,
} from './propline.types';
import { PROPLINE_BOOKMAKER_BY_CODE, PROPLINE_BOOKMAKER_BY_ID, resolveBookmaker } from './propline.bookmakers';

const logger = new Logger('ProplineMapper');

export function normalizePeriod(raw: string | null | undefined): Period {
  if (!raw || typeof raw !== 'string') return null;
  const p = raw.trim().toLowerCase().replace(/[\s_-]/g, '');
  switch (p) {
    case '1stquarter': case 'q1': case 'quarter1': case 'firstquarter': case 'period1':
      return 'q1';
    case '2ndquarter': case 'q2': case 'quarter2': case 'secondquarter': case 'period2':
      return 'q2';
    case '3rdquarter': case 'q3': case 'quarter3': case 'thirdquarter':
      return 'q3';
    case '4thquarter': case 'q4': case 'quarter4': case 'fourthquarter':
      return 'q4';
    case 'halftime': case 'half': case 'ht': case 'intervalo':
      return 'ht';
    case 'fulltime': case 'ft': case 'final': case 'regular': case 'full':
      return 'ft';
    case 'extratime': case 'et': case 'ot': case 'overtime': case 'extra':
      return 'et';
    case 'penalties': case 'penaltyshootout': case 'pens': case 'pen': case 'shootout':
      return 'pens';
    case 'set1': case '1stset': case 'firstset':
      return 'set1';
    case 'set2': case '2ndset': case 'secondset':
      return 'set2';
    case 'set3': case '3rdset': case 'thirdset':
      return 'set3';
    case 'set4': case '4thset': case 'fourthset':
      return 'set4';
    case 'set5': case '5thset': case 'fifthset':
      return 'set5';
    case 'inning1': case '1stinning': case 'firstinning': case 'top1': case 'bot1':
      return 'inning1';
    case 'inning2': case '2ndinning': case 'secondinning':
      return 'inning2';
    case 'inning3': case '3rdinning': case 'thirdinning':
      return 'inning3';
    case 'inning4': case '4thinning': case 'fourthinning':
      return 'inning4';
    case 'inning5': case '5thinning': case 'fifthinning':
      return 'inning5';
    case 'inning6': case '6thinning': case 'sixthinning':
      return 'inning6';
    case 'inning7': case '7thinning': case 'seventhinning':
      return 'inning7';
    case 'inning8': case '8thinning': case 'eighthinning':
      return 'inning8';
    case 'inning9': case '9thinning': case 'ninthinning':
      return 'inning9';
    case 'firstperiod': case 'hockeyperiod1': case 'p1':
      return 'period1';
    case 'secondperiod': case 'hockeyperiod2': case 'p2':
      return 'period2';
    case 'thirdperiod': case 'hockeyperiod3': case 'p3':
      return 'period3';
    case 'map1': case 'mapone':
      return 'map1';
    case 'map2': case 'maptwo':
      return 'map2';
    case 'map3': case 'mapthree':
      return 'map3';
    default:
      return null;
  }
}

export function normalizeOutcome(raw: string): Bet62Selection['outcome'] {
  if (!raw) return 'home';
  const s = String(raw).trim().toLowerCase().replace(/[\s_-]/g, '');
  if (s === 'home' || s === '1' || s === 'h' || s === 'casa' || s === 'hometeam' || s === 'team1' || s === 'player1') return 'home';
  if (s === 'away' || s === '2' || s === 'a' || s === 'fora' || s === 'visitante' || s === 'awayteam' || s === 'team2' || s === 'player2') return 'away';
  if (s === 'draw' || s === 'x' || s === 'd' || s === 'empate' || s === 'tie') return 'draw';
  if (s === 'over' || s === 'o' || s === 'mais' || s === 'ma' || s === 'plus' || s === 'above') return 'over';
  if (s === 'under' || s === 'u' || s === 'menos' || s === 'me' || s === 'minus' || s === 'below') return 'under';
  if (s === 'yes' || s === 'y' || s === 'sim' || s === 's' || s === 'true') return 'yes';
  if (s === 'no' || s === 'n' || s === 'nao' || s === 'não' || s === 'false') return 'no';
  if (s === 'win' || s === 'won' || s === 'vitoria' || s === 'vitória' || s === 'winner') return 'win';
  if (s === 'loss' || s === 'lose' || s === 'lost' || s === 'derrota') return 'loss';
  if (s === 'void' || s === 'cancel' || s === 'cancelled' || s === 'anulado') return 'void';
  return 'home';
}

export function normalizeMarketStatus(raw: string): Bet62Market['status'] {
  if (!raw) return 'suspended';
  const s = String(raw).trim().toLowerCase();
  if (s === 'active' || s === 'open' || s === 'live' || s === 'online' || s === 'available') return 'active';
  if (s === 'suspended' || s === 'suspend' || s === 'paused' || s === 'offline' || s === 'halted') return 'suspended';
  if (s === 'closed' || s === 'close' || s === 'ended' || s === 'stop') return 'suspended';
  if (s === 'settled' || s === 'final' || s === 'result' || s === 'paid') return 'settled';
  if (s === 'void' || s === 'cancel' || s === 'cancelled' || s === 'anulado') return 'void';
  return 'suspended';
}

export function normalizeEventStatus(raw: string): MatchStatusCode {
  if (!raw) return 'scheduled';
  const s = String(raw).trim().toLowerCase();
  if (s === 'scheduled' || s === 'notstarted' || s === 'ns' || s === 'upcoming' || s === 'pending') return 'scheduled';
  if (s === 'in_progress' || s === 'inprogress' || s === 'live' || s === 'playing' || s === 'ongoing') return 'in_progress';
  if (s === 'halftime' || s === 'half_time' || s === 'interval' || s === 'break') return 'halftime';
  if (s === 'final' || s === 'ended' || s === 'finished' || s === 'complete' || s === 'completed') return 'final';
  if (s === 'postponed' || s === 'delay' || s === 'delayed') return 'postponed';
  if (s === 'cancelled' || s === 'canceled' || s === 'abandoned') return 'cancelled';
  if (s === 'suspended' || s === 'halted' || s === 'interrupted') return 'suspended';
  if (s === 'awarded' || s === 'walkover') return 'awarded';
  return 'scheduled';
}

export function normalizeTrend(raw: ProplineSelectionTrend): Bet62Odd['trend'] {
  if (!raw) return 'flat';
  if (raw === 'up') return 'up';
  if (raw === 'down') return 'down';
  return 'flat';
}

export function buildBookmakersMap(
  fromResponse?: ProplineBookmaker[] | null,
): ReadonlyMap<string, ProplineBookmaker> {
  const result = new Map<string, ProplineBookmaker>();
  try {
    if (fromResponse && Array.isArray(fromResponse)) {
      for (const b of fromResponse) {
        if (!b || !b.code) continue;
        result.set(String(b.code).toLowerCase(), b);
        if (b.id !== undefined && b.id !== null) result.set(String(b.id), b);
      }
    }
    for (const [k, v] of Object.entries(PROPLINE_BOOKMAKER_BY_CODE)) {
      if (!result.has(k.toLowerCase())) result.set(k.toLowerCase(), v);
    }
    for (const [k, v] of Object.entries(PROPLINE_BOOKMAKER_BY_ID)) {
      if (!result.has(k)) result.set(k, v);
    }
  } catch {
  }
  return result;
}

export function buildSelectionDedupeKey(
  outcome: string,
  line: number | null | undefined,
  handicap: number | null | undefined,
): string {
  const o = String(outcome || '').trim().toLowerCase();
  const l = typeof line === 'number' ? String(line) : '';
  const h = typeof handicap === 'number' ? String(handicap) : '';
  return `${o}|${l}|${h}`;
}

interface AggregatedSelectionRow {
  dedupeKey: string;
  label: string;
  outcome: Bet62Selection['outcome'];
  line: number | null;
  handicap: number | null;
  bestPrice: number;
  bestBookCode: string | null;
  bestBookId: number | string | null;
  bestTimestamp: Date;
  bestRecordedAt: Date | null;
  bestLastChangeAt: Date | null;
  bestTrend: Bet62Odd['trend'];
  allByBook: Array<{
    price: number;
    bookId: number | string;
    bookCode: string;
    timestamp: Date;
    recordedAt: Date | null;
    lastChangeAt: Date | null;
    trend: Bet62Odd['trend'];
    book?: ProplineBookmaker | null;
  }>;
}

function toDateOrNow(v: string | null | undefined): Date {
  if (!v) return new Date();
  try {
    const d = new Date(v);
    if (!isNaN(d.getTime())) return d;
  } catch { /* */ }
  return new Date();
}

function aggregateSelectionsByOutcome(
  selections: ProplineOddsSelection[],
  bookiesMap: ReadonlyMap<string, ProplineBookmaker>,
): AggregatedSelectionRow[] {
  const groups = new Map<string, AggregatedSelectionRow>();
  if (!selections || selections.length === 0) return [];
  for (const sel of selections) {
    if (!sel || typeof sel.price !== 'number' || !isFinite(sel.price) || sel.price <= 1) continue;
    const outcome = sel.outcome || '';
    const line = typeof sel.line === 'number' ? sel.line : null;
    const handicap = typeof sel.handicap === 'number' ? sel.handicap : null;
    const dedupeKey = buildSelectionDedupeKey(outcome, line, handicap);
    const bookKey = sel.book_code ? String(sel.book_code).toLowerCase() : String(sel.book_id);
    const book = bookiesMap.get(bookKey) ?? resolveBookmaker(sel.book_code ?? sel.book_id);
    const price = Number(sel.price);
    const rec = toDateOrNow(sel.recorded_at);
    const lastCh = sel.last_change_at ? toDateOrNow(sel.last_change_at) : null;
    const trend = normalizeTrend(sel.trend ?? null);
    const bookObj = {
      price,
      bookId: sel.book_id,
      bookCode: sel.book_code ?? String(sel.book_id),
      timestamp: rec,
      recordedAt: rec,
      lastChangeAt: lastCh,
      trend,
      book,
    };
    let group = groups.get(dedupeKey);
    if (!group) {
      group = {
        dedupeKey,
        label: sel.label ?? outcome,
        outcome: normalizeOutcome(outcome),
        line,
        handicap,
        bestPrice: price,
        bestBookCode: bookObj.bookCode,
        bestBookId: bookObj.bookId,
        bestTimestamp: rec,
        bestRecordedAt: rec,
        bestLastChangeAt: lastCh,
        bestTrend: trend,
        allByBook: [bookObj],
      };
      groups.set(dedupeKey, group);
    } else {
      group.allByBook.push(bookObj);
      if (price > group.bestPrice) {
        group.bestPrice = price;
        group.bestBookCode = bookObj.bookCode;
        group.bestBookId = bookObj.bookId;
        group.bestTimestamp = rec;
        group.bestRecordedAt = rec;
        group.bestLastChangeAt = lastCh;
        group.bestTrend = trend;
      }
      if (sel.label && (!group.label || group.label === outcome)) {
        group.label = sel.label;
      }
    }
  }
  return Array.from(groups.values());
}

export function selectionToBet62Selection(
  row: AggregatedSelectionRow,
  marketCode: string,
  eventId: string,
  status: Bet62Selection['status'],
  idx: number,
): { selection: Bet62Selection; top3Best: Bet62Odd[] } {
  const selectionId = `${eventId}|${marketCode}|${row.dedupeKey}`;
  const sel: Bet62Selection = {
    id: selectionId,
    name: row.label || row.outcome.toUpperCase(),
    outcome: row.outcome,
    price: row.bestPrice,
    line: typeof row.line === 'number' ? row.line : null,
    handicap: typeof row.handicap === 'number' ? row.handicap : null,
    status,
  };
  const top3 = [...row.allByBook]
    .sort((a, b) => {
      if (b.price !== a.price) return b.price - a.price;
      const pa = a.book?.priority ?? 999;
      const pb = b.book?.priority ?? 999;
      return pa - pb;
    })
    .slice(0, 3);
  const bestOdds: Bet62Odd[] = top3.map((entry, i) => ({
    selectionId,
    marketCode,
    bookmakerId: entry.bookId,
    price: entry.price,
    previousPrice: i > 0 ? undefined : undefined,
    trend: entry.trend,
    isBest: i === 0,
    timestamp: entry.timestamp,
    recordedAt: entry.recordedAt,
    lastChangeAt: entry.lastChangeAt,
  }));
  if (bestOdds.length === 0) {
    bestOdds.push({
      selectionId,
      marketCode,
      bookmakerId: row.bestBookId ?? 'unknown',
      price: row.bestPrice,
      trend: row.bestTrend,
      isBest: true,
      timestamp: row.bestTimestamp,
      recordedAt: row.bestRecordedAt,
      lastChangeAt: row.bestLastChangeAt,
    });
  }
  if (idx >= 0 && bestOdds[0] && !bestOdds[0].bookmakerId) {
    bestOdds[0].bookmakerId = row.bestBookId ?? 1;
  }
  return { selection: sel, top3Best: bestOdds };
}

export function oddToBet62Odd(
  selectionId: string,
  marketCode: string,
  bookCodeOrId: string | number,
  price: number,
  timestamp: Date,
  opts: Partial<Bet62Odd> = {},
): Bet62Odd {
  const book = resolveBookmaker(bookCodeOrId);
  return {
    selectionId,
    marketCode,
    bookmakerId: book?.id ?? bookCodeOrId,
    price,
    previousPrice: opts.previousPrice ?? null,
    trend: opts.trend ?? 'flat',
    isBest: opts.isBest ?? false,
    timestamp,
    recordedAt: opts.recordedAt ?? null,
    lastChangeAt: opts.lastChangeAt ?? null,
  };
}

export function marketToBet62Market(
  pm: ProplineMarket,
  eventId: string,
  bookiesMap: ReadonlyMap<string, ProplineBookmaker>,
  now = new Date(),
): Bet62Market | null {
  try {
    if (!pm) return null;
    const aggregated = aggregateSelectionsByOutcome(pm.selections ?? [], bookiesMap);
    if (aggregated.length === 0) {
      return {
        id: `${eventId}|${pm.market_code}`,
        code: pm.market_code,
        group: pm.market_group ?? 'Outros',
        label: pm.market_label ?? pm.market_code,
        period: normalizePeriod(pm.period ?? null),
        status: normalizeMarketStatus(pm.status),
        selections: [],
        bestOdds: [],
        bookmakerCount: 0,
        updatedAt: now,
        lineSpecifiers: pm.line_specifiers ? { ...pm.line_specifiers } : null,
      };
    }
    const status = normalizeMarketStatus(pm.status);
    const selStatus: Bet62Selection['status'] =
      status === 'active' ? 'active' :
      status === 'suspended' ? 'suspended' :
      status === 'settled' ? 'settled' : 'suspended';
    const selections: Bet62Selection[] = [];
    const bestOddsAcc: Bet62Odd[] = [];
    let maxTs = now;
    const seenBooks = new Set<string>();
    for (let i = 0; i < aggregated.length; i++) {
      const row = aggregated[i];
      const { selection, top3Best } = selectionToBet62Selection(row, pm.market_code, eventId, selStatus, i);
      selections.push(selection);
      for (const odd of top3Best) {
        bestOddsAcc.push(odd);
        const bk = `${odd.bookmakerId}|${odd.selectionId}`;
        seenBooks.add(bk);
        if (odd.timestamp && odd.timestamp.getTime() > maxTs.getTime()) maxTs = odd.timestamp;
      }
    }
    const uniqueBookiesForMarket = new Set<string>();
    for (const s of aggregated) {
      for (const b of s.allByBook) uniqueBookiesForMarket.add(String(b.bookId ?? b.bookCode));
    }
    return {
      id: `${eventId}|${pm.market_code}`,
      code: pm.market_code,
      group: pm.market_group ?? 'Outros',
      label: pm.market_label ?? pm.market_code,
      period: normalizePeriod(pm.period ?? null),
      status,
      selections,
      bestOdds: bestOddsAcc,
      bookmakerCount: uniqueBookiesForMarket.size,
      updatedAt: maxTs,
      lineSpecifiers: pm.line_specifiers ? { ...pm.line_specifiers } : null,
    };
  } catch (err) {
    logger.verbose(`marketToBet62Market erro: ${err instanceof Error ? err.message : String(err)}`);
    return null;
  }
}

export function oddsResponseToMarkets(
  resp: ProplineOddsResponse,
  now = new Date(),
): { markets: Bet62Market[]; bookmakersCount: number } {
  try {
    const bookiesMap = buildBookmakersMap(resp.bookmakers ?? null);
    const out: Bet62Market[] = [];
    const uniqueBookies = new Set<string>();
    if (!resp || !resp.markets || resp.markets.length === 0) {
      return { markets: [], bookmakersCount: 0 };
    }
    for (const m of resp.markets) {
      try {
        const bet = marketToBet62Market(m, resp.event_id, bookiesMap, now);
        if (bet) {
          out.push(bet);
          for (const odd of bet.bestOdds) uniqueBookies.add(String(odd.bookmakerId));
        }
      } catch (err) {
        logger.verbose(`oddsResponseToMarkets skip market ${m?.market_code}: ${err instanceof Error ? err.message : String(err)}`);
      }
    }
    return { markets: out, bookmakersCount: uniqueBookies.size };
  } catch (err) {
    logger.verbose(`oddsResponseToMarkets erro: ${err instanceof Error ? err.message : String(err)}`);
    return { markets: [], bookmakersCount: 0 };
  }
}

export function mapScores(s: ProplineEventScores | null | undefined): { home: number | null; away: number | null } {
  if (!s || typeof s !== 'object') return { home: null, away: null };
  const home = typeof s.current_period_home === 'number' ? s.current_period_home :
    (typeof s.home === 'number' ? s.home :
      (typeof s.q4_home === 'number' ? s.q4_home :
        (typeof s.extra_time_home === 'number' ? s.extra_time_home : null)));
  const away = typeof s.current_period_away === 'number' ? s.current_period_away :
    (typeof s.away === 'number' ? s.away :
      (typeof s.q4_away === 'number' ? s.q4_away :
        (typeof s.extra_time_away === 'number' ? s.extra_time_away : null)));
  return { home, away };
}

export function buildBet62Score(event: ProplineEvent, now = new Date()): Bet62Score {
  const { home, away } = mapScores(event.scores);
  return {
    home: home ?? null,
    away: away ?? null,
    status: normalizeEventStatus(event.status),
    updatedAt: event.last_updated_at ? toDateOrNow(event.last_updated_at) : now,
  };
}

export function buildBet62Clock(event: ProplineEvent, now = new Date()): Bet62Clock {
  const period = normalizePeriod(event.period ?? null);
  const periodName = event.period ?? null;
  const statusNorm = normalizeEventStatus(event.status);
  const running = statusNorm === 'in_progress';
  let minute: number | null = null;
  if (typeof event.minute === 'number') {
    minute = event.minute;
  }
  return {
    minute,
    second: null,
    stoppage: null,
    periodName,
    period,
    running,
    updatedAt: now,
    source: 'propline',
  };
}

export function eventToBet62Match(
  event: ProplineEvent,
  extra?: {
    homeTeam?: ProplineTeam | null;
    awayTeam?: ProplineTeam | null;
    league?: ProplineLeague | null;
    sport?: ProplineSport | null;
    dataFreshnessMs?: number;
    updatedAt?: Date;
  },
): Bet62Match | null {
  try {
    if (!event) return null;
    const now = extra?.updatedAt ?? new Date();
    const score = buildBet62Score(event, now);
    const clock = buildBet62Clock(event, now);
    const kickoffAt = event.start_date ? toDateOrNow(event.start_date) : now;
    const dataFreshness = extra?.dataFreshnessMs !== undefined && extra?.dataFreshnessMs !== null
      ? String(extra.dataFreshnessMs)
      : 'propline_default';
    return {
      id: event.event_id,
      sport: event.sport_key ?? 'FOOTBALL',
      league: {
        id: extra?.league?.key ?? event.league_key ?? null,
        name: extra?.league?.name ?? event.league_key ?? 'Liga Desconhecida',
        logoUrl: extra?.league?.logo ?? null,
        countryCode: extra?.league?.country_code ?? null,
      },
      homeTeam: {
        id: extra?.homeTeam?.key ?? event.home_team_key ?? null,
        name: extra?.homeTeam?.name ?? event.home_team_name ?? event.home_team_key ?? 'Casa',
        shortName: extra?.homeTeam?.name?.slice(0, 10) ?? null,
        logoUrl: extra?.homeTeam?.logo ?? null,
        providerIds: { propline: event.home_team_key },
      },
      awayTeam: {
        id: extra?.awayTeam?.key ?? event.away_team_key ?? null,
        name: extra?.awayTeam?.name ?? event.away_team_name ?? event.away_team_key ?? 'Fora',
        shortName: extra?.awayTeam?.name?.slice(0, 10) ?? null,
        logoUrl: extra?.awayTeam?.logo ?? null,
        providerIds: { propline: event.away_team_key },
      },
      kickoffAt,
      score,
      clock,
      providers: {
        goalApi: null,
        propline: {
          eventId: event.event_id,
          sportKey: event.sport_key,
          homeTeamKey: event.home_team_key,
          awayTeamKey: event.away_team_key,
          leagueKey: event.league_key ?? null,
        },
      },
      venue: event.venue ?? null,
      lastCommentary: null,
      updatedAt: now,
      dataFreshness,
    };
  } catch (err) {
    logger.verbose(`eventToBet62Match erro: ${err instanceof Error ? err.message : String(err)}`);
    return null;
  }
}

export function statsToFootballStats(resp: ProplineStatsResponse | null | undefined): FootballStats {
  const empty: FootballStats = {
    possessionHome: null, possessionAway: null,
    shotsHome: null, shotsAway: null,
    shotsOnTargetHome: null, shotsOnTargetAway: null,
    cornersHome: null, cornersAway: null,
    foulsHome: null, foulsAway: null,
    offsidesHome: null, offsidesAway: null,
    yellowCardsHome: null, yellowCardsAway: null,
    redCardsHome: null, redCardsAway: null,
    savesHome: null, savesAway: null,
    xgHome: null, xgAway: null,
  };
  if (!resp || !resp.football || typeof resp.football !== 'object') return empty;
  const f = resp.football;
  const toNum = (v: unknown): number | null => {
    if (typeof v === 'number' && isFinite(v)) return v;
    if (typeof v === 'string' && v.trim() !== '') {
      const n = Number(v);
      return isFinite(n) ? n : null;
    }
    return null;
  };
  return {
    possessionHome: toNum(f.possession_home),
    possessionAway: toNum(f.possession_away),
    shotsHome: toNum(f.shots_home),
    shotsAway: toNum(f.shots_away),
    shotsOnTargetHome: toNum(f.shots_on_target_home),
    shotsOnTargetAway: toNum(f.shots_on_target_away),
    cornersHome: toNum(f.corners_home),
    cornersAway: toNum(f.corners_away),
    foulsHome: toNum(f.fouls_home),
    foulsAway: toNum(f.fouls_away),
    offsidesHome: toNum(f.offsides_home),
    offsidesAway: toNum(f.offsides_away),
    yellowCardsHome: toNum(f.yellow_cards_home),
    yellowCardsAway: toNum(f.yellow_cards_away),
    redCardsHome: toNum(f.red_cards_home),
    redCardsAway: toNum(f.red_cards_away),
    savesHome: toNum(f.saves_home),
    savesAway: toNum(f.saves_away),
    xgHome: toNum(f.xg_home),
    xgAway: toNum(f.xg_away),
  };
}

export function bookmakerToSharedBookmaker(b: ProplineBookmaker): Bet62Bookmaker {
  return {
    id: b.id,
    name: b.name,
    code: b.code,
    priority: b.priority,
    logoUrl: null,
  };
}

export { roundAmount };
