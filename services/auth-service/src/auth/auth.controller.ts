import {
  Controller,
  Post,
  Get,
  Body,
  Query,
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
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';
import type { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { Public } from './guards/public.decorator';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RefreshJwtAuthGuard } from './guards/refresh-jwt.guard';
import { CurrentUser } from './guards/current-user.decorator';
import {
  RegisterDto,
  LoginDto,
  RefreshTokenDto,
  ForgotPasswordDto,
  ResetPasswordDto,
  VerifyEmailDto,
  VerifyTwoFactorDto,
} from '@bet62/shared';

interface CurrentUserShape {
  userId: string;
  email?: string;
  roles?: string[];
  kycLevel?: number;
  jti?: string;
}

@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  private extractIp(req: Request): string | undefined {
    const fwd = req.headers['x-forwarded-for'];
    if (typeof fwd === 'string') {
      return fwd.split(',')[0]?.trim();
    }
    if (Array.isArray(fwd) && fwd.length > 0) {
      return fwd[0]?.trim();
    }
    return req.ip;
  }

  private extractUserAgent(req: Request): string | undefined {
    const ua = req.headers['user-agent'];
    return typeof ua === 'string' ? ua : undefined;
  }

  private setRefreshCookie(res: Response, token: string): void {
    const isProd = process.env.NODE_ENV === 'production';
    res.cookie('refresh_token', token, {
      httpOnly: true,
      secure: isProd,
      sameSite: isProd ? 'strict' : 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: '/api/auth',
    });
  }

  private clearRefreshCookie(res: Response): void {
    res.clearCookie('refresh_token', { path: '/api/auth' });
  }

  @Public()
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Registrar um novo usuário' })
  @ApiBody({ type: RegisterDto })
  async register(
    @Body() dto: RegisterDto,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const result = await this.authService.register(dto);
    if (result.tokens.refreshToken) {
      this.setRefreshCookie(res, result.tokens.refreshToken);
    }
    return {
      user: result.user,
      tokens: {
        accessToken: result.tokens.accessToken,
        expiresIn: result.tokens.expiresIn,
        tokenType: result.tokens.tokenType,
      },
      emailVerificationToken: result.emailVerificationToken,
    };
  }

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Autenticar usuário' })
  @ApiBody({ type: LoginDto })
  async login(
    @Body() dto: LoginDto,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
    @Session() session: Record<string, unknown> & {
      pending2faSecret?: string;
    },
  ) {
    const result = await this.authService.login(dto, {
      ipAddress: this.extractIp(req),
      userAgent: this.extractUserAgent(req),
    });

    if (result.twoFactorRequired) {
      return {
        twoFactorRequired: true,
        twoFactorType: result.user.twoFactorType,
      };
    }

    if (result.tokens.refreshToken) {
      this.setRefreshCookie(res, result.tokens.refreshToken);
    }

    return {
      user: result.user,
      tokens: {
        accessToken: result.tokens.accessToken,
        expiresIn: result.tokens.expiresIn,
        tokenType: result.tokens.tokenType,
      },
    };
  }

  @Public()
  @UseGuards(RefreshJwtAuthGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Renovar tokens usando refresh token' })
  @ApiBody({ type: RefreshTokenDto })
  async refresh(
    @CurrentUser() user: CurrentUserShape,
    @Body() dto: RefreshTokenDto,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    let rawToken: string | undefined = dto.refreshToken;
    if (!rawToken && req.cookies && req.cookies['refresh_token']) {
      rawToken = req.cookies['refresh_token'];
    }

    const tokens = await this.authService.refresh(user.userId, rawToken, {
      ipAddress: this.extractIp(req),
      userAgent: this.extractUserAgent(req),
    });

    if (tokens.refreshToken) {
      this.setRefreshCookie(res, tokens.refreshToken);
    }

    return {
      accessToken: tokens.accessToken,
      expiresIn: tokens.expiresIn,
      tokenType: tokens.tokenType,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Encerrar sessão atual' })
  async logout(
    @CurrentUser() user: CurrentUserShape,
    @Res({ passthrough: true }) res: Response,
  ) {
    await this.authService.logout(user.userId, user.jti);
    this.clearRefreshCookie(res);
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout-all')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Encerrar todas as sessões do usuário' })
  async logoutAll(
    @CurrentUser() user: CurrentUserShape,
    @Res({ passthrough: true }) res: Response,
  ) {
    await this.authService.logoutAll(user.userId);
    this.clearRefreshCookie(res);
  }

  @Public()
  @Post('forgot-password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Solicitar redefinição de senha' })
  @ApiBody({ type: ForgotPasswordDto })
  async forgotPassword(
    @Body() dto: ForgotPasswordDto,
    @Req() req: Request,
  ) {
    await this.authService.forgotPassword(dto, {
      ipAddress: this.extractIp(req),
    });
    return {
      message: 'Se o e-mail existir, um link de redefinição foi enviado',
    };
  }

  @Public()
  @Post('reset-password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Redefinir senha com token' })
  @ApiBody({ type: ResetPasswordDto })
  async resetPassword(@Body() dto: ResetPasswordDto) {
    await this.authService.resetPassword(dto);
    return { message: 'Senha redefinida com sucesso' };
  }

  @Public()
  @Post('verify-email')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Verificar e-mail usando token' })
  @ApiQuery({ name: 'token', type: String, required: true })
  async verifyEmail(@Query() query: VerifyEmailDto) {
    const dto: VerifyEmailDto = { token: query.token };
    await this.authService.verifyEmail(dto);
    return { message: 'E-mail verificado com sucesso' };
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Obter dados do usuário autenticado' })
  async me(@CurrentUser() user: CurrentUserShape) {
    return this.authService.me(user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('2fa/enable')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Habilitar 2FA TOTP (retorna QR DataURL)' })
  async twoFactorEnable(
    @CurrentUser() user: CurrentUserShape,
    @Session() session: Record<string, unknown> & {
      pending2faSecret?: string;
    },
  ) {
    const result = await this.authService.twoFactorEnable(user.userId);
    session.pending2faSecret = result.secret;
    return {
      secret: result.secret,
      otpAuthUrl: result.otpAuthUrl,
      qrDataUrl: result.qrDataUrl,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('2fa/verify')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Confirmar habilitação do 2FA' })
  @ApiBody({ type: VerifyTwoFactorDto })
  async twoFactorVerify(
    @CurrentUser() user: CurrentUserShape,
    @Body() dto: VerifyTwoFactorDto,
    @Session() session: Record<string, unknown> & {
      pending2faSecret?: string;
    },
  ) {
    if (!session.pending2faSecret) {
      throw new Error('Nenhum processo de ativação de 2FA em andamento');
    }
    const result = await this.authService.twoFactorVerify(
      user.userId,
      dto,
      session.pending2faSecret,
    );
    session.pending2faSecret = undefined;
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Post('2fa/disable')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Desabilitar 2FA' })
  async twoFactorDisable(@CurrentUser() user: CurrentUserShape) {
    await this.authService.twoFactorDisable(user.userId);
  }
}
