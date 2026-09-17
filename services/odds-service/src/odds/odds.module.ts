import { Module } from '@nestjs/common';
import { OddsController } from './odds.controller';
import { OddsService } from './odds.service';
import { OddsGateway } from './odds.gateway';
import { OddsProviderModule } from '../odds-provider/odds-provider.module';
import { SportsModule } from '../sports';

@Module({
  imports: [OddsProviderModule, SportsModule],
  controllers: [OddsController],
  providers: [OddsService, OddsGateway],
  exports: [OddsService, OddsGateway],
})
export class OddsModule {}
