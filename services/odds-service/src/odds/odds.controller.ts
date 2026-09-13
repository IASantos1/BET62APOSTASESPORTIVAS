import { Controller, Get, Param, Query, ParseUUIDPipe } from '@nestjs/common';
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
@Controller('odds')
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
  @ApiParam({ name: 'id', type: String, description: 'UUID do evento' })
  @ApiQuery({ type: EventDetailQueryDto })
  async getEventDetail(
    @Param('id', ParseUUIDPipe) eventId: string,
    @Query() _query: EventDetailQueryDto,
  ): Promise<(EventDto & { markets: MarketDto[] }) | null> {
    return this.oddsService.getEventDetail(_query, eventId);
  }

  @Get('events/:id/markets')
  @ApiOperation({ summary: 'Mercados do evento' })
  @ApiParam({ name: 'id', type: String })
  async getEventMarkets(@Param('id', ParseUUIDPipe) eventId: string): Promise<MarketDto[]> {
    return this.oddsService.getEventMarkets(eventId);
  }
}
