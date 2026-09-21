import { Module } from '@nestjs/common';
import { BigBangService } from './bigbang.service';
import { BigBangController } from './bigbang.controller';

@Module({
  controllers: [BigBangController],
  providers: [BigBangService],
  exports: [BigBangService],
})
export class BigBangModule {}
