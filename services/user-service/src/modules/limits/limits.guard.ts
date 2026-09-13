import { Injectable, CanActivate, ExecutionContext, BadRequestException, SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { LimitsService, type LimitCheckType } from './limits.service';

export const LIMIT_CHECK_KEY = 'limitCheck';

export interface LimitCheckOptions {
  type: LimitCheckType;
  amountFrom?: 'body' | 'query' | 'params';
  amountPath?: string;
}

export const CheckLimit = (options: any) => SetMetadata('limitCheck', options);

function getByPath(obj: unknown, path: string): unknown {
  return path.split('.').reduce((acc, part) => (acc as Record<string, unknown>)?.[part], obj);
}

@Injectable()
export class LimitsGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly limitsService: LimitsService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const options = this.reflector.getAllAndOverride<LimitCheckOptions | undefined>(LIMIT_CHECK_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!options) return true;

    const req = context.switchToHttp().getRequest();
    const userId = req.user?.userId;
    if (!userId) {
      return false;
    }

    let amount: number | undefined;
    if (options.amountFrom && options.amountPath) {
      const source =
        options.amountFrom === 'body' ? req.body :
        options.amountFrom === 'query' ? req.query :
        req.params;
      const raw = getByPath(source, options.amountPath);
      if (raw !== undefined && raw !== null) {
        const parsed = Number(raw);
        if (!Number.isFinite(parsed)) {
          throw new BadRequestException('Valor para validação de limite inválido');
        }
        amount = parsed;
      }
    }

    await this.limitsService.checkLimit({
      userId,
      type: options.type,
      amount,
    });

    return true;
  }
}
