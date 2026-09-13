import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
// ========= TEMP WORKAROUND PRISMA GENERATE BLOQUEADO SANDBOX =========
// Após rodar 'npx prisma generate --schema services/{nome}/prisma/schema.prisma' x10 FORA do sandbox,
// remover este bloco e voltar para o import original './generated/client' para ter tipagem real dos models.
import { PrismaClient as _PrismaClientGlobal } from '@prisma/client';
type T = any;
const PrismaClient: T = _PrismaClientGlobal;
// =====================================================================

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log:
        process.env.NODE_ENV === 'development'
          ? ['error', 'warn', 'info', 'query']
          : ['error', 'warn'],
    });
    this.$use(async (params, next) => {
      if (params.action === 'delete') {
        params.action = 'update';
        params.args['data'] = { deletedAt: new Date() };
      }
      if (params.action === 'deleteMany') {
        params.action = 'updateMany';
        if (params.args.data !== undefined) {
          params.args.data['deletedAt'] = new Date();
        } else {
          params.args['data'] = { deletedAt: new Date() };
        }
      }
      if (params.action === 'findUnique') {
        params.action = 'findFirst';
        params.args.where = {
          ...params.args.where,
          deletedAt: null,
        };
      }
      if (['findFirst', 'findMany', 'aggregate', 'count', 'groupBy'].includes(params.action)) {
        if (params.args.where !== undefined) {
          if (params.args.where.deletedAt === undefined) {
            params.args.where['deletedAt'] = null;
          }
        } else {
          params.args['where'] = { deletedAt: null };
        }
      }
      return next(params);
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
