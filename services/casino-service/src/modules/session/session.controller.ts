import {
  Body,
  Controller,
  Param,
  Post,
  UseGuards,
  ParseUUIDPipe,
  HttpCode,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import type { AuthRole } from '@bet62/shared';
import { SessionService } from './session.service';
import { JwtAuthGuard } from '../../auth-shared/jwt-auth.guard';
import { RolesGuard } from '../../auth-shared/roles.guard';
import { CurrentUser } from '../../auth-shared/current-user.decorator';
import { StartCasinoSessionDto, EndCasinoSessionDto } from '@bet62/shared';

interface AuthedUser {
  userId: string;
  email: string;
  roles: AuthRole[];
  kycLevel?: number;
}

@ApiTags('casino-session')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post('start')
  @ApiOperation({ summary: 'Iniciar sessão de jogo (retorna playerToken + URLs)' })
  start(@CurrentUser() user: AuthedUser, @Body() dto: StartCasinoSessionDto) {
    return this.sessionService.start(user.userId, dto);
  }

  @Post('end')
  @HttpCode(200)
  @ApiOperation({ summary: 'Finalizar sessão de jogo' })
  end(@CurrentUser() user: AuthedUser, @Body() dto: EndCasinoSessionDto) {
    return this.sessionService.end(user.userId, dto.sessionId, dto.reason);
  }
}
