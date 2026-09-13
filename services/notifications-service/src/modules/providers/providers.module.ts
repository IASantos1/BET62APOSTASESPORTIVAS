import { Module } from '@nestjs/common';
import { EmailProvider } from './email.provider';
import { PushProvider } from './push.provider';
import { SmsProvider } from './sms.provider';

@Module({
  providers: [EmailProvider, PushProvider, SmsProvider],
  exports: [EmailProvider, PushProvider, SmsProvider],
})
export class ProvidersModule {}
