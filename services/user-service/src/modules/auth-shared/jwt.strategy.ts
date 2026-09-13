import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { requireEnv } from '@bet62/shared';

export interface JwtPayload {
  sub: string;
  email?: string;
  roles?: string[];
  kycLevel?: number;
  status?: string;
  iat?: number;
  exp?: number;
}

export interface CurrentUser {
  userId: string;
  email?: string;
  roles: string[];
  kycLevel: number;
  status?: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: requireEnv(configService.get<string>('JWT_ACCESS_SECRET'), 'JWT_ACCESS_SECRET'),
    });
  }

  validate(payload: JwtPayload): CurrentUser {
    return {
      userId: payload.sub,
      email: payload.email,
      roles: payload.roles || [],
      kycLevel: payload.kycLevel || 0,
      status: payload.status,
    };
  }
}
