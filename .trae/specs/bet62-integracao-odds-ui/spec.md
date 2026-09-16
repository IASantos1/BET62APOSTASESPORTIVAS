# BET62 — Integração Providers + UI Avançada (Especificação)

## 1. Problema, Objetivos e Não-Objetivos

### Problema
O Bet62 atualmente usa providers mockados/thesportsdb e possui três lacunas críticas:
1. **Integração**: Não há implementação real das fontes GOAL API (futebol) e PropLine (odds + outros esportes) conforme arquitetura do ESBOSTO.
2. **UI Depósito**: Métodos MBWAY/Multibanco/Cartão não estão centralizados e não exibem logos oficiais da Stripe.
3. **UI Mercados Live**: A visualização de mercados está numa modal restrita; o utilizador quer uma página full-screen dedicada, com mini-campo de futebol e sincronia de commentaries.
4. **Logos**: Times e ligas de futebol usam abreviaturas/textuais e não as logos oficiais da GOAL API.

### Objetivos
1. Implementar arquitetura **BET62 SPORTS CORE** com GOAL API (source-of-truth futebol dados) + PropLine (source-of-truth odds + outros esportes), incluindo Normalization, Matching, Live Engine, Suspension Engine, Settlement Engine, Redis State e persistência Postgres (tabelas de mapping, odds_snapshots, stats_snapshots, provider_events).
2. Corrigir página de depósito: layout centralizado sem sidebar esquerda compacta, logos oficiais Stripe (MB WAY, Multibanco, Visa, Mastercard) renderizados em alta qualidade.
3. Criar **página dedicada de mercado live** (`/live/match/[matchId]`): ao clicar "Ver todos mercados" em `/live`, a listagem de live é ocultada/substituída por uma página full-screen com header (nome partida, placar, relógio, liga), mini-campo de futebol sincronizado com commentary GOAL API, e grelha completa de mercados/odds.
4. Renderizar logos oficiais de equipas e ligas da GOAL API em toda a UI (live, events, página dedicada).
5. Apagar ficheiro `ESBOSTO` no final da implementação.

### Não-Objetivos
- Não integrar GOAL API live odds (documentado ~2min de latência, usar apenas PropLine para odds).
- Não criar mini-campo para outros esportes nesta fase (apenas futebol).
- Não refatorar estrutura do monorepo; adicionar código dentro de `services/odds-service`, `packages/shared`, `apps/web`.
- Não implementar KYC, bónus, wallet ou autenticação — estes já existem.
- Não substituir providers existentes (sportsdb, mock); os novos providers registam-se paralelamente via `odds-provider.module.ts`.

---

## 2. Requisitos Funcionais

### MÓDULO A — INTEGRAÇÃO BACKEND (Services/Odds-Service + Shared + DB)

**A1. Configuração Central de Providers**
- Em `packages/shared/src/config/odds.config.ts` (ou novo ficheiro `sports-provider.config.ts` no shared): `SPORTS_PROVIDER_CONFIG` com mapa desporto→data/odds/settlement provider, exatamente como no ESBOSTO §50.
- Adicionar env vars: `GOAL_API_KEY`, `GOAL_API_BASE_URL=https://api.goal-api.com/v1`, `GOAL_API_WS_URL=wss://api.goal-api.com/ws`, `PROPLINE_API_KEY`, `PROPLINE_API_BASE_URL=https://api.prop-line.com/v1`, `PROPLINE_WS_URL=wss://ws.prop-line.com/v1/stream` em `.env.example` e `.env.railway.example`.

**A2. Provider GOAL API (Futebol = SOURCE OF TRUTH Dados)**
- Criar em `services/odds-service/src/odds-provider/goalapi/`:
  - `client.ts`: cliente HTTP (fetch base + auth Bearer) para todos endpoints listados ESBOSTO §4 (fixtures, live, events, cards, substitutions, commentary, statistics, teams, leagues, standings, H2H, results, videos, news).
  - `websocket.ts`: conexão `wss://api.goal-api.com/ws` com troca de token via `POST /v1/ws/token`, handshake, subscribe/unsubscribe por fixtureId, dedup por `match_update.timestamp` interno, reconexão exponencial + resubscribe, heartbeat.
  - `webhook.ts`: handler para receber eventos (validação opcional se assinatura existir), entra no mesmo `EventDeduplicator` do WS.
  - `adapter.ts`: normaliza resposta GOAL → `Bet62Clock`, `FootballStats` (ESBOSTO §7, §8), `Bet62LiveEvent` (§9), converte `match_period` GOAL (`NOT_STARTED|FIRST_HALF|HALF_TIME|SECOND_HALF|EXTRA_TIME|PENALTIES|FINISHED`), `kickoffUtc` como UTC canónico.
  - `mapper.ts`: mapeia equipas/competições para chaves normalizadas.
  - `fixtures.ts`, `events.ts`, `stats.ts`, `lineups.ts`: módulos especializados.
  - `types.ts`: tipos TypeScript de resposta GOAL (fixture, ws match_update, commentary, statistics, lineups).
  - `index.ts`: exporta `GoalApiOddsProviderService` extends `AbstractOddsProvider`.
- Garantir que **settlement do futebol usa APENAS dados GOAL**, nunca PropLine (ESBOSTO §36).

**A3. Provider PropLine (Odds + Outros Desportos = SOURCE OF TRUTH)**
- Criar em `services/odds-service/src/odds-provider/propline/`:
  - `client.ts`: REST com header `X-API-Key` ou query `?apiKey=`, respeita `Retry-After` em 429, lê headers de quota `X-Daily-*` e `RateLimit-*`.
  - `websocket.ts`: `wss://ws.prop-line.com/v1/stream`, autenticação, leitura de `seq`, `created_at`, `sent_at`, `event_type`, `data`, reconexão com `since_seq` para replay de eventos perdidos (ESBOSTO §15).
  - `webhook.ts`: assinatura/validação, passa por deduplicador.
  - `adapter.ts`: normaliza `Bet62Odd`, `Bet62Market`, `Bet62Selection`, `Bet62Bookmaker`, `Bet62Score` (ESBOSTO §12–§14, §27, §40); **nunca envia bookmakers array cru para o frontend** (§41): o Bet62 decide qual book/linha publicar, aplicando margem própria.
  - `mapper.ts`: mapeamento de mercados/desportos/periodos (§39 type Period).
  - `odds.ts`, `scores.ts`, `stats.ts`, `markets.ts`, `bookmakers.ts`: módulos especializados; `stats.ts` implementa mapeamento das estatísticas por desporto (ESBOSTO §17–§25).
  - `types.ts`: interfaces completas PropLine (event, odds, bookmaker, market, outcome line, timestamps: recorded_at, book_updated_at, last_change_at, last_seen_at, liquidity, etc. conforme docs).
  - `index.ts`: exporta `ProplineOddsProviderService`.
- Distinção Push vs Polled Books (ESBOSTO §14): `MAX_ODDS_AGE` diferenciado por categoria, live/prematch, livro.

**A4. Camada Normalization + Matching**
- Em `services/odds-service/src/sports/normalization/`:
  - `teams.ts`: `normalizeTeamName()` — lowercase, remover acentos/pontuação, remover FC/CF/SC quando apropriado, normalizar abreviaturas (ex: "Sport Lisboa e Benfica" ↔ "SL Benfica").
  - `competitions.ts`: normalização de ligas + validação country para desambiguação ligas genéricas.
  - `timestamps.ts`: UTC enforcement via `kickoffUtc`.
  - `players.ts`: nome normalizado (opcional, para props).
- Em `services/odds-service/src/sports/matching/`:
  - `matchResolver.ts`: algoritmo matching (ESBOSTO §30–§31) prioridade: mapping persistido > stable team keys > nomes normalizados > kickoff UTC (tolerância ±6h) > competição > desporto; cálculo de `confidence NUMERIC(5,4)`.
  - `providerMapping.ts`: operações CRUD sobre `provider_match_mapping` (§32) com `UNIQUE(provider, provider_event_id)`.
- `Bet62Match` interface implementada conforme ESBOSTO §29 em `packages/shared/src/interfaces/odds.interface.ts`.

**A5. Camada Live Core**
- Em `services/odds-service/src/sports/live/`:
  - `LiveMatchState.ts`: Redis key `bet62:live:{matchId}` com interface §33 (sport, status, clock, score, stats, events, odds, marketSuspension, suspensionReason, marketNextUpdate, updatedAt).
  - `EventEngine.ts`: processa `Bet62LiveEvent`, dedup por (provider, event_id/seq), aplica score/status/events.
  - `StatsEngine.ts`: injeta FootballStats e estatísticas outros desportos.
  - `OddsEngine.ts`: valida timestamp, dedup, normalização mercados, margem Bet62, arredondamento odds (§42), deteção `STALE_ODDS` → `suspended=true reason=STALE_ODDS` (§43).
  - `SuspensionEngine.ts`: suspende em: GOAL, VAR, RED_CARD, PENALTY, MATCH_STATUS_CHANGE, HALF_TIME, FULL_TIME, STALE_ODDS, ODDS_PROVIDER_DISCONNECT, SCORE_CHANGE, CRITICAL_DATA_MISMATCH (§44); interface `suspendMatch(matchId, {reason, scope})`.
  - `ReconciliationEngine.ts`: periodicamente compara Redis state vs REST (GOAL/PropLine); se mismatch → SUSPEND ALL → reconcile → update → fetch odds → reopen (§45).

**A6. Settlement Engine**
- Em `services/odds-service/src/sports/settlement/`:
  - `footballSettlement.ts`: 100% GOAL API (final score, goals, cards, events, match status) — §36.
  - `basketballSettlement.ts`, `tennisSettlement.ts`, `baseballSettlement.ts`, `hockeySettlement.ts`: 100% PropLine (§37–§38).

**A7. Persistência Postgres**
- Em `packages/db/src/schema/index.ts` (ou drizzle schema novo se Drizzle, caso prisma no odds-service): adicionar tabelas:
  - `provider_match_mapping` (ESBOSTO §32): UUID PK, bet62_match_id, provider, provider_event_id, provider_home/away_team_key, confidence, verified, timestamps, UNIQUE.
  - `provider_events` (§46): UUID PK, provider, provider_event_id, sequence BIGINT, event_type, payload JSONB, processed, UNIQUE(provider, provider_event_id, sequence).
  - `odds_snapshots` (§54): match_id, provider, bookmaker, market_key, selection_key, period, price NUMERIC, point, provider_updated_at, received_at, suspended.
  - `match_stats_snapshots` (§55): match_id, provider, period, stats JSONB, provider_updated_at, received_at.
  - `matches`, `teams`, `competitions`, `players`, `match_events`, `match_statistics`, `markets`, `market_selections`, `bookmakers`, `settlements`: mencionadas §53 (criar apenas as faltantes; manter coerência com schemas prisma já existentes nos serviços).
- Se provider usar Drizzle (`packages/db`), criar em schema Drizzle; se usar Prisma no odds-service, adicionar no `prisma/schema.prisma` do `odds-service` e gerar migration.

**A8. Cache Redis Keys**
- Documentar política: `bet62:match:{id}`, `bet62:live:{id}`, `bet62:odds:{id}`, `bet62:stats:{id}`, `bet62:provider:goal:{fixtureId}`, `bet62:provider:propline:{eventId}`, `bet62:mapping:{sport}:{home}:{away}` (ESBOSTO §52).
- Adicionar `dataFreshness` object (§56) em cada payload: `{provider, sourceUpdatedAt, receivedAt, latencyMs, stale}`.

**A9. Registo no Odds Provider Factory**
- Em `services/odds-service/src/odds-provider/odds-provider.module.ts` e `odds-provider.factory.ts`: registar `GoalApiOddsProviderService` e `ProplineOddsProviderService`; selector activo conforme `SPORTS_PROVIDER_CONFIG`.

---

### MÓDULO B — UI PÁGINA DEPÓSITO (apps/web)

**B1. Layout Centralizado Sem Sidebar Esquerda**
- Em `apps/web/src/app/carteira/deposito/page.tsx`:
  - Remover `<Sidebar compact />` e wrapper `<div className="flex">` à esquerda.
  - O `<main>` deve ocupar 100% width, com `max-w-3xl` (ou 4xl) **`mx-auto`** em toda a estrutura (benefits + card).
  - Título e card de métodos de pagamento devem estar visualmente ao centro da viewport, sem desvio.

**B2. Logos Oficiais Stripe por Método**
- Criar componente `apps/web/src/components/ui/PaymentMethodLogo.tsx` que renderiza as logos oficiais em SVG/PNG a partir da documentação Stripe (Payment Method Brand Icons).
- Métodos suportados:
  - **MB WAY**: logótipo oficial MB WAY (cores verde `#009688`) em fundo branco ou verde.
  - **Multibanco**: logótipo SIBS Multibanco oficial (azul `#0070c9` + vermelho).
  - **Cartão**: mostrando **logótipo Visa** (azul + dourado) e **logótipo Mastercard** (vermelho + laranja sobrepostos) lado a lado.
- Ficheiros: colocar SVGs em `apps/web/public/payments/` (ex: `mbway.svg`, `multibanco.svg`, `visa.svg`, `mastercard.svg`) extraídos de brand guidelines oficiais Stripe/MB WAY/SIBS, ou via `https://js.stripe.com/v3/` payment method icons API.
- Em cada botão método (depósito page e header quick-deposit modal): substituir `<Smartphone/>`, `<Banknote/>`, `<CreditCard/>` do lucide-react pelos logos reais (h-10/w-10, preservando proporção).
- Ajustar highlight border/accent para combinar com as cores das logos.

**B3. Logos Também no Header Quick-Deposit Modal**
- Em `apps/web/src/components/layout/Header.tsx` (linhas 382-457): aplicar mesmos `PaymentMethodLogo` em vez de ícones genéricos do lucide.
- Este componente também usa as mesmas SVGs partilhadas de `public/payments/`.

---

### MÓDULO C — UI PÁGINA DEDICADA DE MERCADO LIVE (apps/web)

**C1. Nova Rota `/live/match/[matchId]`**
- Criar `apps/web/src/app/live/match/[matchId]/page.tsx` (Next.js App Router dynamic segment).
- Layout: `<Header />` no topo, depois **duas colunas desktop**:
  - **Coluna Esquerda (~65-70%)**: grelha completa de mercados (1X2, Dupla Hipótese, Over/Under, BTTS, Asian Handicap, Period Markets: 1º Tempo, 2º Tempo, Quartos etc. — todos mercados vindos do `OddsEngine` normalizado).
  - **Coluna Direita (~30-35%)**: em CIMA `MatchHeaderCard` (informações partida) + `MiniFootballPitch` (campo miniatura com bola sincronizada).
- Mobile: empilhar verticalmente (MatchHeader + MiniCampo primeiro, depois mercados).
- **Sem Sidebar compacta** nesta página (ou só menu toggle).
- **Remover EventMarketsModal** de `live/page.tsx`: o botão "Ver todos mercados" (linha ~262-268) deve fazer `router.push('/live/match/${match.id}')` usando `useRouter` em vez de `setMarketsMatch(match)`.
- **Desativar/remover `/events`** (ESBOSTO não menciona, usuário disse: "foi criada uma página de mercados, só que essa página de mercados eu não quero" — interpretado como: não quer uma listagem pré-jogos genérica separada; redirecionar `/events` para `/` ou manter apenas `/live` dedicado e upcoming dentro da home). Confirmado, mas AC de redirect incluído.

**C2. MatchHeaderCard (Dados da Partida + Logos)**
- Criar `apps/web/src/components/live/MatchHeaderCard.tsx`:
  - Linha superior: **logo da liga** (GOAL API) + nome liga + Badge LIVE + período/relógio.
  - Bloco central: **logo equipa casa** (h-14/w-14) + nome equipa casa + score grande (font-mono) + logo equipa fora + nome equipa fora.
  - Linha inferior: últimos golos (hora/minuto + jogador), cartões, cantos em linha.
  - Todos os campos reagem ao WebSocket live state.
  - Logos vêm da GOAL API (através de novo campo `team.logoUrl` e `league.logoUrl` no adapter).

**C3. Mini-Campo de Futebol (MiniFootballPitch)**
- Criar `apps/web/src/components/live/MiniFootballPitch.tsx`:
  - Renderização SVG de um campo de futebol (retângulo verde, duas meias luas, balizas, círculo central, proporção 105:68 padrão).
  - **Posição da bola**: um ponto SVG que se move consoante eventos de commentary da GOAL API.
  - **Lógica de mapeamento commentary → posição**:
    - GOAL API `/fixtures/:id/commentary` e WS commentary events trazem campo `minute` + texto ("Attack down the left", "Cross into the box", "Goal kick for the home side", "Corner, Home team", "Free kick awarded in attacking third", etc.).
    - Criar `commentaryToBallPosition(text, minute, homePossessionPct): {x: number 0..100, y: number 0..100, zone: string}`:
      - Palavras-chave → zona (ex: "box", "penalty" → `x≈85 home attacking` ou `x≈15 away attacking`); "midfield" → `x≈50`; "defensive third" → `x≈25/75`; "corner" → `x≈95/y≈10` (home canto) ou consoante canto.
      - Ajusta lado consoante posse (home >50% tende a mover para direita).
      - Interpolação suave (transition CSS/SVG) entre posições para não dar "saltos".
    - Se houver evento de golo → bola anima até rede do lado sofredor.
    - Se cartão → flash amarelo/vermelho pequeno no canto.
  - **Marcadores de eventos recentes**: cantos, cartões, substituições mostrados como pequenos ícones nos cantos do mini-campo (esq = home, dir = away).
  - **Responsivo**: no desktop ocupa o topo da coluna direita (w-100% aspect-[16/9] ou 4/3); no mobile full width após o header.

**C4. Grelha Completa de Mercados**
- Criar `apps/web/src/components/live/FullMarketsGrid.tsx`:
  - Agrupamento por categorias: "Resultado", "Mais/Menos", "Ambas Marcam", "Dupla Hipótese", "Asian Handicap", "1º Tempo", "2º Tempo", "Jogador" (Player Props), etc.
  - Cada mercado expandível/colapsável com `ChevronRight` de toggle.
  - Cada selecção: preço formatado `formatOdds`, botão clicável adiciona à betslip (igual addOdd atual).
  - Suspensão visual: mercado cinzento + badge "SUSPENSO" + razão (ex: "Golo a ser verificado") quando `marketSuspension=true` no LiveMatchState.
  - Badge de **frescura das odds**: se `dataFreshness.stale=true` mostra "⚠️ Odds em atualização".

**C5. Integração Com Websocket Frontend**
- Em `apps/web/src/lib/socket.ts`: ligação WS ao endpoint odds-service (que retransmite GOAL + PropLine).
- Na página `/live/match/[matchId]`: `subscribe('match:' + matchId)` no mount, unsubscribe unmount. Atualiza `LiveMatchState` local em React state, re-render header, mini-campo e mercados.

---

### MÓDULO D — LOGOS DE EQUIPAS E LIGAS (GOAL API)

**D1. Campos Logo no Adapter**
- Em `goalapi/adapter.ts`: extrair `team_logo_url` e `league_logo_url` dos endpoints `/teams/:id` e `/leagues/:id` da GOAL API (documentação indica `strTeamBadge`/`strBadge` ou equivalente no formato GOAL; documentação Teams e Leagues da GOAL API expõem logo URLs).
- Adicionar campos `logoUrl?: string` a `Bet62Match.homeTeam.logoUrl`, `Bet62Match.awayTeam.logoUrl`, `competitionLogoUrl`.
- Cache logos em Redis e servir via API endpoint `/api/client/logo?url=...` (proxying para evitar CORS e hotlinking, com fallback para gradiente/abreviaturas se logo não existir).

**D2. Substituir TeamInitials por Logos**
- Em `apps/web/src/app/events/page.tsx`: `<TeamInitials>` é substituído por `<TeamLogo src={logoUrl} name={name} color={color}>` que mostra `<img>` se logo existir, senão fallback para iniciais.
- Em `apps/web/src/app/live/page.tsx`: mesmo, substituir as divs abreviatura (linha ~273-288) por `<TeamLogo>`.
- Em `apps/web/src/components/live/MatchHeaderCard.tsx`: logos grandes (h-16/w-16).
- Componente `apps/web/src/components/ui/TeamLogo.tsx` novo, partilhado.

**D3. Logo de Liga**
- Em live/events: ao lado do nome da liga (Badge), renderizar mini-logo (h-5/w-5) se existir.
- Em `MatchHeaderCard`: logo da liga no topo.

---

### MÓDULO E — TAREFAS FINAIS

**E1. Apagar Ficheiro ESBOSTO**
- Remover `c:/Users/israe/Desktop/bet62/ESBOSTO` do disco e do git (se trackeado — atualmente não está no .gitignore, verificar).

---

## 3. Requisitos Não-Funcionais

- **Performance**: WebSocket reconecta <3s com backoff exponencial; latency de eventos WS até ao Redis <100ms.
- **Idempotência**: `provider_events` garante que nenhum evento é processado duas vezes (UNIQUE constraint).
- **Robustez**: ReconciliationEngine corre a cada X minutos configurável; se houver mismatch grave → SUSPENDE mercados até reconciliar.
- **UI/UX**: Toda a UI mantém estética profissional sóbria, vermelho+branco (já estabelecida no tema theme.css); mini-campo verde suave (não neon); animações suaves, sem brilhos.
- **Acessibilidade**: Logos têm `alt` attribute descritivo; SVGs usam `role="img"` e `<title>` se inline.
- **Type Safety**: Todos os tipos GOAL/PropLine totalmente em TypeScript (`types.ts`), `strict: true` mantido.
- **Latência**: Não expor GOAL live-odds ao usuário (§60 latência ~2min); odds futebol vêm apenas PropLine. Push books: mostrar atualizações em ~1-2s; polled books: até ~30-90s (ESBOSTO §14 + §26).
- **Segurança**: API keys nunca chegam ao frontend; toda a comunicação providers → backend.
- **Escalabilidade**: Estrutura preparada para substituir SportsDB/Mock pelos providers reais sem downtime.

---

## 4. Restrições, Dependências, Suposições, Perguntas Abertas

### Restrições
- Futebol: **NUNCA** usar PropLine para settlement; apenas GOAL API.
- Futebol: odds somente PropLine, não GOAL live-odds.
- Não usar Poisson/baseOdds (project memory hard constraint).
- Logos de pagamento MB WAY/Multibanco devem ser os **logos oficiais** das marcas (não ícones genéricos).

### Dependências
- `stripe` SDK já está instalado no wallet-service (confirmado).
- `framer-motion`, `lucide-react`, `next@app router` já existem no frontend (confirmado).
- `@nestjs/schedule` já usado em sportsdb provider (SchedulerRegistry).
- Redis e PostgreSQL já configurados no projecto (já existem services que os usam).
- Chaves API GOAL_API_KEY e PROPLINE_API_KEY devem ser fornecidas pelo utilizador em produção (ficam no .env local + Railway vars).

### Suposições
- A GOAL API expõe campos de logo de equipa e liga nos endpoints Teams e Leagues.
- A GOAL API commentary `/fixtures/:id/commentary` devolve entradas com `comment`, `minute`, podendo incluir referências a zonas do campo (ataque, defesa, área, etc.).
- Stripe Payment Method Brand Icons para MB WAY/Multibanco/Visa/Mastercard são publicamente acedíveis e permitem uso em checkout UIs.
- As tabelas `matches`, `teams`, `competitions` (§53) em parte já existem em packages/db/schema ou no prisma do odds-service; só adicionamos as que faltam.

### Perguntas Abertas
1. **Quer manter `/events` como redirecionamento para `/` (destaques) ou removê-la totalmente e só ter upcoming nos destaques home?** → Requisito do utilizador: "foi criada uma página de mercados só que essa página eu não quero". Assumido: `/events` → redirect 302 para `/` ou embutir upcoming na home. Implementaremos redirect + manter componentes reutilizáveis.
2. **Planos GOAL API (Basic/Pro/Enterprise) vs PropLine (quota diária)**: valores ficam como env, não hard-coded.

---

## 5. Critérios de Aceitação (AC)

### Regras (condição binária observável)

| ID | Regra | Fonte evidência |
|---|---|---|
| R1 | Existe `SPORTS_PROVIDER_CONFIG` em `packages/shared/src/config/` a mapear futebol→(data=goal_api, odds=propline, settlement=goal_api), restantes→propline tudo. | Leitura do ficheiro TS + typecheck. |
| R2 | Existem diretórios `services/odds-service/src/odds-provider/goalapi/` e `propline/` com `client.ts`, `websocket.ts`, `adapter.ts`, `mapper.ts`, `types.ts`, módulos especializados, `index.ts`. | `LS` das pastas + imports. |
| R3 | Provider football settlement usa **apenas** dados de `GoalApiOddsProviderService`; nenhuma propagação settlement odds PropLine para futebol. | Leitura de `footballSettlement.ts` + testes unitários se existirem. |
| R4 | Tabelas `provider_match_mapping`, `provider_events`, `odds_snapshots`, `match_stats_snapshots` existem no schema definido (Drizzle/Prisma), com UNIQUE constraints conforme ESBOSTO §32, §46, §54, §55. | Leitura do schema + migration SQL gerado. |
| R5 | Camadas `LiveMatchState`, `EventEngine`, `OddsEngine`, `SuspensionEngine`, `ReconciliationEngine` existem em `services/odds-service/src/sports/live/`; `SuspensionEngine` tem triggers para GOAL, VAR, RED_CARD, PENALTY, HALF_TIME, FULL_TIME, STALE_ODDS, SCORE_CHANGE, CRITICAL_DATA_MISMATCH. | LS + leitura código. |
| R6 | Página `/carteira/deposito` é visualmente centralizada (max-w + mx-auto) SEM Sidebar compacta à esquerda; os cards de métodos ocupam largura total do contentor centralizado. | Screenshot ou inspecção DOM do layout (margin-left auto, grid alinhado). |
| R7 | Cada método de pagamento (depósito + modal header) mostra **logo oficial MB WAY, Multibanco, Visa, Mastercard** (não ícones lucide Smartphone/Banknote/CreditCard). Verificar que `public/payments/*.svg` existem com conteúdo real (não placeholder). | LS dos SVGs + inspecção rendered HTML. |
| R8 | Existe página `/live/match/[matchId]` com App Router; botão "Ver todos mercados" em `/live/page.tsx` faz router.push para esta rota e **não abre mais EventMarketsModal**. | Código do handler de clique (remover setMarketsMatch, adicionar router.push). |
| R9 | `/live/match/[matchId]` renderiza: header da partida (logos equipa/liga, placar, relógio, LIVE badge) + `MiniFootballPitch` + grelha completa de mercados agrupados por categoria. | Inspecção da árvore React, 3 secções presentes. |
| R10 | `MiniFootballPitch` implementa lógica `commentaryToBallPosition` que mapeia texto/posse para {x, y} em 0..100 e move a bola com animação CSS/SVG suave. | Leitura do `commentaryToBallPosition` + simulação manual de comentários ("attack left", "box", "midfield", "corner") → posição esperada. |
| R11 | Logos GOAL API: componente `TeamLogo` recebe `src` e renderiza `<img>` se existir, fallback para iniciais se `src` null. Em live page e events page as abreviaturas foram substituídas por TeamLogo. | Código do componente + leitura live/events page (substituição ocorreu). |
| R12 | Ficheiro `c:\Users\israe\Desktop\bet62\ESBOSTO` **não existe** no disco após conclusão. | `LS` da pasta bet62. |
| R13 | Variáveis de ambiente `GOAL_API_*` e `PROPLINE_*` estão documentadas em `.env.example` e `.env.railway.example`. | Grep/env.example. |
| R14 | `MAX_ODDS_AGE` diferenciado por book_type (push/polled), live/prematch, mercado; odds stale são marcadas `suspended=true reason=STALE_ODDS`. | Código OddsEngine. |
| R15 | Nenhum provider cru (PropLine bookmakers array bruto) chega ao frontend; adapter sempre normaliza para `Bet62Market / Bet62Selection` com preço decidido pelo OddsEngine. | Leitura dos endpoints públicos (`/api/client/*` ou odds-gateway) + log de uma resposta — ausência de chave "bookmakers" crua. |

### Rubricas (avaliação qualitativa com threshold mínimo = 3/5 em todos)

| ID | Dimensão | Escala | Anchors | Threshold | Evidência |
|---|---|---|---|---|---|
| U1 | **Robustez geral da arquitetura** (separação de preocupações, GOAL vs PropLine isolados, deduplicação eventos, reconciliação, persistência). | 0–5 | 0=monólito acoplado, 2=funciona mas mistura responsabilidades, 3=bom isolamento + engines claras, 4=deduplicação/reconciliação robustos, 5=auditoria completa e latência medida | ≥3 | Revisão de código e cobertura das 7 engines + tabelas. |
| U2 | **Qualidade visual do depósito** (centralização real, proporção e clareza das logos oficiais, alinhamento, legibilidade). | 0–5 | 0=tudo desalinhado/ícones genéricos, 2=alinhado mas logos ruins, 3=centralizado e logos aceitáveis, 4=profissional, alinhamento pixel-perfect, 5=checkout polido | ≥3 | Screenshot final da página. |
| U3 | **Qualidade da página mercado dedicada** (organização mercados, mini-campo útil, header informativo, navegação intuitiva, suspensões visíveis). | 0–5 | 0=caótica, 2=funcional mas feia, 3=bom layout, mercados organizados, mini-campo visível, 4=excelente UX live, 5=detalhes de micro-animação e frescura odds | ≥3 | Screenshot + walkthrough UI. |
| U4 | **Fidelidade à especificação do ESBOSTO** (§1–§61 implementados na íntegra: matching confidence, dataFreshness, since_seq reconn, period markets, bookmaker push/polled distinction). | 0–5 | 0=nenhum ponto do ESBOSTO implementado, 2=metade dos pontos implementados superficialmente, 3=80% dos pontos presentes, 4=tudo exceto detalhes, 5=100% fiel incluindo corner cases | ≥3 | Checklist item a item vs ESBOSTO. |
