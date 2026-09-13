import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export interface CurrentAdminPayload {
  adminUserId: string;
  email: string;
  role: string;
  jti?: string;
}

export const CurrentAdmin = createParamDecorator(
  (data: keyof CurrentAdminPayload | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user as CurrentAdminPayload;
    if (!user) return null;
    return data ? user[data] : user;
  },
);
