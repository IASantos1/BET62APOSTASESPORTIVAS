import { Inject, Injectable, Logger } from '@nestjs/common';
import { SimpleCache } from '../common/simple-cache';
import {
  EventDetailQueryDto,
  LeagueQueryDto,
  LiveEventsQueryDto,
  MarketDto,
  MarketSelectionDto,
  PrematchEventsQueryDto,
  EventDto,
  LiveMatchUpdateDto,
} from '@bet62/shared';
import {
  EventStatus,
  MarketStatus,
  SportType,
} from '@bet62/shared';
import {
  ABSTRACT_ODDS_PROVIDER_TOKEN,
  ODDS_PROVIDER_TOKEN,
} from '../odds-provider/odds-provider.module';
import type {
  OddsProvider,
  ProviderEvent,
  ProviderMarket,
  ProviderMarketSelection,
} from '../odds-provider/odds-provider.interface';
import { AbstractOddsProvider } from '../odds-provider/abstract-odds-provider.service';

interface SportDto {
  id: string;
  code: string;
  name: string;
  active: boolean;
  orderIndex: number;
  iconUrl?: string | null;
  liveCount: number;
  prematchCount: number;
}

interface LeagueDto {
  id: string;
  providerLeagueId: string;
  name: string;
  sportCode: string;
  countryCode?: string | null;
  tier?: number | null;
  isTop?: boolean | null;
  liveCount: number;
  prematchCount: number;
}

@Injectable()
export class OddsService {
  private readonly logger = new Logger(OddsService.name);
  private readonly CACHE_PREMATCH_TTL_MS = 60_000;
  private readonly CACHE_LIVE_TTL_MS = 5_000;

  constructor(
    @Inject(ODDS_PROVIDER_TOKEN) private readonly provider: OddsProvider,
    @Inject(ABSTRACT_ODDS_PROVIDER_TOKEN)
    private readonly abstractProvider: AbstractOddsProvider,
  ) {}

  private readonly cache = new SimpleCache();

  private key(parts: Array<string | number | boolean | undefined>): string {
    return `odds:${parts.filter((p) => p !== undefined && p !== null).join(':')}`;
  }

  private async withProviderOnly<T>(
    operationName: string,
    fn: () => Promise<T>,
  ): Promise<T> {
    try {
      return await fn();
    } catch (err) {
      this.logger.error(
        `${operationName} falhou no provider (${this.abstractProvider.providerName}). Sem fallback. Erro: ${
          err instanceof Error ? err.message : String(err)
        }`,
      );
      throw err;
    }
  }

  async getSports(): Promise<SportDto[]> {
    return this.withProviderOnly(
      'getSports',
      async () => {
        const cacheKey = this.key(['sports']);
        const cached = (await this.cache.get(cacheKey)) as SportDto[];
        if (cached) return cached;
        const providerSports = await this.abstractProvider.getSports();
        const { events: prematch } = await this.provider.getPrematchEvents({ limit: 2000 });
        const { events: live } = await this.provider.getLiveEvents({ limit: 2000 });
        const sps = await providerSports;
        const result: SportDto[] = sps.map((sp, idx) => {
          const prematchCount = prematch.filter((e) => e.sportCode === sp.id || e.sportCode === sp.sportType).length;
          const liveCount = live.filter((e) => e.sportCode === sp.id || e.sportCode === sp.sportType).length;
          return {
            id: sp.id,
            code: sp.sportType?.toString() ?? sp.id,
            name: sp.name,
            active: sp.active !== false,
            orderIndex: sp.displayOrder ?? idx,
            iconUrl: sp.iconUrl ?? null,
            liveCount,
            prematchCount,
          };
        });
        await this.cache.set(cacheKey, result, this.CACHE_PREMATCH_TTL_MS / 1000);
        return result;
      },
    );
  }

  async getLeagues(query: LeagueQueryDto): Promise<LeagueDto[]> {
    return this.withProviderOnly(
      'getLeagues',
      async () => {
        const cacheKey = this.key(['leagues', JSON.stringify(query)]);
        const cached = (await this.cache.get(cacheKey)) as LeagueDto[];
        if (cached) return cached;
        const sport = query.sportType?.toString();
        let leagues;
        if (sport) {
          const fromAbstract = await this.abstractProvider.getLeagues(sport);
          leagues = fromAbstract.map((l) => ({
            id: l.providerLeagueId || l.id,
            providerLeagueId: l.providerLeagueId || l.id,
            name: l.name,
            sportCode: sport,
            countryCode: l.countryCode ?? undefined,
            tier: l.tier ? Number(l.tier) : undefined,
            isTop: !!l.featured,
          }));
        } else {
          leagues = await this.provider.getActiveLeagues(query.sportType);
        }
        const { events: prematch } = await this.provider.getPrematchEvents({
          limit: 2000,
          sports: query.sportType ? [query.sportType] : undefined,
        });
        const { events: live } = await this.provider.getLiveEvents({
          limit: 2000,
          sports: query.sportType ? [query.sportType] : undefined,
        });
        let filtered = leagues;
        if (query.onlyTop) {
          filtered = filtered.filter((l) => !!l.isTop);
        }
        const result: LeagueDto[] = filtered.map((l) => ({
          ...l,
          id: l.providerLeagueId,
          liveCount: live.filter((e) => e.leagueId === l.providerLeagueId).length,
          prematchCount: prematch.filter((e) => e.leagueId === l.providerLeagueId).length,
        }));
        if (query.limit) result.length = Math.min(result.length, query.limit);
        await this.cache.set(cacheKey, result, this.CACHE_PREMATCH_TTL_MS / 1000);
        return result;
      },
    );
  }

  async getPrematchEvents(query: PrematchEventsQueryDto): Promise<{ events: EventDto[]; total: number; page: number; limit: number }> {
    return this.withProviderOnly(
      'getPrematchEvents',
      async () => {
        const cacheKey = this.key(['prematch', JSON.stringify(query)]);
        const cached = (await this.cache.get(cacheKey)) as { events: EventDto[]; total: number; page: number; limit: number };
        if (cached) return cached;
        const { events, total } = await this.provider.getPrematchEvents(query);
        const page = query.page ?? 1;
        const limit = query.limit ?? 50;
        const dtos = events.map((ev) => this.buildEventDto(ev));
        const result = { events: dtos, total, page, limit };
        await this.cache.set(cacheKey, result, this.CACHE_PREMATCH_TTL_MS / 1000);
        return result;
      },
    );
  }

  async getLiveEvents(query: LiveEventsQueryDto): Promise<{ events: EventDto[]; total: number; page: number; limit: number }> {
    return this.withProviderOnly(
      'getLiveEvents',
      async () => {
        const cacheKey = this.key(['live', JSON.stringify(query)]);
        const cached = (await this.cache.get(cacheKey)) as { events: EventDto[]; total: number; page: number; limit: number };
        if (cached) return cached;
        const { events, total } = await this.provider.getLiveEvents(query);
        const page = query.page ?? 1;
        const limit = query.limit ?? 50;
        const dtos = events.map((ev) => this.mergeLiveScoreboardIntoEvent(this.buildEventDto(ev), ev));
        const result = { events: dtos, total, page, limit };
        await this.cache.set(cacheKey, result, this.CACHE_LIVE_TTL_MS / 1000);
        return result;
      },
    );
  }

  async getEventDetail(_query: EventDetailQueryDto, eventId: string): Promise<EventDto & { markets: MarketDto[] } | null> {
    return this.withProviderOnly(
      'getEventDetail',
      async () => {
        const cacheKey = this.key(['event', eventId]);
        const cached = (await this.cache.get(cacheKey)) as EventDto & { markets: MarketDto[] };
        if (cached) return cached;
        const detail = await this.provider.getEventDetail(eventId, true);
        if (!detail) return null;
        const ttl = detail.status === 'LIVE' || detail.status === 'HALF_TIME' ? this.CACHE_LIVE_TTL_MS : this.CACHE_PREMATCH_TTL_MS;
        const base = this.buildEventDto(detail);
        const withLive = this.mergeLiveScoreboardIntoEvent(base, detail);
        const markets = this.formatMarketSelections(detail.markets ?? []);
        const result = { ...withLive, markets };
        await this.cache.set(cacheKey, result, ttl / 1000);
        return result;
      },
    );
  }

  async getEventMarkets(eventId: string): Promise<MarketDto[]> {
    return this.withProviderOnly(
      'getEventMarkets',
      async () => {
        const cacheKey = this.key(['event', eventId, 'markets']);
        const cached = (await this.cache.get(cacheKey)) as MarketDto[];
        if (cached) return cached;
        const detail = await this.provider.getEventDetail(eventId, true);
        if (!detail) return [];
        const ttl = detail.status === 'LIVE' || detail.status === 'HALF_TIME' ? this.CACHE_LIVE_TTL_MS : this.CACHE_PREMATCH_TTL_MS;
        const result = this.formatMarketSelections(detail.markets ?? []);
        await this.cache.set(cacheKey, result, ttl / 1000);
        return result;
      },
    );
  }

  formatMarketSelections(markets: ProviderMarket[]): MarketDto[] {
    return markets.map((m: ProviderMarket): MarketDto => {
      const selections: MarketSelectionDto[] = m.selections.map((s: ProviderMarketSelection) => ({
        id: s.id,
        name: s.name,
        outcome: s.outcome,
        odds: s.odds,
        status: s.status ?? MarketStatus.ACTIVE,
        handicapValue: s.handicapValue,
        totalLineValue: s.totalLineValue,
      }));
      return {
        id: m.id,
        type: m.type,
        name: m.displayedName ?? m.name,
        status: m.status ?? MarketStatus.ACTIVE,
        handicapValue: m.handicapValue ? Number(m.handicapValue) : undefined,
        totalLineValue: m.totalLineValue ? Number(m.totalLineValue) : undefined,
        specifiers: m.specifiers ? JSON.stringify(m.specifiers) : undefined,
        selections,
      };
    });
  }

  buildEventDto(ev: ProviderEvent): EventDto {
    return {
      id: ev.id,
      sportType: (ev.sportCode as SportType) ?? SportType.FOOTBALL,
      name: ev.name,
      homeTeamName: ev.homeTeamName,
      awayTeamName: ev.awayTeamName,
      leagueId: ev.leagueId,
      leagueName: ev.leagueName,
      status: (ev.status as unknown as EventStatus) ?? EventStatus.PRE_MATCH,
      kickoffAt: ev.kickoffAt,
      liveUpdatedAt: ev.liveUpdatedAt,
      liveStreamAvailable: ev.liveStreamAvailable,
      marketsCount: ev.marketsCount,
      providerEventId: ev.providerEventId,
    };
  }

  mergeLiveScoreboardIntoEvent(dto: EventDto, ev: ProviderEvent): EventDto {
    const isLive = dto.status === EventStatus.LIVE || dto.status === EventStatus.HALF_TIME;
    if (!isLive && !ev.homeScore && !ev.awayScore && !ev.minuteOfMatch) return dto;
    return {
      ...dto,
      liveScoreJson: {
        home: ev.homeScore ?? 0,
        away: ev.awayScore ?? 0,
        homeHalf: ev.homeHalfScore ?? null,
        awayHalf: ev.awayHalfScore ?? null,
      },
      liveClockJson: {
        minute: ev.minuteOfMatch ?? null,
        injuryMinutes: ev.injuryMinutes ?? null,
        status: dto.status,
      },
    };
  }

  async getLiveSnapshot(eventId: string): Promise<LiveMatchUpdateDto | null> {
    return this.withProviderOnly(
      'getLiveSnapshot',
      async () => {
        const detail = await this.provider.getEventDetail(eventId, false);
        if (!detail) return null;
        return {
          eventId,
          status: (detail.status as unknown as EventStatus) ?? EventStatus.PRE_MATCH,
          scoreBoard: {
            home: detail.homeScore ?? 0,
            away: detail.awayScore ?? 0,
            homeHalf: detail.homeHalfScore,
            awayHalf: detail.awayHalfScore,
          },
          matchClock: {
            minute: detail.minuteOfMatch,
            injuryMinutes: detail.injuryMinutes,
          },
          updatedAt: detail.liveUpdatedAt ?? new Date(),
        };
      },
    );
  }

  async getAllLiveEventIds(): Promise<string[]> {
    return this.withProviderOnly(
      'getAllLiveEventIds',
      async () => {
        const { events } = await this.provider.getLiveEvents({ limit: 2000 });
        return events.map((e) => e.id);
      },
    );
  }
}
