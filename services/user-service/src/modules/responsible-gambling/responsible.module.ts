import { Module } from '@nestjs/common';
import { ResponsibleGamblingController } from './responsible.controller';
import { ResponsibleGamblingService } from './responsible.service';

@Module({
  controllers: [ResponsibleGamblingController],
  providers: [ResponsibleGamblingService],
  exports: [ResponsibleGamblingService],
})
export class ResponsibleGamblingModule {}
