import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import type { AdminRole } from '@bet62/shared';

@Injectable()
export class PermissionsService {
  constructor(private readonly prisma: PrismaService) {}

  async hasPermission(
    role: AdminRole | string,
    permissionKey: string,
    _scope?: string,
  ): Promise<boolean> {
    if (role === 'SUPER_ADMIN') return true;

    const perm = await this.prisma.rolePermission.findUnique({
      where: {
        role_permissionKey: {
          role: role as AdminRole,
          permissionKey,
        },
      },
    });

    if (!perm) {
      const prefixes = permissionKey.split('.');
      while (prefixes.length > 0) {
        prefixes.pop();
        const wildcard = prefixes.length ? `${prefixes.join('.')}.*` : '*';
        const wildcardPerm = await this.prisma.rolePermission.findUnique({
          where: {
            role_permissionKey: {
              role: role as AdminRole,
              permissionKey: wildcard,
            },
          },
        });
        if (wildcardPerm) return wildcardPerm.allowed;
      }
      return false;
    }

    return perm.allowed;
  }

  async getRolePermissions(role: AdminRole) {
    return this.prisma.rolePermission.findMany({
      where: { role },
    });
  }

  async setRolePermission(
    role: AdminRole,
    permissionKey: string,
    allowed: boolean,
    scope?: string,
    conditions?: unknown,
  ) {
    return this.prisma.rolePermission.upsert({
      where: {
        role_permissionKey: { role, permissionKey },
      },
      create: { role, permissionKey, allowed, scope, conditions: conditions as never },
      update: { allowed, scope, conditions: conditions as never },
    });
  }
}
