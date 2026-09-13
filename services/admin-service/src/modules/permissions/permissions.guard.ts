import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PermissionsService } from './permissions.service';
import { REQUIRED_PERMISSION_KEY, type PermissionRequirement } from './decorators/require-permission.decorator';
import type { CurrentAdminPayload } from '../auth/decorators/current-user.decorator';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly permissionsService: PermissionsService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<{ user?: CurrentAdminPayload }>();
    const required = this.reflector.getAllAndOverride<PermissionRequirement | undefined>(
      REQUIRED_PERMISSION_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!required) return true;
    if (!req.user) throw new ForbiddenException('Acesso negado');
    if (req.user.role === 'SUPER_ADMIN') return true;

    const allowed = await this.permissionsService.hasPermission(
      req.user.role,
      required.key,
      required.scope,
    );
    if (!allowed) {
      throw new ForbiddenException(
        `Permissão insuficiente: ${required.key}`,
      );
    }
    return true;
  }
}
