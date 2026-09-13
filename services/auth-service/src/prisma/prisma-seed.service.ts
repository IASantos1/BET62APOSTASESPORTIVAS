import { Injectable, Logger } from '@nestjs/common';
import * as argon2 from 'argon2';
import { PrismaService } from './prisma.service';

@Injectable()
export class PrismaSeedService {
  private readonly logger = new Logger(PrismaSeedService.name);

  constructor(private readonly prisma: PrismaService) {}

  async ensureDefaultAdmin(): Promise<void> {
    try {
      const email = process.env.ADMIN_DEFAULT_EMAIL;
      const password = process.env.ADMIN_DEFAULT_PASSWORD;
      const firstName = process.env.ADMIN_DEFAULT_FIRST_NAME;
      const lastName = process.env.ADMIN_DEFAULT_LAST_NAME;

      if (!email || !password) {
        this.logger.warn('⚠️  ADMIN_DEFAULT_EMAIL ou ADMIN_DEFAULT_PASSWORD não definidos — seed de admin pulado');
        return;
      }

      const prismaAny = this.prisma as any;

      let existingAdmin = null;

      if (prismaAny.admin) {
        existingAdmin = await prismaAny.admin.findUnique({ where: { email } });
      } else if (prismaAny.user) {
        existingAdmin = await prismaAny.user.findUnique({ where: { email } });
      } else if (prismaAny.authUser) {
        existingAdmin = await prismaAny.authUser.findUnique({ where: { email } });
      }

      if (existingAdmin) {
        this.logger.log(`ℹ️  Admin already exists: ${email}`);
        return;
      }

      const passwordHash = await argon2.hash(password);

      if (prismaAny.admin) {
        await prismaAny.admin.create({
          data: {
            email,
            passwordHash,
            firstName: firstName ?? 'Admin',
            lastName: lastName ?? 'Default',
            roles: ['SUPER_ADMIN'],
            mustChangePassword: true,
          },
        });
      } else if (prismaAny.user) {
        await prismaAny.user.create({
          data: {
            email,
            passwordHash,
            firstName: firstName ?? 'Admin',
            lastName: lastName ?? 'Default',
            roles: ['SUPER_ADMIN'],
            mustChangePassword: true,
          },
        });
      } else if (prismaAny.authUser) {
        await prismaAny.authUser.create({
          data: {
            email,
            passwordHash,
            roles: ['SUPER_ADMIN'],
          },
        });
      }

      this.logger.log(`✅ Admin seeded: ${email}`);
    } catch (error) {
      this.logger.error(`❌ Erro ao fazer seed de admin: ${(error as Error).message}`, (error as Error).stack);
    }
  }
}
