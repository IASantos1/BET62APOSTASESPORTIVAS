import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { LimitsService } from './limits.service';
import { LimitsGuard } from './limits.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [PrismaModule],
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
