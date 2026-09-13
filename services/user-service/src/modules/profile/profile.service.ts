import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaService } from '../../prisma/prisma.service';
import type { CurrentUser } from '../auth-shared/jwt.strategy';
import {
  UpdateUserProfileDto,
  UpdateUserPreferencesDto,
  UpdateUserLimitsDto,
  BET62_EVENTS,
} from '@bet62/shared';

function mapLanguageCode(lang?: string): string | undefined {
  if (!lang) return undefined;
  if (lang === 'pt-PT') return 'pt_PT';
  if (lang === 'en-US') return 'en_US';
  if (lang === 'es-ES') return 'es_ES';
  return lang.replace('-', '_');
}

function mapOddsFormat(fmt?: string): string | undefined {
  if (!fmt) return undefined;
  return fmt;
}

@Injectable()
export class ProfileService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  async getProfile(user: CurrentUser) {
    const profile = await this.prisma.userProfile.findUnique({
      where: { userId: user.userId },
      include: { preferences: true, limits: true },
    });
    if (!profile) {
      throw new NotFoundException('Perfil de usuário não encontrado');
    }
    return profile;
  }

  async updateProfile(user: CurrentUser, dto: UpdateUserProfileDto) {
    const existing = await this.prisma.userProfile.findUnique({
      where: { userId: user.userId },
    });
    if (!existing) {
      throw new NotFoundException('Perfil de usuário não encontrado');
    }

    const updateData: Record<string, unknown> = {};
    if (dto.firstName !== undefined) updateData.firstName = dto.firstName;
    if (dto.lastName !== undefined) updateData.lastName = dto.lastName;
    if (dto.firstName !== undefined || dto.lastName !== undefined) {
      const firstName = dto.firstName ?? existing.firstName ?? '';
      const lastName = dto.lastName ?? existing.lastName ?? '';
      updateData.fullName = [firstName, lastName].filter(Boolean).join(' ').trim() || null;
    }
    if (dto.address !== undefined) updateData.address = dto.address;
    if (dto.city !== undefined) updateData.city = dto.city;
    if (dto.postalCode !== undefined) updateData.postalCode = dto.postalCode;
    if (dto.phoneNumber !== undefined) updateData.phoneNumber = dto.phoneNumber;
    if (dto.preferredLanguage !== undefined) {
      updateData.preferredLanguage = mapLanguageCode(dto.preferredLanguage);
    }
    if (dto.marketingOptIn !== undefined) updateData.marketingOptIn = dto.marketingOptIn;
    if (dto.smsOptIn !== undefined) updateData.smsOptIn = dto.smsOptIn;
    if (dto.pushOptIn !== undefined) updateData.pushOptIn = dto.pushOptIn;

    const updated = await this.prisma.userProfile.update({
      where: { userId: user.userId },
      data: updateData,
    });

    this.eventEmitter.emit(BET62_EVENTS.USER.PROFILE_UPDATED, {
      userId: user.userId,
      changes: Object.keys(updateData),
    });

    return updated;
  }

  async getPreferences(user: CurrentUser) {
    const prefs = await this.prisma.userPreferences.findUnique({
      where: { userId: user.userId },
    });
    if (!prefs) {
      throw new NotFoundException('Preferências de usuário não encontradas');
    }
    return prefs;
  }

  async updatePreferences(user: CurrentUser, dto: UpdateUserPreferencesDto) {
    const existing = await this.prisma.userPreferences.findUnique({
      where: { userId: user.userId },
    });
    if (!existing) {
      throw new NotFoundException('Preferências de usuário não encontradas');
    }

    const updateData: Record<string, unknown> = {};
    if (dto.oddsFormat !== undefined) updateData.oddsFormat = mapOddsFormat(dto.oddsFormat);
    if (dto.defaultStake !== undefined) updateData.defaultStake = dto.defaultStake;
    if (dto.betAcceptanceType !== undefined) updateData.betAcceptanceType = dto.betAcceptanceType;
    if (dto.showLiveScores !== undefined) updateData.showLiveScores = dto.showLiveScores;
    if (dto.autoCashoutEnabled !== undefined) updateData.autoCashoutEnabled = dto.autoCashoutEnabled;
    if (dto.autoCashoutThreshold !== undefined) updateData.autoCashoutThreshold = dto.autoCashoutThreshold;
    if (dto.realityCheckEnabled !== undefined) updateData.realityCheckEnabled = dto.realityCheckEnabled;
    if (dto.realityCheckIntervalMin !== undefined) updateData.realityCheckIntervalMin = dto.realityCheckIntervalMin;
    if (dto.quickBetEnabled !== undefined) updateData.quickBetEnabled = dto.quickBetEnabled;
    if (dto.soundEnabled !== undefined) updateData.soundEnabled = dto.soundEnabled;
    if (dto.favoriteSports !== undefined) updateData.favoriteSports = dto.favoriteSports;
    if (dto.favoriteLeagues !== undefined) updateData.favoriteLeagues = dto.favoriteLeagues;
    if (dto.favoriteTeams !== undefined) updateData.favoriteTeams = dto.favoriteTeams;

    if (Object.keys(updateData).length === 0) {
      return existing;
    }

    const updated = await this.prisma.userPreferences.update({
      where: { userId: user.userId },
      data: updateData,
    });

    this.eventEmitter.emit(BET62_EVENTS.USER.PREFERENCES_UPDATED, {
      userId: user.userId,
      changes: Object.keys(updateData),
    });

    return updated;
  }

  async getLimits(user: CurrentUser) {
    const limits = await this.prisma.userLimits.findUnique({
      where: { userId: user.userId },
    });
    if (!limits) {
      throw new NotFoundException('Limites de usuário não encontrados');
    }
    return limits;
  }

  async updateLimits(user: CurrentUser, dto: UpdateUserLimitsDto) {
    const existing = await this.prisma.userLimits.findUnique({
      where: { userId: user.userId },
    });
    if (!existing) {
      throw new NotFoundException('Limites de usuário não encontrados');
    }

    const updateData: Record<string, unknown> = {};

    if (dto.depositDailyLimit !== undefined) {
      if (existing.depositDailyLimit != null && dto.depositDailyLimit > existing.depositDailyLimit) {
        throw new BadRequestException('Não é possível aumentar o limite diário de depósito. Diminua ou aguarde o período.');
      }
      updateData.depositDailyLimit = dto.depositDailyLimit;
    }
    if (dto.depositWeeklyLimit !== undefined) {
      if (existing.depositWeeklyLimit != null && dto.depositWeeklyLimit > existing.depositWeeklyLimit) {
        throw new BadRequestException('Não é possível aumentar o limite semanal de depósito.');
      }
      updateData.depositWeeklyLimit = dto.depositWeeklyLimit;
    }
    if (dto.depositMonthlyLimit !== undefined) {
      if (existing.depositMonthlyLimit != null && dto.depositMonthlyLimit > existing.depositMonthlyLimit) {
        throw new BadRequestException('Não é possível aumentar o limite mensal de depósito.');
      }
      updateData.depositMonthlyLimit = dto.depositMonthlyLimit;
    }
    if (dto.lossDailyLimit !== undefined) updateData.lossDailyLimit = dto.lossDailyLimit;
    if (dto.lossWeeklyLimit !== undefined) updateData.lossWeeklyLimit = dto.lossWeeklyLimit;
    if (dto.lossMonthlyLimit !== undefined) updateData.lossMonthlyLimit = dto.lossMonthlyLimit;
    if (dto.sessionTimeLimitMin !== undefined) updateData.sessionTimeLimitMin = dto.sessionTimeLimitMin;

    if (Object.keys(updateData).length === 0) {
      return existing;
    }

    const updated = await this.prisma.userLimits.update({
      where: { userId: user.userId },
      data: updateData,
    });

    this.eventEmitter.emit(BET62_EVENTS.USER.LIMITS_CHANGED, {
      userId: user.userId,
      changes: Object.keys(updateData),
    });

    return updated;
  }
}
