import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module';
import { ResponsibleGamblingController } from './responsible.controller';
import { ResponsibleGamblingService } from './responsible.service';

@Module({
  imports: [PrismaModule],
  controllers: [ResponsibleGamblingController],
  providers: [ResponsibleGamblingService],
  exports: [ResponsibleGamblingService],
})
export class ResponsibleGamblingModule {}
