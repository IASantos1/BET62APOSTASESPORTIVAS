import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
  ParseUUIDPipe,
  HttpCode,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import type { AuthRole } from '@bet62/shared';
import { BonusService } from './bonus.service';
import { JwtAuthGuard } from '../../auth-shared/jwt-auth.guard';
import { RolesGuard } from '../../auth-shared/roles.guard';
import { Roles } from '../../auth-shared/roles.decorator';
import { CurrentUser } from '../../auth-shared/current-user.decorator';
import { Public } from '../../auth-shared/public.decorator';
import {
  BonusQueryDto,
  CreateCampaignDto,
  GrantBonusDto,
  RedeemBonusCodeDto,
  RolloverProgressResponse,
} from '@bet62/shared';

interface AuthedUser {
  userId: string;
  email: string;
  roles: AuthRole[];
  kycLevel?: number;
}

@ApiTags('bonus')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller()
export class BonusController {
  constructor(private readonly bonusService: BonusService) {}

  @Public()
  @Get('available')
  @ApiOperation({ summary: 'Lista campanhas de bônus disponíveis' })
  listAvailable(@Query() query: BonusQueryDto) {
    return this.bonusService.listAvailable(query);
  }

  @Get('mine/list')
  @ApiOperation({ summary: 'Lista bônus do usuário autenticado' })
  listUserBonuses(
    @CurrentUser() user: AuthedUser,
    @Query() query: BonusQueryDto,
  ) {
    return this.bonusService.listUserBonuses(user.userId, query);
  }

  @Get('mine/:id/progress')
  @ApiOperation({ summary: 'Retorna progresso de rollover de um bônus' })
  getRolloverProgress(
    @CurrentUser() user: AuthedUser,
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<RolloverProgressResponse> {
    return this.bonusService.getRolloverProgress(user.userId, id);
  }

  @Post('redeem-code')
  @HttpCode(200)
  @ApiOperation({ summary: 'Resgata um código promocional' })
  redeemCode(
    @CurrentUser() user: AuthedUser,
    @Body() dto: RedeemBonusCodeDto,
  ) {
    return this.bonusService.redeemCode(user.userId, dto);
  }

  @Post(':id/cancel')
  @HttpCode(200)
  @ApiOperation({ summary: 'Cancela um bônus do usuário' })
  cancelUserBonus(
    @CurrentUser() user: AuthedUser,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: { reason?: string } = {},
  ) {
    return this.bonusService.cancelUserBonus(user.userId, id, body.reason);
  }

  @Post('campaigns')
  @Roles('SUPER_ADMIN' as AuthRole, 'ADMIN' as AuthRole, 'BONUS_MANAGER' as AuthRole)
  @ApiOperation({ summary: 'Admin: cria campanha de bônus' })
  createCampaign(
    @CurrentUser() user: AuthedUser,
    @Body() dto: CreateCampaignDto,
  ) {
    return this.bonusService.createCampaign(dto, user.userId);
  }

  @Get('campaigns')
  @Roles('SUPER_ADMIN' as AuthRole, 'ADMIN' as AuthRole, 'BONUS_MANAGER' as AuthRole, 'SUPPORT' as AuthRole)
  @ApiOperation({ summary: 'Admin: lista campanhas' })
  listCampaigns(@Query() query: BonusQueryDto) {
    return this.bonusService.listCampaigns(query);
  }

  @Post('grants')
  @Roles('SUPER_ADMIN' as AuthRole, 'ADMIN' as AuthRole, 'BONUS_MANAGER' as AuthRole)
  @ApiOperation({ summary: 'Admin: concede bônus manualmente' })
  grantBonus(
    @CurrentUser() user: AuthedUser,
    @Body() dto: GrantBonusDto,
  ) {
    return this.bonusService.grantBonus(dto, user.userId);
  }

  @Post('grants/:id/void')
  @HttpCode(200)
  @Roles('SUPER_ADMIN' as AuthRole, 'ADMIN' as AuthRole, 'BONUS_MANAGER' as AuthRole)
  @ApiOperation({ summary: 'Admin: anula um grant de bônus' })
  voidGrant(@Param('id', ParseUUIDPipe) id: string) {
    return this.bonusService.voidGrant(id);
  }
}
