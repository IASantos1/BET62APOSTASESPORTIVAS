import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export interface CurrentUserPayload {
  sub: string;
  userId: string;
  email?: string;
  walletId?: string;
  role?: string;
  roles?: string[];
  ip?: string;
}

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): CurrentUserPayload | undefined => {
    const request = ctx.switchToHttp().getRequest();
    if (!request?.user) return undefined;
    const user = request.user as Record<string, unknown>;
    return {
      sub: String(user.sub ?? user.userId ?? user.id ?? ''),
      userId: String(user.userId ?? user.sub ?? user.id ?? ''),
      email: user.email ? String(user.email) : undefined,
      walletId: user.walletId ? String(user.walletId) : undefined,
      role: user.role ? String(user.role) : undefined,
      roles: Array.isArray(user.roles) ? (user.roles as string[]) : undefined,
      ip: user.ip ? String(user.ip) : undefined,
    };
  },
);
