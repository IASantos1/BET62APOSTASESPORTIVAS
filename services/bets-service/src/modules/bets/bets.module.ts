import { Module } from '@nestjs/common';
import { BetsController } from './bets.controller';
import { BetsService } from './bets.service';
import { ValidationModule } from '../validation/validation.module';
import { EventsModule } from '../events/events.module';

@Module({
  imports: [ValidationModule, EventsModule],
  controllers: [BetsController],
  providers: [BetsService],
  exports: [BetsService],
})
export class BetsModule {}
