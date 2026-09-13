import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET', 'bet62-dev-secret-change-me'),
    });
  }

  async validate(payload: Record<string, unknown>) {
    return {
      sub: payload.sub,
      userId: payload.userId ?? payload.sub,
      email: payload.email,
      walletId: payload.walletId,
      role: payload.role,
      roles: Array.isArray(payload.roles) ? payload.roles : undefined,
    };
  }
}
