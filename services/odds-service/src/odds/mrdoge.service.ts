import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MrDoge } from '@mrdoge/node';

@Injectable()
export class MrDogeService {
  private readonly client: MrDoge;

  constructor(private readonly configService: ConfigService) {
    const apiKey = this.configService.get<string>('MRDOGE_API_KEY');
    if (!apiKey) {
      throw new Error('MRDOGE_API_KEY não configurada');
    }
    this.client = new MrDoge({ apiKey });
  }

  async listLiveFootball(limit = 24) {
    const { data } = await this.client.matches.list({
      sports: ['soccer'],
      status: ['live'],
      limit,
      locale: 'pt-BR',
      timezone: 'Europe/Lisbon',
    });
    return data;
  }

  async listUpcomingFootball(limit = 24) {
    const { data } = await this.client.matches.list({
      sports: ['soccer'],
      status: ['upcoming'],
      limit,
      locale: 'pt-BR',
      timezone: 'Europe/Lisbon',
    });
    return data;
  }

  async getMatch(matchId: string) {
    if (!matchId) {
      throw new BadRequestException('matchId é obrigatório');
    }
    return this.client.matches.get({
      id: matchId,
      locale: 'pt-BR',
    });
  }

  async getMarkets(matchId: string) {
    if (!matchId) {
      throw new BadRequestException('matchId é obrigatório');
    }
    return this.client.odds.list({
      matchId,
      locale: 'pt-BR',
      betTypes: [
        'SOCCER_MATCH_RESULT',
        'SOCCER_MATCH_RESULT_PRELIVE',
        'SOCCER_UNDER_OVER',
        'SOCCER_BOTH_TEAMS_TO_SCORE',
      ],
    });
  }

  async getFootballHome() {
    const [live, upcoming] = await Promise.all([
      this.listLiveFootball(18),
      this.listUpcomingFootball(18),
    ]);

    return {
      sport: 'soccer',
      live,
      upcoming,
    };
  }
}
