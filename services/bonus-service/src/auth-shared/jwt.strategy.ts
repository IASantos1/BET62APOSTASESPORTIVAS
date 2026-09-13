import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import type { JwtAccessTokenPayload } from './jwt-payload.interface';
import { requireEnv } from '@bet62/shared';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: requireEnv(
        configService.get<string>('JWT_ACCESS_SECRET') || configService.get<string>('JWT_SECRET'),
        'JWT_ACCESS_SECRET',
      ),
    });
  }

  async validate(payload: JwtAccessTokenPayload) {
    if (!payload || !payload.sub || !payload.email || !payload.roles) {
      throw new UnauthorizedException('Token inválido');
    }
    return {
      userId: payload.sub,
      email: payload.email,
      roles: payload.roles,
      kycLevel: payload.kycLevel,
      jti: payload.jti,
    };
  }
}
