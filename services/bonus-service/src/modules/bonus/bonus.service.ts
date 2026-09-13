import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaService } from '../../prisma/prisma.service';
import {
  BonusStatus,
  BonusType,
  BonusTrigger,
  CampaignStatus,
  RolloverStatus,
  CasinoContributionCategory,
} from '@bet62/shared';
import {
  CreateCampaignDto,
  GrantBonusDto,
  RedeemBonusCodeDto,
  BonusQueryDto,
  RolloverProgressResponse,
} from '@bet62/shared';
import { BET62_EVENTS, createEnvelope } from '@bet62/shared';

type SourceTypeBet = 'SPORTS_BET' | 'CASINO_BET' | 'LIVE_BET';

@Injectable()
export class BonusService {
  private readonly logger = new Logger(BonusService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  async listAvailable(query: BonusQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 50;
    const skip = (page - 1) * limit;

    const whereClause = {
      status: CampaignStatus.ACTIVE,
      deletedAt: null,
      AND: [
        { OR: [{ startsAt: null }, { startsAt: { lte: new Date() } }] },
        { OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }] },
      ],
    };

    const [items, total] = await Promise.all([
      this.prisma.bonusCampaign.findMany({
        where: whereClause,
        orderBy: [{ isPromo: 'desc' }, { createdAt: 'desc' }],
        skip,
        take: limit,
      }),
      this.prisma.bonusCampaign.count({
        where: whereClause,
      }),
    ]);

    return { items, total, page, limit };
  }

  async listUserBonuses(userId: string, query: BonusQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 50;
    const skip = (page - 1) * limit;

    const whereClause: Record<string, unknown> = { userId, deletedAt: undefined } as never;
    if (query.statuses && query.statuses.length > 0) {
      (whereClause as Record<string, unknown>).status = { in: query.statuses };
    }
    if (query.rolloverStatuses && query.rolloverStatuses.length > 0) {
      (whereClause as Record<string, unknown>).rolloverStatus = { in: query.rolloverStatuses };
    }

    const [items, total] = await Promise.all([
      this.prisma.userBonus.findMany({
        where: whereClause,
        include: { campaign: true },
        orderBy: [{ grantedAt: 'desc' }],
        skip,
        take: limit,
      }),
      this.prisma.userBonus.count({ where: whereClause }),
    ]);

    return { items, total, page, limit };
  }

  async getRolloverProgress(userId: string, userBonusId: string): Promise<RolloverProgressResponse> {
    const userBonus = await this.prisma.userBonus.findFirst({
      where: { id: userBonusId, userId },
      include: { campaign: true },
    });

    if (!userBonus) {
      throw new NotFoundException('Bônus não encontrado');
    }

    const required = Number(userBonus.rolloverRequiredTotal);
    const weighted = Number(userBonus.rolloverCompletedWeighted);
    const percent = required > 0 ? Math.min(100, (weighted / required) * 100) : 0;

    return {
      bonusId: userBonus.id,
      status: userBonus.status as BonusStatus,
      grantedAmount: Number(userBonus.grantedAmount),
      maxAmount: userBonus.maxAmount ? Number(userBonus.maxAmount) : undefined,
      rolloverRequiredTotal: required,
      rolloverCompletedReal: Number(userBonus.rolloverCompletedReal),
      rolloverCompletedWeighted: weighted,
      rolloverPercent: percent,
      rolloverStatus: userBonus.rolloverStatus as RolloverStatus,
      expiresAt: userBonus.expiresAt ?? undefined,
      minOddsRequirement: userBonus.minOddsRequirement
        ? Number(userBonus.minOddsRequirement)
        : undefined,
    };
  }

  async redeemCode(userId: string, dto: RedeemBonusCodeDto) {
    const campaign = await this.prisma.bonusCampaign.findFirst({
      where: {
        code: { equals: dto.code, mode: 'insensitive' } as never,
        status: CampaignStatus.ACTIVE,
        deletedAt: null,
        trigger: BonusTrigger.CAMPAIGN_CODE,
      },
    });

    if (!campaign) {
      throw new NotFoundException('Código promocional inválido ou expirado');
    }

    const alreadyUsed = await this.prisma.userBonus.count({
      where: { userId, campaignId: campaign.id, promocodeUsed: dto.code },
    });

    if (alreadyUsed > 0 && campaign.maxBonusPerUser) {
      throw new BadRequestException('Código já utilizado');
    }

    const grantedAmount = Number(campaign.maxAmount ?? 0);
    const multiplier = Number(campaign.rolloverMultiplier ?? 1);

    const userBonus = await this.prisma.userBonus.create({
      data: {
        userId,
        campaignId: campaign.id,
        bonusType: campaign.bonusType as BonusType,
        status: BonusStatus.ACTIVE,
        grantedAmount,
        maxAmount: campaign.maxAmount,
        minOddsRequirement: campaign.minOddsRequirement,
        rolloverMultiplier: campaign.rolloverMultiplier,
        rolloverContributionCategory: campaign.rolloverContributionCategory,
        rolloverRequiredTotal: grantedAmount * multiplier,
        rolloverStatus: RolloverStatus.NOT_STARTED,
        promocodeUsed: dto.code,
        expiresAt: campaign.validityDays
          ? new Date(Date.now() + campaign.validityDays * 86400000)
          : campaign.expiresAt ?? undefined,
        description: `Promoção: ${campaign.name}`,
      },
    });

    this.emitBonusGranted(userBonus, campaign.id);
    return userBonus;
  }

  async cancelUserBonus(userId: string, userBonusId: string, reason?: string) {
    const userBonus = await this.prisma.userBonus.findFirst({
      where: { id: userBonusId, userId },
    });
    if (!userBonus) {
      throw new NotFoundException('Bônus não encontrado');
    }
    if (
      userBonus.status === BonusStatus.RELEASED ||
      userBonus.status === BonusStatus.CANCELLED ||
      userBonus.status === BonusStatus.EXPIRED
    ) {
      throw new BadRequestException('Não é possível cancelar este bônus');
    }

    const updated = await this.prisma.userBonus.update({
      where: { id: userBonus.id },
      data: {
        status: BonusStatus.CANCELLED,
        cancelledAt: new Date(),
        cancelledReason: reason,
      },
    });

    this.eventEmitter.emit(
      BET62_EVENTS.BONUS.CANCELLED,
      createEnvelope({
        event: BET62_EVENTS.BONUS.CANCELLED,
        aggregateType: 'UserBonus',
        aggregateId: userBonus.id,
        producer: 'bonus-service',
        payload: { userBonusId: userBonus.id, userId, reason },
      }),
    );

    return updated;
  }

  async createCampaign(dto: CreateCampaignDto, createdBy?: string) {
    return this.prisma.bonusCampaign.create({
      data: {
        name: dto.name,
        code: dto.code,
        bonusType: dto.bonusType,
        trigger: dto.trigger,
        status: dto.status ?? CampaignStatus.DRAFT,
        matchPercent: dto.matchPercent,
        maxAmount: dto.maxAmount,
        minDepositAmount: dto.minDepositAmount,
        minOddsRequirement: dto.minOddsRequirement,
        rolloverMultiplier: dto.rolloverMultiplier,
        rolloverContributionCategory: dto.rolloverContributionCategory,
        startsAt: dto.startsAt,
        expiresAt: dto.expiresAt,
        validityDays: dto.validityDays,
        freeSpinsCount: dto.freeSpinsCount,
        freeSpinsGameId: dto.freeSpinsGameId,
        eligibleCountries: dto.eligibleCountries ?? [],
        eligibleSports: dto.eligibleSports ?? [],
        createdBy,
      },
    });
  }

  async listCampaigns(query?: BonusQueryDto) {
    const page = query?.page ?? 1;
    const limit = query?.limit ?? 50;
    const skip = (page - 1) * limit;
    const [items, total] = await Promise.all([
      this.prisma.bonusCampaign.findMany({
        where: { deletedAt: null },
        orderBy: [{ createdAt: 'desc' }],
        skip,
        take: limit,
      }),
      this.prisma.bonusCampaign.count({ where: { deletedAt: null } }),
    ]);
    return { items, total, page, limit };
  }

  async grantBonus(dto: GrantBonusDto, grantedByAdminId?: string) {
    if (!dto.userId) {
      throw new BadRequestException('userId é obrigatório');
    }
    const grantedAmount = dto.amount;
    const multiplier = dto.rolloverMultiplier ?? 1;
    const userBonus = await this.prisma.userBonus.create({
      data: {
        userId: dto.userId,
        campaignId: dto.campaignId,
        bonusType: dto.bonusType,
        status: BonusStatus.ACTIVE,
        grantedAmount,
        maxAmount: dto.amount,
        minOddsRequirement: dto.minOddsRequirement,
        rolloverMultiplier: multiplier,
        rolloverRequiredTotal: grantedAmount * multiplier,
        rolloverStatus: RolloverStatus.NOT_STARTED,
        expiresAt: dto.expiresAt,
        referenceDepositId: dto.referenceDepositId,
        description: dto.description,
        createdByAdminId: grantedByAdminId,
      },
    });
    this.emitBonusGranted(userBonus, dto.campaignId);
    return userBonus;
  }

  async voidGrant(userBonusId: string) {
    const ub = await this.prisma.userBonus.findUnique({ where: { id: userBonusId } });
    if (!ub) throw new NotFoundException('Grant não encontrado');
    return this.prisma.userBonus.update({
      where: { id: userBonusId },
      data: { status: BonusStatus.VOID, cancelledAt: new Date(), cancelledReason: 'ADMIN_VOID' },
    });
  }

  getContributionPercent(
    sourceType: SourceTypeBet,
    casinoCategory?: string,
    contributionCategoryFromBonus?: CasinoContributionCategory,
  ): number {
    if (sourceType === 'SPORTS_BET' || sourceType === 'LIVE_BET') {
      return 100;
    }
    const cat = (casinoCategory ?? '').toUpperCase();
    const preset = contributionCategoryFromBonus;
    if (preset === CasinoContributionCategory.SPORTS_ONLY) return 0;
    if (preset === CasinoContributionCategory.SLOTS_ONLY) {
      return cat.includes('SLOT') || cat.includes('JACKPOT') || cat.includes('MEGA') ? 100 : 0;
    }
    if (preset === CasinoContributionCategory.TABLES_ONLY) {
      return cat.includes('BLACKJACK') || cat.includes('ROULETTE') || cat.includes('BACCARAT') || cat.includes('POKER') || cat.includes('CRAPS')
        ? 10
        : 0;
    }
    if (preset === CasinoContributionCategory.LIVE_DEALER_EXCLUDED) {
      if (cat.includes('LIVE')) return 0;
    }
    if (cat.includes('SLOT') || cat.includes('JACKPOT') || cat.includes('MEGA') || cat.includes('SCRATCH') || cat.includes('KENO') || cat.includes('BINGO')) {
      return 100;
    }
    if (cat.includes('LIVE')) {
      return 5;
    }
    return 10;
  }

  async rolloverAddContribution(params: {
    userBonusId: string;
    wagered: number;
    sourceType: SourceTypeBet;
    casinoCategory?: string;
    sportType?: string;
    oddsAtBet?: number;
    betId?: string;
    casinoRoundId?: string;
    winningAmount?: number;
    selectionCount?: number;
    correlationId?: string;
  }) {
    const userBonus = await this.prisma.userBonus.findUnique({
      where: { id: params.userBonusId },
    });
    if (!userBonus) return;
    if (
      userBonus.status !== BonusStatus.ACTIVE &&
      userBonus.status !== BonusStatus.LOCKED
    ) {
      return;
    }
    if (userBonus.rolloverStatus === RolloverStatus.COMPLETE) return;

    let oddsCheckPassed = true;
    if (params.sourceType !== 'CASINO_BET' && userBonus.minOddsRequirement && params.oddsAtBet) {
      oddsCheckPassed = params.oddsAtBet >= Number(userBonus.minOddsRequirement);
    }

    const rawPercent = this.getContributionPercent(
      params.sourceType,
      params.casinoCategory,
      userBonus.rolloverContributionCategory ?? CasinoContributionCategory.STANDARD_MIX,
    );
    const contributionPercent = oddsCheckPassed ? rawPercent : 0;
    const weighted = (params.wagered * contributionPercent) / 100;

    const required = Number(userBonus.rolloverRequiredTotal);
    const newCompletedReal = Number(userBonus.rolloverCompletedReal) + params.wagered;
    const newCompletedWeighted = Number(userBonus.rolloverCompletedWeighted) + weighted;
    const newPercent = required > 0 ? Math.min(100, (newCompletedWeighted / required) * 100) : 0;
    const isComplete = newCompletedWeighted >= required;

    const rolloverStatus = isComplete
      ? RolloverStatus.COMPLETE
      : newCompletedWeighted > 0
      ? RolloverStatus.IN_PROGRESS
      : RolloverStatus.NOT_STARTED;

    const status = isComplete ? BonusStatus.ROLLOVER_COMPLETE : userBonus.status;

    await this.prisma.$transaction([
      this.prisma.rolloverLedgerEntry.create({
        data: {
          userBonusId: userBonus.id,
          wageredAmount: params.wagered,
          sourceType: params.sourceType,
          sportType: params.sportType,
          casinoCategory: params.casinoCategory,
          contributionPercent,
          weightedContributionAmount: weighted,
          oddsAtBet: params.oddsAtBet,
          winningAmount: params.winningAmount,
          selectionCount: params.selectionCount,
          betId: params.betId,
          casinoRoundId: params.casinoRoundId,
          referenceCorrelationId: params.correlationId,
        },
      }),
      this.prisma.userBonus.update({
        where: { id: userBonus.id },
        data: {
          rolloverCompletedReal: newCompletedReal,
          rolloverCompletedWeighted: newCompletedWeighted,
          rolloverPercent: newPercent,
          rolloverStatus,
          lastContributionAt: new Date(),
          status,
          releasedAt: isComplete ? new Date() : undefined,
        },
      }),
    ]);

    if (isComplete) {
      this.eventEmitter.emit(
        BET62_EVENTS.BONUS.ROLLOVER_COMPLETE,
        createEnvelope({
          event: BET62_EVENTS.BONUS.ROLLOVER_COMPLETE,
          aggregateType: 'UserBonus',
          aggregateId: userBonus.id,
          producer: 'bonus-service',
          payload: {
            userBonusId: userBonus.id,
            userId: userBonus.userId,
            grantedAmount: Number(userBonus.grantedAmount),
            rolloverCompleted: newCompletedWeighted,
            rolloverRequired: required,
          },
        }),
      );
    }
  }

  private emitBonusGranted(userBonus: { id: string; userId: string; campaignId?: string | null; bonusType: BonusType; grantedAmount: number | unknown; rolloverRequiredTotal: number | unknown; expiresAt?: Date | null; grantedCurrency: string; grantedAt: Date; referenceDepositId?: string | null }, campaignId?: string | null) {
    this.eventEmitter.emit(
      BET62_EVENTS.BONUS.GRANTED,
      createEnvelope({
        event: BET62_EVENTS.BONUS.GRANTED,
        aggregateType: 'UserBonus',
        aggregateId: userBonus.id,
        producer: 'bonus-service',
        payload: {
          userBonusId: userBonus.id,
          userId: userBonus.userId,
          campaignId: campaignId ?? userBonus.campaignId ?? undefined,
          bonusType: userBonus.bonusType,
          sourceTrigger: 'MANUAL',
          originalAmount: Number(userBonus.grantedAmount),
          remainingBalance: Number(userBonus.grantedAmount),
          rolloverRequirement: Number(userBonus.rolloverRequiredTotal),
          rolloverProgress: 0,
          expiresAt: userBonus.expiresAt?.toISOString(),
          currency: userBonus.grantedCurrency,
          grantedAt: userBonus.grantedAt.toISOString(),
          relatedDepositId: userBonus.referenceDepositId ?? undefined,
        } as never,
      }),
    );
  }

  async processSignupWelcome(userId: string, country?: string) {
    const campaigns = await this.prisma.bonusCampaign.findMany({
      where: {
        status: CampaignStatus.ACTIVE,
        trigger: BonusTrigger.SIGNUP,
        deletedAt: null,
        OR: [{ startsAt: null }, { startsAt: { lte: new Date() } }],
      },
    });

    for (const camp of campaigns) {
      if (
        camp.eligibleCountries &&
        camp.eligibleCountries.length > 0 &&
        country &&
        !camp.eligibleCountries.map((c) => c.toUpperCase()).includes(country.toUpperCase())
      ) {
        continue;
      }
      const hasBonus = await this.prisma.userBonus.count({
        where: { userId, campaignId: camp.id },
      });
      if (hasBonus > 0) continue;

      const granted = Number(camp.maxAmount ?? camp.matchPercent ?? 0);
      if (granted <= 0) continue;

      const multiplier = Number(camp.rolloverMultiplier ?? 1);
      const ub = await this.prisma.userBonus.create({
        data: {
          userId,
          campaignId: camp.id,
          bonusType: camp.bonusType as BonusType,
          status: BonusStatus.ACTIVE,
          grantedAmount: granted,
          maxAmount: camp.maxAmount,
          minOddsRequirement: camp.minOddsRequirement,
          rolloverMultiplier: camp.rolloverMultiplier,
          rolloverRequiredTotal: granted * multiplier,
          rolloverStatus: RolloverStatus.NOT_STARTED,
          description: camp.name,
          expiresAt: camp.validityDays
            ? new Date(Date.now() + camp.validityDays * 86400000)
            : camp.expiresAt ?? undefined,
        },
      });
      this.emitBonusGranted(ub, camp.id);
    }
  }

  async processFirstDepositMatch(userId: string, depositId: string, depositAmount: number, country?: string) {
    const existingDepositBonus = await this.prisma.userBonus.findFirst({
      where: { userId, referenceDepositId: depositId },
    });
    if (existingDepositBonus) return;

    const isFirst =
      (await this.prisma.userBonus.count({
        where: { userId, referenceDepositId: { not: null } },
      })) === 0;

    const trigger = isFirst ? BonusTrigger.FIRST_DEPOSIT : BonusTrigger.DEPOSIT;
    const campaigns = await this.prisma.bonusCampaign.findMany({
      where: {
        status: CampaignStatus.ACTIVE,
        trigger,
        deletedAt: null,
      },
    });

    for (const camp of campaigns) {
      if (
        camp.eligibleCountries &&
        camp.eligibleCountries.length > 0 &&
        country &&
        !camp.eligibleCountries.map((c) => c.toUpperCase()).includes(country.toUpperCase())
      ) {
        continue;
      }
      if (camp.minDepositAmount && depositAmount < Number(camp.minDepositAmount)) continue;

      const matchPct = Number(camp.matchPercent ?? 100);
      const rawAmount = (depositAmount * matchPct) / 100;
      const granted = camp.maxAmount ? Math.min(rawAmount, Number(camp.maxAmount)) : rawAmount;
      if (granted <= 0) continue;

      const multiplier = Number(camp.rolloverMultiplier ?? 1);
      const ub = await this.prisma.userBonus.create({
        data: {
          userId,
          campaignId: camp.id,
          bonusType: camp.bonusType as BonusType,
          status: BonusStatus.ACTIVE,
          grantedAmount: granted,
          maxAmount: camp.maxAmount,
          minOddsRequirement: camp.minOddsRequirement,
          rolloverMultiplier: camp.rolloverMultiplier,
          rolloverRequiredTotal: granted * multiplier,
          rolloverStatus: RolloverStatus.NOT_STARTED,
          referenceDepositId: depositId,
          description: `${camp.name} - Match ${matchPct}%`,
          expiresAt: camp.validityDays
            ? new Date(Date.now() + camp.validityDays * 86400000)
            : camp.expiresAt ?? undefined,
        },
      });
      this.emitBonusGranted(ub, camp.id);
      if (isFirst) break;
    }
  }

  async findActiveUserBonusesForRollover(userId: string) {
    return this.prisma.userBonus.findMany({
      where: {
        userId,
        status: { in: [BonusStatus.ACTIVE, BonusStatus.LOCKED] },
        rolloverStatus: { in: [RolloverStatus.NOT_STARTED, RolloverStatus.IN_PROGRESS] },
      },
      orderBy: [{ grantedAt: 'asc' }],
    });
  }
}
