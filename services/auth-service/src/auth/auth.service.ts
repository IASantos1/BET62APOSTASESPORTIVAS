import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { EventEmitter2 } from '@nestjs/event-emitter';
import * as argon2 from 'argon2';
import * as otplib from 'otplib';
const authenticator: any = (otplib as any).authenticator ?? (otplib as any).TOTP ?? (otplib as any).totp ?? otplib;
import * as qrcode from 'qrcode';
import { PrismaService } from '../prisma/prisma.service';
import { RedisEventService } from '../events/redis-event.service';
import { JwtBlacklistService } from './jwt-blacklist.service';
import type {
  RegisterDto,
  LoginDto,
  RefreshTokenDto,
  ForgotPasswordDto,
  ResetPasswordDto,
  VerifyEmailDto,
  VerifyTwoFactorDto,
} from '@bet62/shared';
import {
  BET62_EVENTS,
  BET62_STREAMS,
  createEnvelope,
  AuthProvider,
  AuthRole,
  TwoFactorType,
  KYCLevel,
  UserStatus,
  CurrencyCode,
} from '@bet62/shared';
import type {
  JwtAccessTokenPayload,
  JwtRefreshTokenPayload,
} from './interfaces/jwt-payload.interface';

interface TokensResult {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly eventEmitter: EventEmitter2,
    private readonly redisEventService: RedisEventService,
    private readonly jwtBlacklistService: JwtBlacklistService,
  ) {}

  private get accessSecret(): string {
    return (
      this.configService.get<string>('JWT_ACCESS_SECRET') ||
      this.configService.get<string>('JWT_SECRET') ||
      'change-me'
    );
  }

  private get refreshSecret(): string {
    return (
      this.configService.get<string>('JWT_REFRESH_SECRET') ||
      this.configService.get<string>('JWT_SECRET') ||
      'change-me'
    );
  }

  private get accessExpiresIn(): string {
    return (
      this.configService.get<string>('JWT_ACCESS_EXPIRES_IN') ||
      this.configService.get<string>('JWT_EXPIRES_IN') ||
      '3600s'
    );
  }

  private get refreshExpiresIn(): string {
    return (
      this.configService.get<string>('JWT_REFRESH_EXPIRES_IN') || '7d'
    );
  }

  private generateJti(): string {
    return crypto.randomUUID();
  }

  private generateTokenString(): string {
    return crypto.randomUUID();
  }

  private async hashValue(raw: string): Promise<string> {
    return argon2.hash(raw);
  }

  private async verifyHash(hash: string, raw: string): Promise<boolean> {
    return argon2.verify(hash, raw);
  }

  private async hashToken(rawToken: string): Promise<string> {
    return this.hashValue(rawToken);
  }

  private generateRecoveryCodes(count = 8): string[] {
    const codes: string[] = [];
    for (let i = 0; i < count; i++) {
      const parts: string[] = [];
      for (let p = 0; p < 4; p++) {
        parts.push(
          Math.random().toString(36).substring(2, 6).toUpperCase(),
        );
      }
      codes.push(parts.join('-'));
    }
    return codes;
  }

  private async createTokens(
    userId: string,
    email: string,
    roles: string[],
    kycLevel?: number,
  ): Promise<{
    tokens: TokensResult;
    refreshJti: string;
    accessJti: string;
  }> {
    const accessJti = this.generateJti();
    const refreshJti = this.generateJti();

    const accessPayload: JwtAccessTokenPayload = {
      sub: userId,
      uid: userId,
      email,
      roles: roles as never,
      kycLevel,
      jti: accessJti,
      iat: 0,
      exp: 0,
    };

    const refreshPayload: JwtRefreshTokenPayload = {
      sub: userId,
      uid: userId,
      jti: refreshJti,
      iat: 0,
      exp: 0,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(accessPayload, {
        secret: this.accessSecret,
        expiresIn: this.accessExpiresIn,
        issuer: 'bet62',
      }),
      this.jwtService.signAsync(refreshPayload, {
        secret: this.refreshSecret,
        expiresIn: this.refreshExpiresIn,
        issuer: 'bet62',
      }),
    ]);

    const decodedAccess = this.jwtService.decode(accessToken) as {
      exp?: number;
      iat?: number;
    };
    const expiresIn =
      decodedAccess && decodedAccess.exp && decodedAccess.iat
        ? decodedAccess.exp - decodedAccess.iat
        : 3600;

    const decodedRefresh = this.jwtService.decode(refreshToken) as {
      exp?: number;
      iat?: number;
    };
    const refreshExpiresIn =
      decodedRefresh && decodedRefresh.exp && decodedRefresh.iat
        ? decodedRefresh.exp - decodedRefresh.iat
        : 7 * 24 * 60 * 60;

    await Promise.all([
      this.jwtBlacklistService.registerTokenForUser(
        userId,
        accessJti,
        expiresIn,
      ),
      this.jwtBlacklistService.registerTokenForUser(
        userId,
        refreshJti,
        refreshExpiresIn,
      ),
    ]);

    return {
      tokens: {
        accessToken,
        refreshToken,
        expiresIn,
        tokenType: 'Bearer',
      },
      refreshJti,
      accessJti,
    };
  }

  private async upsertRefreshToken(
    userId: string,
    rawRefreshToken: string,
    opts?: {
      ipAddress?: string;
      userAgent?: string;
      location?: unknown;
      expiresAt?: Date;
    },
  ): Promise<void> {
    const tokenHash = await this.hashToken(rawRefreshToken);
    let expiresAt: Date;
    if (opts?.expiresAt) {
      expiresAt = opts.expiresAt;
    } else {
      const decoded = this.jwtService.decode(rawRefreshToken) as {
        exp?: number;
      };
      expiresAt = decoded?.exp
        ? new Date(decoded.exp * 1000)
        : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    }

    await this.prisma.refreshToken.upsert({
      where: { userId },
      create: {
        userId,
        tokenHash,
        ipAddress: opts?.ipAddress ?? undefined,
        userAgent: opts?.userAgent ?? undefined,
        location: opts?.location ?? undefined,
        expiresAt,
        isActive: true,
      },
      update: {
        tokenHash,
        ipAddress: opts?.ipAddress ?? undefined,
        userAgent: opts?.userAgent ?? undefined,
        location: opts?.location ?? undefined,
        expiresAt,
        isActive: true,
        revokedAt: null,
        revokedReason: null,
      },
    });
  }

  async register(dto: RegisterDto): Promise<{
    user: {
      userId: string;
      email: string;
      roles: string[];
      emailVerifiedAt: Date | null;
    };
    tokens: TokensResult;
    emailVerificationToken: string;
  }> {
    const existing = await this.prisma.authUser.findUnique({
      where: { email: dto.email },
    });
    if (existing) {
      throw new ConflictException('E-mail já cadastrado');
    }

    const passwordHash = await this.hashValue(dto.password);

    const user = await this.prisma.authUser.create({
      data: {
        email: dto.email,
        passwordHash,
        provider: AuthProvider.EMAIL,
        roles: [AuthRole.USER],
        twoFactorType: TwoFactorType.NONE,
        isActive: true,
      },
      select: {
        userId: true,
        email: true,
        roles: true,
        emailVerifiedAt: true,
      },
    });

    const rawVerifyToken = this.generateTokenString();
    const verifyTokenHash = await this.hashToken(rawVerifyToken);
    const verifyExpiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

    await this.prisma.emailVerificationToken.create({
      data: {
        userId: user.userId,
        tokenHash: verifyTokenHash,
        expiresAt: verifyExpiresAt,
      },
    });

    const { tokens } = await this.createTokens(
      user.userId,
      user.email,
      user.roles,
      KYCLevel.L0,
    );
    await this.upsertRefreshToken(user.userId, tokens.refreshToken);

    const payload = {
      userId: user.userId,
      email: user.email,
      firstName: dto.firstName,
      lastName: dto.lastName,
      country: dto.country,
      preferredLanguage: dto.preferredLanguage || 'pt-PT',
      currency: CurrencyCode.EUR,
      registeredAt: new Date().toISOString(),
      affiliateCode: dto.affiliateCode,
      kycLevel: KYCLevel.L0,
      initialStatus: UserStatus.PENDING,
    };

    const envelope = createEnvelope({
      event: BET62_EVENTS.AUTH.USER_CREATED,
      aggregateType: 'AuthUser',
      aggregateId: user.userId,
      payload,
      producer: 'auth-service',
    });

    await this.redisEventService.publish(BET62_STREAMS.AUTH, envelope);
    this.eventEmitter.emit(BET62_EVENTS.AUTH.USER_CREATED, payload, envelope);

    return {
      user,
      tokens,
      emailVerificationToken: rawVerifyToken,
    };
  }

  async validateLocalUser(
    email: string,
    password: string,
  ): Promise<{
    userId: string;
    email: string;
    roles: string[];
    twoFactorType: TwoFactorType;
    passwordHash: string;
    isActive: boolean;
  } | null> {
    const user = await this.prisma.authUser.findUnique({
      where: { email },
      select: {
        userId: true,
        email: true,
        roles: true,
        twoFactorType: true,
        twoFactorSecret: true,
        passwordHash: true,
        isActive: true,
      },
    });
    if (!user || !user.isActive) {
      return null;
    }
    const valid = await this.verifyHash(user.passwordHash, password);
    if (!valid) {
      return null;
    }
    return user;
  }

  async login(
    dto: LoginDto,
    opts?: { ipAddress?: string; userAgent?: string },
  ): Promise<{
    user: {
      userId: string;
      email: string;
      roles: string[];
      twoFactorType: TwoFactorType;
    };
    tokens: TokensResult;
    twoFactorRequired: boolean;
  }> {
    const user = await this.prisma.authUser.findUnique({
      where: { email: dto.email },
      select: {
        userId: true,
        email: true,
        roles: true,
        twoFactorType: true,
        twoFactorSecret: true,
        passwordHash: true,
        isActive: true,
      },
    });

    let success = false;
    let failureReason: string | undefined;

    if (!user || !user.isActive) {
      failureReason = user && !user.isActive ? 'CONTA_INATIVA' : 'CREDENCIAIS_INVALIDAS';
    } else {
      const valid = await this.verifyHash(user.passwordHash, dto.password);
      if (!valid) {
        failureReason = 'CREDENCIAIS_INVALIDAS';
      } else {
        success = true;
      }
    }

    await this.prisma.auditLogLogin.create({
      data: {
        userId: user?.userId ?? undefined,
        email: dto.email,
        success,
        ipAddress: opts?.ipAddress,
        userAgent: opts?.userAgent,
        failureReason,
      },
    });

    if (!success) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    if (
      user.twoFactorType !== TwoFactorType.NONE &&
      user.twoFactorSecret
    ) {
      if (!dto.twoFactorCode) {
        return {
          user: {
            userId: user.userId,
            email: user.email,
            roles: user.roles,
            twoFactorType: user.twoFactorType,
          },
          tokens: {
            accessToken: '',
            refreshToken: '',
            expiresIn: 0,
            tokenType: 'Bearer',
          },
          twoFactorRequired: true,
        };
      }

      const totpValid = authenticator.verify({
        token: dto.twoFactorCode,
        secret: user.twoFactorSecret,
      });
      if (!totpValid) {
        await this.prisma.auditLogLogin.create({
          data: {
            userId: user.userId,
            email: dto.email,
            success: false,
            ipAddress: opts?.ipAddress,
            userAgent: opts?.userAgent,
            failureReason: '2FA_INVALIDO',
          },
        });
        throw new UnauthorizedException('Código 2FA inválido');
      }
    }

    const { tokens } = await this.createTokens(
      user.userId,
      user.email,
      user.roles,
    );

    await this.upsertRefreshToken(user.userId, tokens.refreshToken, {
      ipAddress: opts?.ipAddress,
      userAgent: opts?.userAgent,
    });

    await this.prisma.authUser.update({
      where: { userId: user.userId },
      data: {
        lastLoginAt: new Date(),
        lastLoginIp: opts?.ipAddress ?? undefined,
      },
    });

    return {
      user: {
        userId: user.userId,
        email: user.email,
        roles: user.roles,
        twoFactorType: user.twoFactorType,
      },
      tokens,
      twoFactorRequired: false,
    };
  }

  async refresh(
    userId: string,
    rawRefreshToken?: string,
    opts?: { ipAddress?: string; userAgent?: string },
  ): Promise<TokensResult> {
    const stored = await this.prisma.refreshToken.findUnique({
      where: { userId },
    });

    if (!stored || !stored.isActive || stored.revokedAt) {
      throw new UnauthorizedException('Refresh token inválido ou revogado');
    }

    let tokenValid = false;
    if (rawRefreshToken) {
      tokenValid = await this.verifyHash(stored.tokenHash, rawRefreshToken);
    }

    if (!tokenValid && stored.expiresAt < new Date()) {
      throw new UnauthorizedException('Refresh token expirado');
    }

    if (rawRefreshToken) {
      const decoded = this.jwtService.decode(rawRefreshToken) as {
        jti?: string;
      };
      if (decoded?.jti) {
        const revoked = await this.jwtBlacklistService.isRevoked(decoded.jti);
        if (revoked) {
          throw new UnauthorizedException('Refresh token revogado');
        }
      }
    }

    const lastRevokeAll =
      await this.jwtBlacklistService.getUserLastRevokeAllTimestamp(userId);
    if (lastRevokeAll && rawRefreshToken) {
      const decoded = this.jwtService.decode(rawRefreshToken) as {
        iat?: number;
      };
      if (decoded?.iat && decoded.iat < lastRevokeAll) {
        throw new UnauthorizedException('Sessão terminada');
      }
    }

    const user = await this.prisma.authUser.findUnique({
      where: { userId },
      select: { userId: true, email: true, roles: true },
    });
    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    const { tokens } = await this.createTokens(
      user.userId,
      user.email,
      user.roles,
    );
    await this.upsertRefreshToken(user.userId, tokens.refreshToken, opts);

    return tokens;
  }

  async logout(userId: string, tokenJti?: string): Promise<void> {
    await this.prisma.refreshToken.updateMany({
      where: {
        userId,
        isActive: true,
      },
      data: {
        isActive: false,
        revokedAt: new Date(),
        revokedReason: 'USER_LOGOUT',
      },
    });

    if (tokenJti) {
      const accessExpiresIn =
        this.parseExpiresIn(this.accessExpiresIn) ?? 3600;
      await this.jwtBlacklistService.addToken(tokenJti, accessExpiresIn);
    }
  }

  async logoutAll(userId: string): Promise<void> {
    await this.prisma.refreshToken.updateMany({
      where: { userId },
      data: {
        isActive: false,
        revokedAt: new Date(),
        revokedReason: 'USER_LOGOUT_ALL',
      },
    });

    await this.jwtBlacklistService.revokeAllForUser(userId);
  }

  private parseExpiresIn(value: string): number | null {
    if (!value) return null;
    const match = value.match(/^(\d+)(s|m|h|d)?$/);
    if (!match) return null;
    const num = parseInt(match[1], 10);
    const unit = match[2] ?? 's';
    const multipliers: Record<string, number> = {
      s: 1,
      m: 60,
      h: 60 * 60,
      d: 24 * 60 * 60,
    };
    return num * (multipliers[unit] ?? 1);
  }

  async forgotPassword(
    dto: ForgotPasswordDto,
    opts?: { ipAddress?: string },
  ): Promise<{ token?: string }> {
    const user = await this.prisma.authUser.findUnique({
      where: { email: dto.email },
      select: { userId: true, email: true },
    });

    if (!user) {
      return {};
    }

    const rawToken = this.generateTokenString();
    const tokenHash = await this.hashToken(rawToken);
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

    await this.prisma.passwordResetToken.create({
      data: {
        userId: user.userId,
        tokenHash,
        expiresAt,
        ipAddress: opts?.ipAddress,
      },
    });

    const payload = {
      userId: user.userId,
      email: user.email,
      token: rawToken,
      expiresAt: expiresAt.toISOString(),
    };

    const envelope = createEnvelope({
      event: BET62_EVENTS.AUTH.USER_PASSWORD_RESET,
      aggregateType: 'AuthUser',
      aggregateId: user.userId,
      payload,
      producer: 'auth-service',
    });

    await this.redisEventService.publish(BET62_STREAMS.AUTH, envelope);
    this.eventEmitter.emit(BET62_EVENTS.AUTH.USER_PASSWORD_RESET, payload, envelope);

    return { token: rawToken };
  }

  async resetPassword(dto: ResetPasswordDto): Promise<void> {
    const allTokens = await this.prisma.passwordResetToken.findMany({
      where: { isUsed: false },
      select: {
        id: true,
        tokenHash: true,
        userId: true,
        expiresAt: true,
      },
    });

    let matched: {
      id: string;
      userId: string;
    } | null = null;
    for (const t of allTokens) {
      if (t.expiresAt < new Date()) continue;
      const ok = await this.verifyHash(t.tokenHash, dto.token);
      if (ok) {
        matched = { id: t.id, userId: t.userId };
        break;
      }
    }

    if (!matched) {
      throw new BadRequestException('Token de redefinição inválido ou expirado');
    }

    const passwordHash = await this.hashValue(dto.newPassword);

    await this.prisma.$transaction([
      this.prisma.passwordResetToken.update({
        where: { id: matched.id },
        data: {
          isUsed: true,
          usedAt: new Date(),
        },
      }),
      this.prisma.authUser.update({
        where: { userId: matched.userId },
        data: { passwordHash },
      }),
      this.prisma.refreshToken.updateMany({
        where: { userId: matched.userId },
        data: {
          isActive: false,
          revokedAt: new Date(),
          revokedReason: 'PASSWORD_RESET',
        },
      }),
    ]);

    await this.jwtBlacklistService.revokeAllForUser(matched.userId);

    const payload = {
      userId: matched.userId,
    };
    const envelope = createEnvelope({
      event: BET62_EVENTS.AUTH.USER_PASSWORD_CHANGED,
      aggregateType: 'AuthUser',
      aggregateId: matched.userId,
      payload,
      producer: 'auth-service',
    });
    await this.redisEventService.publish(BET62_STREAMS.AUTH, envelope);
  }

  async verifyEmail(dto: VerifyEmailDto): Promise<void> {
    const allTokens = await this.prisma.emailVerificationToken.findMany({
      where: { isUsed: false },
      select: {
        id: true,
        tokenHash: true,
        userId: true,
        expiresAt: true,
      },
    });

    let matched: {
      id: string;
      userId: string;
    } | null = null;
    for (const t of allTokens) {
      if (t.expiresAt < new Date()) continue;
      const ok = await this.verifyHash(t.tokenHash, dto.token);
      if (ok) {
        matched = { id: t.id, userId: t.userId };
        break;
      }
    }

    if (!matched) {
      throw new BadRequestException('Token de verificação inválido ou expirado');
    }

    await this.prisma.$transaction([
      this.prisma.emailVerificationToken.update({
        where: { id: matched.id },
        data: {
          isUsed: true,
          usedAt: new Date(),
        },
      }),
      this.prisma.authUser.update({
        where: { userId: matched.userId },
        data: {
          emailVerifiedAt: new Date(),
          roles: {
            set: [AuthRole.USER, AuthRole.VERIFIED_USER],
          },
        },
      }),
    ]);

    const payload = {
      userId: matched.userId,
      verifiedAt: new Date().toISOString(),
    };

    const envelope = createEnvelope({
      event: BET62_EVENTS.AUTH.USER_EMAIL_VERIFIED,
      aggregateType: 'AuthUser',
      aggregateId: matched.userId,
      payload,
      producer: 'auth-service',
    });

    await this.redisEventService.publish(BET62_STREAMS.AUTH, envelope);
    this.eventEmitter.emit(BET62_EVENTS.AUTH.USER_EMAIL_VERIFIED, payload, envelope);
  }

  async me(userId: string): Promise<{
    userId: string;
    email: string;
    roles: string[];
    emailVerifiedAt: Date | null;
    twoFactorType: TwoFactorType;
    isActive: boolean;
    lastLoginAt: Date | null;
    lastLoginIp: string | null;
  }> {
    const user = await this.prisma.authUser.findUnique({
      where: { userId },
      select: {
        userId: true,
        email: true,
        roles: true,
        emailVerifiedAt: true,
        twoFactorType: true,
        isActive: true,
        lastLoginAt: true,
        lastLoginIp: true,
      },
    });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }

  async twoFactorEnable(userId: string): Promise<{
    secret: string;
    otpAuthUrl: string;
    qrDataUrl: string;
  }> {
    const user = await this.prisma.authUser.findUnique({
      where: { userId },
      select: { userId: true, email: true, twoFactorType: true },
    });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const secret = authenticator.generateSecret();
    const otpAuthUrl = authenticator.keyuri(
      user.email,
      'BET62',
      secret,
    );
    const qrDataUrl = await qrcode.toDataURL(otpAuthUrl);

    return {
      secret,
      otpAuthUrl,
      qrDataUrl,
    };
  }

  async twoFactorVerify(
    userId: string,
    dto: VerifyTwoFactorDto,
    pendingSecret: string,
  ): Promise<{ recoveryCodes: string[] }> {
    const user = await this.prisma.authUser.findUnique({
      where: { userId },
    });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const valid = authenticator.verify({
      token: dto.code,
      secret: pendingSecret,
    });
    if (!valid) {
      throw new BadRequestException('Código 2FA inválido');
    }

    const recoveryCodes = this.generateRecoveryCodes();
    const hashedRecoveryCodes = await Promise.all(
      recoveryCodes.map((c) => this.hashValue(c)),
    );

    await this.prisma.authUser.update({
      where: { userId },
      data: {
        twoFactorType: TwoFactorType.TOTP,
        twoFactorSecret: pendingSecret,
        twoFactorRecoveryCodes: hashedRecoveryCodes,
      },
    });

    return { recoveryCodes };
  }

  async twoFactorDisable(userId: string): Promise<void> {
    await this.prisma.authUser.update({
      where: { userId },
      data: {
        twoFactorType: TwoFactorType.NONE,
        twoFactorSecret: null,
        twoFactorRecoveryCodes: null,
      },
    });
  }
}
