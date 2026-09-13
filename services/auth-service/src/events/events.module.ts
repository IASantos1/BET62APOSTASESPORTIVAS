import { Global, Module } from '@nestjs/common';
import { RedisEventService } from './redis-event.service';
import { AuthEventListener } from './auth-event.listener';

@Global()
@Module({
  providers: [RedisEventService, AuthEventListener],
  exports: [RedisEventService],
})
export class EventsModule {}
