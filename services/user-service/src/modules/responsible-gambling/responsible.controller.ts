import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { ResponsibleGamblingService } from './responsible.service';
import { JwtAuthGuard } from '../auth-shared/jwt-auth.guard';
import { CurrentUser } from '../auth-shared/current-user.decorator';
import type { CurrentUser as CurrentUserType } from '../auth-shared/jwt.strategy';
import { RequestSelfExclusionDto } from '@bet62/shared';
import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

class RealityCheckAckDto {
  @IsString()
  @IsNotEmpty()
  sessionId!: string;

  @IsDateString()
  sessionStartAt!: string;

  @IsOptional()
  @IsBoolean()
  continuePlay?: boolean;

  @IsOptional()
  @IsNumber()
  wageredDuringSession?: number;

  @IsOptional()
  @IsNumber()
  won?: number;

  @IsOptional()
  @IsNumber()
  lost?: number;

  @IsOptional()
  @IsNumber()
  net?: number;
}

@ApiTags('Responsible Gambling')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller()
export class ResponsibleGamblingController {
  constructor(private readonly service: ResponsibleGamblingService) {}

  @Post('self-exclude')
  @ApiOperation({ summary: 'Solicitar autoexclusão (ativa status SELF_EXCLUDED e emite evento)' })
  selfExclude(
    @CurrentUser() user: CurrentUserType,
    @Body() dto: RequestSelfExclusionDto,
  ) {
    return this.service.requestSelfExclusion(user, dto);
  }

  @Post('reality-check-ack')
  @ApiOperation({ summary: 'Registrar acknowledge de um reality check' })
  realityCheckAck(
    @CurrentUser() user: CurrentUserType,
    @Body() dto: RealityCheckAckDto,
  ) {
    return this.service.acknowledgeRealityCheck(user, dto);
  }
}
