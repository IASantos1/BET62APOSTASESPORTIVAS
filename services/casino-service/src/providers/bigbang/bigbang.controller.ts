import { Body, Controller, Get, HttpCode, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BigBangService } from './bigbang.service';
import { Public } from '../../auth-shared/public.decorator';

@ApiTags('casino-bigbang')
@Controller('provider/bigbang')
export class BigBangController {
  constructor(private readonly bigBangService: BigBangService) {}

  @Post('sync')
  @ApiOperation({ summary: 'Sincroniza o catálogo do BigBang para o banco local' })
  syncCatalog() {
    return this.bigBangService.syncCatalog();
  }

  @Public()
  @Get('wallet/user-data')
  @ApiOperation({ summary: 'Callback seamless user_data do BigBang' })
  getUserData(@Query('username') username: string) {
    return this.bigBangService.getUserData(username);
  }

  @Public()
  @Post('wallet/balance-change')
  @HttpCode(200)
  @ApiOperation({ summary: 'Callback seamless balance_change do BigBang' })
  balanceChange(@Body() body: Record<string, unknown>) {
    return this.bigBangService.handleBalanceChange(body as never);
  }
}
