import { Logger } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import {
  SPORTS_PROVIDER_CONFIG,
  type SportsProviderDimension,
  type SportsProviderName,
} from '@bet62/shared';
import { AbstractOddsProvider } from './abstract-odds-provider.service';
import { MockOddsProviderService } from './mock-odds-provider.service';
import { SportsDbOddsProviderService } from './sportsdb-odds-provider.service';
import {
  CustomOddsProviderConfig,
  CustomOddsProviderService,
} from './custom-odds-provider.service';
import { GoaldirOddsProviderService } from './goaldir-odds-provider.service';
import { ProplineOddsProviderService } from './propline';
import { GoalApiOddsProviderService } from './goalapi';

export const SUPPORTED_PROVIDERS = [
  'mock',
  'sportsdb',
  'custom',
  'goaldir',
  'goal_api',
  'propline',
] as const;
export type SupportedOddsProviderName = (typeof SUPPORTED_PROVIDERS)[number];

export interface OddsProviderFactoryConfig {
  providerName?: string;
  custom?: CustomOddsProviderConfig;
  schedulerRegistry?: SchedulerRegistry;
  mockInstance?: MockOddsProviderService;
  goaldirInstance?: GoaldirOddsProviderService;
  proplineInstance?: ProplineOddsProviderService;
  goalApiInstance?: GoalApiOddsProviderService;
}

const logger = new Logger('OddsProviderFactory');

export function normalizeProviderName(name?: string | null): SupportedOddsProviderName {
  const n = (name ?? '').trim().toLowerCase().replace(/[- ]/g, '_');
  if (n === 'sportsdb' || n === 'thesportsdb' || n === 'tsdb') return 'sportsdb';
  if (n === 'custom' || n === 'generic' || n === 'rest' || n === 'api') return 'custom';
  if (n === 'goaldir' || n === 'bsd' || n === 'bzzoiro' || n === 'goaldirbsd' || n === 'goaldir_bsd') return 'goaldir';
  if (
    n === 'goal_api' ||
    n === 'goalapi' ||
    n === 'goal' ||
    n === 'goalapis' ||
    n === 'goalcom' ||
    n === 'goal_api_provider'
  ) {
    return 'goal_api';
  }
  if (
    n === 'propline' ||
    n === 'prop_line' ||
    n === 'propline_api' ||
    n === 'propline_ws' ||
    n === 'proplines' ||
    n === 'proline' ||
    n === 'propl'
  ) {
    return 'propline';
  }
  if (n === 'mock' || n === '' || n === 'default') return 'mock';
  logger.warn(`Provider desconhecido "${name}", usando fallback "mock"`);
  return 'mock';
}

export function buildOddsProvider(
  providerName: string,
  config: OddsProviderFactoryConfig = {},
): AbstractOddsProvider {
  return createOddsProvider(providerName, config);
}

export function createOddsProvider(
  providerName: string,
  config: OddsProviderFactoryConfig = {},
): AbstractOddsProvider {
  const normalized = normalizeProviderName(providerName);
  logger.log(`Criando provider de odds: ${normalized} (entrada: "${providerName || ''}")`);

  if (normalized === 'mock') {
    if (config.mockInstance) return config.mockInstance;
    const scheduler = config.schedulerRegistry ?? new SchedulerRegistry();
    const instance = new MockOddsProviderService(scheduler);
    if (typeof instance.onModuleInit === 'function') {
      try {
        instance.onModuleInit();
      } catch (err) {
        logger.warn(`MockOddsProvider onModuleInit warning: ${err instanceof Error ? err.message : String(err)}`);
      }
    }
    return instance;
  }

  if (normalized === 'sportsdb') {
    const instance = new SportsDbOddsProviderService();
    return instance;
  }

  if (normalized === 'custom') {
    const instance = new CustomOddsProviderService(config.custom ?? {});
    return instance;
  }

  if (normalized === 'goaldir') {
    if (config.goaldirInstance) return config.goaldirInstance;
    const instance = new GoaldirOddsProviderService();
    if (typeof instance.onModuleInit === 'function') {
      try {
        Promise.resolve(instance.onModuleInit()).catch((err) => {
          logger.warn(`GoaldirOddsProvider onModuleInit warning: ${err instanceof Error ? err.message : String(err)}`);
        });
      } catch (err) {
        logger.warn(`GoaldirOddsProvider onModuleInit sync warning: ${err instanceof Error ? err.message : String(err)}`);
      }
    }
    return instance;
  }

  if (normalized === 'goal_api') {
    if (config.goalApiInstance) return config.goalApiInstance;
    logger.warn(
      'GoalApiOddsProvider requer DI NestJS (ConfigService + clients internos). Fallback para mock. Configure ODDS_PROVIDER_NAME=goal_api via OddsProviderModule.',
    );
    return createOddsProvider('mock', config);
  }

  if (normalized === 'propline') {
    if (config.proplineInstance) return config.proplineInstance;
    logger.warn(
      'ProplineOddsProvider requer DI NestJS (ConfigService + clients internos). Fallback para mock. Configure ODDS_PROVIDER_NAME=propline via OddsProviderModule.',
    );
    return createOddsProvider('mock', config);
  }

  const fallback = createOddsProvider('mock', config);
  return fallback;
}

export function getSourceOfTruthForSport(
  sport: string,
  dimension: SportsProviderDimension = 'odds',
): SportsProviderName {
  const norm = String(sport ?? '').trim().toUpperCase();
  const isFootball =
    norm === 'FOOTBALL' ||
    norm === 'SOCCER' ||
    norm === 'FUTEBOL' ||
    norm === 'FUTBOL' ||
    norm.includes('FOOTBALL') ||
    norm.includes('SOCCER') ||
    norm.includes('FUTEBOL');

  if (dimension === 'settlement') {
    return isFootball ? 'goal_api' : 'propline';
  }

  const cfg = SPORTS_PROVIDER_CONFIG.bySport[norm];
  if (cfg && cfg[dimension]) {
    return cfg[dimension];
  }

  const keys = Object.keys(SPORTS_PROVIDER_CONFIG.bySport);
  for (const k of keys) {
    if (norm.includes(k) || k.includes(norm)) {
      const found = SPORTS_PROVIDER_CONFIG.bySport[k];
      if (found && found[dimension]) return found[dimension];
    }
  }
  return 'propline';
}
