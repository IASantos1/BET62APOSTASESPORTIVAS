import { Module } from '@nestjs/common';
import { OddsController } from './odds.controller';
import { MrDogeService } from './mrdoge.service';

@Module({
  controllers: [OddsController],
  providers: [MrDogeService],
  exports: [MrDogeService],
})
export class OddsModule {}
