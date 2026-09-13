import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AdminAuthController } from './admin-auth.controller';
import { AdminAuthService } from './admin-auth.service';
import { AdminJwtStrategy } from './strategies/jwt.strategy';
import { AdminJwtAuthGuard } from './guards/jwt-auth.guard';
import { AdminRolesGuard } from './guards/roles.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'admin-jwt', session: true }),
    JwtModule.register({}),
  ],
  controllers: [AdminAuthController],
  providers: [
    AdminAuthService,
    AdminJwtStrategy,
    AdminJwtAuthGuard,
    AdminRolesGuard,
    {
      provide: APP_GUARD,
      useExisting: AdminJwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useExisting: AdminRolesGuard,
    },
  ],
  exports: [
    AdminAuthService,
    AdminJwtAuthGuard,
    AdminRolesGuard,
    JwtModule,
    PassportModule,
  ],
})
export class AdminAuthModule {}
