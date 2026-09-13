import { Logger } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { AbstractOddsProvider } from './abstract-odds-provider.service';
import { MockOddsProviderService } from './mock-odds-provider.service';
import { SportsDbOddsProviderService } from './sportsdb-odds-provider.service';
import {
  CustomOddsProviderConfig,
  CustomOddsProviderService,
} from './custom-odds-provider.service';

export const SUPPORTED_PROVIDERS = ['mock', 'sportsdb', 'custom'] as const;
export type SupportedOddsProviderName = (typeof SUPPORTED_PROVIDERS)[number];

export interface OddsProviderFactoryConfig {
  providerName?: string;
  custom?: CustomOddsProviderConfig;
  schedulerRegistry?: SchedulerRegistry;
  mockInstance?: MockOddsProviderService;
}

const logger = new Logger('OddsProviderFactory');

export function normalizeProviderName(name?: string | null): SupportedOddsProviderName {
  const n = (name ?? '').trim().toLowerCase();
  if (n === 'sportsdb' || n === 'thesportsdb' || n === 'tsdb') return 'sportsdb';
  if (n === 'custom' || n === 'generic' || n === 'rest' || n === 'api') return 'custom';
  if (n === 'mock' || n === '' || n === 'default') return 'mock';
  logger.warn(`Provider desconhecido "${name}", usando fallback "mock"`);
  return 'mock';
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

  const fallback = createOddsProvider('mock', config);
  return fallback;
}
