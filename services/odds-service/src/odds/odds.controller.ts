import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery, ApiParam, ApiOkResponse } from '@nestjs/swagger';
import { OddsService } from './odds.service';
import {
  LeagueQueryDto,
  LiveEventsQueryDto,
  PrematchEventsQueryDto,
  EventDetailQueryDto,
  EventDto,
  MarketDto,
} from '@bet62/shared';

@ApiTags('odds')
@Controller()
export class OddsController {
  constructor(private readonly oddsService: OddsService) {}

  @Get('sports')
  @ApiOperation({ summary: 'Listar esportes disponíveis' })
  @ApiOkResponse({
    description: 'Lista de esportes',
  })
  async getSports(): Promise<any> {
    return this.oddsService.getSports();
  }

  @Get('leagues')
  @ApiOperation({ summary: 'Listar ligas ativas' })
  @ApiQuery({ type: LeagueQueryDto })
  async getLeagues(@Query() query: LeagueQueryDto): Promise<any> {
    return this.oddsService.getLeagues(query);
  }

  @Get('events/prematch')
  @ApiOperation({ summary: 'Listar eventos pré-jogo paginados' })
  @ApiQuery({ type: PrematchEventsQueryDto })
  async getPrematchEvents(@Query() query: PrematchEventsQueryDto) {
    return this.oddsService.getPrematchEvents(query);
  }

  @Get('events/live')
  @ApiOperation({ summary: 'Listar eventos ao vivo' })
  @ApiQuery({ type: LiveEventsQueryDto })
  async getLiveEvents(@Query() query: LiveEventsQueryDto) {
    return this.oddsService.getLiveEvents(query);
  }

  @Get('events/:id')
  @ApiOperation({ summary: 'Detalhe do evento com mercados' })
  @ApiParam({ name: 'id', type: String, description: 'ID do evento (UUID ou composite SPORT:id)' })
  @ApiQuery({ type: EventDetailQueryDto })
  async getEventDetail(
    @Param('id') eventId: string,
    @Query() _query: EventDetailQueryDto,
  ): Promise<(EventDto & { markets: MarketDto[] }) | null> {
    return this.oddsService.getEventDetail(_query, eventId);
  }

  @Get('events/:id/markets')
  @ApiOperation({ summary: 'Mercados do evento' })
  @ApiParam({ name: 'id', type: String, description: 'ID do evento (UUID ou composite SPORT:id)' })
  async getEventMarkets(@Param('id') eventId: string): Promise<MarketDto[]> {
    return this.oddsService.getEventMarkets(eventId);
  }

  @Get('events/:id/statistics')
  @ApiOperation({ summary: 'Estatísticas do evento (futebol: Goal API com xG; outros esportes: PropLine)' })
  @ApiParam({ name: 'id', type: String, description: 'ID do evento (composite SPORT:id ou goal:fixtureId)' })
  async getEventStatistics(@Param('id') eventId: string) {
    return this.oddsService.getEventStatistics(eventId);
  }

  @Get('events/:id/h2h')
  @ApiOperation({ summary: 'Confrontos diretos entre as equipas (apenas futebol, via Goal API)' })
  @ApiParam({ name: 'id', type: String, description: 'ID do evento (goal:fixtureId)' })
  async getEventH2H(@Param('id') eventId: string) {
    return this.oddsService.getEventH2H(eventId);
  }

  @Get('events/:id/commentary')
  @ApiOperation({ summary: 'Comentários da partida minuto a minuto (apenas futebol, via Goal API)' })
  @ApiParam({ name: 'id', type: String, description: 'ID do evento (goal:fixtureId)' })
  async getEventCommentary(@Param('id') eventId: string) {
    return this.oddsService.getEventCommentary(eventId);
  }

  @Get('events/:id/timeline')
  @ApiOperation({ summary: 'Linha do tempo de eventos: golos, cartões, substituições (apenas futebol, via Goal API)' })
  @ApiParam({ name: 'id', type: String, description: 'ID do evento (goal:fixtureId)' })
  async getEventTimeline(@Param('id') eventId: string) {
    return this.oddsService.getEventTimeline(eventId);
  }
}
