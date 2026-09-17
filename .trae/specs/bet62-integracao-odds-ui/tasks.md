# BET62 — Tarefas de Implementação

Fonte de verdade: [spec.md](file:///C:/Users/israe/Desktop/bet62/.trae/specs/bet62-integracao-odds-ui/spec.md)
Artefacto de referência: [ESBOSTO](file:///C:/Users/israe/Desktop/bet62/ESBOSTO) (a apagar no final)

---

## Tarefa 1: Config Shared + Env Vars (Base)

Status: pending
Priority: high
Depende de: —
Cobre AC: R1, R13
Test Requirements (TR):

- **TR-1.1 (rule)**: `packages/shared/src/config/sports-provider.config.ts` (ou odds.config.ts) exporta `SPORTS_PROVIDER_CONFIG` com: `football.data.provider="goal_api"`, `football.odds.provider="propline"`, `football.settlement.provider="goal_api"`; `tennis`, `basketball`, `baseball`, `hockey`, `nfl` todos a `propline` nas 4 dimensões. Tipos strict TypeScript, compilação sem erros.
- **TR-1.2 (rule)**: `.env.example` e `.env.railway.example` na root contêm exactamente as linhas: `GOAL_API_KEY=`, `GOAL_API_BASE_URL=https://api.goal-api.com/v1`, `GOAL_API_WS_URL=wss://api.goal-api.com/ws`, `PROPLINE_API_KEY=`, `PROPLINE_API_BASE_URL=https://api.prop-line.com/v1`, `PROPLINE_WS_URL=wss://ws.prop-line.com/v1/stream`.
- **TR-1.3 (rule)**: Interfaces `Bet62Match`, `Bet62Clock`, `Bet62Odd`, `Bet62Market`, `Bet62Selection`, `Bet62Bookmaker`, `Bet62Score`, `FootballStats`, `Bet62LiveEvent`, `DataFreshness`, `LiveMatchState` (ESBOSTO §7, §8, §9, §12, §27, §33, §40, §56) existem em `packages/shared/src/interfaces/odds.interface.ts` com exact campos.

Passos:
1. Criar `sports-provider.config.ts` no shared config.
2. Atualizar `.env.example` e `.env.railway.example`.
3. Expandir `odds.interface.ts` no shared com todas interfaces acima + type `Period` (ESBOSTO §39) + `FootballLiveEvent` + `PropLineEvent` unions.

---

## Tarefa 2: DB Schema (Tabelas Novas)

Status: pending
Priority: high
Depende de: Tarefa 1
Cobre AC: R4
TR:

- **TR-2.1 (rule)**: `packages/db/src/schema/index.ts` (Drizzle) OU `services/odds-service/prisma/schema.prisma` (Prisma — usar o que já existe no odds-service) contém tabelas: `provider_match_mapping` (§32), `provider_events` (§46), `odds_snapshots` (§54), `match_stats_snapshots` (§55), com exact colunas, UNIQUE constraints, timestamps `TIMESTAMPTZ`.
- **TR-2.2 (rule)**: Migration SQL gerada (Drizzle generate / Prisma migrate dev --create-only) com nomes estáveis.
- **TR-2.3 (rule)**: Campos `confidence NUMERIC(5,4)` e `provider_event_id TEXT` + `provider TEXT` na UNIQUE estão presentes.

Passos:
1. Identificar ORM usado no odds-service (ler `services/odds-service/prisma/schema.prisma` e `packages/db/`).
2. Adicionar 4 tabelas.
3. Gerar migration.

---

## Tarefa 3: Provider GOAL API (client + WS + adapter + mapper)

Status: pending
Priority: high
Depende de: Tarefa 1, 2
Cobre AC: R2, R3 (parcial), R11 (parcial logos)
TR:

- **TR-3.1 (rule)**: Estrutura de pastas `services/odds-service/src/odds-provider/goalapi/{client,websocket,webhook,adapter,mapper,fixtures,events,stats,lineups,types,index}.ts` existe (LS).
- **TR-3.2 (rule)**: `GoalApiOddsProviderService extends AbstractOddsProvider` exportado, com implementação de `fetchLiveOdds`, `fetchUpcomingEvents`, `fetchSettlementOutcome`, `getSports`, `getLeagues`.
- **TR-3.3 (rule)**: Websocket: faz `POST /v1/ws/token` para obter token, liga `wss://api.goal-api.com/ws?wsToken=`, envia `auth`, recebe `auth_success`, `subscribe/unsubscribe match matchId`, processa `match_update` com dedup por `timestamp`, backoff exponencial (min 1s, max 30s) em disconnect + resubscribe das matches activas.
- **TR-3.4 (rule)**: `adapter.ts` tem: `normalizeGoalStatus(match_period)` → Bet62Clock period; `mapGoalStatistics(data)` → FootballStats (§8); `mapGoalMatchUpdate(msg)` → Bet62LiveEvent union; extrai `team.logoUrl` e `league.logoUrl` se existir no payload.
- **TR-3.5 (rule)**: Settlement do futebol (footballSettlement.ts → Tarefa 6) aceita APENAS inputs vindos de `GoalApiOddsProviderService.fetchSettlementOutcome`; PropLine não é chamado para settlement de futebol.
- **TR-3.6 (rule)**: Todas chamadas REST têm `try/catch` próprio (não em cascata dentro de Promise.all para live); `AbortSignal.timeout(10s)`.

Passos:
1. Criar types baseados na documentação GOAL API lida.
2. Implementar client.ts (fetch wrapper + Bearer).
3. Implementar websocket.ts (token + connect + sub + resub).
4. Implementar adapter + mapper + fixtures/events/stats/lineups módulos.
5. Implementar index.ts com `GoalApiOddsProviderService` completo.

---

## Tarefa 4: Provider PropLine (client + WS + adapter + mapper)

Status: pending
Priority: high
Depende de: Tarefa 1, 2
Cobre AC: R2, R14, R15
TR:

- **TR-4.1 (rule)**: Estrutura de pastas `services/odds-service/src/odds-provider/propline/{client,websocket,webhook,adapter,mapper,odds,scores,stats,markets,bookmakers,types,index}.ts` existe.
- **TR-4.2 (rule)**: REST client: header `X-API-Key`; em resposta 429 lê `Retry-After` e espera; lê `X-Daily-*` + `RateLimit-*` headers (logging warning se <10% remaining).
- **TR-4.3 (rule)**: WS: `wss://ws.prop-line.com/v1/stream`; guarda `seq` último; em reconnect envia `since_seq` última; processa mensagens com validação (por ordem, não permite voltar seq para trás).
- **TR-4.4 (rule)**: Adapter NÃO devolve `bookmakers[]` cru; `Bet62Market` normalizado inclui somente as selecções decididas pelo OddsEngine (margem aplicada, arredondamento).
- **TR-4.5 (rule)**: `MAX_ODDS_AGE` = `{ prematch: { push: 3*60_000, polled: 10*60_000 }, live: { push: 8_000, polled: 120_000 } }` (ms) — odds engine suspende se `Date.now() - last_change_at` ultrapassar.
- **TR-4.6 (rule)**: Módulos `stats.ts` com tipos para MLB (§17), NBA/WNBA/NCAAB (§18), NHL (§19), NFL/NCAAF (§20), Futebol (§21), Ténis (§22), Golf (§23), UFC (§24), CS2 (§25).
- **TR-4.7 (rule)**: `ProplineOddsProviderService extends AbstractOddsProvider` implementa todos métodos abstractos.

Passos:
1. Criar types (incluir todos timestamps PropLine: recorded_at, book_updated_at, last_change_at, last_seen_at, liquidity, payout_multiplier, dfs_odds_type, line_gap, book_version).
2. Client + headers + retry 429.
3. WS com seq + since_seq replay.
4. Adapter (Bet62Market), mapper (mercados + períodos), odds/scores/stats/markets/bookmakers módulos.
5. Exportar provider.

---

## Tarefa 5: Camadas Normalization + Matching + Live Core (6 engines)

Status: pending
Priority: high
Depende de: Tarefa 1, 2, 3, 4
Cobre AC: R5, R14 (parcial), R15 (parcial)
TR:

- **TR-5.1 (rule)**: `sports/normalization/{teams,competitions,timestamps,players}.ts` existem; `normalizeTeamName` passa testes: "Sport Lisboa e Benfica" ↔ "SL Benfica" → mesma chave normalizada (sem acentos, sem FC/CF/SC, lowercase, trim pontuação).
- **TR-5.2 (rule)**: `sports/matching/matchResolver.ts` confiança: mapping persistido = 1.0; stable team keys ≥0.95; nomes normalizados + kickoff ±6h + competição ≥0.85; fallback menor. Grava mapping automático em `provider_match_mapping` se confidence ≥0.92 (verificado).
- **TR-5.3 (rule)**: `LiveMatchState` — Redis keys conforme §52; TTL 6h em live. Interface exata: matchId, sport, status, clock, score, stats, events, odds, marketSuspension, suspensionReason, marketNextUpdate, updatedAt, dataFreshness por provider.
- **TR-5.4 (rule)**: `SuspensionEngine.suspendMatch(id, { reason, scope })` implementa 10 triggers (GOAL, VAR, RED_CARD, PENALTY, MATCH_STATUS_CHANGE, HALF_TIME, FULL_TIME, STALE_ODDS, ODDS_PROVIDER_DISCONNECT, SCORE_CHANGE, CRITICAL_DATA_MISMATCH).
- **TR-5.5 (rule)**: `ReconciliationEngine` compara Redis vs REST GOAL (score, status) e PropLine (odds_last_change) a cada 3 minutos; se diff score ou status grave → SUSPEND → reconcile → update → fetch odds → reabrir.
- **TR-5.6 (rule)**: `OddsEngine`: valida timestamp, dedup por (bookmaker+market+selection+updatedAt), aplica margem BET62_MARGIN (default 1.06), arredonda odd para 2 decimais (ex: 1.852 → 1.85), marca STALE_ODDS se passou MAX_ODDS_AGE.
- **TR-5.7 (rule)**: `EventEngine` grava todos eventos em `provider_events` com UNIQUE(provider, provider_event_id, sequence) — violação de constraint = saltar (idempotente).

Passos:
1. Criar módulos normalization.
2. Criar matching (resolver + mapping DAO).
3. Criar 6 engines: EventEngine, StatsEngine, OddsEngine, SuspensionEngine, ReconciliationEngine + LiveMatchState wrapper Redis.

---

## Tarefa 6: Settlement Engine (Futebol GOAL + Restantes PropLine)

Status: pending
Priority: medium
Depende de: Tarefa 3, 4, 5
Cobre AC: R3
TR:

- **TR-6.1 (rule)**: `footballSettlement.ts` — só recebe input de `GoalApiOddsProviderService.fetchSettlementOutcome(eventId, selectionId)`; nenhuma importação ou chamada a propline.ts.
- **TR-6.2 (rule)**: `basketballSettlement`, `tennisSettlement`, `baseballSettlement`, `hockeySettlement` só usam PropLine.
- **TR-6.3 (rule)**: Settlement outcome é `WIN | LOSE | PENDING | VOID` — nunca null.

---

## Tarefa 7: Registo no Provider Factory + Module

Status: pending
Priority: high
Depende de: Tarefa 3, 4, 5
Cobre AC: R2 (final), R15 (final)
TR:

- **TR-7.1 (rule)**: `odds-provider.module.ts` (NestJS) declara `GoalApiOddsProviderService` e `ProplineOddsProviderService` como providers + exporta.
- **TR-7.2 (rule)**: `odds-provider.factory.ts` switch baseado em `SPORTS_PROVIDER_CONFIG[sport].<dimension>.provider` retorna instância correcta.
- **TR-7.3 (rule)**: Serviço arranca (`npm run start:dev --filter odds-service`) sem erros DI.

---

## Tarefa 8: UI — Logos Pagamento + Depósito Centralizado

Status: pending
Priority: high
Depende de: — (tarefa frontend paralela)
Cobre AC: R6, R7
TR:

- **TR-8.1 (rule)**: `apps/web/public/payments/mbway.svg`, `multibanco.svg`, `visa.svg`, `mastercard.svg` existem e contêm markup SVG real (não placeholder vazio; abrir e verificar paths/nós).
- **TR-8.2 (rule)**: Novo componente `apps/web/src/components/ui/PaymentMethodLogo.tsx`: prop `method: 'mbway'|'multibanco'|'card'`; 'card' renderiza Visa + MC lado a lado. `next/image` se public/ ou inline SVG.
- **TR-8.3 (rule)**: `apps/web/src/app/carteira/deposito/page.tsx`: Sidebar removida; `<main>` max-w-4xl mx-auto px-4; toda a estrutura (titulo, benefícios, card, métodos) centralizada sem offset lateral.
- **TR-8.4 (rule)**: Nos 3 botões método pagamento (depósito) + nos 3 botões do header quick-deposit modal (Header.tsx linhas 383-456): `PaymentMethodLogo` substitui ícones lucide Smartphone/Banknote/CreditCard.
- **TR-8.5 (rule)**: Cores de borda/background destacadas dos métodos alinham-se com as logos oficiais (MB WAY #009688, Multibanco #0070c9, Card cinza/gradiente).

Passos:
1. Criar SVGs oficiais (extrair brand guidelines Stripe: MB WAY, Multibanco SIBS, Visa, Mastercard).
2. Criar componente PaymentMethodLogo.
3. Refactor deposito/page.tsx (remover Sidebar, centralizar max-w mx-auto).
4. Refactor Header quick-deposit modal.

---

## Tarefa 9: UI — Logos Equipas + Ligas (GOAL API) + TeamLogo Component

Status: pending
Priority: medium
Depende de: —
Cobre AC: R11
TR:

- **TR-9.1 (rule)**: `apps/web/src/components/ui/TeamLogo.tsx` aceita `src?: string`, `name: string`, `color: 'primary'|'secondary'|'accent'`, `size?: number`; renderiza `<img>` ou NextImage se `src`; senão renderiza TeamInitials (fallback).
- **TR-9.2 (rule)**: Em `apps/web/src/app/events/page.tsx`: todas ocorrências `<TeamInitials>` substituídas por `<TeamLogo src={match.logos?.home?} name={m.home} color="primary">`.
- **TR-9.3 (rule)**: Em `apps/web/src/app/live/page.tsx`: divs abreviatura (linhas 273-288) substituídas por `<TeamLogo>`.
- **TR-9.4 (rule)**: Endpoint proxy `/api/client/logo?url=` (opcional) para evitar CORS/hotlinking (retorna 302 ou stream).

---

## Tarefa 10: UI — Página Dedicada Mercado Live `/live/match/[matchId]`

Status: pending
Priority: high
Depende de: Tarefa 9 (usa MatchHeaderCard com TeamLogo)
Cobre AC: R8, R9
TR:

- **TR-10.1 (rule)**: Ficheiro `apps/web/src/app/live/match/[matchId]/page.tsx` existe (App Router dynamic segment); `generateMetadata` retorna meta "<home> vs <away> · BET62 Ao Vivo".
- **TR-10.2 (rule)**: Desktop layout 2 colunas (grid lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] gap-6); coluna direita = MatchHeaderCard (top) + MiniFootballPitch (abaixo). Coluna esquerda = FullMarketsGrid. Mobile: empilhado.
- **TR-10.3 (rule)**: `apps/web/src/app/live/page.tsx`: no handler do botão "Ver todos mercados" (linha ~262) — substituído `setMarketsMatch(match)` por `useRouter().push('/live/match/' + match.id)`. `<EventMarketsModal>` mantém no código mas não é usado (ou removido — decidir conservar para PM caso queira reutilizar). Confirmar: EventMarketsModal import fica no live/page mas setMarketsMatch nunca é usado → não aparece.
- **TR-10.4 (rule)**: `/events` → `apps/web/src/app/events/page.tsx` topo tem `redirect('/')` (ou middleware) para 302 (user pediu para não querer página events).
- **TR-10.5 (rule)**: `MatchHeaderCard.tsx` criado em components/live/: logo liga, nome liga, Badge LIVE dot, período/relógio (min+extra), TeamLogo home grande + nome + score grande font-mono pulse + TeamLogo away + nome; últimos golos linha inferior.
- **TR-10.6 (rule)**: `FullMarketsGrid.tsx` criado em components/live/: agrupa mercados por categoria (Resultado, Mais/Menos, BTTS, Dupla Hipótese, Handicap Asiático, 1º Tempo, 2º Tempo, Jogador), cada grupo colapsável com título e count (ex: "Resultado (1)"). Seleção clicável → betslip. Suspensão visual (cinzento + badge suspenso + reason).
- **TR-10.7 (rule)**: Badge `dataFreshness.stale ? "⚠️ Odds em atualização" : ""` mostrado no topo da página ao lado do badge LIVE.

---

## Tarefa 11: UI — Mini-Campo de Futebol com Commentary Sync

Status: pending
Priority: high
Depende de: Tarefa 10
Cobre AC: R10
TR:

- **TR-11.1 (rule)**: `apps/web/src/components/live/MiniFootballPitch.tsx` existe; renderiza SVG viewBox 0 0 105 68 (proporção oficial campo FIFA 105x68m), com linhas (meio-campo, círculo central, áreas, balizas, cantos). Verde relvado (`#1e5631` ou similar, não neon).
- **TR-11.2 (rule)**: Função pura `commentaryToBallPosition(comment: string, minute: number, homePossessionPct?: number): {x: number; y: number; zone: string}` exportada do ficheiro (ou separado `utils/pitch-position.ts`). Testes mentais:
  - "Cross into the penalty area by the home team" → {x:88, y:34, zone: "home_attack_box"}
  - "Throw in for away team in defensive third" → {x:18, y:50, zone: "away_defensive"}
  - "Midfield battle" + homePos 55 → {x:52, y:34, zone: "midfield"}
  - "Corner, home team, left side" → {x:96, y:12, zone: "home_corner_left"}
- **TR-11.3 (rule)**: Bola (círculo SVG branco c/preto stroke) tem `style={{transition: 'cx 600ms ease, cy 600ms ease'}}` — move suavemente entre posições.
- **TR-11.4 (rule)**: Recebe prop `commentary: { text: string; minute: number } | null` + `score {home, away}` + `stats { possession }`; usa useMemo para calcular posição.
- **TR-11.5 (rule)**: Ícones de eventos no top (cartoes amarelos/vermelhos + cantos + subs) por equipa (esquerda=home, direita=away) — actualizados via prop events[].
- **TR-11.6 (rule)**: Responsivo: desktop w-full aspect-[16/9] (max-w-lg); mobile w-full aspect-[4/3].

---

## Tarefa 12: Frontend Websocket + LiveMatchState local (simplificado)

Status: pending
Priority: medium
Depende de: Tarefa 10, 11
Cobre AC: R9 (parcial actualização)
TR:

- **TR-12.1 (rule)**: `apps/web/src/lib/socket.ts` exporta `useLiveMatch(matchId)` hook; connecta ao gateway/odds-service WS endpoint; retorna `{ state: LiveMatchState, connected: boolean }`.
- **TR-12.2 (rule)**: Página `/live/match/[matchId]` usa hook e actualiza MatchHeader (score/clock/liga), MiniFootballPitch (commentary, posse, events), FullMarketsGrid (odds + suspension). Re-render apenas campos que mudam.

---

## Tarefa 13: Final — Apagar ESBOSTO + Smoke Tests

Status: pending
Priority: medium
Depende de: Todas as tarefas 1-12
Cobre AC: R12
TR:

- **TR-13.1 (rule)**: `c:\Users\israe\Desktop\bet62\ESBOSTO` não existe (verificar com LS).
- **TR-13.2 (rule)**: Build do monorepo passa: `pnpm install --frozen-lockfile`; `pnpm -r run typecheck`; `pnpm -r run build` (ou `--filter web --filter odds-service --filter shared --filter db`).
- **TR-13.3 (rule)**: Lint sem erros: `pnpm -r run lint` (se existir).
- **TR-13.4 (rule)**: Ficheiros ESBOSTO não são referenciados por nenhum import em todo o repo (grep "ESBOSTO" retorna 0 matches em src/).

---

## Sumário Prioridades

| Tarefa | Priority | Dependências |
|---|---|---|
| 1. Config Shared + Env | high | — |
| 2. DB Schema | high | 1 |
| 3. Provider GOAL API | high | 1, 2 |
| 4. Provider PropLine | high | 1, 2 |
| 5. Normalization + Matching + 6 Engines | high | 1-4 |
| 6. Settlement Engine | medium | 3-5 |
| 7. Registo Factory | high | 3-5 |
| 8. UI Depósito + Logos pagamento | high | — |
| 9. UI TeamLogo + Logos GOAL | medium | — |
| 10. Página dedicada /live/match/[id] | high | 9 |
| 11. MiniFootballPitch + commentaryToBallPosition | high | 10 |
| 12. Frontend WS hook | medium | 10,11 |
| 13. Apagar ESBOSTO + Build/Lint | medium | 1-12 |
