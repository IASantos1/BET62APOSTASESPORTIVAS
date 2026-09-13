import { SetMetadata } from '@nestjs/common';

export const REQUIRED_PERMISSION_KEY = 'required_permission';

export interface PermissionRequirement {
  key: string;
  scope?: string;
}

export const RequirePermission = (key: string, scope?: string) =>
  SetMetadata(REQUIRED_PERMISSION_KEY, { key, scope } as PermissionRequirement);
