import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ScheduleModule } from '@nestjs/schedule';
import { BonusService } from './bonus.service';
import { BonusController } from './bonus.controller';
import { BonusEventListener } from './events/bonus-event.listener';
import { PromotionEngineService } from './promotion-engine.service';
import { JwtStrategy } from '../../auth-shared/jwt.strategy';
import { JwtAuthGuard } from '../../auth-shared/jwt-auth.guard';
import { RolesGuard } from '../../auth-shared/roles.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [PassportModule, ScheduleModule.forRoot()],
  controllers: [BonusController],
  providers: [
    BonusService,
    BonusEventListener,
    PromotionEngineService,
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  exports: [BonusService, PromotionEngineService],
})
export class BonusModule {}
