import { Injectable, NotFoundException, BadRequestException, Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaService } from '../../prisma/prisma.service';
import {
  CasinoBetStatus,
  CasinoGameCategory,
  CasinoSessionStatus,
} from '@bet62/shared';
import type {
  PlaceCasinoBetDto,
  SettleCasinoBetDto,
  SpinResultResponse,
} from '@bet62/shared';
import { BET62_EVENTS, createEnvelope } from '@bet62/shared';

interface SlotsSymbols {
  reels: string[][];
  winningLines: Array<{ line: number; symbols: string[]; multiplier: number }>;
  totalMultiplier: number;
  freeSpinsTriggered: number;
}

@Injectable()
export class GameplayService {
  private readonly logger = new Logger(GameplayService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  async placeBet(userId: string, dto: PlaceCasinoBetDto): Promise<SpinResultResponse> {
    const game = await this.prisma.casinoGame.findFirst({
      where: { id: dto.gameId, deletedAt: null },
    });
    if (!game) throw new NotFoundException('Jogo não encontrado');

    let session = dto.sessionId
      ? await this.prisma.casinoSession.findUnique({ where: { id: dto.sessionId } })
      : null;

    if (!session) {
      session = await this.prisma.casinoSession.create({
        data: {
          userId,
          gameId: game.id,
          sessionStatus: CasinoSessionStatus.ACTIVE,
          playerToken: `sess-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          currency: 'EUR',
        },
      });
    }
    if (session.userId !== userId) {
      throw new BadRequestException('Sessão não pertence ao usuário');
    }

    const stake = Number(dto.stakeAmount);
    if (stake < Number(game.minBet) || stake > Number(game.maxBet)) {
      throw new BadRequestException(
        `Stake fora do intervalo permitido (min=${game.minBet}, max=${game.maxBet})`,
      );
    }

    const bet = await this.prisma.casinoBet.create({
      data: {
        userId,
        sessionId: session.id,
        gameId: game.id,
        providerRef: `bet-${crypto.randomUUID()}`,
        roundRef: `rnd-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        status: CasinoBetStatus.PLACED,
        wageredAmount: stake,
        wageredCurrency: 'EUR',
        linesBet: dto.lines,
        stakePerLine: dto.stakePerLine,
        betType: dto.betType,
        correlationId: dto.externalReferenceId,
      },
    });

    this.eventEmitter.emit(
      BET62_EVENTS.CASINO.BET_PLACED,
      createEnvelope({
        event: BET62_EVENTS.CASINO.BET_PLACED,
        aggregateType: 'CasinoBet',
        aggregateId: bet.id,
        producer: 'casino-service',
        payload: {
          betId: bet.id,
          userId,
          walletId: session.walletId,
          gameId: game.id,
          gameName: game.name,
          provider: game.provider,
          stake,
          win: 0,
          netResult: -stake,
          status: 'PLACED',
          jackpotWon: false,
          settledAt: null,
          sessionId: session.id,
        } as never,
      }),
    );

    const result = this.resolveOutcome(game.category as unknown as CasinoGameCategory, stake, {
      lines: dto.lines ?? 1,
      betType: dto.betType,
      extra: dto.extraParameters,
    });

    const payout = Number(result.payout.toFixed(2));
    const netResult = Number((payout - stake).toFixed(2));
    const finalStatus: CasinoBetStatus =
      payout > stake
        ? CasinoBetStatus.WON
        : payout === stake
        ? CasinoBetStatus.PUSH
        : payout > 0 && payout < stake
        ? CasinoBetStatus.WON
        : CasinoBetStatus.LOST;

    const settled = await this.settleBetInternal({
      betId: bet.id,
      userId,
      gameId: game.id,
      sessionId: session.id,
      status: finalStatus,
      payoutAmount: payout,
      netResult,
      wageredAmount: stake,
      resultSymbols: result.symbols,
      winningLines: result.winningLines,
      freeSpinsTriggered: result.freeSpinsTriggered,
      bonusRoundTriggered: result.bonusRoundTriggered,
      extra: result.extra,
    });

    await this.updateSessionCounters(session.id, stake, payout);
    await this.updateGameCounters(game.id, stake, payout);

    const settledEvent = finalStatus === CasinoBetStatus.WON ? BET62_EVENTS.CASINO.BET_WON : BET62_EVENTS.CASINO.BET_LOST;
    this.eventEmitter.emit(
      settledEvent,
      createEnvelope({
        event: settledEvent,
        aggregateType: 'CasinoBet',
        aggregateId: bet.id,
        producer: 'casino-service',
        payload: {
          betId: bet.id,
          userId,
          walletId: session.walletId,
          gameId: game.id,
          gameName: game.name,
          provider: game.provider,
          stake,
          win: payout,
          netResult,
          status: finalStatus,
          jackpotWon: false,
          settledAt: settled.settledAt?.toISOString() ?? new Date().toISOString(),
          sessionId: session.id,
        } as never,
      }),
    );

    return {
      betId: bet.id,
      status: finalStatus,
      stakeAmount: stake,
      payoutAmount: payout,
      netResult,
      reelsResult: (result as any).reels ?? undefined,
      winningLines: (result as any).winningLines ?? undefined,
      extra: result.extra,
    };
  }

  async settleBet(userId: string, dto: SettleCasinoBetDto) {
    const bet = await this.prisma.casinoBet.findUnique({ where: { id: dto.betId } });
    if (!bet || bet.userId !== userId) {
      throw new NotFoundException('Aposta não encontrada');
    }
    if (bet.status !== CasinoBetStatus.PLACED) {
      throw new BadRequestException('Aposta já liquidada');
    }

    return this.settleBetInternal({
      betId: bet.id,
      userId,
      gameId: bet.gameId,
      sessionId: bet.sessionId,
      status: dto.status,
      payoutAmount: Number(dto.payoutAmount),
      netResult: Number(dto.payoutAmount) - Number(bet.wageredAmount),
      wageredAmount: Number(bet.wageredAmount),
      extra: dto.roundDetails,
    });
  }

  private resolveOutcome(
    category: CasinoGameCategory,
    stake: number,
    opts: { lines?: number; betType?: string; extra?: Record<string, unknown> },
  ): {
    payout: number;
    symbols?: unknown;
    winningLines?: unknown;
    freeSpinsTriggered?: number;
    bonusRoundTriggered?: boolean;
    extra?: Record<string, unknown>;
  } {
    const cat = category;
    if (
      cat === CasinoGameCategory.SLOTS ||
      cat === CasinoGameCategory.MEGA_WAYS ||
      cat === CasinoGameCategory.JACKPOT ||
      cat === CasinoGameCategory.SCRATCH_CARDS ||
      cat === CasinoGameCategory.KENO ||
      cat === CasinoGameCategory.BINGO
    ) {
      return this.playSlots(stake, opts.lines ?? 1, cat);
    }
    if (cat === CasinoGameCategory.ROULETTE || cat === CasinoGameCategory.LIVE_ROULETTE) {
      return this.playRoulette(stake, opts.betType, opts.extra);
    }
    if (cat === CasinoGameCategory.BLACKJACK || cat === CasinoGameCategory.LIVE_BLACKJACK) {
      return this.playBlackjack(stake, opts.extra);
    }
    if (
      cat === CasinoGameCategory.BACCARAT ||
      cat === CasinoGameCategory.LIVE_BACCARAT ||
      cat === CasinoGameCategory.POKER ||
      cat === CasinoGameCategory.CRAPS ||
      cat === CasinoGameCategory.LIVE_DEALER ||
      cat === CasinoGameCategory.GAME_SHOW ||
      cat === CasinoGameCategory.VIRTUAL_SPORTS
    ) {
      return this.playGeneric(stake, cat);
    }
    return this.playGeneric(stake, cat);
  }

  private playSlots(stake: number, lines: number, _category: CasinoGameCategory) {
    const symbolsPool = ['🍒', '🍋', '🍊', '🍉', '🍇', '💎', '⭐', '7️⃣', '🔔', 'JOKER'];
    const reels = [
      Array.from({ length: 3 }, () => symbolsPool[Math.floor(Math.random() * symbolsPool.length)]),
      Array.from({ length: 3 }, () => symbolsPool[Math.floor(Math.random() * symbolsPool.length)]),
      Array.from({ length: 3 }, () => symbolsPool[Math.floor(Math.random() * symbolsPool.length)]),
      Array.from({ length: 3 }, () => symbolsPool[Math.floor(Math.random() * symbolsPool.length)]),
      Array.from({ length: 3 }, () => symbolsPool[Math.floor(Math.random() * symbolsPool.length)]),
    ];

    const isWin = Math.random() < 0.12;
    let multiplier = 0;
    const winningLines: SlotsSymbols['winningLines'] = [];
    if (isWin) {
      const winTier = Math.random();
      if (winTier < 0.6) multiplier = 0.5 + Math.random() * 1.5;
      else if (winTier < 0.85) multiplier = 2 + Math.random() * 5;
      else if (winTier < 0.97) multiplier = 6 + Math.random() * 15;
      else multiplier = 20 + Math.random() * 80;
      winningLines.push({ line: 1, symbols: reels.map((r) => r[0]), multiplier });
    }

    const freeSpinsTriggered = Math.random() < 0.02 ? 10 + Math.floor(Math.random() * 20) : 0;
    const bonusRoundTriggered = Math.random() < 0.035;

    const payout = Math.max(0, stake * multiplier);
    return {
      payout,
      symbols: reels as unknown,
      winningLines: winningLines as unknown,
      freeSpinsTriggered,
      bonusRoundTriggered,
      extra: { reels, linesPlayed: lines },
    };
  }

  private playRoulette(
    stake: number,
    betType?: string,
    extra?: Record<string, unknown>,
  ) {
    const number = Math.floor(Math.random() * 37);
    const isRed = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36].includes(number);
    const isBlack = !isRed && number !== 0;
    const isEven = number !== 0 && number % 2 === 0;
    const isOdd = number !== 0 && number % 2 !== 0;
    const isLow = number >= 1 && number <= 18;
    const isHigh = number >= 19 && number <= 36;

    const selected = String(extra?.selectedNumber ?? '');
    const type = (betType ?? (selected ? 'STRAIGHT_UP' : 'RED')).toUpperCase();

    let multiplier = 0;
    switch (type) {
      case 'STRAIGHT_UP':
      case 'NUMBER':
        multiplier = selected && Number(selected) === number ? 35 : 0;
        break;
      case 'RED':
        multiplier = isRed ? 1 : 0;
        break;
      case 'BLACK':
        multiplier = isBlack ? 1 : 0;
        break;
      case 'EVEN':
        multiplier = isEven ? 1 : 0;
        break;
      case 'ODD':
        multiplier = isOdd ? 1 : 0;
        break;
      case 'LOW':
        multiplier = isLow ? 1 : 0;
        break;
      case 'HIGH':
        multiplier = isHigh ? 1 : 0;
        break;
      case 'DOZEN_1':
        multiplier = number >= 1 && number <= 12 ? 2 : 0;
        break;
      case 'DOZEN_2':
        multiplier = number >= 13 && number <= 24 ? 2 : 0;
        break;
      case 'DOZEN_3':
        multiplier = number >= 25 && number <= 36 ? 2 : 0;
        break;
      default:
        multiplier = Math.random() < 0.48 ? 1 : 0;
    }

    return {
      payout: stake * multiplier,
      symbols: { number, isRed, isBlack, isEven, isOdd, isLow, isHigh } as unknown,
      winningLines: [{ bet: type, hit: multiplier > 0, multiplier }] as unknown,
      extra: { number, color: number === 0 ? 'GREEN' : isRed ? 'RED' : 'BLACK', type },
    };
  }

  private playBlackjack(stake: number, _extra?: Record<string, unknown>) {
    const deckVals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
    const drawHand = () => {
      const a = deckVals[Math.floor(Math.random() * deckVals.length)];
      const b = deckVals[Math.floor(Math.random() * deckVals.length)];
      let total = a + b;
      const hasAce = a === 1 || b === 1;
      if (hasAce && total + 10 <= 21) total += 10;
      let safety = 0;
      while (total < 17 && safety < 10) {
        safety++;
        const c = deckVals[Math.floor(Math.random() * deckVals.length)];
        total += c;
        if (total + 10 <= 21 && c === 1) total += 10;
        if (total > 21 && hasAce && total - 10 <= 21) {
          total -= 10;
        }
      }
      return { total, cards: [a, b] };
    };
    const player = drawHand();
    const dealer = drawHand();

    let multiplier = 0;
    let outcome = '';
    if (player.total > 21) {
      outcome = 'PLAYER_BUST';
      multiplier = 0;
    } else if (dealer.total > 21) {
      outcome = 'DEALER_BUST';
      multiplier = 1;
    } else if (player.total === 21 && player.total !== dealer.total) {
      outcome = 'BLACKJACK';
      multiplier = 1.5;
    } else if (player.total > dealer.total) {
      outcome = 'PLAYER_WIN';
      multiplier = 1;
    } else if (player.total === dealer.total) {
      outcome = 'PUSH';
      multiplier = 0;
    } else {
      outcome = 'DEALER_WIN';
      multiplier = 0;
    }
    return {
      payout: stake * multiplier,
      symbols: { player: player.total, dealer: dealer.total } as unknown,
      winningLines: [{ outcome, multiplier }] as unknown,
      extra: {
        playerTotal: player.total,
        dealerTotal: dealer.total,
        playerCards: player.cards,
        dealerCards: dealer.cards,
        outcome,
      },
    };
  }

  private playGeneric(stake: number, category: CasinoGameCategory) {
    const winProbability = 0.48;
    const isWin = Math.random() < winProbability;
    const multiplier = isWin ? (Math.random() < 0.85 ? 1 : 2 + Math.random() * 3) : 0;
    return {
      payout: stake * multiplier,
      symbols: { category } as unknown,
      winningLines: [{ win: isWin, multiplier }] as unknown,
      extra: { category, outcome: isWin ? 'WIN' : 'LOSE' },
    };
  }

  private async settleBetInternal(params: {
    betId: string;
    userId: string;
    gameId: string;
    sessionId?: string | null;
    status: CasinoBetStatus;
    payoutAmount: number;
    netResult: number;
    wageredAmount: number;
    resultSymbols?: unknown;
    winningLines?: unknown;
    freeSpinsTriggered?: number;
    bonusRoundTriggered?: boolean;
    extra?: Record<string, unknown>;
  }) {
    return this.prisma.casinoBet.update({
      where: { id: params.betId },
      data: {
        status: params.status,
        payoutAmount: params.payoutAmount,
        netResult: params.netResult,
        settledAt: new Date(),
        settledBy: 'MOCK_ENGINE',
        resultSymbols: params.resultSymbols as never,
        winningLines: params.winningLines as never,
        freeSpinsTriggered: params.freeSpinsTriggered,
        bonusRoundTriggered: params.bonusRoundTriggered,
        finalRevealSnapshot: params.extra as never,
      },
    });
  }

  private async updateSessionCounters(sessionId: string, wagered: number, payout: number) {
    try {
      const current = await this.prisma.casinoSession.findUnique({
        where: { id: sessionId },
        select: { maxWinDuringSession: true },
      });
      const currentMax = Number(current?.maxWinDuringSession ?? 0);
      const newMax = payout > currentMax ? payout : currentMax;
      await this.prisma.casinoSession.update({
        where: { id: sessionId },
        data: {
          totalRounds: { increment: 1 },
          totalWagered: { increment: wagered },
          totalPayout: { increment: payout },
          maxWinDuringSession: newMax,
        },
      });
    } catch {
    }
  }

  private async updateGameCounters(gameId: string, wagered: number, payout: number) {
    try {
      await this.prisma.casinoGame.update({
        where: { id: gameId },
        data: {
          totalRoundsPlayed: { increment: 1n },
          totalWagered: { increment: wagered },
          totalPayout: { increment: payout },
          lastWinAt: payout > 0 ? new Date() : undefined,
        },
      });
    } catch {
    }
  }
}
