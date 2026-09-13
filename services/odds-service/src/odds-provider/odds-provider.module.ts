import { Global, Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SchedulerRegistry } from '@nestjs/schedule';
import type { OddsProvider } from './odds-provider.interface';
import { MockOddsProviderService } from './mock-odds-provider.service';
import { SportsDbOddsProviderService } from './sportsdb-odds-provider.service';
import { CustomOddsProviderService } from './custom-odds-provider.service';
import { GoaldirOddsProviderService } from './goaldir-odds-provider.service';
import { AbstractOddsProvider } from './abstract-odds-provider.service';
import { createOddsProvider, normalizeProviderName } from './odds-provider.factory';

export const ODDS_PROVIDER_TOKEN = Symbol('ODDS_PROVIDER');
export const ABSTRACT_ODDS_PROVIDER_TOKEN = Symbol('ABSTRACT_ODDS_PROVIDER');

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    MockOddsProviderService,
    SportsDbOddsProviderService,
    CustomOddsProviderService,
    GoaldirOddsProviderService,
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
      ): OddsProvider => {
        const logger = new Logger('OddsProviderModule');
        const name = configService.get<string>('ODDS_PROVIDER_NAME', 'mock');
        const normalized = normalizeProviderName(name);
        logger.log(`ODDS_PROVIDER_NAME="${name}" -> resolved="${normalized}" para token ODDS_PROVIDER (interface legada)`);
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
      ): AbstractOddsProvider => {
        const logger = new Logger('OddsProviderModule');
        const name = configService.get<string>('ODDS_PROVIDER_NAME', 'mock');
        const normalized = normalizeProviderName(name);
        logger.log(`ODDS_PROVIDER_NAME="${name}" -> resolved="${normalized}" para AbstractOddsProvider`);
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
        logger.warn(`Provider "${normalized}" não mapeado diretamente, usando factory genérica`);
        try {
          return createOddsProvider(name, {
            schedulerRegistry,
            mockInstance: mockProvider,
            goaldirInstance: goaldirProvider,
            custom: {
              baseUrl: configService.get<string>('ODDS_PROVIDER_BASE_URL'),
              apiKey: configService.get<string>('ODDS_PROVIDER_API_KEY'),
              timeoutMs: Number(configService.get<string>('ODDS_PROVIDER_TIMEOUT_MS', '10000')),
            },
          });
        } catch (err) {
          logger.error(`Factory falhou para "${name}", fallback para mock: ${err instanceof Error ? err.message : String(err)}`);
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
