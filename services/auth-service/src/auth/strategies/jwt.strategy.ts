import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import type { JwtAccessTokenPayload } from '../interfaces/jwt-payload.interface';
import { JwtBlacklistService } from '../jwt-blacklist.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    configService: ConfigService,
    private readonly jwtBlacklistService: JwtBlacklistService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:
        configService.get<string>('JWT_ACCESS_SECRET') ||
        configService.get<string>('JWT_SECRET'),
    });
  }

  async validate(payload: JwtAccessTokenPayload) {
    if (!payload || !payload.sub || !payload.email || !payload.roles) {
      throw new UnauthorizedException('Token inválido');
    }

    if (payload.jti) {
      const revoked = await this.jwtBlacklistService.isRevoked(payload.jti);
      if (revoked) {
        throw new UnauthorizedException('Token revogado');
      }
    }

    const userId = payload.uid || payload.sub;
    if (userId) {
      const lastRevokeAll =
        await this.jwtBlacklistService.getUserLastRevokeAllTimestamp(userId);
      if (lastRevokeAll && payload.iat && payload.iat < lastRevokeAll) {
        throw new UnauthorizedException('Sessão terminada');
      }
    }

    return {
      userId: payload.sub,
      uid: userId,
      email: payload.email,
      roles: payload.roles,
      kycLevel: payload.kycLevel,
      jti: payload.jti,
    };
  }
}
