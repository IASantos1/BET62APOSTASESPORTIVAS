import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import type { JwtRefreshTokenPayload } from '../interfaces/jwt-payload.interface';
import { JwtBlacklistService } from '../jwt-blacklist.service';

@Injectable()
export class RefreshJwtStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(
    configService: ConfigService,
    private readonly jwtBlacklistService: JwtBlacklistService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request) => {
          let token: string | undefined;
          if (
            request &&
            request.cookies &&
            request.cookies['refresh_token']
          ) {
            token = request.cookies['refresh_token'];
          }
          if (!token && request && request.body && request.body.refreshToken) {
            token = request.body.refreshToken;
          }
          return token || null;
        },
      ]),
      ignoreExpiration: false,
      secretOrKey:
        configService.get<string>('JWT_REFRESH_SECRET') ||
        configService.get<string>('JWT_SECRET'),
    });
  }

  async validate(payload: JwtRefreshTokenPayload) {
    if (!payload || !payload.sub) {
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
      jti: payload.jti,
    };
  }
}
