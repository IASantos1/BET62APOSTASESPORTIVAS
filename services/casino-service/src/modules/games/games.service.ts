import { Injectable, Logger, NotFoundException, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
  CasinoGameCategory,
  CasinoGameStatus,
  CasinoProvider,
} from '@bet62/shared';
import type { CasinoGamesQueryDto } from '@bet62/shared';
import { BigBangService } from '../../providers/bigbang/bigbang.service';

const SLOT_NAMES = [
  'Book of Dead', 'Starburst', 'Gonzo\'s Quest', 'Mega Moolah', 'Immortal Romance',
  'Thunderstruck II', 'Bonanza', 'Big Bass Bonanza', 'Wolf Gold', 'Sweet Bonanza',
  'Gates of Olympus', 'Fire Joker', 'Razor Shark', 'Money Train 2', 'Dead or Alive 2',
  'Twin Spin', 'Aloha! Cluster Pays', 'Jammin\' Jars', 'Reactoonz', 'Dragon\'s Myth',
  'Pixies of the Forest', 'Wheel of Fortune', 'Cleopatra', 'Da Vinci Diamonds', 'Monopoly',
  'Rainbow Riches', '88 Fortunes', '50 Lions', 'Buffalo', 'Quick Hit',
  'Triple Diamond', 'Red Hot Tamales', 'Sphinx', 'Zeus', 'Wild Panda',
  'Lobstermania', 'Double Diamond', 'Kitty Glitter', 'White Orchid', 'Golden Goddess',
];

const TABLE_NAMES = [
  'European Roulette', 'American Roulette', 'French Roulette',
  'Classic Blackjack', 'Single Deck Blackjack', 'Vegas Strip Blackjack', 'Atlantic City Blackjack',
  'Baccarat Standard', 'Baccarat Pro', 'Mini Baccarat',
  'Texas Hold\'em Poker', 'Caribbean Stud Poker', 'Three Card Poker', 'Pai Gow Poker', 'Video Poker',
  'Craps Standard', 'Craps First Person',
  'Keno Draw', 'Keno Mega',
  'Bingo 90 Ball', 'Bingo 75 Ball',
  'Scratch Gold', 'Scratch Cards Deluxe',
];

const LIVE_DEALER = [
  'Live Roulette European', 'Live Roulette Speed', 'Live Auto Roulette',
  'Live Blackjack Standard', 'Live Blackjack VIP', 'Live Blackjack Party',
  'Live Baccarat Standard', 'Live Baccarat Squeeze', 'Live Baccarat Speed',
  'Live Super Sic Bo', 'Live Dragon Tiger', 'Live Craps', 'Live Game Show', 'Live Mega Ball',
];

const PROVIDERS_POOL = [
  CasinoProvider.MOCK, CasinoProvider.PRAGMATIC, CasinoProvider.NETENT,
  CasinoProvider.MICROGAMING, CasinoProvider.PLAY_N_GO, CasinoProvider.YGGDRASIL,
  CasinoProvider.QUICKSPIN, CasinoProvider.RED_TIGER, CasinoProvider.HABANERO,
  CasinoProvider.PGSOFT, CasinoProvider.BOOMING,
];

const VOLATILITY = ['LOW', 'MED', 'HIGH'];

@Injectable()
export class GamesService implements OnModuleInit {
  private readonly logger = new Logger(GamesService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly bigBangService: BigBangService,
  ) {}

  async onModuleInit() {
    try {
      const total = await this.prisma.casinoGame.count();
      if (this.bigBangService.isEnabled()) {
        await this.bigBangService.maybeSyncCatalogOnBoot();
      } else if (total === 0) {
        this.logger.log('Seeding 200 mock casino games...');
        await this.seedMockGames();
        this.logger.log('Casino games seeding completed');
      }
    } catch (err) {
      this.logger.warn(`Seeding check failed: ${(err as Error).message}`);
    }
  }

  private async seedMockGames() {
    const games: Array<{
      providerId: string; providerGameId: string; name: string; slug: string;
      category: CasinoGameCategory; provider: CasinoProvider; rtp: number;
      volatility?: string; lines?: number; reels?: number;
      hasFreeSpins?: boolean; hasJackpot?: boolean; hasBonusBuy?: boolean; hasLiveDealer?: boolean;
      thumbUrl?: string; isNew?: boolean; isHot?: boolean; isFeatured?: boolean;
    }> = [];

    const numSlots = 140;
    const slotCategories = [CasinoGameCategory.SLOTS, CasinoGameCategory.MEGA_WAYS, CasinoGameCategory.JACKPOT];
    for (let i = 0; i < numSlots; i++) {
      const baseName = SLOT_NAMES[i % SLOT_NAMES.length] + (i >= SLOT_NAMES.length ? ` #${Math.floor(i / SLOT_NAMES.length) + 1}` : '');
      const category = i < 120 ? CasinoGameCategory.SLOTS
        : i < 132 ? CasinoGameCategory.MEGA_WAYS
        : CasinoGameCategory.JACKPOT;
      games.push({
        providerId: 'MOCK',
        providerGameId: `slot-${i + 1}`,
        name: baseName,
        slug: this.slugify(`${baseName}-${i + 1}`),
        category,
        provider: PROVIDERS_POOL[i % PROVIDERS_POOL.length],
        rtp: 94 + Math.random() * 4,
        volatility: VOLATILITY[i % 3],
        lines: category === CasinoGameCategory.MEGA_WAYS ? 117649 : (i % 5 === 0 ? 10 : i % 3 === 0 ? 25 : 20),
        reels: 5,
        hasFreeSpins: i % 3 !== 0,
        hasJackpot: category === CasinoGameCategory.JACKPOT,
        hasBonusBuy: i % 4 === 0,
        isNew: i < 10,
        isHot: i >= 10 && i < 30,
        isFeatured: i < 5 || i === 22 || i === 55 || i === 77 || i === 101,
        thumbUrl: `https://cdn.example.com/casino/thumbs/slot-${i + 1}.png`,
      });
    }

    for (let i = 0; i < TABLE_NAMES.length; i++) {
      const n = TABLE_NAMES[i];
      let category: CasinoGameCategory = CasinoGameCategory.SLOTS;
      if (n.includes('Roulette')) category = CasinoGameCategory.ROULETTE;
      else if (n.includes('Blackjack')) category = CasinoGameCategory.BLACKJACK;
      else if (n.includes('Baccarat')) category = CasinoGameCategory.BACCARAT;
      else if (n.includes('Poker')) category = CasinoGameCategory.POKER;
      else if (n.includes('Craps')) category = CasinoGameCategory.CRAPS;
      else if (n.includes('Keno')) category = CasinoGameCategory.KENO;
      else if (n.includes('Bingo')) category = CasinoGameCategory.BINGO;
      else if (n.includes('Scratch')) category = CasinoGameCategory.SCRATCH_CARDS;
      games.push({
        providerId: 'MOCK',
        providerGameId: `table-${i + 1}`,
        name: n,
        slug: this.slugify(`${n}-${i + 1}`),
        category,
        provider: i < 10 ? PROVIDERS_POOL[i % PROVIDERS_POOL.length] : CasinoProvider.MOCK,
        rtp: n.includes('Roulette') ? 97.3 : n.includes('Blackjack') ? 99.5 : 96 + Math.random() * 3,
        volatility: 'MED',
        thumbUrl: `https://cdn.example.com/casino/thumbs/table-${i + 1}.png`,
      });
    }

    for (let i = 0; i < LIVE_DEALER.length; i++) {
      const n = LIVE_DEALER[i];
      let category: CasinoGameCategory = CasinoGameCategory.LIVE_DEALER;
      if (n.includes('Roulette')) category = CasinoGameCategory.LIVE_ROULETTE;
      else if (n.includes('Blackjack')) category = CasinoGameCategory.LIVE_BLACKJACK;
      else if (n.includes('Baccarat')) category = CasinoGameCategory.LIVE_BACCARAT;
      games.push({
        providerId: 'MOCK',
        providerGameId: `live-${i + 1}`,
        name: n,
        slug: this.slugify(`${n}-${i + 1}`),
        category,
        provider: CasinoProvider.EVOLUTION,
        rtp: 96 + Math.random() * 3,
        volatility: 'MED',
        hasLiveDealer: true,
        thumbUrl: `https://cdn.example.com/casino/thumbs/live-${i + 1}.png`,
      });
    }

    while (games.length < 200) {
      const idx = games.length;
      games.push({
        providerId: 'MOCK',
        providerGameId: `extra-${idx + 1}`,
        name: `Virtual Sports #${idx + 1}`,
        slug: `virtual-sports-${idx + 1}`,
        category: CasinoGameCategory.VIRTUAL_SPORTS,
        provider: PROVIDERS_POOL[idx % PROVIDERS_POOL.length],
        rtp: 93 + Math.random() * 4,
        thumbUrl: `https://cdn.example.com/casino/thumbs/virtual-${idx + 1}.png`,
      });
    }

    const chunk = games.slice(0, 200);
    for (const g of chunk) {
      try {
        await this.prisma.casinoGame.create({
          data: {
            providerId: g.providerId,
            providerGameId: g.providerGameId,
            name: g.name,
            slug: g.slug,
            category: g.category,
            provider: g.provider,
            status: CasinoGameStatus.ACTIVE,
            rtp: g.rtp,
            volatility: g.volatility,
            lines: g.lines,
            reels: g.reels,
            hasFreeSpins: g.hasFreeSpins,
            hasJackpot: g.hasJackpot,
            hasBonusBuy: g.hasBonusBuy,
            hasLiveDealer: g.hasLiveDealer,
            thumbUrl: g.thumbUrl,
            isNew: g.isNew,
            isHot: g.isHot,
            isFeatured: g.isFeatured,
          },
        });
      } catch {
      }
    }
  }

  private slugify(input: string): string {
    return input
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  async query(query: CasinoGamesQueryDto, userId?: string) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 40;
    const skip = (page - 1) * limit;

    const where: Record<string, unknown> = {
      status: query.status ?? CasinoGameStatus.ACTIVE,
      deletedAt: null,
    } as never;

    if (query.categories && query.categories.length > 0) {
      where.category = { in: query.categories };
    }
    if (query.providers && query.providers.length > 0) {
      where.provider = { in: query.providers };
    }
    if (query.searchTerm && query.searchTerm.trim().length > 0) {
      where.name = { contains: query.searchTerm, mode: 'insensitive' } as never;
    }
    if (query.onlyFavorites && userId) {
      const favs = await this.prisma.casinoGameFavorite.findMany({
        where: { userId },
        select: { gameId: true },
      });
      where.id = { in: favs.map((f) => f.gameId) };
    }

    let orderBy: Array<Record<string, 'asc' | 'desc'>> = [{ isFeatured: 'desc' }, { isHot: 'desc' }, { popularTrendScore: 'desc' }] as never;
    switch (query.sort) {
      case 'NEWEST':
        orderBy = [{ isNew: 'desc' }, { createdAt: 'desc' }];
        break;
      case 'RTP':
        orderBy = [{ rtp: 'desc' }];
        break;
      case 'NAME':
        orderBy = [{ name: 'asc' }];
        break;
      case 'PROVIDER':
        orderBy = [{ provider: 'asc' }, { name: 'asc' }];
        break;
      case 'POPULAR':
      default:
        break;
    }

    const [items, total] = await Promise.all([
      this.prisma.casinoGame.findMany({
        where,
        orderBy,
        skip,
        take: limit,
      }),
      this.prisma.casinoGame.count({ where }),
    ]);

    let favoritesIds: Set<string> = new Set();
    if (userId) {
      const ids = items.map((g) => g.id);
      const favs = await this.prisma.casinoGameFavorite.findMany({
        where: { userId, gameId: { in: ids } },
      });
      favoritesIds = new Set(favs.map((f) => f.gameId));
    }

    const enriched = items.map((g) => ({ ...g, isFavorite: favoritesIds.has(g.id) }));
    return { items: enriched, total, page, limit };
  }

  async getById(gameId: string, userId?: string) {
    const game = await this.prisma.casinoGame.findFirst({
      where: { id: gameId, deletedAt: null },
    });
    if (!game) throw new NotFoundException('Jogo não encontrado');
    let isFavorite = false;
    if (userId) {
      isFavorite = (await this.prisma.casinoGameFavorite.count({ where: { userId, gameId } })) > 0;
    }
    return { ...game, isFavorite };
  }

  async listCategories() {
    return Object.values(CasinoGameCategory);
  }

  async toggleFavorite(userId: string, gameId: string) {
    const game = await this.prisma.casinoGame.findFirst({
      where: { id: gameId, deletedAt: null },
    });
    if (!game) throw new NotFoundException('Jogo não encontrado');

    const existing = await this.prisma.casinoGameFavorite.findUnique({
      where: { userId_gameId: { userId, gameId } },
    });
    if (existing) {
      await this.prisma.casinoGameFavorite.delete({
        where: { id: existing.id },
      });
      return { isFavorite: false };
    }
    await this.prisma.casinoGameFavorite.create({
      data: { userId, gameId },
    });
    return { isFavorite: true };
  }
}
