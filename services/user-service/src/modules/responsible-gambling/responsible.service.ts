import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaService } from '../../prisma/prisma.service';
import type { CurrentUser } from '../auth-shared/jwt.strategy';
import {
  RequestSelfExclusionDto,
  BET62_EVENTS,
  SelfExcludeDuration,
  UserStatus,
  createEnvelope,
} from '@bet62/shared';

function durationToDays(d: SelfExcludeDuration): number | null {
  switch (d) {
    case 'DAYS_7': return 7;
    case 'DAYS_30': return 30;
    case 'DAYS_90': return 90;
    case 'DAYS_180': return 180;
    case 'DAYS_365': return 365;
    case 'PERMANENT': return null;
  }
}

@Injectable()
export class ResponsibleGamblingService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  async requestSelfExclusion(user: CurrentUser, dto: RequestSelfExclusionDto) {
    const profile = await this.prisma.userProfile.findUnique({
      where: { userId: user.userId },
    });
    if (!profile) {
      throw new NotFoundException('Perfil não encontrado');
    }

    const active = await this.prisma.selfExclusionRecord.findFirst({
      where: { userId: user.userId, isActive: true },
    });
    if (active) {
      throw new BadRequestException('Já existe uma autoexclusão ativa para este usuário');
    }

    const startedAt = new Date();
    const days = durationToDays(dto.duration);
    const endsAt = days ? new Date(startedAt.getTime() + days * 24 * 60 * 60 * 1000) : null;

    const record = await this.prisma.$transaction(async (tx) => {
      const rec = await tx.selfExclusionRecord.create({
        data: {
          userId: user.userId,
          duration: dto.duration,
          startedAt,
          endsAt,
          reason: dto.reason ?? null,
          isActive: true,
        },
      });
      await tx.userProfile.update({
        where: { userId: user.userId },
        data: { status: UserStatus.SELF_EXCLUDED },
      });
      return rec;
    });

    const envelope = createEnvelope({
      event: BET62_EVENTS.USER.SELF_EXCLUDED,
      aggregateType: 'user',
      aggregateId: user.userId,
      producer: 'user-service',
      payload: {
        userId: user.userId,
        recordId: record.id,
        duration: dto.duration,
        startedAt: startedAt.toISOString(),
        endsAt: endsAt?.toISOString(),
        reason: dto.reason,
      },
    });

    this.eventEmitter.emit(BET62_EVENTS.USER.SELF_EXCLUDED, envelope);

    return record;
  }

  async acknowledgeRealityCheck(
    user: CurrentUser,
    data: {
      sessionId: string;
      sessionStartAt: string;
      continuePlay?: boolean;
      wageredDuringSession?: number;
      won?: number;
      lost?: number;
      net?: number;
    },
  ) {
    const profile = await this.prisma.userProfile.findUnique({
      where: { userId: user.userId },
    });
    if (!profile) {
      throw new NotFoundException('Perfil não encontrado');
    }

    const log = await this.prisma.realityCheckLog.create({
      data: {
        userId: user.userId,
        sessionId: data.sessionId,
        sessionStartAt: new Date(data.sessionStartAt),
        acknowledgedAt: new Date(),
        continuePlay: data.continuePlay ?? null,
        wageredDuringSession: data.wageredDuringSession ?? 0,
        won: data.won ?? 0,
        lost: data.lost ?? 0,
        net: data.net ?? (data.won ?? 0) - (data.lost ?? 0),
      },
    });

    this.eventEmitter.emit(BET62_EVENTS.USER.REALITY_CHECK_ACK, {
      userId: user.userId,
      logId: log.id,
      sessionId: data.sessionId,
      continuePlay: data.continuePlay,
    });

    return log;
  }
}
