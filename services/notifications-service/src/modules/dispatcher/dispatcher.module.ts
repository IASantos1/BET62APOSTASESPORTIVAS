import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { DispatcherService } from './dispatcher.service';
import { NotificationsEventListener } from '../events/notifications-event.listener';
import { NotificationsModule } from '../notifications/notifications.module';
import { ProvidersModule } from '../providers/providers.module';

@Module({
  imports: [
    BullModule.registerQueue(
      { name: 'NOTIFICATION_DISPATCH' },
      { name: 'EMAIL_QUEUE' },
      { name: 'PUSH_QUEUE' },
      { name: 'SMS_QUEUE' },
    ),
    NotificationsModule,
    ProvidersModule,
  ],
  providers: [DispatcherService, NotificationsEventListener],
  exports: [DispatcherService, NotificationsEventListener],
})
export class DispatcherModule {}
