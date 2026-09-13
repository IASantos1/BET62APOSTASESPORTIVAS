import { Module } from '@nestjs/common';
import { OddsEventListener } from './odds-event.listener';

@Module({
  providers: [OddsEventListener],
  exports: [OddsEventListener],
})
export class EventsModule {}
