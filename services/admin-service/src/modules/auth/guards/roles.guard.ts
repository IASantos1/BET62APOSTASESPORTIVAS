import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import type { AdminRole } from '@bet62/shared';
import type { CurrentAdminPayload } from '../decorators/current-user.decorator';

@Injectable()
export class AdminRolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<AdminRole[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles || requiredRoles.length === 0) return true;

    const { user } = context.switchToHttp().getRequest() as {
      user?: CurrentAdminPayload;
    };
    if (!user) throw new ForbiddenException('Acesso negado');

    if (user.role === 'SUPER_ADMIN') return true;

    const hasRole = requiredRoles.some((r) => r === user.role);
    if (!hasRole) throw new ForbiddenException('Acesso negado: role insuficiente');
    return true;
  }
}
