import { Module } from '@nestjs/common';
import { WalletController } from './wallet.controller';
import { WalletService } from './wallet.service';
import { WalletEventListener } from './events/wallet-event.listener';
import { StripeModule } from './payments/stripe.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule, StripeModule],
  controllers: [WalletController],
  providers: [WalletService, WalletEventListener],
  exports: [WalletService],
})
export class WalletModule {}
