import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import type { JwtAccessTokenPayload } from './jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:
        configService.get<string>('JWT_ACCESS_SECRET') ||
        configService.get<string>('JWT_SECRET') ||
        'bet62-dev-secret-change-me',
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
