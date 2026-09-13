import { Module } from '@nestjs/common';
import { LimitsService } from './limits.service';
import { LimitsGuard } from './limits.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  providers: [
    LimitsService,
    {
      provide: APP_GUARD,
      useClass: LimitsGuard,
    },
  ],
  exports: [LimitsService],
})
export class LimitsModule {}
