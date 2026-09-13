import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import type { CurrentUser as CurrentUserType } from './jwt.strategy';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): CurrentUserType => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as CurrentUserType;
  },
);

export namespace CurrentUser {}
