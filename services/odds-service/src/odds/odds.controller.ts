import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MrDogeService } from './mrdoge.service';

@ApiTags('odds')
@Controller()
export class OddsController {
  constructor(private readonly mrDogeService: MrDogeService) {}

  @Get('sports')
  @ApiOperation({ summary: 'Esportes ativos no provider atual' })
  getSports() {
    return [
      {
        id: 'soccer',
        name: 'Futebol',
        status: 'active',
        provider: 'MRDOGE',
      },
    ];
  }

  @Get('events/live')
  @ApiOperation({ summary: 'Lista partidas de futebol ao vivo' })
  getLive(@Query('limit') limit?: string) {
    return this.mrDogeService.listLiveFootball(limit ? Number(limit) : 24);
  }

  @Get('events/prematch')
  @ApiOperation({ summary: 'Lista partidas de futebol próximas' })
  getPrematch(@Query('limit') limit?: string) {
    return this.mrDogeService.listUpcomingFootball(limit ? Number(limit) : 24);
  }

  @Get('events/home')
  @ApiOperation({ summary: 'Resumo home de futebol' })
  getHome() {
    return this.mrDogeService.getFootballHome();
  }

  @Get('events/:id')
  @ApiOperation({ summary: 'Detalhe de partida' })
  getMatch(@Param('id') id: string) {
    return this.mrDogeService.getMatch(id);
  }

  @Get('events/:id/markets')
  @ApiOperation({ summary: 'Mercados/odds da partida' })
  getMarkets(@Param('id') id: string) {
    return this.mrDogeService.getMarkets(id);
  }

  @Get('events/:id/statistics')
  @ApiOperation({ summary: 'Estatísticas da partida' })
  async getStatistics(@Param('id') id: string) {
    const match = await this.mrDogeService.getMatch(id);
    return match?.stats ?? null;
  }

  @Get('events/:id/timeline')
  @ApiOperation({ summary: 'Timeline da partida' })
  async getTimeline(@Param('id') id: string) {
    const match = await this.mrDogeService.getMatch(id);
    return match?.timeline ?? [];
  }
}
