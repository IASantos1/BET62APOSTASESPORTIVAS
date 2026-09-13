import {
  Controller,
  Post,
  Get,
  Body,
  Req,
  Res,
  HttpCode,
  HttpStatus,
  UseGuards,
  Session,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiBody,
} from '@nestjs/swagger';
import type { Request, Response } from 'express';
import { AdminAuthService } from './admin-auth.service';
import { Public } from './decorators/public.decorator';
import { AdminJwtAuthGuard } from './guards/jwt-auth.guard';
import { CurrentAdmin, type CurrentAdminPayload } from './decorators/current-user.decorator';
import { AdminLoginDto } from '@bet62/shared';

@ApiTags('Admin Auth')
@Controller('auth')
export class AdminAuthController {
  constructor(private readonly authService: AdminAuthService) {}

  private extractIp(req: Request): string | undefined {
    const fwd = req.headers['x-forwarded-for'];
    if (typeof fwd === 'string') return fwd.split(',')[0]?.trim();
    if (Array.isArray(fwd) && fwd.length > 0) return fwd[0]?.trim();
    return req.ip;
  }

  private extractUserAgent(req: Request): string | undefined {
    const ua = req.headers['user-agent'];
    return typeof ua === 'string' ? ua : undefined;
  }

  private setRefreshCookie(res: Response, token: string): void {
    const isProd = process.env.NODE_ENV === 'production';
    res.cookie('admin_refresh_token', token, {
      httpOnly: true,
      secure: isProd,
      sameSite: isProd ? 'strict' : 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: '/api/admin',
    });
  }

  private clearRefreshCookie(res: Response): void {
    res.clearCookie('admin_refresh_token', { path: '/api/admin' });
  }

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login de administrador' })
  @ApiBody({ type: AdminLoginDto })
  async login(
    @Body() dto: AdminLoginDto,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const result = await this.authService.login(dto, {
      ipAddress: this.extractIp(req),
      userAgent: this.extractUserAgent(req),
    });

    if (result.twoFactorRequired) {
      return { twoFactorRequired: true, adminUserId: result.adminUserId };
    }

    if (result.refreshToken) this.setRefreshCookie(res, result.refreshToken);
    return {
      adminUserId: result.adminUserId,
      name: result.name,
      email: result.email,
      role: result.role,
      mustChangePassword: (result as any).mustChangePassword,
      accessToken: result.accessToken,
      expiresInSec: result.expiresInSec,
    };
  }

  @UseGuards(AdminJwtAuthGuard)
  @Post('logout')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Logout do admin' })
  async logout(
    @CurrentAdmin() user: CurrentAdminPayload,
    @Body() body: { refreshToken?: string; all?: boolean } | undefined,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const rawRefresh =
      body?.refreshToken ||
      (req.cookies && req.cookies['admin_refresh_token']);
    await this.authService.logout(
      user.adminUserId,
      body?.all ? undefined : rawRefresh,
      { ipAddress: this.extractIp(req), userAgent: this.extractUserAgent(req) },
    );
    this.clearRefreshCookie(res);
  }

  @Public()
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Renovar access token via refresh token' })
  async refresh(
    @Body('refreshToken') rawBodyRefresh: string | undefined,
    @Body('adminUserId') adminUserId: string | undefined,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const cookieRefresh =
      req.cookies && req.cookies['admin_refresh_token'];
    const rawToken = rawBodyRefresh || cookieRefresh;
    if (!rawToken) throw new Error('Refresh token não fornecido');

    const uid = adminUserId;
    if (!uid) throw new Error('adminUserId obrigatório');

    const tokens = await this.authService.refresh(uid, rawToken, {
      ipAddress: this.extractIp(req),
      userAgent: this.extractUserAgent(req),
    });
    return tokens;
  }

  @UseGuards(AdminJwtAuthGuard)
  @Get('me')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obter dados do admin autenticado' })
  async me(@CurrentAdmin() user: CurrentAdminPayload) {
    return this.authService.me(user.adminUserId);
  }

  @UseGuards(AdminJwtAuthGuard)
  @Post('2fa/enable')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Iniciar ativação de 2FA TOTP' })
  async twoFactorEnable(
    @CurrentAdmin() user: CurrentAdminPayload,
    @Session() session: Record<string, unknown> & { adminPending2fa?: string },
  ) {
    const result = await this.authService.twoFactorEnable(user.adminUserId);
    session.adminPending2fa = result.secret;
    return result;
  }

  @UseGuards(AdminJwtAuthGuard)
  @Post('2fa/verify')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Confirmar ativação 2FA' })
  async twoFactorVerify(
    @CurrentAdmin() user: CurrentAdminPayload,
    @Body('code') code: string,
    @Session() session: Record<string, unknown> & { adminPending2fa?: string },
  ) {
    if (!session.adminPending2fa) {
      throw new Error('Nenhum processo 2FA em andamento');
    }
    const result = await this.authService.twoFactorVerify(
      user.adminUserId,
      code,
      session.adminPending2fa,
    );
    session.adminPending2fa = undefined;
    return result;
  }

  @UseGuards(AdminJwtAuthGuard)
  @Post('2fa/disable')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Desativar 2FA' })
  async twoFactorDisable(@CurrentAdmin() user: CurrentAdminPayload) {
    await this.authService.twoFactorDisable(user.adminUserId);
  }
}
