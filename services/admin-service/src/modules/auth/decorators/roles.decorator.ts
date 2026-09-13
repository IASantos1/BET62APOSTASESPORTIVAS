import { SetMetadata } from '@nestjs/common';
import { AdminRole } from '@bet62/shared';

export const ROLES_KEY = 'roles';
export const RequireRoles = (...roles: AdminRole[]) => SetMetadata(ROLES_KEY, roles);
