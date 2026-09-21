import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaService } from '../../prisma/prisma.service';
import { CasinoSessionStatus, CasinoGameCategory } from '@bet62/shared';
import { StartCasinoSessionDto } from '@bet62/shared';
import { BET62_EVENTS, createEnvelope } from '@bet62/shared';
import { BigBangService } from '../../providers/bigbang/bigbang.service';

@Injectable()
export class SessionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly eventEmitter: EventEmitter2,
    private readonly bigBangService: BigBangService,
  ) {}

  async start(userId: string, dto: StartCasinoSessionDto, clientMeta?: { ip?: string; ua?: string; device?: string; country?: string }) {
    const game = await this.prisma.casinoGame.findFirst({
      where: { id: dto.gameId, deletedAt: null },
    });
    if (!game) {
      throw new NotFoundException('Jogo não encontrado');
    }

    const playerToken =
      dto.playerToken ?? (this.bigBangService.isEnabled() ? userId : `ct-${userId.slice(0, 8)}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`);

    let launchUrl = `/api/casino/embed/${game.id}?token=${playerToken}`;
    let providerSessionReference = `prov-sess-${crypto.randomUUID()}`;
    if (this.bigBangService.isEnabled()) {
      const launch = await this.bigBangService.launchGame({
        userId,
        gameId: game.id,
        playerToken,
      });
      launchUrl = launch.gameUrl;
      providerSessionReference = launch.providerSessionReference ?? providerSessionReference;
    }

    const session = await this.prisma.casinoSession.create({
      data: {
        userId,
        gameId: game.id,
        playerToken,
        sessionStatus: CasinoSessionStatus.ACTIVE,
        providerSessionReference,
        currency: 'EUR',
        ipAddress: clientMeta?.ip,
        userAgent: clientMeta?.ua,
        device: clientMeta?.device,
        geoCountry: clientMeta?.country,
      },
    });

    this.eventEmitter.emit(
      BET62_EVENTS.CASINO.SESSION_STARTED,
      createEnvelope({
        event: BET62_EVENTS.CASINO.SESSION_STARTED,
        aggregateType: 'CasinoSession',
        aggregateId: session.id,
        producer: 'casino-service',
        payload: {
          sessionId: session.id,
          userId,
          gameId: game.id,
          gameName: game.name,
          startedAt: session.startedAt.toISOString(),
        },
      }),
    );

    return {
      sessionId: session.id,
      playerToken,
      launchUrl,
      iframeUrl: launchUrl,
      game: { id: game.id, name: game.name, category: game.category },
    };
  }

  async end(userId: string, sessionId: string, reason?: string) {
    const session = await this.prisma.casinoSession.findUnique({ where: { id: sessionId } });
    if (!session || session.userId !== userId) {
      throw new NotFoundException('Sessão não encontrada');
    }
    if (session.sessionStatus === CasinoSessionStatus.CLOSED) {
      return session;
    }
    const updated = await this.prisma.casinoSession.update({
      where: { id: sessionId },
      data: {
        sessionStatus: CasinoSessionStatus.CLOSED,
        endedAt: new Date(),
        closedReason: reason ?? 'USER_REQUEST',
        closedBy: 'USER',
      },
    });
    this.eventEmitter.emit(
      BET62_EVENTS.CASINO.SESSION_ENDED,
      createEnvelope({
        event: BET62_EVENTS.CASINO.SESSION_ENDED,
        aggregateType: 'CasinoSession',
        aggregateId: sessionId,
        producer: 'casino-service',
        payload: { sessionId, userId, reason: reason ?? 'USER_REQUEST' },
      }),
    );
    return updated;
  }
}
