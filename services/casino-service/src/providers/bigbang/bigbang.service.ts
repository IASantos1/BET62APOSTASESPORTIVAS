import { BadRequestException, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { CasinoGameCategory, CasinoGameStatus, CasinoProvider, TransactionType } from '@bet62/shared';
import crypto from 'crypto';

interface BigBangCategoryDto {
  id: number;
  name: string;
  slug: string;
  premium?: boolean;
}

interface BigBangGameDto {
  id: number;
  name: string;
  title?: string;
  provider?: string;
  category?: string;
  category_title?: string;
  thumbnail?: string | null;
  mode?: 'standard' | 'premium';
  is_premium?: boolean;
  game_type?: 'slot' | 'live' | 'crash';
  is_demo?: boolean;
  description?: string;
}

interface BigBangLaunchResponse {
  success: boolean;
  game_url: string;
  session_id?: string;
  provider?: string;
  game_id: number;
  game_name: string;
  demo?: boolean;
}

interface BigBangBalanceChangePayload {
  username: string;
  amount: number;
  game: string;
  game_category: string;
  transaction_id: string;
  signature: string;
  round_id?: string;
  type?: string;
  round_end?: boolean;
  game_id?: number;
  provider_id?: string;
  sandbox?: boolean;
}

@Injectable()
export class BigBangService {
  private readonly logger = new Logger(BigBangService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  isEnabled(): boolean {
    return this.configService.get<string>('BIGBANG_ENABLED', 'false') === 'true'
      && Boolean(this.configService.get<string>('BIGBANG_API_KEY'));
  }

  private get apiKey(): string {
    const value = this.configService.get<string>('BIGBANG_API_KEY');
    if (!value) {
      throw new BadRequestException('BIGBANG_API_KEY não configurada');
    }
    return value;
  }

  private get baseUrl(): string {
    return this.configService.get<string>('BIGBANG_BASE_URL', 'https://api.bigbangcasino.bet/api/v1').replace(/\/+$/, '');
  }

  private get walletServiceUrl(): string {
    return this.configService.get<string>('WALLET_SERVICE_URL', 'http://localhost:3004').replace(/\/+$/, '');
  }

  private get publicAppUrl(): string {
    return this.configService.get<string>('NEXT_PUBLIC_APP_URL')
      ?? this.configService.get<string>('APP_URL')
      ?? 'http://localhost:3080';
  }

  async maybeSyncCatalogOnBoot(): Promise<void> {
    if (!this.isEnabled()) return;
    const shouldSync = this.configService.get<string>('BIGBANG_SYNC_ON_BOOT', 'true') === 'true';
    if (!shouldSync) return;
    try {
      await this.syncCatalog();
    } catch (error) {
      this.logger.warn(`Falha no sync inicial BigBang: ${(error as Error).message}`);
    }
  }

  async syncCatalog(): Promise<{ synced: number; categories: number }> {
    if (!this.isEnabled()) {
      return { synced: 0, categories: 0 };
    }

    const categories = await this.fetchJson<{ success: boolean; data: BigBangCategoryDto[] }>('/categories');
    const standard = await this.fetchJson<{ success: boolean; data: BigBangGameDto[]; pagination?: { total: number } }>(
      '/games?limit=5000&offset=0&type=standard',
    );

    const premium = await this.fetchOptionalJson<{ success: boolean; data: BigBangGameDto[] }>(
      '/games?limit=5000&offset=0&type=premium',
    );

    const mergedGames = [...(standard.data ?? []), ...(premium?.data ?? [])];
    const categoryMap = new Map((categories.data ?? []).map((item) => [item.slug, item]));

    let synced = 0;
    for (const game of mergedGames) {
      const providerSlug = game.category || game.provider || 'BIGBANG';
      const providerMeta = categoryMap.get(providerSlug);
      const displayName = (game.title || game.name || `Game ${game.id}`).trim();
      const slug = this.makeUniqueSlug(game);
      const category = this.mapGameCategory(game.game_type);
      const provider = this.mapProvider(providerSlug);

      await this.prisma.casinoGame.upsert({
        where: {
          providerId_providerGameId: {
            providerId: providerSlug,
            providerGameId: String(game.id),
          },
        },
        create: {
          providerId: providerSlug,
          providerGameId: String(game.id),
          name: displayName,
          slug,
          category,
          provider,
          status: CasinoGameStatus.ACTIVE,
          rtp: 96,
          hasLiveDealer: game.game_type === 'live',
          thumbUrl: game.thumbnail ?? undefined,
          gameConfig: {
            source: 'BIGBANG',
            bigbangGameId: game.id,
            launchName: game.name,
            title: game.title,
            mode: game.mode,
            isPremium: game.is_premium ?? false,
            isDemo: game.is_demo ?? false,
            description: game.description ?? '',
            providerName: providerMeta?.name ?? providerSlug,
            providerSlug,
          } as unknown as object,
        },
        update: {
          name: displayName,
          slug,
          category,
          provider,
          status: CasinoGameStatus.ACTIVE,
          hasLiveDealer: game.game_type === 'live',
          thumbUrl: game.thumbnail ?? undefined,
          deletedAt: null,
          gameConfig: {
            source: 'BIGBANG',
            bigbangGameId: game.id,
            launchName: game.name,
            title: game.title,
            mode: game.mode,
            isPremium: game.is_premium ?? false,
            isDemo: game.is_demo ?? false,
            description: game.description ?? '',
            providerName: providerMeta?.name ?? providerSlug,
            providerSlug,
          } as unknown as object,
        },
      });
      synced += 1;
    }

    this.logger.log(`Catálogo BigBang sincronizado: ${synced} jogos, ${categories.data?.length ?? 0} providers`);
    return { synced, categories: categories.data?.length ?? 0 };
  }

  async launchGame(params: {
    userId: string;
    gameId: string;
    playerToken?: string;
    language?: string;
  }): Promise<{
    playerToken: string;
    gameUrl: string;
    providerSessionReference?: string;
    providerName?: string;
    demo?: boolean;
  }> {
    const game = await this.prisma.casinoGame.findUnique({ where: { id: params.gameId } });
    if (!game) {
      throw new BadRequestException('Jogo não encontrado para launch BigBang');
    }

    const providerGameId = Number(game.providerGameId);
    if (!Number.isFinite(providerGameId)) {
      throw new BadRequestException('providerGameId inválido para BigBang');
    }

    const playerToken = params.playerToken || params.userId;
    const language = this.normalizeLanguage(params.language);
    const returnUrl = `${this.publicAppUrl.replace(/\/+$/, '')}/casino`;

    const response = await this.fetchJson<BigBangLaunchResponse>('/games/launch', {
      method: 'POST',
      body: JSON.stringify({
        game_id: providerGameId,
        user_token: playerToken,
        language,
        return_url: returnUrl,
      }),
    });

    return {
      playerToken,
      gameUrl: response.game_url,
      providerSessionReference: response.session_id,
      providerName: response.provider,
      demo: response.demo,
    };
  }

  async getUserData(username: string): Promise<{ username: string; balance: string; currency: string }> {
    const balance = await this.fetchWalletBalance(username);
    return {
      username,
      balance: balance.withdrawable.toFixed(2),
      currency: balance.currency,
    };
  }

  async handleBalanceChange(payload: BigBangBalanceChangePayload) {
    this.verifySignature(payload);

    const duplicate = await this.prisma.casinoProviderWalletTx.findUnique({
      where: { transactionId: payload.transaction_id },
    });

    if (duplicate?.balanceAfter != null) {
      return {
        status: 'ok',
        balance: Number(duplicate.balanceAfter).toFixed(2),
        duplicate: true,
      };
    }

    if (payload.sandbox) {
      await this.prisma.casinoProviderWalletTx.upsert({
        where: { transactionId: payload.transaction_id },
        create: {
          provider: CasinoProvider.BIGBANG,
          transactionId: payload.transaction_id,
          roundId: payload.round_id,
          type: payload.type ?? 'round',
          roundEnd: payload.round_end ?? false,
          username: payload.username,
          amount: Number(payload.amount.toFixed(2)),
          currency: 'EUR',
          providerCategoryId: payload.provider_id ?? payload.game_category,
          externalBetRef: payload.game,
          status: 'SANDBOX',
          sandbox: true,
          balanceAfter: 100000,
          requestPayload: payload as unknown as object,
          responsePayload: { status: 'ok', balance: '100000.00' } as unknown as object,
        },
        update: {
          status: 'SANDBOX',
          balanceAfter: 100000,
          responsePayload: { status: 'ok', balance: '100000.00' } as unknown as object,
        },
      });
      return { status: 'ok', balance: '100000.00' };
    }

    await this.prisma.casinoProviderWalletTx.create({
      data: {
        provider: CasinoProvider.BIGBANG,
        transactionId: payload.transaction_id,
        roundId: payload.round_id,
        type: payload.type ?? 'round',
        roundEnd: payload.round_end ?? false,
        username: payload.username,
        amount: Number(payload.amount.toFixed(2)),
        currency: 'EUR',
        providerCategoryId: payload.provider_id ?? payload.game_category,
        externalBetRef: payload.game,
        status: 'PENDING',
        sandbox: false,
        requestPayload: payload as unknown as object,
      },
    });

    try {
      const response = Number(payload.amount) < 0
        ? await this.debitWallet(payload)
        : await this.creditWallet(payload);

      await this.prisma.casinoProviderWalletTx.update({
        where: { transactionId: payload.transaction_id },
        data: {
          status: 'APPLIED',
          balanceAfter: response.balance,
          responsePayload: response as unknown as object,
        },
      });

      return {
        status: 'ok',
        balance: response.balance.toFixed(2),
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      await this.prisma.casinoProviderWalletTx.update({
        where: { transactionId: payload.transaction_id },
        data: {
          status: 'FAILED',
          responsePayload: { error: message } as unknown as object,
        },
      });
      if (/Insufficient/i.test(message)) {
        throw new BadRequestException({ error: 'insufficient balance' });
      }
      throw error;
    }
  }

  private async debitWallet(payload: BigBangBalanceChangePayload): Promise<{ balance: number }> {
    const amount = Math.abs(Number(payload.amount));
    const response = await fetch(`${this.walletServiceUrl}/api/wallet/internal/debit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: payload.username,
        currency: 'EUR',
        amount,
        transactionType: TransactionType.CASINO_BET,
        referenceId: payload.transaction_id,
        referenceType: 'BIGBANG_BALANCE_CHANGE',
        correlationId: payload.round_id ?? payload.transaction_id,
        note: payload.game,
        operatedBy: 'BIGBANG',
      }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new BadRequestException((data as { message?: string }).message ?? 'Falha no débito da carteira');
    }
    return { balance: Number((data as { realBalance?: number }).realBalance ?? 0) };
  }

  private async creditWallet(payload: BigBangBalanceChangePayload): Promise<{ balance: number }> {
    const response = await fetch(`${this.walletServiceUrl}/api/wallet/internal/credit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: payload.username,
        currency: 'EUR',
        amount: Number(payload.amount),
        transactionType: TransactionType.CASINO_WIN,
        referenceId: payload.transaction_id,
        referenceType: 'BIGBANG_BALANCE_CHANGE',
        correlationId: payload.round_id ?? payload.transaction_id,
        note: payload.game,
        operatedBy: 'BIGBANG',
      }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new BadRequestException((data as { message?: string }).message ?? 'Falha no crédito da carteira');
    }
    return { balance: Number((data as { realBalance?: number }).realBalance ?? 0) };
  }

  private async fetchWalletBalance(userId: string): Promise<{ withdrawable: number; currency: string }> {
    const url = new URL(`${this.walletServiceUrl}/api/wallet/internal/balance`);
    url.searchParams.set('userId', userId);
    url.searchParams.set('currency', 'EUR');
    const response = await fetch(url.toString(), { headers: { Accept: 'application/json' } });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new BadRequestException((data as { message?: string }).message ?? 'Falha ao consultar saldo interno');
    }
    return {
      withdrawable: Number((data as { withdrawable?: number }).withdrawable ?? 0),
      currency: 'EUR',
    };
  }

  private verifySignature(payload: BigBangBalanceChangePayload) {
    const base =
      String(payload.username) +
      String(payload.amount) +
      String(payload.game) +
      String(payload.game_category) +
      String(payload.transaction_id);
    const expected = crypto.createHmac('sha256', this.apiKey).update(base).digest('hex');
    const incoming = String(payload.signature ?? '');
    if (!incoming || incoming.length !== expected.length) {
      throw new UnauthorizedException('bad signature');
    }
    if (!crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(incoming))) {
      throw new UnauthorizedException('bad signature');
    }
  }

  private async fetchJson<T>(path: string, init?: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      ...init,
      headers: {
        'X-API-Key': this.apiKey,
        'Content-Type': 'application/json',
        ...(init?.headers ?? {}),
      },
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || (typeof data === 'object' && data && 'success' in data && (data as { success?: boolean }).success === false)) {
      const message = (data as { error?: { message?: string } }).error?.message ?? `BigBang HTTP ${response.status}`;
      throw new BadRequestException(message);
    }
    return data as T;
  }

  private async fetchOptionalJson<T>(path: string): Promise<T | null> {
    try {
      return await this.fetchJson<T>(path);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      if (/403|Premium/i.test(message)) {
        return null;
      }
      throw error;
    }
  }

  private mapGameCategory(gameType?: string): CasinoGameCategory {
    switch (gameType) {
      case 'live':
        return CasinoGameCategory.LIVE_DEALER;
      case 'crash':
        return CasinoGameCategory.GAME_SHOW;
      case 'slot':
      default:
        return CasinoGameCategory.SLOTS;
    }
  }

  private mapProvider(raw: string): CasinoProvider {
    const normalized = raw.toUpperCase().replace(/[\s-]+/g, '_');
    switch (normalized) {
      case 'PRAGMATIC':
      case 'PRAGMATICPLAY':
        return CasinoProvider.PRAGMATIC;
      case 'PGSOFT':
      case 'PG_SOFT':
        return CasinoProvider.PGSOFT;
      case 'EVOLUTION':
        return CasinoProvider.EVOLUTION;
      case 'PLAYTECH':
        return CasinoProvider.PLAYTECH;
      case 'NETENT':
        return CasinoProvider.NETENT;
      case 'MICROGAMING':
        return CasinoProvider.MICROGAMING;
      case 'YGGDRASIL':
        return CasinoProvider.YGGDRASIL;
      case 'QUICKSPIN':
        return CasinoProvider.QUICKSPIN;
      case 'REDTIGER':
      case 'RED_TIGER':
        return CasinoProvider.RED_TIGER;
      case 'PLAYNGO':
      case 'PLAY_N_GO':
        return CasinoProvider.PLAY_N_GO;
      case 'HABANERO':
        return CasinoProvider.HABANERO;
      case 'BOOMING':
        return CasinoProvider.BOOMING;
      default:
        return CasinoProvider.BIGBANG;
    }
  }

  private makeUniqueSlug(game: BigBangGameDto): string {
    const base = (game.title || game.name || `bigbang-${game.id}`)
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    return `bigbang-${game.id}-${base || 'game'}`;
  }

  private normalizeLanguage(language?: string): string {
    if (!language) return 'pt';
    return language.split('-')[0].toLowerCase();
  }
}
