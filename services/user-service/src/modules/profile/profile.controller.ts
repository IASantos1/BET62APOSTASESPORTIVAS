import { Controller, Get, Patch, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { ProfileService } from './profile.service';
import { JwtAuthGuard } from '../auth-shared/jwt-auth.guard';
import { CurrentUser } from '../auth-shared/current-user.decorator';
import type { CurrentUser as CurrentUserType } from '../auth-shared/jwt.strategy';
import {
  UpdateUserProfileDto,
  UpdateUserPreferencesDto,
  UpdateUserLimitsDto,
} from '@bet62/shared';

@ApiTags('Profile')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller()
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('me')
  @ApiOperation({ summary: 'Obter perfil do usuário autenticado' })
  getMe(@CurrentUser() user: CurrentUserType) {
    return this.profileService.getProfile(user);
  }

  @Patch('me')
  @ApiOperation({ summary: 'Atualizar perfil do usuário autenticado' })
  updateMe(
    @CurrentUser() user: CurrentUserType,
    @Body() dto: UpdateUserProfileDto,
  ) {
    return this.profileService.updateProfile(user, dto);
  }

  @Get('preferences')
  @ApiOperation({ summary: 'Obter preferências do usuário' })
  getPreferences(@CurrentUser() user: CurrentUserType) {
    return this.profileService.getPreferences(user);
  }

  @Patch('preferences')
  @ApiOperation({ summary: 'Atualizar preferências do usuário' })
  updatePreferences(
    @CurrentUser() user: CurrentUserType,
    @Body() dto: UpdateUserPreferencesDto,
  ) {
    return this.profileService.updatePreferences(user, dto);
  }

  @Get('limits')
  @ApiOperation({ summary: 'Obter limites do usuário' })
  getLimits(@CurrentUser() user: CurrentUserType) {
    return this.profileService.getLimits(user);
  }

  @Patch('limits')
  @ApiOperation({ summary: 'Atualizar limites do usuário (não permite aumentos imediatos de depósito)' })
  updateLimits(
    @CurrentUser() user: CurrentUserType,
    @Body() dto: UpdateUserLimitsDto,
  ) {
    return this.profileService.updateLimits(user, dto);
  }
}
