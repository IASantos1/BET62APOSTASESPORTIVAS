import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaService } from '../../prisma/prisma.service';
import { AdminRole, AuditAction, AuditEntityType, AuditLogSeverity } from '@bet62/shared';
import type {
  AdminLoginDto,
  AdminSessionResponse,
} from '@bet62/shared';
import type {
  AdminJwtAccessTokenPayload,
  AdminJwtRefreshTokenPayload,
} from './interfaces/jwt-payload.interface';
import * as otplib from 'otplib';
const authenticator: any = (otplib as any).authenticator ?? (otplib as any).TOTP ?? (otplib as any).totp ?? otplib;
import * as argon2 from 'argon2';
import * as qrcode from 'qrcode';

interface AdminTokens {
  accessToken: string;
  refreshToken: string;
  expiresInSec: number;
}

@Injectable()
export class AdminAuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  private get jwtSecret(): string {
    return (
      this.configService.get<string>('ADMIN_JWT_SECRET') ||
      this.configService.get<string>('JWT_SECRET') ||
      'admin-change-me'
    );
  }

  private get accessExpiresIn(): string {
    return this.configService.get<string>('ADMIN_JWT_EXPIRES_IN') || '900s';
  }

  private get refreshExpiresIn(): string {
    return this.configService.get<string>('ADMIN_JWT_REFRESH_EXPIRES_IN') || '7d';
  }

  private async hashValue(raw: string): Promise<string> {
    return argon2.hash(raw);
  }

  private async verifyHash(hash: string, raw: string): Promise<boolean> {
    return argon2.verify(hash, raw);
  }

  private generateJti(): string {
    return crypto.randomUUID();
  }

  private generateRequestId(): string {
    return crypto.randomUUID();
  }

  private generateRecoveryCodes(count = 8): string[] {
    const codes: string[] = [];
    for (let i = 0; i < count; i++) {
      const parts: string[] = [];
      for (let p = 0; p < 4; p++) {
        parts.push(Math.random().toString(36).substring(2, 6).toUpperCase());
      }
      codes.push(parts.join('-'));
    }
    return codes;
  }

  private async createTokens(
    adminUserId: string,
    email: string,
    role: AdminRole,
  ): Promise<{ tokens: AdminTokens; accessJti: string; refreshJti: string }> {
    const accessJti = this.generateJti();
    const refreshJti = this.generateJti();

    const accessPayload: AdminJwtAccessTokenPayload = {
      sub: adminUserId,
      email,
      role,
      jti: accessJti,
      iat: 0,
      exp: 0,
    };

    const refreshPayload: AdminJwtRefreshTokenPayload = {
      sub: adminUserId,
      jti: refreshJti,
      iat: 0,
      exp: 0,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(accessPayload, {
        secret: this.jwtSecret,
        expiresIn: this.accessExpiresIn,
        issuer: 'bet62-admin',
      }),
      this.jwtService.signAsync(refreshPayload, {
        secret: this.jwtSecret,
        expiresIn: this.refreshExpiresIn,
        issuer: 'bet62-admin',
      }),
    ]);

    const decoded = this.jwtService.decode(accessToken) as { exp?: number; iat?: number };
    const expiresInSec =
      decoded && decoded.exp && decoded.iat ? decoded.exp - decoded.iat : 900;

    return {
      tokens: { accessToken, refreshToken, expiresInSec },
      accessJti,
      refreshJti,
    };
  }

  private async upsertSession(
    adminUserId: string,
    rawRefreshToken: string,
    opts?: {
      ipAddress?: string;
      userAgent?: string;
      location?: unknown;
      deviceFingerprint?: string;
    },
  ): Promise<void> {
    const tokenHash = await this.hashValue(rawRefreshToken);
    const decoded = this.jwtService.decode(rawRefreshToken) as { exp?: number };
    const expiresAt = decoded?.exp
      ? new Date(decoded.exp * 1000)
      : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    await this.prisma.adminSession.create({
      data: {
        adminUserId,
        tokenHash,
        ipAddress: opts?.ipAddress,
        userAgent: opts?.userAgent,
        location: opts?.location as never,
        deviceFingerprint: opts?.deviceFingerprint,
        expiresAt,
      },
    });
  }

  private async writeAudit(
    data: {
      adminUserId?: string;
      userAffectedId?: string;
      action: AuditAction;
      entityType: AuditEntityType;
      entityId?: string;
      severity?: AuditLogSeverity;
      details?: unknown;
      ipAddress?: string;
      userAgent?: string;
      correlationId?: string;
      metadata?: unknown;
    },
  ) {
    try {
      await this.prisma.adminAuditLog.create({
        data: {
          adminUserId: data.adminUserId,
          userAffectedId: data.userAffectedId,
          action: data.action,
          entityType: data.entityType,
          entityId: data.entityId,
          severity: data.severity ?? AuditLogSeverity.INFO,
          details: data.details as never,
          ipAddress: data.ipAddress,
          userAgent: data.userAgent,
          requestId: this.generateRequestId(),
          correlationId: data.correlationId,
          metadata: data.metadata as never,
        },
      });
    } catch {
      // audit best-effort
    }
  }

  async login(
    dto: AdminLoginDto,
    opts?: { ipAddress?: string; userAgent?: string },
  ): Promise<AdminSessionResponse & { twoFactorRequired: boolean; pendingToken?: string }> {
    const admin = await this.prisma.adminUser.findUnique({
      where: { email: dto.email },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        passwordHash: true,
        twoFactorType: true,
        twoFactorSecret: true,
        mustChangePassword: true,
        disabled: true,
        disabledReason: true,
      },
    });

    if (!admin) throw new UnauthorizedException('Credenciais inválidas');
    if (admin.disabled) {
      throw new ForbiddenException(
        admin.disabledReason ? `Conta desativada: ${admin.disabledReason}` : 'Conta desativada',
      );
    }

    const valid = await this.verifyHash(admin.passwordHash, dto.password);
    if (!valid) {
      await this.writeAudit({
        action: AuditAction.SIGNED_IN,
        entityType: AuditEntityType.ADMIN_USER,
        entityId: admin.id,
        severity: AuditLogSeverity.MEDIUM,
        details: { success: false, reason: 'PASSWORD_INVALID' },
        ipAddress: opts?.ipAddress,
        userAgent: opts?.userAgent,
      });
      throw new UnauthorizedException('Credenciais inválidas');
    }

    if (admin.twoFactorType !== 'NONE' && admin.twoFactorSecret) {
      if (!dto.twoFactorCode) {
        return {
          adminUserId: admin.id,
          name: admin.name,
          email: admin.email,
          role: admin.role as AdminRole,
          accessToken: '',
          expiresInSec: 0,
          twoFactorRequired: true,
        };
      }

      const totpValid = authenticator.verify({
        token: dto.twoFactorCode,
        secret: admin.twoFactorSecret,
      });
      if (!totpValid) {
        await this.writeAudit({
          adminUserId: admin.id,
          action: AuditAction.SIGNED_IN,
          entityType: AuditEntityType.ADMIN_USER,
          entityId: admin.id,
          severity: AuditLogSeverity.MEDIUM,
          details: { success: false, reason: '2FA_INVALID' },
          ipAddress: opts?.ipAddress,
          userAgent: opts?.userAgent,
        });
        throw new UnauthorizedException('Código 2FA inválido');
      }
    }

    const { tokens } = await this.createTokens(admin.id, admin.email, admin.role as AdminRole);
    await this.upsertSession(admin.id, tokens.refreshToken, opts);

    await this.prisma.adminUser.update({
      where: { id: admin.id },
      data: { lastLoginAt: new Date(), lastLoginIp: opts?.ipAddress },
    });

    await this.writeAudit({
      adminUserId: admin.id,
      action: AuditAction.SIGNED_IN,
      entityType: AuditEntityType.ADMIN_USER,
      entityId: admin.id,
      severity: AuditLogSeverity.INFO,
      details: { success: true },
      ipAddress: opts?.ipAddress,
      userAgent: opts?.userAgent,
    });

    return {
      adminUserId: admin.id,
      name: admin.name,
      email: admin.email,
      role: admin.role as AdminRole,
      mustChangePassword: admin.mustChangePassword,
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      expiresInSec: tokens.expiresInSec,
      twoFactorRequired: false,
    } as any;
  }

  async refresh(
    adminUserId: string,
    rawRefreshToken: string,
    opts?: { ipAddress?: string; userAgent?: string },
  ): Promise<{ accessToken: string; expiresInSec: number }> {
    const sessions = await this.prisma.adminSession.findMany({
      where: { adminUserId, revokedAt: null, expiresAt: { gt: new Date() } },
      orderBy: { createdAt: 'desc' },
    });

    let matched = false;
    let matchedSessionId: string | null = null;
    for (const s of sessions) {
      const ok = await this.verifyHash(s.tokenHash, rawRefreshToken);
      if (ok) {
        matched = true;
        matchedSessionId = s.id;
        break;
      }
    }
    if (!matched) throw new UnauthorizedException('Refresh token inválido');

    const admin = await this.prisma.adminUser.findUnique({
      where: { id: adminUserId, disabled: false, deletedAt: null },
      select: { id: true, email: true, role: true },
    });
    if (!admin) throw new UnauthorizedException('Admin não encontrado');

    if (matchedSessionId) {
      await this.prisma.adminSession.update({
        where: { id: matchedSessionId },
        data: { lastActivityAt: new Date() },
      });
    }

    const { tokens } = await this.createTokens(admin.id, admin.email, admin.role as AdminRole);
    return { accessToken: tokens.accessToken, expiresInSec: tokens.expiresInSec };
  }

  async logout(
    adminUserId: string,
    rawRefreshToken?: string,
    opts?: { ipAddress?: string; userAgent?: string },
  ): Promise<void> {
    if (rawRefreshToken) {
      const sessions = await this.prisma.adminSession.findMany({
        where: { adminUserId, revokedAt: null },
      });
      for (const s of sessions) {
        const ok = await this.verifyHash(s.tokenHash, rawRefreshToken);
        if (ok) {
          await this.prisma.adminSession.update({
            where: { id: s.id },
            data: { revokedAt: new Date(), revokedReason: 'LOGOUT' },
          });
          break;
        }
      }
    } else {
      await this.prisma.adminSession.updateMany({
        where: { adminUserId, revokedAt: null },
        data: { revokedAt: new Date(), revokedReason: 'LOGOUT_ALL' },
      });
    }

    await this.writeAudit({
      adminUserId,
      action: AuditAction.SIGNED_OUT,
      entityType: AuditEntityType.ADMIN_USER,
      entityId: adminUserId,
      severity: AuditLogSeverity.INFO,
      ipAddress: opts?.ipAddress,
      userAgent: opts?.userAgent,
    });
  }

  async me(adminUserId: string) {
    const admin = await this.prisma.adminUser.findUnique({
      where: { id: adminUserId, deletedAt: null },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        twoFactorType: true,
        mustChangePassword: true,
        lastLoginAt: true,
        lastLoginIp: true,
        disabled: true,
        createdAt: true,
      },
    });
    if (!admin) throw new NotFoundException('Admin não encontrado');
    return admin;
  }

  async twoFactorEnable(adminUserId: string): Promise<{
    secret: string;
    otpAuthUrl: string;
    qrDataUrl: string;
  }> {
    const admin = await this.prisma.adminUser.findUnique({
      where: { id: adminUserId },
      select: { id: true, email: true },
    });
    if (!admin) throw new NotFoundException('Admin não encontrado');

    const secret = authenticator.generateSecret();
    const otpAuthUrl = authenticator.keyuri(admin.email, 'BET62-ADMIN', secret);
    const qrDataUrl = await qrcode.toDataURL(otpAuthUrl);
    return { secret, otpAuthUrl, qrDataUrl };
  }

  async twoFactorVerify(
    adminUserId: string,
    code: string,
    pendingSecret: string,
  ): Promise<{ recoveryCodes: string[] }> {
    const valid = authenticator.verify({ token: code, secret: pendingSecret });
    if (!valid) throw new BadRequestException('Código 2FA inválido');

    const recoveryCodes = this.generateRecoveryCodes();
    const hashedCodes = await Promise.all(recoveryCodes.map((c) => this.hashValue(c)));

    await this.prisma.adminUser.update({
      where: { id: adminUserId },
      data: {
        twoFactorType: 'TOTP',
        twoFactorSecret: pendingSecret,
        twoFactorRecoveryCodes: hashedCodes,
      },
    });

    await this.writeAudit({
      adminUserId,
      action: AuditAction.UPDATED,
      entityType: AuditEntityType.ADMIN_USER,
      entityId: adminUserId,
      severity: AuditLogSeverity.MEDIUM,
      details: { twoFactorEnabled: true },
    });

    return { recoveryCodes };
  }

  async twoFactorDisable(adminUserId: string): Promise<void> {
    await this.prisma.adminUser.update({
      where: { id: adminUserId },
      data: {
        twoFactorType: 'NONE',
        twoFactorSecret: null,
        twoFactorRecoveryCodes: [],
      },
    });

    await this.writeAudit({
      adminUserId,
      action: AuditAction.UPDATED,
      entityType: AuditEntityType.ADMIN_USER,
      entityId: adminUserId,
      severity: AuditLogSeverity.MEDIUM,
      details: { twoFactorEnabled: false },
    });
  }
}
