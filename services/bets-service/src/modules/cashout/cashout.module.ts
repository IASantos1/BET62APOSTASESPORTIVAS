import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { CashoutProcessor, CashoutService, CASHOUT_QUEUE } from './cashout.service';
import { EventsModule } from '../events/events.module';

@Module({
  imports: [
    EventsModule,
    BullModule.registerQueue({
      name: CASHOUT_QUEUE,
    }),
  ],
  providers: [CashoutService, CashoutProcessor],
  exports: [CashoutService],
})
export class CashoutModule {}
