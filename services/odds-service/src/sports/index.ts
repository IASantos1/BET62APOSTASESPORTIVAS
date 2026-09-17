export * from './normalization/team-normalizer';

export * from './matching/match-resolver';
export * from './matching/provider-mapping.service';

export * from './engines/live-match-state.redis';
export * from './engines/event.engine';
export * from './engines/stats.engine';
export * from './engines/odds.engine';
export * from './engines/suspension.engine';
export * from './engines/reconciliation.engine';

import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaModule } from '../prisma/prisma.module';
import { ProviderMappingService } from './matching/provider-mapping.service';
import { LiveMatchStateRedisService } from './engines/live-match-state.redis';
import { LiveEventEngine } from './engines/event.engine';
import { StatsEngine } from './engines/stats.engine';
import { OddsEngine } from './engines/odds.engine';
import { SuspensionEngine } from './engines/suspension.engine';
import { ReconciliationEngine } from './engines/reconciliation.engine';

@Module({
  imports: [PrismaModule, EventEmitterModule.forRoot(), ScheduleModule.forRoot()],
  providers: [
    ProviderMappingService,
    LiveMatchStateRedisService,
    LiveEventEngine,
    StatsEngine,
    OddsEngine,
    SuspensionEngine,
    ReconciliationEngine,
  ],
  exports: [
    ProviderMappingService,
    LiveMatchStateRedisService,
    LiveEventEngine,
    StatsEngine,
    OddsEngine,
    SuspensionEngine,
    ReconciliationEngine,
  ],
})
export class SportsModule {}
