import { Module } from '@nestjs/common';
import { KYCController } from './kyc.controller';
import { KYCService } from './kyc.service';
import { KYCEventListener } from './kyc-event.listener';
import { DiditClient } from './didit/didit.client';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [KYCController],
  providers: [KYCService, DiditClient, KYCEventListener],
  exports: [KYCService],
})
export class KYCModule {}
