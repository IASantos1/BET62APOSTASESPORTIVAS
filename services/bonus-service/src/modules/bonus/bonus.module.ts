import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { BonusService } from './bonus.service';
import { BonusController } from './bonus.controller';
import { BonusEventListener } from './events/bonus-event.listener';
import { JwtStrategy } from '../../auth-shared/jwt.strategy';
import { JwtAuthGuard } from '../../auth-shared/jwt-auth.guard';
import { RolesGuard } from '../../auth-shared/roles.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [PassportModule],
  controllers: [BonusController],
  providers: [
    BonusService,
    BonusEventListener,
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
  exports: [BonusService],
})
export class BonusModule {}
