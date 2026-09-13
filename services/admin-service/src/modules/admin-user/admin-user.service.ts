import {
  Injectable,
  ConflictException,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import * as argon2 from 'argon2';
import {
  AdminRole,
  AuditAction,
  AuditEntityType,
  AuditLogSeverity,
} from '@bet62/shared';
import type { AdminCreateUserDto, AdminUserActionDto } from '@bet62/shared';

@Injectable()
export class AdminUserService {
  constructor(private readonly prisma: PrismaService) {}

  private generateRequestId(): string {
    return crypto.randomUUID();
  }

  private async audit(
    data: {
      adminUserId?: string;
      userAffectedId?: string;
      action: AuditAction;
      entityType: AuditEntityType;
      entityId?: string;
      severity?: AuditLogSeverity;
      details?: unknown;
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
          requestId: this.generateRequestId(),
        },
      });
    } catch {
      // best-effort
    }
  }

  private async hashPassword(raw: string): Promise<string> {
    return argon2.hash(raw);
  }

  async create(dto: AdminCreateUserDto, createdBy?: string) {
    const existing = await this.prisma.adminUser.findUnique({
      where: { email: dto.email },
    });
    if (existing) throw new ConflictException('E-mail já cadastrado');

    const passwordHash = await this.hashPassword(dto.password);
    const user = await this.prisma.adminUser.create({
      data: {
        email: dto.email,
        passwordHash,
        name: dto.name,
        role: dto.role,
        disabled: dto.disabled ?? false,
        createdBy,
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        disabled: true,
        mustChangePassword: true,
        twoFactorType: true,
        createdAt: true,
      },
    });

    await this.audit({
      adminUserId: createdBy,
      action: AuditAction.CREATED,
      entityType: AuditEntityType.ADMIN_USER,
      entityId: user.id,
      severity: AuditLogSeverity.MEDIUM,
      details: { email: user.email, role: user.role },
    });
    return user;
  }

  async list(query: {
    page?: number;
    limit?: number;
    role?: AdminRole;
    disabled?: boolean;
    search?: string;
  }) {
    const page = query.page ?? 1;
    const limit = Math.min(query.limit ?? 50, 200);
    const skip = (page - 1) * limit;
    const where: any = {
      deletedAt: null,
    };
    if (query.role !== undefined) where.role = query.role;
    if (query.disabled !== undefined) where.disabled = query.disabled;
    if (query.search) {
      where.OR = [
        { email: { contains: query.search, mode: 'insensitive' } },
        { name: { contains: query.search, mode: 'insensitive' } },
      ];
    }
    const [items, total] = await Promise.all([
      this.prisma.adminUser.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          disabled: true,
          disabledReason: true,
          twoFactorType: true,
          mustChangePassword: true,
          lastLoginAt: true,
          lastLoginIp: true,
          createdAt: true,
        },
      }),
      this.prisma.adminUser.count({ where } as any),
    ]);
    return { items, total, page, limit, pages: Math.ceil(total / limit) };
  }

  async get(id: string) {
    const user = await this.prisma.adminUser.findUnique({
      where: { id, deletedAt: null },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        disabled: true,
        disabledReason: true,
        disabledAt: true,
        disabledBy: true,
        twoFactorType: true,
        mustChangePassword: true,
        lastLoginAt: true,
        lastLoginIp: true,
        passwordChangedAt: true,
        createdBy: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (!user) throw new NotFoundException('Admin não encontrado');
    return user;
  }

  async updateRole(
    id: string,
    role: AdminRole,
    performedBy: string,
  ) {
    const existing = await this.prisma.adminUser.findUnique({ where: { id, deletedAt: null } });
    if (!existing) throw new NotFoundException('Admin não encontrado');
    const result = await this.prisma.adminUser.update({
      where: { id },
      data: { role },
      select: { id: true, email: true, name: true, role: true },
    });
    await this.audit({
      adminUserId: performedBy,
      action: AuditAction.UPDATED,
      entityType: AuditEntityType.ADMIN_USER,
      entityId: id,
      severity: AuditLogSeverity.HIGH,
      details: { previousRole: existing.role, newRole: role },
    });
    return result;
  }

  async disable(
    id: string,
    dto: AdminUserActionDto,
    performedBy: string,
  ) {
    const existing = await this.prisma.adminUser.findUnique({ where: { id, deletedAt: null } });
    if (!existing) throw new NotFoundException('Admin não encontrado');
    const result = await this.prisma.adminUser.update({
      where: { id },
      data: {
        disabled: true,
        disabledReason: dto.reason,
        disabledAt: new Date(),
        disabledBy: performedBy,
      },
      select: { id: true, disabled: true, disabledReason: true },
    });
    await this.audit({
      adminUserId: performedBy,
      action: AuditAction.SUSPENDED,
      entityType: AuditEntityType.ADMIN_USER,
      entityId: id,
      severity: AuditLogSeverity.HIGH,
      details: { reason: dto.reason },
    });
    return result;
  }

  async enable(id: string, performedBy: string) {
    const existing = await this.prisma.adminUser.findUnique({ where: { id, deletedAt: null } });
    if (!existing) throw new NotFoundException('Admin não encontrado');
    const result = await this.prisma.adminUser.update({
      where: { id },
      data: {
        disabled: false,
        disabledReason: null,
        disabledAt: null,
        disabledBy: null,
      },
      select: { id: true, disabled: true },
    });
    await this.audit({
      adminUserId: performedBy,
      action: AuditAction.UNBANNED,
      entityType: AuditEntityType.ADMIN_USER,
      entityId: id,
      severity: AuditLogSeverity.MEDIUM,
    });
    return result;
  }

  async resetPassword(
    id: string,
    newPassword: string,
    performedBy: string,
  ) {
    if (newPassword.length < 10) {
      throw new BadRequestException('Senha deve ter no mínimo 10 caracteres');
    }
    const existing = await this.prisma.adminUser.findUnique({ where: { id, deletedAt: null } });
    if (!existing) throw new NotFoundException('Admin não encontrado');
    const passwordHash = await this.hashPassword(newPassword);
    const result = await this.prisma.adminUser.update({
      where: { id },
      data: {
        passwordHash,
        mustChangePassword: true,
        passwordChangedAt: new Date(),
      },
      select: { id: true, mustChangePassword: true, passwordChangedAt: true },
    });
    await this.audit({
      adminUserId: performedBy,
      action: AuditAction.RESET,
      entityType: AuditEntityType.ADMIN_USER,
      entityId: id,
      severity: AuditLogSeverity.HIGH,
      details: { passwordReset: true },
    });
    return result;
  }

  async forceTwoFactor(id: string, performedBy: string) {
    const existing = await this.prisma.adminUser.findUnique({ where: { id, deletedAt: null } });
    if (!existing) throw new NotFoundException('Admin não encontrado');
    const result = await this.prisma.adminUser.update({
      where: { id },
      data: { mustChangePassword: true },
      select: { id: true },
    });
    await this.audit({
      adminUserId: performedBy,
      action: AuditAction.FORCE_PASSWORD,
      entityType: AuditEntityType.ADMIN_USER,
      entityId: id,
      severity: AuditLogSeverity.MEDIUM,
      details: { forcePasswordChange: true, note: 'force 2fa workflow' },
    });
    return result;
  }

  async delete(id: string, performedBy: string) {
    const existing = await this.prisma.adminUser.findUnique({ where: { id, deletedAt: null } });
    if (!existing) throw new NotFoundException('Admin não encontrado');
    await this.prisma.adminUser.update({
      where: { id },
      data: { deletedAt: new Date(), disabled: true },
    });
    await this.audit({
      adminUserId: performedBy,
      action: AuditAction.DELETED,
      entityType: AuditEntityType.ADMIN_USER,
      entityId: id,
      severity: AuditLogSeverity.CRITICAL,
    });
  }
}
