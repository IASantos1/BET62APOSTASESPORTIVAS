import { Global, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Interval, SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import type {
  IncrementalSyncResult,
  OddsChangeCallback,
  OddsChangeNotification,
  LiveEventsQuery,
  PrematchEventsQuery,
  ProviderEvent,
  ProviderEventDetail,
  ProviderLeague,
  ProviderMarket,
  ProviderMarketSelection,
} from './odds-provider.interface';
import type { OddsProvider } from './odds-provider.interface';
import {
  EventStatus,
  MarketStatus,
  MarketType,
  SelectionOutcome,
  SportType,
} from '@bet62/shared';
import type { Sport, League } from '@bet62/shared';
import {
  AbstractOddsProvider,
  LiveOddsEvent,
  LiveOddsMarket,
  LiveOddsSelection,
  OddsSettlementOutcome,
  SettlementResult,
  UpcomingEvent,
} from './abstract-odds-provider.service';

interface LiveState {
  homeScore: number;
  awayScore: number;
  minute: number;
  period: 'FIRST_HALF' | 'HALF_TIME' | 'SECOND_HALF' | 'ENDED';
  status: EventStatus;
}

@Global()
@Injectable()
export class MockOddsProviderService extends AbstractOddsProvider implements OddsProvider, OnModuleInit {
  override readonly providerName = 'MOCK_BET62';

  private sports: Array<{ code: string; name: string; type: SportType }> = [
    { code: 'FOOTBALL', name: 'Futebol', type: SportType.FOOTBALL },
    { code: 'BASKETBALL', name: 'Basquete', type: SportType.BASKETBALL },
    { code: 'TENNIS', name: 'Tênis', type: SportType.TENNIS },
  ];

  private leaguesData: Array<{
    providerLeagueId: string;
    name: string;
    sportCode: string;
    countryCode: string;
    tier: number;
    isTop: boolean;
    teams: string[];
  }> = [
    {
      providerLeagueId: 'lp-betano',
      name: 'Liga Portugal Betclic',
      sportCode: 'FOOTBALL',
      countryCode: 'PT',
      tier: 1,
      isTop: true,
      teams: ['SL Benfica', 'FC Porto', 'Sporting CP', 'SC Braga', 'Boavista', 'Vitória SC', 'Casa Pia', 'Estoril', 'Chaves', 'Portimonense', 'Rio Ave', 'Famalicao', 'Amora', 'Arouca', 'Gil Vicente', 'Moreirense', 'Santa Clara', 'Marítimo'],
    },
    {
      providerLeagueId: 'laliga-ea',
      name: 'La Liga EA Sports',
      sportCode: 'FOOTBALL',
      countryCode: 'ES',
      tier: 1,
      isTop: true,
      teams: ['Real Madrid', 'FC Barcelona', 'Atlético Madrid', 'Athletic Bilbao', 'Real Sociedad', 'Villarreal', 'Betis', 'Girona', 'Getafe', 'Valencia', 'Alavés', 'Las Palmas', 'Rayo Vallecano', 'Osasuna', 'Celta Vigo', 'Mallorca', 'Valladolid', 'Espanyol', 'UD Las Palmas', 'Sevilla'],
    },
    {
      providerLeagueId: 'epl',
      name: 'Premier League',
      sportCode: 'FOOTBALL',
      countryCode: 'GB',
      tier: 1,
      isTop: true,
      teams: ['Manchester City', 'Arsenal', 'Liverpool', 'Aston Villa', 'Tottenham', 'Newcastle', 'Manchester United', 'West Ham', 'Chelsea', 'Brighton', 'Wolves', 'Bournemouth', 'Fulham', 'Crystal Palace', 'Brentford', 'Everton', 'Nottm Forest', 'Luton', 'Burnley', 'Sheffield Utd'],
    },
    {
      providerLeagueId: 'brasileirao',
      name: 'Brasileirão Série A',
      sportCode: 'FOOTBALL',
      countryCode: 'BR',
      tier: 1,
      isTop: true,
      teams: ['Flamengo', 'Palmeiras', 'Atlético Mineiro', 'Botafogo', 'São Paulo FC', 'Fluminense', 'Grêmio', 'Internacional', 'Corinthians', 'Bahia', 'Cruzeiro', 'Vasco', 'Fortaleza', 'Cuiabá', 'Vitória', 'Atlético Goianiense', 'Criciúma', 'Juventude', 'Bragantino', 'Goiás'],
    },
    {
      providerLeagueId: 'nba',
      name: 'NBA',
      sportCode: 'BASKETBALL',
      countryCode: 'US',
      tier: 1,
      isTop: true,
      teams: ['LA Lakers', 'Boston Celtics', 'Golden State Warriors', 'Miami Heat', 'Milwaukee Bucks', 'Denver Nuggets', 'Phoenix Suns', 'Philadelphia 76ers', 'Dallas Mavericks', 'LA Clippers', 'Toronto Raptors', 'Chicago Bulls', 'Houston Rockets', 'Brooklyn Nets'],
    },
    {
      providerLeagueId: 'atp-masters',
      name: 'ATP Masters 1000',
      sportCode: 'TENNIS',
      countryCode: 'MC',
      tier: 1,
      isTop: true,
      teams: ['Carlos Alcaraz', 'Novak Djokovic', 'Jannik Sinner', 'Daniil Medvedev', 'Alexander Zverev', 'Andrey Rublev', 'Holger Rune', 'Stefanos Tsitsipas', 'Casper Ruud', 'Hubert Hurkacz'],
    },
  ];

  private events: Map<string, ProviderEvent> = new Map();
  private eventIdToLeague: Map<string, string> = new Map();
  private marketsByEvent: Map<string, ProviderMarket[]> = new Map();
  private liveState: Map<string, LiveState> = new Map();
  private changeCallbacks: Set<OddsChangeCallback> = new Set();

  constructor(private readonly schedulerRegistry: SchedulerRegistry) {
    super();
  }

  async onModuleInit() {
    this.generatePrematchEvents();
    this.startLiveSimulatorJob();
    this.logger.log(`[MockOddsProvider] Inicializado: ${this.events.size} eventos criados`);
  }

  private generatePrematchEvents() {
    let eventCounter = 1;
    for (const league of this.leaguesData) {
      const eventsInLeague = this.randomIntBetween(6, 14);
      for (let i = 0; i < eventsInLeague; i++) {
        const t1 = league.teams[this.randomIntBetween(0, league.teams.length - 1)];
        let t2 = league.teams[this.randomIntBetween(0, league.teams.length - 1)];
        let tries = 0;
        while (t2 === t1 && tries < 5) {
          t2 = league.teams[this.randomIntBetween(0, league.teams.length - 1)];
          tries++;
        }
        const hoursFromNow = this.randomIntBetween(1, 48);
        const kickoff = new Date(Date.now() + hoursFromNow * 60 * 60 * 1000);
        const isLiveCandidate = hoursFromNow <= 2;
        const eventId = `evt-${eventCounter.toString().padStart(5, '0')}`;
        const pevId = `prov-${league.providerLeagueId}-${eventCounter}`;
        eventCounter++;
        const isLive = isLiveCandidate && Math.random() < 0.4;
        const status = isLive ? EventStatus.LIVE : EventStatus.PRE_MATCH;
        const homeTeamName = t1;
        const awayTeamName = t2;
        const ev: ProviderEvent = {
          id: eventId,
          providerEventId: pevId,
          name: `${homeTeamName} vs ${awayTeamName}`,
          sportCode: league.sportCode,
          leagueId: league.providerLeagueId,
          leagueName: league.name,
          homeTeamName,
          awayTeamName,
          status,
          kickoffAt: kickoff,
          isTop: league.isTop && Math.random() < 0.3,
          isFeatured: league.isTop && i === 0,
          liveStreamAvailable: Math.random() < 0.5,
          slug: `${league.sportCode.toLowerCase()}-${league.name.toLowerCase().replace(/\s+/g, '-')}-${homeTeamName.toLowerCase().replace(/\s+/g, '-')}-${awayTeamName.toLowerCase().replace(/\s+/g, '-')}-${eventId}`,
          marketsCount: 0,
        };
        this.events.set(eventId, ev);
        this.eventIdToLeague.set(eventId, league.providerLeagueId);
        const markets = this.generateMarketsForEvent(eventId, league.sportCode, homeTeamName, awayTeamName);
        this.marketsByEvent.set(eventId, markets);
        ev.marketsCount = markets.length;
        if (isLive) {
          this.liveState.set(eventId, {
            homeScore: 0,
            awayScore: 0,
            minute: this.randomIntBetween(5, 75),
            period: 'FIRST_HALF',
            status: EventStatus.LIVE,
          });
        }
      }
    }
  }

  private generateMarketsForEvent(eventId: string, sportCode: string, homeName: string, awayName: string): ProviderMarket[] {
    const markets: ProviderMarket[] = [];
    const isFootball = sportCode === 'FOOTBALL';
    const isBasketball = sportCode === 'BASKETBALL';
    const isTennis = sportCode === 'TENNIS';
    let mCounter = 1;

    if (isFootball) {
      markets.push(this.build1x2(eventId, mCounter++, homeName, awayName));
      markets.push(this.buildOverUnder(eventId, mCounter++, 2.5));
      markets.push(this.buildBtts(eventId, mCounter++));
      markets.push(this.buildAsianHandicap(eventId, mCounter++, 0));
      markets.push(this.buildDoubleChance(eventId, mCounter++, homeName, awayName));
      markets.push(this.buildHalfTimeResult(eventId, mCounter++, homeName, awayName));
    } else if (isBasketball || isTennis) {
      markets.push(this.buildWinner12(eventId, mCounter++, homeName, awayName, sportCode));
      if (isBasketball) {
        markets.push(this.buildOverUnder(eventId, mCounter++, 215.5));
        markets.push(this.buildSpread(eventId, mCounter++, 4.5, homeName, awayName));
      }
    }
    return markets;
  }

  private mkMarket(eventId: string, seq: number, type: MarketType, name: string): {
    base: Omit<ProviderMarket, 'selections'>;
    mid: () => string;
    msid: (i: number) => string;
  } {
    const providerMarketId = `${eventId}-m${seq.toString().padStart(3, '0')}`;
    const id = `mkt-${eventId}-${seq}`;
    return {
      base: {
        id,
        providerMarketId,
        eventId,
        type,
        name,
        status: MarketStatus.ACTIVE,
        cashoutAvailable: true,
      },
      mid: () => id,
      msid: (i: number) => `sel-${providerMarketId}-${i}`,
    };
  }

  private build1x2(eventId: string, seq: number, home: string, away: string): ProviderMarket {
    const ctx = this.mkMarket(eventId, seq, MarketType.MATCH_WINNER_1X2, 'Resultado Final (1X2)');
    const hOdds = this.randomOdds(1.8, 3.6);
    const dOdds = this.randomOdds(3.0, 4.5);
    const aOdds = this.pairThirdOdd(hOdds, dOdds);
    return {
      ...ctx.base,
      selections: [
        { id: ctx.msid(1), providerSelectionId: ctx.msid(1), name: home, outcome: SelectionOutcome.HOME, odds: hOdds, status: MarketStatus.ACTIVE },
        { id: ctx.msid(2), providerSelectionId: ctx.msid(2), name: 'Empate', outcome: SelectionOutcome.DRAW, odds: dOdds, status: MarketStatus.ACTIVE },
        { id: ctx.msid(3), providerSelectionId: ctx.msid(3), name: away, outcome: SelectionOutcome.AWAY, odds: aOdds, status: MarketStatus.ACTIVE },
      ],
    };
  }

  private buildWinner12(eventId: string, seq: number, home: string, away: string, sport: string): ProviderMarket {
    const ctx = this.mkMarket(eventId, seq, MarketType.MATCH_WINNER_12, sport === 'TENNIS' ? 'Vencedor do Jogo' : 'Vencedor do Jogo (Moneyline)');
    const hOdds = this.randomOdds(1.4, 2.8);
    const aOdds = this.pairSecondOdd(hOdds);
    return {
      ...ctx.base,
      selections: [
        { id: ctx.msid(1), providerSelectionId: ctx.msid(1), name: home, outcome: SelectionOutcome.HOME, odds: hOdds, status: MarketStatus.ACTIVE },
        { id: ctx.msid(2), providerSelectionId: ctx.msid(2), name: away, outcome: SelectionOutcome.AWAY, odds: aOdds, status: MarketStatus.ACTIVE },
      ],
    };
  }

  private buildOverUnder(eventId: string, seq: number, line: number): ProviderMarket {
    const ctx = this.mkMarket(eventId, seq, MarketType.OVER_UNDER_TOTAL, `Mais/Menos ${line} gols/pontos`);
    const baseOver = this.randomOdds(1.8, 2.1);
    const baseUnder = this.pairSecondOdd(baseOver);
    return {
      ...ctx.base,
      totalLineValue: line,
      displayedName: `Total ${line}`,
      selections: [
        { id: ctx.msid(1), providerSelectionId: ctx.msid(1), name: `Mais de ${line}`, outcome: SelectionOutcome.OVER, odds: baseOver, totalLineValue: line, status: MarketStatus.ACTIVE },
        { id: ctx.msid(2), providerSelectionId: ctx.msid(2), name: `Menos de ${line}`, outcome: SelectionOutcome.UNDER, odds: baseUnder, totalLineValue: line, status: MarketStatus.ACTIVE },
      ],
    };
  }

  private buildBtts(eventId: string, seq: number): ProviderMarket {
    const ctx = this.mkMarket(eventId, seq, MarketType.BTTS_YES_NO, 'Ambas Marcam (BTTS)');
    const yesOdds = this.randomOdds(1.7, 2.1);
    const noOdds = this.pairSecondOdd(yesOdds);
    return {
      ...ctx.base,
      selections: [
        { id: ctx.msid(1), providerSelectionId: ctx.msid(1), name: 'Sim', outcome: SelectionOutcome.YES, odds: yesOdds, status: MarketStatus.ACTIVE },
        { id: ctx.msid(2), providerSelectionId: ctx.msid(2), name: 'Não', outcome: SelectionOutcome.NO, odds: noOdds, status: MarketStatus.ACTIVE },
      ],
    };
  }

  private buildAsianHandicap(eventId: string, seq: number, handicap: number): ProviderMarket {
    const ctx = this.mkMarket(eventId, seq, MarketType.ASIAN_HANDICAP, `Handicap Asiático ${handicap > 0 ? '+' : ''}${handicap}`);
    const homeOdds = this.randomOdds(1.85, 2.15);
    const awayOdds = this.pairSecondOdd(homeOdds);
    return {
      ...ctx.base,
      handicapValue: handicap,
      selections: [
        { id: ctx.msid(1), providerSelectionId: ctx.msid(1), name: `Casa (${handicap > 0 ? '+' : ''}${handicap})`, outcome: SelectionOutcome.HOME, odds: homeOdds, handicapValue: handicap, status: MarketStatus.ACTIVE },
        { id: ctx.msid(2), providerSelectionId: ctx.msid(2), name: `Fora (${-handicap > 0 ? '+' : ''}${-handicap})`, outcome: SelectionOutcome.AWAY, odds: awayOdds, handicapValue: -handicap, status: MarketStatus.ACTIVE },
      ],
    };
  }

  private buildDoubleChance(eventId: string, seq: number, home: string, away: string): ProviderMarket {
    const ctx = this.mkMarket(eventId, seq, MarketType.DOUBLE_CHANCE, 'Dupla Chance');
    return {
      ...ctx.base,
      selections: [
        { id: ctx.msid(1), providerSelectionId: ctx.msid(1), name: `${home} ou Empate (1X)`, outcome: SelectionOutcome.HOME, odds: this.randomOdds(1.25, 1.65), status: MarketStatus.ACTIVE },
        { id: ctx.msid(2), providerSelectionId: ctx.msid(2), name: `${home} ou ${away} (12)`, outcome: SelectionOutcome.HOME, odds: this.randomOdds(1.15, 1.55), status: MarketStatus.ACTIVE },
        { id: ctx.msid(3), providerSelectionId: ctx.msid(3), name: `Empate ou ${away} (X2)`, outcome: SelectionOutcome.AWAY, odds: this.randomOdds(1.3, 1.7), status: MarketStatus.ACTIVE },
      ],
    };
  }

  private buildHalfTimeResult(eventId: string, seq: number, home: string, away: string): ProviderMarket {
    const ctx = this.mkMarket(eventId, seq, MarketType.HALF_TIME_RESULT, 'Resultado no Intervalo');
    const hOdds = this.randomOdds(2.1, 4.0);
    const dOdds = this.randomOdds(2.2, 3.6);
    const aOdds = this.pairThirdOdd(hOdds, dOdds);
    return {
      ...ctx.base,
      period: 'FIRST_HALF',
      selections: [
        { id: ctx.msid(1), providerSelectionId: ctx.msid(1), name: home, outcome: SelectionOutcome.HOME, odds: hOdds, status: MarketStatus.ACTIVE },
        { id: ctx.msid(2), providerSelectionId: ctx.msid(2), name: 'Empate', outcome: SelectionOutcome.DRAW, odds: dOdds, status: MarketStatus.ACTIVE },
        { id: ctx.msid(3), providerSelectionId: ctx.msid(3), name: away, outcome: SelectionOutcome.AWAY, odds: aOdds, status: MarketStatus.ACTIVE },
      ],
    };
  }

  private buildSpread(eventId: string, seq: number, line: number, home: string, away: string): ProviderMarket {
    const ctx = this.mkMarket(eventId, seq, MarketType.SPREAD, `Handicap Spread ${line > 0 ? '+' : ''}${line}`);
    const hOdds = this.randomOdds(1.85, 2.05);
    const aOdds = this.pairSecondOdd(hOdds);
    return {
      ...ctx.base,
      handicapValue: line,
      selections: [
        { id: ctx.msid(1), providerSelectionId: ctx.msid(1), name: `${home} (${line > 0 ? '+' : ''}${line})`, outcome: SelectionOutcome.HOME, odds: hOdds, handicapValue: line, status: MarketStatus.ACTIVE },
        { id: ctx.msid(2), providerSelectionId: ctx.msid(2), name: `${away} (${-line > 0 ? '+' : ''}${-line})`, outcome: SelectionOutcome.AWAY, odds: aOdds, handicapValue: -line, status: MarketStatus.ACTIVE },
      ],
    };
  }

  private randomOdds(min: number, max: number): number {
    const val = Math.random() * (max - min) + min;
    return Math.round(val * 100) / 100;
  }

  private pairSecondOdd(o1: number): number {
    const vig = 1.06;
    const implied = 1 / o1;
    const remaining = Math.max(0.3, vig - implied);
    return Math.round((1 / remaining) * 100) / 100;
  }

  private pairThirdOdd(o1: number, o2: number): number {
    const vig = 1.09;
    const remaining = Math.max(0.22, vig - (1 / o1) - (1 / o2));
    return Math.round((1 / remaining) * 100) / 100;
  }

  private randomIntBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private startLiveSimulatorJob() {
    const job = CronJob.from({
      cronTime: '*/10 * * * * *',
      onTick: () => this.tickLiveSimulator(),
      start: true,
    });
    this.schedulerRegistry.addCronJob('mock-live-simulator', job);
  }

  @Interval('mock-live-tick', 10000)
  private tickLiveSimulator() {
    const changes: OddsChangeNotification[] = [];
    for (const [eventId, state] of this.liveState.entries()) {
      const event = this.events.get(eventId);
      if (!event) continue;
      let newMinute = state.minute;
      let newHome = state.homeScore;
      let newAway = state.awayScore;
      let newPeriod = state.period;
      let newStatus = state.status;
      if (state.period !== 'ENDED') {
        if (Math.random() < 0.75) newMinute = Math.min(95, state.minute + this.randomIntBetween(1, 3));
        if (Math.random() < 0.08) newHome += 1;
        if (Math.random() < 0.08) newAway += 1;
        if (state.period === 'FIRST_HALF' && newMinute >= 45) {
          newPeriod = 'HALF_TIME';
          newStatus = EventStatus.HALF_TIME;
          newMinute = 45;
        } else if (state.period === 'HALF_TIME' && Math.random() < 0.4) {
          newPeriod = 'SECOND_HALF';
          newStatus = EventStatus.LIVE;
          newMinute = 46;
        } else if (state.period === 'SECOND_HALF' && newMinute >= 90) {
          newPeriod = 'ENDED';
          newStatus = EventStatus.FINISHED;
          newMinute = 90;
        }
      }
      this.liveState.set(eventId, {
        homeScore: newHome,
        awayScore: newAway,
        minute: newMinute,
        period: newPeriod,
        status: newStatus,
      });
      event.status = newStatus as unknown as ProviderEvent['status'];
      event.homeScore = newHome;
      event.awayScore = newAway;
      event.minuteOfMatch = newMinute;
      event.liveUpdatedAt = new Date();

      if (Math.random() < 0.5) {
        const eventMarkets = this.marketsByEvent.get(eventId) || [];
        for (const mk of eventMarkets) {
          for (const sel of mk.selections) {
            if (Math.random() < 0.12) {
              const oldOdds = sel.odds;
              const delta = (Math.random() - 0.5) * 0.25;
              const newOdds = Math.max(1.05, Math.min(25.0, Math.round((oldOdds + delta) * 100) / 100));
              changes.push({
                selectionId: sel.id,
                marketId: mk.id,
                eventId,
                oldOdds,
                newOdds,
                status: MarketStatus.ACTIVE,
                changedAt: new Date(),
                providerChangeId: `pc-${eventId}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
              });
              sel.odds = newOdds;
              sel.isTrendingUp = newOdds > oldOdds;
            }
          }
        }
      }
    }
    if (changes.length > 0) {
      this.notifyCallbacks(changes);
    }
  }

  private notifyCallbacks(changes: OddsChangeNotification[]) {
    for (const cb of this.changeCallbacks) {
      try {
        void cb(changes);
      } catch (err) {
        this.logger.warn('Erro ao notificar callback de mudança de odds', err instanceof Error ? err.stack : String(err));
      }
    }
  }

  async getPrematchEvents(query: PrematchEventsQuery): Promise<{ events: ProviderEvent[]; total: number }> {
    let list = Array.from(this.events.values()).filter((e) => e.status === EventStatus.PRE_MATCH || e.status === EventStatus.PRE_LIVE);
    if (query.sports && query.sports.length > 0) {
      list = list.filter((e) => query.sports!.map((s) => s.toString()).includes(e.sportCode));
    }
    if (query.leagueIds && query.leagueIds.length > 0) {
      list = list.filter((e) => query.leagueIds!.includes(e.leagueId));
    }
    if (query.topEventsOnly) {
      list = list.filter((e) => e.isTop || e.isFeatured);
    }
    if (query.onlyWithLiveStream) {
      list = list.filter((e) => !!e.liveStreamAvailable);
    }
    if (query.fromDate) {
      list = list.filter((e) => e.kickoffAt >= query.fromDate!);
    }
    if (query.toDate) {
      list = list.filter((e) => e.kickoffAt <= query.toDate!);
    }
    if (query.searchTerm) {
      const term = query.searchTerm.toLowerCase();
      list = list.filter((e) => e.name.toLowerCase().includes(term) || e.leagueName.toLowerCase().includes(term));
    }
    list.sort((a, b) => a.kickoffAt.getTime() - b.kickoffAt.getTime());
    const page = Math.max(1, query.page ?? 1);
    const limit = Math.min(200, Math.max(1, query.limit ?? 50));
    const start = (page - 1) * limit;
    return { events: list.slice(start, start + limit), total: list.length };
  }

  async getLiveEvents(query: LiveEventsQuery): Promise<{ events: ProviderEvent[]; total: number }> {
    let list = Array.from(this.events.values()).filter((e) => e.status === EventStatus.LIVE || e.status === EventStatus.HALF_TIME);
    if (query.sports && query.sports.length > 0) {
      list = list.filter((e) => query.sports!.map((s) => s.toString()).includes(e.sportCode));
    }
    if (query.leagueIds && query.leagueIds.length > 0) {
      list = list.filter((e) => query.leagueIds!.includes(e.leagueId));
    }
    if (query.onlyWithLiveStream) {
      list = list.filter((e) => !!e.liveStreamAvailable);
    }
    for (const ev of list) {
      const ls = this.liveState.get(ev.id);
      if (ls) {
        ev.homeScore = ls.homeScore;
        ev.awayScore = ls.awayScore;
        ev.minuteOfMatch = ls.minute;
        ev.liveUpdatedAt = new Date();
      }
    }
    const page = Math.max(1, query.page ?? 1);
    const limit = Math.min(200, Math.max(1, query.limit ?? 50));
    const start = (page - 1) * limit;
    return { events: list.slice(start, start + limit), total: list.length };
  }

  async getEventDetail(eventId: string, includeMarkets = true): Promise<ProviderEventDetail | null> {
    const event = this.events.get(eventId);
    if (!event) return null;
    const markets = includeMarkets ? this.marketsByEvent.get(eventId) ?? [] : [];
    const ls = this.liveState.get(eventId);
    if (ls) {
      event.homeScore = ls.homeScore;
      event.awayScore = ls.awayScore;
      event.minuteOfMatch = ls.minute;
      event.liveUpdatedAt = new Date();
    }
    return { ...event, markets };
  }

  async getActiveLeagues(sport?: SportType): Promise<ProviderLeague[]> {
    let list = this.leaguesData.slice();
    if (sport) {
      list = list.filter((l) => l.sportCode === sport.toString());
    }
    return list.map((l) => ({
      id: l.providerLeagueId,
      providerLeagueId: l.providerLeagueId,
      name: l.name,
      sportCode: l.sportCode,
      countryCode: l.countryCode,
      tier: l.tier,
      isTop: l.isTop,
    }));
  }

  async syncIncremental(_since?: Date): Promise<IncrementalSyncResult> {
    const events = Array.from(this.events.keys());
    const eventSample = events.slice(0, Math.min(3, events.length));
    const updatedSelectionIds: string[] = [];
    for (const eid of eventSample) {
      const mkts = this.marketsByEvent.get(eid) ?? [];
      for (const m of mkts) {
        for (const s of m.selections) {
          if (Math.random() < 0.4) {
            const old = s.odds;
            s.odds = Math.max(1.05, Math.min(25, Math.round((old + (Math.random() - 0.5) * 0.1) * 100) / 100));
            updatedSelectionIds.push(s.id);
          }
        }
      }
    }
    return {
      updatedEvents: eventSample,
      updatedMarketIds: eventSample.flatMap((eid) => (this.marketsByEvent.get(eid) ?? []).map((m) => m.id)),
      updatedSelectionIds,
      removedEventIds: [],
      lastChangeId: `sync-${Date.now()}`,
      syncedAt: new Date(),
    };
  }

  subscribeOddsChanges(callback: OddsChangeCallback): () => void {
    this.changeCallbacks.add(callback);
    return () => this.changeCallbacks.delete(callback);
  }

  getSportsInternal() {
    return this.sports;
  }

  private toLiveOddsMarket(m: ProviderMarket): LiveOddsMarket {
    const selections: LiveOddsSelection[] = m.selections.map((s) => ({
      id: s.id,
      name: s.name,
      odds: s.odds,
      outcome: s.outcome,
      status: (s.status as LiveOddsSelection['status']) ?? 'ACTIVE',
    }));
    return {
      id: m.id,
      type: m.type,
      name: m.displayedName ?? m.name,
      selections,
    };
  }

  async fetchLiveOdds(sport?: string, league?: string): Promise<LiveOddsEvent[]> {
    const { events } = await this.getLiveEvents({
      sports: sport ? [sport as SportType] : undefined,
      leagueIds: league ? [league] : undefined,
      limit: 2000,
    });
    return events.map((ev: ProviderEvent) => {
      const ls = this.liveState.get(ev.id);
      const markets = (this.marketsByEvent.get(ev.id) ?? []).map((m) => this.toLiveOddsMarket(m));
      return {
        id: ev.id,
        providerEventId: ev.providerEventId,
        name: ev.name,
        sport: ev.sportCode,
        leagueId: ev.leagueId,
        leagueName: ev.leagueName,
        homeTeamName: ev.homeTeamName,
        awayTeamName: ev.awayTeamName,
        homeScore: ls?.homeScore ?? ev.homeScore,
        awayScore: ls?.awayScore ?? ev.awayScore,
        minute: ls?.minute ?? ev.minuteOfMatch,
        status: (ev.status === EventStatus.HALF_TIME ? 'HALF_TIME' : 'LIVE') as LiveOddsEvent['status'],
        kickoffAt: ev.kickoffAt,
        markets,
        updatedAt: ev.liveUpdatedAt ?? new Date(),
      };
    });
  }

  async fetchUpcomingEvents(sport?: string, league?: string, from?: Date, to?: Date): Promise<UpcomingEvent[]> {
    const { events } = await this.getPrematchEvents({
      sports: sport ? [sport as SportType] : undefined,
      leagueIds: league ? [league] : undefined,
      fromDate: from,
      toDate: to,
      limit: 2000,
    });
    return events.map((ev: ProviderEvent) => {
      const markets = (this.marketsByEvent.get(ev.id) ?? []).map((m) => this.toLiveOddsMarket(m));
      return {
        id: ev.id,
        providerEventId: ev.providerEventId,
        name: ev.name,
        sport: ev.sportCode,
        leagueId: ev.leagueId,
        leagueName: ev.leagueName,
        homeTeamName: ev.homeTeamName,
        awayTeamName: ev.awayTeamName,
        kickoffAt: ev.kickoffAt,
        status: (ev.status === EventStatus.PRE_LIVE ? 'PRE_LIVE' : 'PRE_MATCH') as UpcomingEvent['status'],
        isTop: ev.isTop,
        isFeatured: ev.isFeatured,
        markets,
      };
    });
  }

  async fetchSettlementOutcome(eventId: string, selectionId: string): Promise<OddsSettlementOutcome> {
    const ev = this.events.get(eventId);
    let result: SettlementResult = 'PENDING';
    let finalScore: { home: number; away: number } | undefined;
    if (ev && (ev.status === EventStatus.FINISHED || ev.status === EventStatus.ENDED)) {
      const ls = this.liveState.get(eventId);
      finalScore = {
        home: ls?.homeScore ?? ev.homeScore ?? 0,
        away: ls?.awayScore ?? ev.awayScore ?? 0,
      };
      const mkts = this.marketsByEvent.get(eventId) ?? [];
      outer: for (const m of mkts) {
        for (const s of m.selections) {
          if (s.id === selectionId) {
            if (m.type === MarketType.MATCH_WINNER_1X2 || m.type === MarketType.MATCH_WINNER_12 ||
                m.type === MarketType.HALF_TIME_RESULT) {
              if (finalScore.home > finalScore.away) {
                result = s.outcome === SelectionOutcome.HOME ? 'WIN' : 'LOSE';
              } else if (finalScore.home < finalScore.away) {
                result = s.outcome === SelectionOutcome.AWAY ? 'WIN' : 'LOSE';
              } else {
                if (m.type === MarketType.MATCH_WINNER_12) {
                  result = 'VOID';
                } else {
                  result = s.outcome === SelectionOutcome.DRAW ? 'WIN' : 'LOSE';
                }
              }
            } else {
              result = Math.random() < 0.5 ? 'WIN' : 'LOSE';
            }
            break outer;
          }
        }
      }
      if (result === 'PENDING') {
        result = Math.random() < 0.5 ? 'WIN' : 'LOSE';
      }
    }
    return {
      eventId,
      selectionId,
      result,
      settledAt: result !== 'PENDING' ? new Date() : undefined,
      finalScore,
    };
  }

  async getSports(): Promise<Sport[]> {
    const { events: prematch } = await this.getPrematchEvents({ limit: 2000 });
    const { events: live } = await this.getLiveEvents({ limit: 2000 });
    return this.sports.map((sp, idx) => ({
      id: sp.code,
      slug: sp.code.toLowerCase(),
      name: sp.name,
      sportType: sp.type,
      active: true,
      featured: idx === 0,
      displayOrder: idx,
      iconUrl: null,
      colorHex: null,
      totalLiveEvents: live.filter((e) => e.sportCode === sp.code).length,
      totalPrematchEvents: prematch.filter((e) => e.sportCode === sp.code).length,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
  }

  async getLeagues(sport: string): Promise<League[]> {
    const leagues = await this.getActiveLeagues(sport as SportType);
    const { events: prematch } = await this.getPrematchEvents({
      limit: 2000,
      sports: [sport as SportType],
    });
    const { events: live } = await this.getLiveEvents({
      limit: 2000,
      sports: [sport as SportType],
    });
    return leagues.map((l, idx) => ({
      id: l.providerLeagueId,
      sportId: sport,
      providerLeagueId: l.providerLeagueId,
      name: l.name,
      slug: l.name.toLowerCase().replace(/\s+/g, '-'),
      countryCode: l.countryCode ?? null,
      tier: l.tier?.toString() ?? null,
      logoUrl: null,
      active: true,
      featured: !!l.isTop,
      displayOrder: idx,
      totalLiveEvents: live.filter((e) => e.leagueId === l.providerLeagueId).length,
      totalPrematchEvents: prematch.filter((e) => e.leagueId === l.providerLeagueId).length,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
  }
}
