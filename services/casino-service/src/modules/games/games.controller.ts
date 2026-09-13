import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import type { AuthRole } from '@bet62/shared';
import { GamesService } from './games.service';
import { JwtAuthGuard } from '../../auth-shared/jwt-auth.guard';
import { RolesGuard } from '../../auth-shared/roles.guard';
import { CurrentUser } from '../../auth-shared/current-user.decorator';
import { Public } from '../../auth-shared/public.decorator';
import { CasinoGamesQueryDto } from '@bet62/shared';

interface AuthedUser {
  userId: string;
  email: string;
  roles: AuthRole[];
  kycLevel?: number;
}

@ApiTags('casino-games')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Public()
  @Get('query')
  @ApiOperation({ summary: 'Consultar jogos com filtros e paginação' })
  query(@CurrentUser() user: AuthedUser | undefined, @Query() query: CasinoGamesQueryDto) {
    return this.gamesService.query(query, user?.userId);
  }

  @Public()
  @Get('categories')
  @ApiOperation({ summary: 'Listar categorias de jogos disponíveis' })
  listCategories() {
    return this.gamesService.listCategories();
  }

  @Public()
  @Get(':id')
  @ApiOperation({ summary: 'Obter detalhes de um jogo por ID' })
  getById(
    @CurrentUser() user: AuthedUser | undefined,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.gamesService.getById(id, user?.userId);
  }

  @Post(':id/favorite')
  @ApiOperation({ summary: 'Alternar jogo como favorito (toggle)' })
  toggleFavorite(
    @CurrentUser() user: AuthedUser,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.gamesService.toggleFavorite(user.userId, id);
  }
}
