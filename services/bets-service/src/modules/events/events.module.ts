import { Global, Module } from '@nestjs/common';
import { BetsEventPublisher } from './bets-event.publisher';
import { BetsEventListener } from './bets-event.listener';

@Global()
@Module({
  providers: [BetsEventPublisher, BetsEventListener],
  exports: [BetsEventPublisher, BetsEventListener],
})
export class EventsModule {}
