import { Global, Injectable, OnModuleInit } from '@nestjs/common';
import type {
  IncrementalSyncResult,
  OddsChangeCallback,
  OddsChangeNotification,
  LiveEventsQuery,
  PrematchEventsQuery,
  ProviderEvent,
  ProviderEventDetail,
  ProviderLeague,
} from './odds-provider.interface';
import type { OddsProvider } from './odds-provider.interface';
import { SportType } from '@bet62/shared';
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

@Global()
@Injectable()
export class MockOddsProviderService extends AbstractOddsProvider implements OddsProvider, OnModuleInit {
  override readonly providerName = 'MOCK_BET62';

  private changeCallbacks: Set<OddsChangeCallback> = new Set();

  async onModuleInit() {
    this.logger.log('[MockOddsProvider] Inicializado (MODO DESATIVADO: sem dados gerados automaticamente)');
  }

  async getPrematchEvents(query: PrematchEventsQuery): Promise<{ events: ProviderEvent[]; total: number }> {
    void query;
    return { events: [], total: 0 };
  }

  async getLiveEvents(query: LiveEventsQuery): Promise<{ events: ProviderEvent[]; total: number }> {
    void query;
    return { events: [], total: 0 };
  }

  async getEventDetail(eventId: string, includeMarkets = true): Promise<ProviderEventDetail | null> {
    void eventId;
    void includeMarkets;
    return null;
  }

  async getActiveLeagues(sport?: SportType): Promise<ProviderLeague[]> {
    void sport;
    return [];
  }

  async syncIncremental(_since?: Date): Promise<IncrementalSyncResult> {
    return {
      updatedEvents: [],
      updatedMarketIds: [],
      updatedSelectionIds: [],
      removedEventIds: [],
      lastChangeId: `sync-${Date.now()}`,
      syncedAt: new Date(),
    };
  }

  subscribeOddsChanges(callback: OddsChangeCallback): () => void {
    this.changeCallbacks.add(callback);
    return () => this.changeCallbacks.delete(callback);
  }

  private toLiveOddsMarkets(_eventId: string): LiveOddsMarket[] {
    return [];
  }

  async fetchLiveOdds(sport?: string, league?: string): Promise<LiveOddsEvent[]> {
    void sport;
    void league;
    return [];
  }

  async fetchUpcomingEvents(sport?: string, league?: string, from?: Date, to?: Date): Promise<UpcomingEvent[]> {
    void sport;
    void league;
    void from;
    void to;
    return [];
  }

  async fetchSettlementOutcome(eventId: string, selectionId: string): Promise<OddsSettlementOutcome> {
    void eventId;
    void selectionId;
    const result: SettlementResult = 'PENDING';
    return {
      eventId,
      selectionId,
      result,
      settledAt: undefined,
      finalScore: undefined,
    };
  }

  async getSports(): Promise<Sport[]> {
    return [];
  }

  async getLeagues(sport: string): Promise<League[]> {
    void sport;
    return [];
  }

  notifyChanges(changes: OddsChangeNotification[]): void {
    if (!changes || changes.length === 0) return;
    for (const cb of this.changeCallbacks) {
      try {
        void cb(changes);
      } catch (err) {
        this.logger.warn(
          'Erro ao notificar callback de mudança de odds',
          err instanceof Error ? err.stack : String(err),
        );
      }
    }
  }
}
