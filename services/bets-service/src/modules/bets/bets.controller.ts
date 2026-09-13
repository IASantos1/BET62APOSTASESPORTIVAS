import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
  Ip,
  Headers,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiParam, ApiQuery, ApiBearerAuth } from '@nestjs/swagger';
import type { Request } from 'express';
import { BetsService } from './bets.service';
import {
  AdminSettleEventDto,
  BetsHistoryQueryDto,
  BetPlacementResponse,
  PlaceBetDto,
  RequestCashoutDto,
} from '@bet62/shared';
import { CurrentUser, type CurrentUserPayload } from '../auth-shared/current-user.decorator';

@ApiBearerAuth()
@ApiTags('bets')
@Controller('bets')
@UseGuards()
export class BetsController {
  constructor(private readonly betsService: BetsService) {}

  @Post('validate')
  @ApiOperation({ summary: 'Validar aposta antes de confirmar' })
  @ApiBody({ type: PlaceBetDto })
  async validateBet(@Body() dto: PlaceBetDto) {
    return this.betsService.validateBet(dto);
  }

  @Post('place')
  @ApiOperation({ summary: 'Realizar uma nova aposta' })
  @ApiBody({ type: PlaceBetDto })
  async placeBet(
    @Body() dto: PlaceBetDto,
    @CurrentUser() user: CurrentUserPayload | undefined,
    @Ip() ip: string,
    @Headers('user-agent') device?: string,
    @Headers('accept-language') language?: string,
  ): Promise<BetPlacementResponse> {
    const userId = user?.userId ?? `guest-${Date.now()}`;
    const walletId = user?.walletId ?? `wallet-${userId}`;
    return this.betsService.placeBet(dto, {
      userId,
      walletId,
      ip,
      device,
      language,
    });
  }

  @Get(':betId')
  @ApiOperation({ summary: 'Obter detalhe de uma aposta' })
  @ApiParam({ name: 'betId', type: String })
  async getBet(
    @Param('betId', ParseUUIDPipe) betId: string,
    @CurrentUser() user: CurrentUserPayload | undefined,
    @Req() req: Request,
  ) {
    const userId =
      user?.userId ??
      (req.headers['x-test-user-id'] as string) ??
      `guest-${Date.now()}`;
    return this.betsService.getBet(betId, userId);
  }

  @Get('history/list')
  @ApiOperation({ summary: 'Histórico de apostas do usuário' })
  @ApiQuery({ type: BetsHistoryQueryDto })
  async getHistory(
    @Query() query: BetsHistoryQueryDto,
    @CurrentUser() user: CurrentUserPayload | undefined,
    @Req() req: Request,
  ) {
    const userId =
      user?.userId ??
      (req.headers['x-test-user-id'] as string) ??
      `guest-${Date.now()}`;
    return this.betsService.getHistory(query, userId);
  }

  @Post('cashout')
  @ApiOperation({ summary: 'Solicitar cashout de uma aposta' })
  @ApiBody({ type: RequestCashoutDto })
  async requestCashout(
    @Body() dto: RequestCashoutDto,
    @CurrentUser() user: CurrentUserPayload | undefined,
    @Ip() ip: string,
    @Req() req: Request,
  ) {
    const userId =
      user?.userId ??
      (req.headers['x-test-user-id'] as string) ??
      `guest-${Date.now()}`;
    const walletId = user?.walletId ?? `wallet-${userId}`;
    return this.betsService.requestCashout(dto, { userId, walletId, ip });
  }
}
