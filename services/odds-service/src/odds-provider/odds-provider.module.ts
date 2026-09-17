import { Global, Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SchedulerRegistry } from '@nestjs/schedule';
import { PrismaModule } from '../prisma/prisma.module';
import type { OddsProvider } from './odds-provider.interface';
import { MockOddsProviderService } from './mock-odds-provider.service';
import { SportsDbOddsProviderService } from './sportsdb-odds-provider.service';
import { CustomOddsProviderService } from './custom-odds-provider.service';
import { GoaldirOddsProviderService } from './goaldir-odds-provider.service';
import {
  ProplineOddsProviderService,
  ProplineHttpClient,
  ProplineWsClient,
  ProplineWebhookService,
  ProplineDataAdapter,
} from './propline';
import {
  GoalApiOddsProviderService,
  GoalApiHttpClient,
  GoalApiWsClient,
  GoalApiWebhookService,
  GoalApiDataAdapter,
} from './goalapi';
import { AbstractOddsProvider } from './abstract-odds-provider.service';
import {
  buildOddsProvider,
  createOddsProvider,
  normalizeProviderName,
} from './odds-provider.factory';
import {
  FootballSettlementService,
  OtherSportsSettlementService,
  SettlementOrchestrator,
} from '../sports/settlement';

export const ODDS_PROVIDER_TOKEN = Symbol('ODDS_PROVIDER');
export const ABSTRACT_ODDS_PROVIDER_TOKEN = Symbol('ABSTRACT_ODDS_PROVIDER');

@Global()
@Module({
  imports: [ConfigModule, PrismaModule],
  providers: [
    MockOddsProviderService,
    SportsDbOddsProviderService,
    CustomOddsProviderService,
    GoaldirOddsProviderService,
    GoalApiHttpClient,
    GoalApiWsClient,
    GoalApiWebhookService,
    GoalApiDataAdapter,
    GoalApiOddsProviderService,
    ProplineHttpClient,
    ProplineWsClient,
    ProplineWebhookService,
    ProplineDataAdapter,
    ProplineOddsProviderService,
    FootballSettlementService,
    OtherSportsSettlementService,
    SettlementOrchestrator,
    SchedulerRegistry,
    {
      provide: ODDS_PROVIDER_TOKEN,
      useFactory: (
        configService: ConfigService,
        schedulerRegistry: SchedulerRegistry,
        mockProvider: MockOddsProviderService,
        sportsDbProvider: SportsDbOddsProviderService,
        customProvider: CustomOddsProviderService,
        goaldirProvider: GoaldirOddsProviderService,
        goalApiProvider: GoalApiOddsProviderService,
        proplineProvider: ProplineOddsProviderService,
      ): OddsProvider => {
        const logger = new Logger('OddsProviderModule');
        const name = configService.get<string>('ODDS_PROVIDER_NAME', 'propline');
        const normalized = normalizeProviderName(name);
        logger.log(
          `ODDS_PROVIDER_NAME="${name}" -> resolved="${normalized}" para token ODDS_PROVIDER (interface legada)`,
        );
        if (normalized === 'goal_api') {
          return goalApiProvider as unknown as OddsProvider;
        }
        if (normalized === 'propline') {
          return proplineProvider as unknown as OddsProvider;
        }
        if (normalized === 'goaldir') {
          return goaldirProvider as unknown as OddsProvider;
        }
        if (normalized === 'sportsdb') {
          return sportsDbProvider as unknown as OddsProvider;
        }
        if (normalized === 'custom') {
          return customProvider as unknown as OddsProvider;
        }
        return mockProvider as unknown as OddsProvider;
      },
      inject: [
        ConfigService,
        SchedulerRegistry,
        MockOddsProviderService,
        SportsDbOddsProviderService,
        CustomOddsProviderService,
        GoaldirOddsProviderService,
        GoalApiOddsProviderService,
        ProplineOddsProviderService,
      ],
    },
    {
      provide: ABSTRACT_ODDS_PROVIDER_TOKEN,
      useFactory: (
        configService: ConfigService,
        schedulerRegistry: SchedulerRegistry,
        mockProvider: MockOddsProviderService,
        sportsDbProvider: SportsDbOddsProviderService,
        customProvider: CustomOddsProviderService,
        goaldirProvider: GoaldirOddsProviderService,
        goalApiProvider: GoalApiOddsProviderService,
        proplineProvider: ProplineOddsProviderService,
      ): AbstractOddsProvider => {
        const logger = new Logger('OddsProviderModule');
        const name = configService.get<string>('ODDS_PROVIDER_NAME', 'propline');
        const normalized = normalizeProviderName(name);
        logger.log(
          `ODDS_PROVIDER_NAME="${name}" -> resolved="${normalized}" para AbstractOddsProvider`,
        );
        if (normalized === 'goal_api') {
          return goalApiProvider;
        }
        if (normalized === 'propline') {
          return proplineProvider;
        }
        if (normalized === 'goaldir') {
          return goaldirProvider;
        }
        if (normalized === 'sportsdb') {
          return sportsDbProvider;
        }
        if (normalized === 'custom') {
          return customProvider;
        }
        if (normalized === 'mock') {
          return mockProvider;
        }
        logger.warn(
          `Provider "${normalized}" não mapeado diretamente, usando factory genérica`,
        );
        try {
          return buildOddsProvider(name, {
            schedulerRegistry,
            mockInstance: mockProvider,
            goaldirInstance: goaldirProvider,
            goalApiInstance: goalApiProvider,
            proplineInstance: proplineProvider,
            custom: {
              baseUrl: configService.get<string>('ODDS_PROVIDER_BASE_URL'),
              apiKey: configService.get<string>('ODDS_PROVIDER_API_KEY'),
              timeoutMs: Number(
                configService.get<string>('ODDS_PROVIDER_TIMEOUT_MS', '10000'),
              ),
            },
          });
        } catch (err) {
          logger.error(
            `Factory falhou para "${name}", fallback para mock: ${err instanceof Error ? err.message : String(err)}`,
          );
          return mockProvider;
        }
      },
      inject: [
        ConfigService,
        SchedulerRegistry,
        MockOddsProviderService,
        SportsDbOddsProviderService,
        CustomOddsProviderService,
        GoaldirOddsProviderService,
        GoalApiOddsProviderService,
        ProplineOddsProviderService,
      ],
    },
    {
      provide: AbstractOddsProvider,
      useExisting: ABSTRACT_ODDS_PROVIDER_TOKEN,
    },
  ],
  exports: [
    ODDS_PROVIDER_TOKEN,
    ABSTRACT_ODDS_PROVIDER_TOKEN,
    AbstractOddsProvider,
    MockOddsProviderService,
    SportsDbOddsProviderService,
    CustomOddsProviderService,
    GoaldirOddsProviderService,
    GoalApiHttpClient,
    GoalApiWsClient,
    GoalApiWebhookService,
    GoalApiDataAdapter,
    GoalApiOddsProviderService,
    ProplineHttpClient,
    ProplineWsClient,
    ProplineWebhookService,
    ProplineDataAdapter,
    ProplineOddsProviderService,
    FootballSettlementService,
    OtherSportsSettlementService,
    SettlementOrchestrator,
  ],
})
export class OddsProviderModule {
  static provide(useClass: new (...args: unknown[]) => OddsProvider) {
    return {
      module: OddsProviderModule,
      providers: [
        {
          provide: ODDS_PROVIDER_TOKEN,
          useClass,
        },
      ],
      exports: [ODDS_PROVIDER_TOKEN],
    };
  }
}
