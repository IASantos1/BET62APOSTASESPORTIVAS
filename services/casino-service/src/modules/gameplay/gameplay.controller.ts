import {
  Body,
  Controller,
  Post,
  UseGuards,
  HttpCode,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import type { AuthRole } from '@bet62/shared';
import { GameplayService } from './gameplay.service';
import { JwtAuthGuard } from '../../auth-shared/jwt-auth.guard';
import { RolesGuard } from '../../auth-shared/roles.guard';
import { CurrentUser } from '../../auth-shared/current-user.decorator';
import { PlaceCasinoBetDto, SettleCasinoBetDto, SpinResultResponse } from '@bet62/shared';

interface AuthedUser {
  userId: string;
  email: string;
  roles: AuthRole[];
  kycLevel?: number;
}

@ApiTags('casino-gameplay')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('gameplay')
export class GameplayController {
  constructor(private readonly gameplayService: GameplayService) {}

  @Post('bet')
  @HttpCode(200)
  @ApiOperation({ summary: 'Realizar aposta (spin / bet) no motor simulado' })
  bet(
    @CurrentUser() user: AuthedUser,
    @Body() dto: PlaceCasinoBetDto,
  ): Promise<SpinResultResponse> {
    return this.gameplayService.placeBet(user.userId, dto);
  }

  @Post('settle')
  @HttpCode(200)
  @ApiOperation({ summary: 'Liquidar manualmente uma aposta existente' })
  settle(
    @CurrentUser() user: AuthedUser,
    @Body() dto: SettleCasinoBetDto,
  ) {
    return this.gameplayService.settleBet(user.userId, dto);
  }
}
