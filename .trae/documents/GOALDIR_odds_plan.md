# Integração Goaldir BSD API (Provedor Real Odds BET62) — Implementation Plan

## 1. Repository Research (Pesquisa Concluída)

### 1.1 Arquitetura odds-service (atual) — o que já existe e está pronto a usar:

O monorepo já tem um serviço **`@bet62/odds-service` totalmente arquitetado para aceitar múltiplos providers via `Strategy Pattern` + `Factory` + `Nest Module global`. Basta adicionar o quarto provider Goaldir.**:

| Componente existente | Localização | Descrição |
|---|---|---|
| **`OddsProvider` interface (nova — usar **implementar obrigatoriamente**)** | [odds-provider.interface.ts L132-L141](file:///c:/Users/israe/Desktop/BET62APOSTAS/services/odds-service/src/odds-provider/odds-provider.interface.ts#L132-L141) | 7 métodos obrigatórios: `providerName`, `getPrematchEvents`, `getLiveEvents`, `getEventDetail`, `getActiveLeagues`, `syncIncremental`, `subscribeOddsChanges` (opcional) — usados pelo OddsController REST e Gateway WebSocket público da BET62 |
| **`AbstractOddsProvider` (extends obrigatório)** | [abstract-odds-provider.service.ts L64-L89](file:///c:/Users/israe/Desktop/BET62APOSTAS/services/odds-service/src/odds-provider/abstract-odds-provider.service.ts#L64-L89) | 5 métodos abstratos: `fetchLiveOdds`, `fetchUpcomingEvents`, `fetchSettlementOutcome`, `getSports`, `getLeagues` — usado por código legado do OddsService e jobs de polling cron |
| **`OddsProviderFactory` + `SUPPORTED_PROVIDERS` enum** | [odds-provider.factory.ts L11-L65](file:///c:/Users/israe/Desktop/BET62APOSTAS/services/odds-service/src/odds-provider/odds-provider.factory.ts#L11-L65) | `SUPPORTED_PROVIDERS = ['mock' | 'sportsdb' | 'custom']` — adicionar `'goaldir'` aqui e caso no switch `createOddsProvider` |
| **`OddsProviderModule` global (já wiring factory)** | [odds-provider.module.ts L14-L124](file:///c:/Users/israe/Desktop/BET62APOSTAS/services/odds-service/src/odds-provider/odds-provider.module.ts#L14-L124) | `ODDS_PROVIDER_TOKEN` useFactory escolhe provider por `ODDS_PROVIDER_NAME` env var. Só precisamos de adicionar `GoaldirOddsProviderService` ao array de providers e ao export. Fallback automático para `mock` em caso de erro 401/402. |
| **ENV vars já existentes (reutilizar sem criar novas)** | `ODDS_PROVIDER_NAME`, `ODDS_PROVIDER_BASE_URL`, `ODDS_PROVIDER_API_KEY`, `ODDS_PROVIDER_TIMEOUT_MS` (package.json root dev) | Perfeito: ODDS_PROVIDER_NAME='goaldir', ODDS_PROVIDER_BASE_URL=`https://sports.bzzoiro.com/`, ODDS_PROVIDER_API_KEY=<chave do dashboard Goaldir>, ODDS_PROVIDER_TIMEOUT_MS=15000 default |

### 1.2 Goaldir BSD API Docs (pesquisa 16 URLs concluidas — detalhe técnico):

| Item Goaldir | Valor / Detalhe |
|---|---|
| **HOST API REST (TODOS os desportos)** | `https://sports.bzzoiro.com/` (docs em goaldir.com, API em sports.bzzoiro.com |
| **Autenticação (UM token para tudo)** | Header `Authorization: Token <CHAVE_DA_CONTA>` — também aceita `Bearer <chave>` ou `?token=` (query param último recurso WS). Registo em https://goaldir.com/register/, dashboard em https://goaldir.com/dashboard/. **Token único shared para REST + WebSocket + todas modalidades. |
| **Plano / Preços / Add-ons** | - **FREE (0$/mês): Futebol** REST v1+v2, odds consensus, predictions, images. ✅ Serve já homepage da BET62 e eventos Futebol. - **Sports Addon 5€/mês: Ténis, Basquetebol, Hóquei no Gelo + CS2, Dardos. - **WebSocket Addon 3€/mês: Live Streaming odds Football + Tennis. - **Founder Rate (antes 03-08-2026): 50% permanente. |
| **4 desportos suportados BET62 (mapeamento base paths)** | 1. **FOOTBALL:** `/api/v2/` (FREE, default) → `/api/v2/events/`, `/api/v2/events/live/`, `/api/v2/events/{id}/odds/`, `/api/v2/leagues/`. 2. **TENNIS:** `/tennis/api/v2/` (Sports Addon) → `/matches/`, `/matches/live/`, `/matches/{id}/odds/`, `/tournaments/`. 3. **BASKETBALL:** `/basketball/api/v2/` (Sports Addon) → `/events/`, `/events/live/`, `/events/{id}/odds/`, `/leagues/`. 4. **ICE_HOCKEY:** `/hockey/api/v2/` (Sports Addon) → `/matches/`, `/matches/live/`, `/matches/{id}/odds/`, `/leagues/`. |
| **Odds shapes (mapear para `MarketType` @bet62/shared):** | - **Futebol 11 mercados FREE:** home_win, draw, away_win (1X2); over_15, over_25, over_35, under_*, btts_yes, btts_no (Both Teams Score). Se tiver Football Unlimited: double_chance, draw_no_bet, asian_handicap (linhas), total_corners. - **Ténis:** odds_player1 (P1 HOME), odds_player2 (P2 AWAY) = 2 colunas Moneyline. - **Basquetebol:** odds_home (HOME), odds_away (AWAY) — mercados AH spread + OU Total Points. - **Hóquei no Gelo:** odds_home, odds_draw, odds_away (1X2 3-way, ao contrário basquete que é 2-way). |
| **Status Goaldir → ProviderEvent status BET62:** | `upcoming → PRE_MATCH`; `live → LIVE`; `interrupted → SUSPENDED`; `finished/ended/awarded → FINISHED`; `postponed → POSTPONED`; `cancelled/walkover/retired → CANCELLED`. |
| **WebSocket addon (OPCIONAL — fallback polling incremental):** | Futebol `wss://sports.bzzoiro.com/live/football/?token=XX`. Tennis `wss://sports.bzzoiro.com/ws/live/?token=XX` + subscrição `{"action":"subscribe","event_id":N,"sport":"tennis"}`. Close codes 4401 invalid token / 4402 no addon. Reconnect exponencial + max 10 subs por socket. |
| **Códigos erro críticos tratar:** | `401` (token inválido → Fatal: pausar polling + logger ERROR + fallback Mock); `402` Sports Addon (warning 1x arranque → degradar só para FOOTBALL FREE sem crashar); `403` bookmakers_not_entitled (consensus odds apenas, ignorar); `429` Rate limit → backoff exponencial 10s/20s/40s até 5 tentativas). |
| **Cache server-side Goaldir (respeitar, não polling agressivo):** | - Odds endpoints: 3 minutos cache. - Live events list: 10–30 s cache (poll 10s ou WS). - Predictions: 2 min. - Ligas/Torneios: 5 min. - `update_interval_seconds` no `/api/v2/events/{id}/odds/`: 15 min LIVE / 30 min kickoff <24h / 4h longe. Usar este campo para polling individual intervalo inteligente, não 1 minuto fixo para tudo. |

---

## 2. Files and Modules (Ficheiros a **CRIAR** + **EDITAR**)

| Tipo | Path | Alterações esperadas |
|---|---|---|
| ✨ **NOVO** | `services/odds-service/src/odds-provider/goaldir/` **pasta** | Módulo interno encapsulado Goaldir (evitar ficheiro monolítico 1500+ linhas). Sub-componentes separados. |
| ✨ NOVO | `services/odds-service/src/odds-provider/goaldir/goaldir.http-client.ts` | **HTTP Client singleton wrapper:** fetch nativo Node 24 (não acrescentar axios dep, já temos Node 24 fetch global). Header auth `Token X` automático, timeout via `AbortSignal.timeout(ODDS_PROVIDER_TIMEOUT_MS)`, retry 429 backoff exponencial (10s/20s/40s, 5 tentativas), tratamento erros 401 fatal, 402 graceful, loggers. Método genérico `<T> get(path, params?, opts?): Promise<T>`. |
| ✨ NOVO | `services/odds-service/src/odds-provider/goaldir/goaldir.dto-mapper.ts` | **Pure functions 100% unit testável** de mapeamento DTO Goaldir → BET62 interface: `mapEventStatus()`, `mapFootballOddsToMarkets()`, `mapTennisOddsToMarkets()`, `mapBasketballOddsToMarkets()`, `mapHockeyOddsToMarkets()`, `mapGoaldirLeagueToProviderLeague()`, `mapGoaldirTeamToProviderTeam()`, `buildCompositeId(sportCode:string, id:number): string` (football:223510 para não colidir ids entre desportos — necessário para `getEventDetail` saber qual path chamar). |
| ✨ NOVO | `services/odds-service/src/odds-provider/goaldir-odds-provider.service.ts` | **Provider principal:** `GoaldirOddsProviderService extends AbstractOddsProvider implements OddsProvider, OnModuleInit`. Construtor injeta `ConfigService` (para baseUrl/apiKey/timeout). No `onModuleInit()`: 1 GET /api/v2/coverage para determinar quais sports suportados (402 se Tennis/Basket/Hockey) e set `this.supportedSports:Set<SportType>` internamente. Implementa TODOS os 7 métodos OddsProvider e 5 Abstract. Usa Promise.all paralelo por sport no array supportedSports. |
| ✨ NOVO (opcional se WS addon habilitado) | `services/odds-service/src/odds-provider/goaldir/goaldir.ws-client.ts` | **WebSocket Client** (package `ws` — verificar se já em package.json odds-service; se não, adicionar). 2 conexões: football + tennis ws. Subscrições: automático dos eventos que aparecem em fetchLiveOdds (10 por socket). Reconnect exponencial (1s → 60s). Handle close 4402: parar WS, fallback syncIncremental polling 15s odds. Implementa o método `subscribeOddsChanges(callback) ` → cada frame odds → OddsChangeNotification e dispacha callback. |
| 🟡 EDITAR | `services/odds-service/src/odds-provider/odds-provider.factory.ts` | `SUPPORTED_PROVIDERS` adicionar `'goaldir'` no const array; `normalizeProviderName` adicionar aliases BSD/bzzoiro/goaldir → goaldir; `createOddsProvider` adicionar `if (normalized === 'goaldir')` retornar new GoaldirOddsProviderService. |
| 🟡 EDITAR | `services/odds-service/src/odds-provider/odds-provider.module.ts` | Adicionar `import { GoaldirOddsProviderService } from './goaldir-odds-provider.service'`; providers array L18-L21 adicionar GoaldirOddsProviderService; `useFactory` both tokens adicionar parametro `goaldirProvider: GoaldirOddsProviderService` e caso switch `normalized === 'goaldir'` retornar; exports array adicionar `GoaldirOddsProviderService`. |
| 🟡 EDITAR (apenas documentação env template) | `.env.railway.example` (já existe) + `.env.example` (se houver) | Adicionar 4 linhas comentadas: `# ---- GOALDIR BSD (Provedor Odds REAL) ----` `# ODDS_PROVIDER_NAME=goaldir` `# ODDS_PROVIDER_BASE_URL=https://sports.bzzoiro.com/` `# ODDS_PROVIDER_API_KEY=colocar_a_chave_do_dashboard_goaldir_aqui` `# ODDS_PROVIDER_TIMEOUT_MS=15000` `# (opcional WS) GOALDIR_WS_ENABLED=true` |
| 🟡 EDITAR (package.json odds-service) se não tiver `ws` | `services/odds-service/package.json` | Adicionar dependency `"ws": "^8.17.0"` e devDependency `"@types/ws": "^8.5.12"`. Só se não tiver já (verificar). |

---

## 3. Implementation Steps (6 passos, ordem dependências)

### Step 1 — Camada HTTP + DTOS (sem efeitos colaterais — testável primeiro)
1. Criar `goaldir.http-client.ts` com o wrapper fetch + headers auth + retry 429 + tratamento erros.
2. Criar `goaldir.dto-mapper.ts` com pure functions de mapeamento + composite id builder (football:NNN etc).
3. **Validação intermédia (opcional não-código):** As funções mapper são as que mais bugs costumam dar; validação manual mental por casos limites (odds null; status CANCELLED walkover; colisões de ids futebol vs tênis).

### Step 2 — Classe principal Provider + wiring Nest
1. Criar `goaldir-odds-provider.service.ts`: extends Abstract + implementa Interface + OnModuleInit.
2. **Métodos do OddsProvider interface (7):**
   a. `providerName = 'goaldir'`
   b. `getPrematchEvents(query)` → `Promise.all(supportedSports map sport => http GET <base><prefix><events/?status=upcoming&limit=...>)` → flatten + map composite ids.
   c. `getLiveEvents(query)` → Mesmo pattern mas status=live → endpoints /live/.
   d. `getEventDetail(eventId string, includeMarkets boolean)` → parse composite prefix <sport>:<id> para descobrir path. GET detail event + GET /odds sub-resource daquele evento. Map odds para ProviderMarket[].
   e. `getActiveLeagues(sport?)` → Se sport filtrado só 1. Senao todos supportedSports. GET /leagues ou /tournaments para tennis.
   f. `syncIncremental(since Date?)` → GET `<football>/api/v2/odds/?updated_after=<ISO>` (e demais sports suportados) delta. Mapear changed rows → `updatedMarketIds`/`updatedSelectionIds`.
   g. `subscribeOddsChanges(callback)` (opcional) → instancia WS client se houver GOALDIR_WS_ENABLED=true ou adiciona listeners do ws client já criado no Step 4.
3. **Métodos Abstract (5):** `fetchLiveOdds` alias `getLiveEvents` + converter shape; `fetchUpcomingEvents` alias getPrematchEvents converter shape; `fetchSettlementOutcome` (por enquanto default PENDING — Goaldir results FINALIZED só refresh 1 hora post-match); `getSports` retorna shared Sport[] filtrada supportedSports; `getLeagues alias getActiveLeagues`.
4. **OnModuleInit:** Chamar `/api/v2/coverage/?sport=` sem filtro. Se qualquer sport retornar 402 addon → warning logger 1x + excluir sport de `this.supportedSports` (degradar graceful).

### Step 3 — WebSocket Client (só se utilizador tiver addon; fallback 100% polling sem WS)
1. Criar `goaldir.ws-client.ts` wrapper com connect/subscribe/unsubscribe/reconnect-backoff + close codes (4401/4402).
2. Integrar no provider. Handle erro 4402 → logger warning uma vez, definimos flag `this.wsEnabled=false` e nunca mais tentamos (fallback polling incremental).

### Step 4 — Wiring Factory + Module
1. Editar `odds-provider.factory.ts`: adicionar goaldir em todo lado (aliases, SUPPORTED, factory switch).
2. Editar `odds-provider.module.ts`: registar provider, adicionar inject ambos tokens, exportar.
3. Editar `package.json odds-service`: adicionar ws + types ws se não existirem.
4. Editar `.env.railway.example` com placeholders Goaldir comentados.

### Step 5 — Verificar Dependências NPM
1. Verificar se ws está nas packages — se não, `npm install ws @types/ws --save-dev --workspace=@bet62/odds-service`. Nota: Node 24 fetch global nativo, **NÃO instalar axios/got/superagent nenhum cliente REST novo, manter mínimo dep**.

### Step 6 — Validação
1. GetDiagnostics geral 0 erros TypeScript.
2. Build individual workspace: `npm run build --workspace=@bet62/odds-service`.
3. (Passo user local, não no sandbox): Criar ficheiro `.env` com `ODDS_PROVIDER_NAME=goaldir ODDS_PROVIDER_API_KEY=<chave>` → correr `npm run dev:web` só + Abrir localhost:3080 → Página Home deve mostrar Jogos Futebol Reais com odds Goaldir (FREE sem addon). Logos devem aparecer. Nenhum erro de runtime.
4. Fallback test: invalidar chave para 'fake' → Observar WARNING logger "fallback para mock provider" → homepage ainda mostra jogos do MockOddsProvider existente, não crasha.

---

## 4. Dependencies and Considerations (Restrições e Notas importantes)

1. **ZERO novas grandes libraries.** REST usa Node 24 fetch global built-in (já disponível Node 18+). WS apenas adiciona `ws` package leve (standard) — se não existir.
2. **Graceful Degradation OBRIGATÓRIO em 402 Addon Required.** Nenhum crash pode ocorrer se o user só tiver FREE Football. O comportamento: Apenas FOOTBALL = SportType.FOOTBALL adicionado supportedSports; restantes Tennis/Basquet/Hóquei aparecem no dropdown eventos mas retornam vazio até comprar addon. Log de WARNING 1 VEZ no startup (não spam por request).
3. **Fallback Mock Automático em 401 Fatal:** O OddsProviderModule já tem o fallback para mock integrado. Mas GoaldirProvider também deve fazer `return []` em cada request individual se obtiver 401 (não throw).
4. **Colisão IDs Goaldir resolvida com Composite Ids:** `football:223510`, `tennis:36835`. Sem isto um evento 71204 basquete poderia colidir com evento 71204 futebol, retornar dados errados no getEventDetail. O ProviderEvent.id = composite, ProviderEvent.providerEventId = composite também (contem informacao sport).
5. **Polling cadência inteligente via update_interval_seconds:** NÃO fazer 60s polling tudo. Para cada evento salvo do /odds/ guardar o update_interval_seconds e o next_update_at; só re-poll intervalo que Goaldir diz que houve alterações. Economiza rate limit.
6. **Paginação Goaldir default 50 max 200 por página:** Implementar paginação automática incremental do count para não só retornar a primeira página de 50 eventos. (usar `count > 0 e next URL não nulo? Continuar a pedir páginas.)

---

## 5. Validation (Critérios Aceitação)

| # | Validação | Esperado |
|---|---|---|
| 1 | **Build TypeScript odds-service** | `npm run build --workspace=@bet62/odds-service` exit code 0. Sem warnings TS strict. |
| 2 | **GetDiagnostics geral** | `[]` (vazio). Sem erros. |
| 3 | **Runtime FREE Football** | ODDS_PROVIDER_NAME=goaldir e chave FREE real. Homepage localhost 3080 mostra jogos reais com odds atualizadas do Goaldir (valores diferente do mock = sucesso). |
| 4 | **Fallback 401** | ODDS_PROVIDER_API_KEY=fake. Serviço arranca sem crash; homepage mostra jogos MOCK como dantes; logs contêm WARNING "Goaldir token inválido (401), a usar fallback mock provider". |
| 5 | **Degradação 402 Sports Addon** | Não tem addon 5$. Dropdown desportos Ténis/Basquet/Hóquei retornam lista vazia mas não crasham endpoints. Log 1 WARNING startup: "Skipping <sport> endpoints, 402 Sports Addon required". |
| 6 | **Event Detail por ID** | Clicar num jogo da homepage → detalhe evento abre com os 3 mercados 1X2 / overunder2.5 / BTTS populados corretamente. |
| 7 | **Cron Incremental Sync** | Polls a cada X segundos odds alteradas; funciona sem HTTP 429 (backoff). |

---

## 6. Risks (Riscos e Mitigação)

| Risco | Impacto | Mitigação |
|---|---|---|
| **Rate Limiting 429 por polling frequente** | Alto: serviço bloqueia. | Backoff exponencial + respeitar campo update_interval_seconds individual por evento + páginação não pedir whole book de cada vez. |
| **User não compra Sports Addon e pensa que Ténis está partido** | Médio (UX mau). | Documentação no painel admin: no rodapé dropdown eventos mensagem informativa: "Desbloqueia Ténis, Basquete e Hóquei no Goaldir com Addon 5$ mês |
| **Colisão IDs entre desportos** | Médio (detalhe evento errado). | Composite IDs `sport:number` em todos os places (getEventDetail, subscribeOddsChanges, settlement). |
| **WebSocket addon 3€/mês não habilitado** | Baixo (fallback polling existe). | Close code 4402 tratado → disable WS permanentemente sessão, fallback syncIncremental polling. |
| **Nó 24 versão no Railway vs Node local** | Baixo. railway.json já define nodejs_24 (Nixpacks). | Fetch global e ws funcionam nas duas plataformas. |
| **Free tier football odds consensus null** | Baixo (jogos lower league podem não ter odd). | Mapper odds null → skip esse market. Não lançar erro, não apresentar botão odd se null (UI já trata disabled). |
