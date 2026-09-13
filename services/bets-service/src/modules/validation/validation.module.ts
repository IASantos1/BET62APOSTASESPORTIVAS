import { Module } from '@nestjs/common';
import { BetValidationService } from './bet-validation.service';

@Module({
  providers: [BetValidationService],
  exports: [BetValidationService],
})
export class ValidationModule {}
