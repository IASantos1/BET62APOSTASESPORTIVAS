import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { requireEnv } from '@bet62/shared';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: requireEnv(configService.get<string>('JWT_SECRET'), 'JWT_SECRET'),
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
