import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseGuards,
  HttpCode,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import type { AuthRole } from '@bet62/shared';
import { NotificationsService } from './notifications.service';
import { JwtAuthGuard } from '../../auth-shared/jwt-auth.guard';
import { RolesGuard } from '../../auth-shared/roles.guard';
import { Roles } from '../../auth-shared/roles.decorator';
import { CurrentUser } from '../../auth-shared/current-user.decorator';
import {
  NotificationQueryDto,
  NotificationsPreferencesUpdateDto,
  PushTokenRegisterDto,
  MarkNotificationsReadDto,
  SendPushDto,
} from '@bet62/shared';

interface AuthedUser {
  userId: string;
  email: string;
  roles: AuthRole[];
  kycLevel?: number;
}

@ApiTags('notifications')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller()
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get('unread-count')
  @ApiOperation({ summary: 'Quantidade de notificações não lidas' })
  getUnreadCount(@CurrentUser() user: AuthedUser) {
    return this.notificationsService.getUnreadCount(user.userId);
  }

  @Get('list')
  @ApiOperation({ summary: 'Listar notificações do usuário' })
  list(
    @CurrentUser() user: AuthedUser,
    @Query() query: NotificationQueryDto,
  ) {
    return this.notificationsService.list(user.userId, query);
  }

  @Post('read')
  @HttpCode(200)
  @ApiOperation({ summary: 'Marcar notificações como lidas' })
  markRead(
    @CurrentUser() user: AuthedUser,
    @Body() dto: MarkNotificationsReadDto,
  ) {
    return this.notificationsService.markRead(user.userId, dto);
  }

  @Get('preferences')
  @ApiOperation({ summary: 'Obter preferências de notificações' })
  getPreferences(@CurrentUser() user: AuthedUser) {
    return this.notificationsService.getPreferences(user.userId);
  }

  @Post('preferences')
  @HttpCode(200)
  @ApiOperation({ summary: 'Atualizar preferências de notificações' })
  updatePreferences(
    @CurrentUser() user: AuthedUser,
    @Body() dto: NotificationsPreferencesUpdateDto,
  ) {
    return this.notificationsService.updatePreferences(user.userId, dto);
  }

  @Post('push/register')
  @HttpCode(200)
  @ApiOperation({ summary: 'Registrar token de push (Web/FCM/APNS)' })
  registerPushToken(
    @CurrentUser() user: AuthedUser,
    @Body() dto: PushTokenRegisterDto,
  ) {
    return this.notificationsService.registerPushToken(user.userId, dto);
  }

  @Post('send-push')
  @Roles('SUPER_ADMIN' as AuthRole, 'ADMIN' as AuthRole, 'SUPPORT' as AuthRole)
  @HttpCode(202)
  @ApiOperation({ summary: 'Admin: enviar push direto' })
  sendPush(@Body() dto: SendPushDto) {
    return this.notificationsService.sendPushInternal(dto);
  }
}
