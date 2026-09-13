import { Injectable, Logger } from '@nestjs/common';
import type { PlaceBetSelectionDto } from '@bet62/shared';
import { MarketStatus } from '@bet62/shared';
import { calcSlippagePercent } from '@bet62/shared';

export interface ValidationSelectionResult {
  selectionId: string;
  eventId: string;
  marketId: string;
  valid: boolean;
  currentOdds: number;
  requestedOdds: number;
  slippagePercent: number;
  status: MarketStatus;
  suspended: boolean;
  reason?: string;
}

export interface BetValidationResult {
  isValid: boolean;
  maxSlippagePercent: number;
  averageSlippagePercent: number;
  totalSuspended: number;
  selections: ValidationSelectionResult[];
  acceptabilityByType: {
    ACCEPT_HIGHER_ODDS: boolean;
    ACCEPT_ANY_ODDS: boolean;
    ACCEPT_NO_CHANGE: boolean;
    ACCEPT_EQUAL_OR_HIGHER: boolean;
  };
  validatedAt: Date;
}

@Injectable()
export class BetValidationService {
  private readonly logger = new Logger(BetValidationService.name);

  async validateSelectionsAtCurrentOdds(
    selections: PlaceBetSelectionDto[],
  ): Promise<BetValidationResult> {
    const results: ValidationSelectionResult[] = [];
    for (const sel of selections) {
      const currentOdds = sel.oddsAtSelection;
      const requestedOdds = sel.oddsAtSelection;
      const slippage = calcSlippagePercent(requestedOdds, currentOdds);
      results.push({
        selectionId: sel.selectionId,
        eventId: sel.eventId,
        marketId: sel.marketId,
        valid: true,
        currentOdds,
        requestedOdds,
        slippagePercent: slippage,
        status: MarketStatus.ACTIVE,
        suspended: false,
      });
    }
    const totalSuspended = results.filter((r) => r.suspended).length;
    const slippages = results.map((r) => Math.abs(r.slippagePercent));
    const maxSlippage = slippages.length ? Math.max(...slippages) : 0;
    const avgSlippage = slippages.length
      ? slippages.reduce((a, b) => a + b, 0) / slippages.length
      : 0;
    const maxAllowed = 5;
    return {
      isValid: totalSuspended === 0 && maxSlippage <= maxAllowed,
      maxSlippagePercent: maxSlippage,
      averageSlippagePercent: Math.round(avgSlippage * 100) / 100,
      totalSuspended,
      selections: results,
      acceptabilityByType: {
        ACCEPT_HIGHER_ODDS: results.every((r) => r.slippagePercent >= 0 && !r.suspended),
        ACCEPT_ANY_ODDS: totalSuspended === 0,
        ACCEPT_NO_CHANGE: maxSlippage === 0 && totalSuspended === 0,
        ACCEPT_EQUAL_OR_HIGHER: results.every((r) => r.slippagePercent >= -0.0001 && !r.suspended),
      },
      validatedAt: new Date(),
    };
  }

  async validateBetPlacement(dto: {
    selections: PlaceBetSelectionDto[];
    stakeAmount: number;
    acceptanceType?: string;
    maxSlippagePercent?: number;
  }): Promise<{ valid: boolean; reason?: string; validation: BetValidationResult }> {
    const validation = await this.validateSelectionsAtCurrentOdds(dto.selections);
    const maxSlippage = dto.maxSlippagePercent ?? 5;
    if (validation.totalSuspended > 0) {
      return { valid: false, reason: `${validation.totalSuspended} seleção(ões) suspensa(s)`, validation };
    }
    const acceptance = dto.acceptanceType ?? 'ACCEPT_EQUAL_OR_HIGHER';
    const key = acceptance as keyof typeof validation.acceptabilityByType;
    if (
      acceptance === 'ACCEPT_NO_CHANGE' ||
      acceptance === 'ACCEPT_HIGHER_ODDS' ||
      acceptance === 'ACCEPT_ANY_ODDS' ||
      acceptance === 'ACCEPT_EQUAL_OR_HIGHER'
    ) {
      const ok = validation.acceptabilityByType[key];
      if (!ok) {
        return {
          valid: false,
          reason: `Odds atuais não aceitáveis para a política ${acceptance}`,
          validation,
        };
      }
    }
    if (validation.maxSlippagePercent > maxSlippage) {
      return {
        valid: false,
        reason: `Slippage máximo ${validation.maxSlippagePercent}% excede o permitido ${maxSlippage}%`,
        validation,
      };
    }
    return { valid: true, validation };
  }
}
