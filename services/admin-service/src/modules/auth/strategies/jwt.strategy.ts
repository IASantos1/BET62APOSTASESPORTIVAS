import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import type { AdminJwtAccessTokenPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class AdminJwtStrategy extends PassportStrategy(Strategy, 'admin-jwt') {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:
        configService.get<string>('ADMIN_JWT_SECRET') ||
        configService.get<string>('JWT_SECRET') ||
        'admin-change-me',
    });
  }

  async validate(payload: AdminJwtAccessTokenPayload) {
    if (!payload || !payload.sub || !payload.email || !payload.role) {
      throw new UnauthorizedException('Token inválido');
    }
    return {
      adminUserId: payload.sub,
      email: payload.email,
      role: payload.role,
      jti: payload.jti,
    };
  }
}
