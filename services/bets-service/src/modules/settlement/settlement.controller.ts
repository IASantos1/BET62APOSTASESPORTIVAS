import { Body, Controller, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { SettlementService } from './settlement.service';
import { AdminSettleEventDto } from '@bet62/shared';

@ApiBearerAuth()
@ApiTags('settlement')
@Controller('settlement')
export class SettlementController {
  constructor(private readonly settlementService: SettlementService) {}

  @Post('settle-event')
  @ApiOperation({
    summary:
      '(Admin) Liquidar todas as apostas de um evento com base no resultado informado',
  })
  @ApiBody({ type: AdminSettleEventDto })
  async settleEvent(
    @Body() dto: AdminSettleEventDto,
  ) {
    return this.settlementService.settleEvent(dto);
  }

  @Post('bet/:betId/void')
  @ApiOperation({ summary: '(Admin) Anular manualmente uma aposta e reembolsar stake' })
  @ApiParam({ name: 'betId', type: String })
  @ApiBody({
    schema: {
      type: 'object',
      properties: { reason: { type: 'string' }, adminUserId: { type: 'string', nullable: true } },
      required: ['reason'],
    },
  })
  async manualVoidBet(
    @Param('betId', ParseUUIDPipe) betId: string,
    @Body() body: { reason: string; adminUserId?: string },
  ) {
    return this.settlementService.manualVoidBet({ betId, reason: body.reason, adminUserId: body.adminUserId });
  }
}
