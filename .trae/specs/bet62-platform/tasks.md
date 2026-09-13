# BET62 APOSTAS ESPORTIVAS - Implementation Plan

## Arquitetura Geral (Slicing Vertical)
- **Monorepo Structure**: Turborepo / npm workspaces
- **Root packages**: `@bet62/shared` (DTOs, enums, types), `@bet62/infra` (docker-compose, nginx)
- **Microservices (NestJS 10.x + Prisma)**: `api-gateway`, `auth-service`, `user-service`, `kyc-service`, `wallet-service`, `odds-service`, `bets-service`, `casino-service`, `bonus-service`, `notifications-service`, `admin-service`
- **Frontend (Next.js 14 App Router)**: `web` - PWA, dark theme futurista, Tailwind CSS + shadcn/ui + Framer Motion
- **Bancos**: PostgreSQL 16 (1 schema por microserviço, ou 1 DB por serviço), Redis 7 (cache + BullMQ queues + Streams)
- **Comunicação**: REST via API Gateway + eventos assíncronos via Redis Streams/BullMQ

---

## Task 1: Setup Monorepo e Infraestrutura Base (Docker + Nginx + Env)
- **Status**: `pending`
- **Priority**: high
- **Depends On**: None
- **Description**:
  - Criar estrutura monorepo com npm workspaces + TypeScript 5 strict mode
  - Criar `docker-compose.yaml` com: PostgreSQL, Redis, Nginx, Redis Insight, pgAdmin
  - Criar `nginx.conf` com roteamento: `/api/auth/*`, `/api/user/*`, `/api/kyc/*`, `/api/wallet/*`, `/api/odds/*`, `/api/bets/*`, `/api/casino/*`, `/api/bonus/*`, `/api/notifications/*`, `/api/admin/*`, `/*` → web Next.js
  - Criar pacote `@bet62/shared` com: interfaces base (User, WalletTransaction, Bet, Event, etc), enums (BetStatus, KYCLevel, EventStatus, etc), DTOs validados com class-validator/class-transformer
  - Setup `.env.example` com todas variáveis: chaves Stripe, Sumsub, API Odds, JWT Secret, Redis, PostgreSQL, SMTP, VAPID
  - Criar `.gitignore`, `tsconfig.base.json`, `.eslintrc`, `.prettierrc`
- **Acceptance Criteria Addressed**: AC-8
- **Test Requirements**:
  - `rule` TR-1.1: Rodar `docker-compose up -d` e acessar pgAdmin na porta 5050, Redis Insight 8001, nginx na 80 sem erros
  - `rule` TR-1.2: Todos 11 pacotes inicializados com NestJS CLI ou Next.js; TypeScript strict ligado; `@bet62/shared` importável via alias
  - `rubric` TR-1.3: Estrutura de pastas, scale 1-5; 1=bagunçado, 3=aceitável, 5=padrão enterprise limpo; threshold >= 4
- **Notes**: Salvar arquivos docker-compose, nginx e monorepo package.json

---

## Task 2: Auth Microservice (Registro, Login, JWT, 2FA)
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 1
- **Description**:
  - NestJS microservice na porta 3001: módulo Auth com Prisma schema próprio (`auth` DB/schema)
  - Endpoints: `POST /api/auth/register`, `POST /api/auth/login`, `POST /api/auth/refresh`, `POST /api/auth/logout`, `POST /api/auth/logout-all`, `POST /api/auth/forgot-password`, `POST /api/auth/reset-password`, `POST /api/auth/2fa/enable`, `POST /api/auth/2fa/verify`, `POST /api/auth/2fa/disable`, `GET /api/auth/me`
  - JWT: Access Token 15min + Refresh Token 7d (cookie httpOnly + secure); argon2 para hash de senha
  - Guards: `JwtAuthGuard`, `JwtRefreshGuard`, `RolesGuard`, `ThrottlerGuard` (rate limit: 5 req/1min login, 100 req/1min geral)
  - Emitir evento `user.created` no Redis Stream após registro bem-sucedido
- **Acceptance Criteria Addressed**: AC-1, AC-9
- **Test Requirements**:
  - `rule` TR-2.1: `curl POST /register` com dados válidos retorna 201 + user created; senha no banco é hash argon2; tabela auth.users contém registro
  - `rule` TR-2.2: `POST /login` retorna access_token + refresh token; `GET /me` com Bearer retorna user profile; token expirado retorna 401
  - `rule` TR-2.3: 2FA enable retorna QR code; verify com TOTP correto ativa 2FA; login subsequente requer 2FA
  - `rule` TR-2.4: Evento Redis Stream `user.created` publicado com userId, email, timestamp após registro
- **Notes**: Não compartilhar schema prisma com outros serviços; usar relation via userId apenas

---

## Task 3: User Microservice (Perfil, Preferências, Limites, Jogo Responsável)
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 1, Task 2
- **Description**:
  - NestJS microservice 3002: schema `user` Prisma com UserProfile, UserPreferences, UserLimits, ResponsibleGambling
  - Endpoints: `GET /api/user/profile`, `PATCH /api/user/profile`, `GET /api/user/preferences`, `PATCH /api/user/preferences`, `GET /api/user/limits`, `PATCH /api/user/limits` (com validation de role), `POST /api/user/responsible-gambling/self-exclude` (temporário/permanente), `POST /api/user/responsible-gambling/reality-check`
  - Consumir evento `user.created` do Redis Stream para criar UserProfile automático com valores default
  - Emitir eventos: `user.profile.updated`, `user.limits.changed`, `user.self-excluded`
- **Acceptance Criteria Addressed**: AC-1, AC-9, FR-1
- **Test Requirements**:
  - `rule` TR-3.1: Ao criar usuário via Auth, UserProfile é criado automaticamente em < 2s (consumer Redis Stream funciona)
  - `rule` TR-3.2: `PATCH /user/limits` atualiza limites de depósito/aposta/perda diário/semanal/mensal; valida valores positivos
  - `rule` TR-3.3: Self-exclude com período de 7 dias bloqueia usuário de fazer apostas/depósitos; evento `user.self-excluded` publicado
- **Notes**: Validar Responsible Gambling checklist MGA

---

## Task 4: KYC Microservice (Sumsub Integration + 3 Níveis)
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 1, Task 3
- **Description**:
  - NestJS microservice 3003: schema `kyc` Prisma com UserKYC, KYCWebhookLog
  - Integração Sumsub SDK: criar applicant, gerar access token para frontend SDK, receber webhook
  - Endpoints: `GET /api/kyc/status`, `POST /api/kyc/init-level1`, `POST /api/kyc/init-level2`, `GET /api/kyc/sdk-token`, `POST /api/kyc/webhook` (webhook Sumsub)
  - 3 níveis: L0 (padrão após registro: email confirmado), L1 (Sumsub verificação básica: ID), L2 (Sumsub avançado: POA + selfie)
  - Ao subir nível KYC: consumir `user.limits.changed`? Não → EMITIR `kyc.level.updated`; Wallet Service escuta e atualiza limites
- **Acceptance Criteria Addressed**: AC-2, AC-9
- **Test Requirements**:
  - `rule` TR-4.1: `GET /kyc/sdk-token` retorna token válido Sumsub; frontend SDK inicializa sem erros no modo sandbox
  - `rule` TR-4.2: Simular webhook Sumsub `reviewStatus: approved` nível 1; tabela kyc.user_kyc atualiza para L1 VERIFIED; evento `kyc.level.updated` publicado
  - `rule` TR-4.3: Tentar saque com usuário L0 → bloqueado; L1+ permite saque (validação no Wallet Service)
- **Notes**: Implementar modo sandbox primeiro; webhook validar assinatura HMAC Sumsub

---

## Task 5: Wallet & Payments Microservice (Double-Entry + Stripe)
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 1, Task 3, Task 4
- **Description**:
  - NestJS microservice 3004: schema `wallet` Prisma com Wallet, WalletLedger, Transaction, PendingOperation, StripeWebhookLog
  - Double-entry ledger system: cada movimentação cria 2 linhas (DEBIT + CREDIT em contas contábeis: USER_BALANCE, HOUSE_BALANCE, BONUS_BALANCE, PENDING_DEPOSITS, PENDING_WITHDRAWALS, FEES)
  - Endpoints: `GET /api/wallet/balance`, `GET /api/wallet/transactions`, `POST /api/wallet/deposit/stripe/create-intent`, `POST /api/wallet/webhook/stripe`, `POST /api/wallet/withdraw/request`, `GET /api/wallet/withdraw/list`, `POST /internal/wallet/debit` (apostas), `POST /internal/wallet/credit` (liquidações), `POST /internal/wallet/freebet` (bônus)
  - Stripe: Payment Intents (depósitos) + Payouts (saques SEPA); validação KYC antes de saque
  - Consumir eventos: `kyc.level.updated` (atualiza limites), `bet.placed` (debita), `bet.settled` (credita), `bonus.granted` (credita bônus)
  - Emitir eventos: `wallet.deposit.completed`, `wallet.withdraw.requested`, `wallet.withdraw.completed`, `wallet.balance.updated`
- **Acceptance Criteria Addressed**: AC-3, AC-5, AC-6, AC-9
- **Test Requirements**:
  - `rule` TR-5.1: Simular depósito €100 Stripe; ledger tem 2 linhas (DEBIT PENDING → CREDIT USER_BALANCE após webhook); saldo = €100
  - `rule` TR-5.2: `POST /internal/wallet/debit` valor €20 com referência aposta; ledger atualiza; saldo = €80; 0 race condition em 1000 chamadas simultâneas (usar row-level lock SELECT FOR UPDATE)
  - `rule` TR-5.3: Tentar saque €50 com KYC L0 retorna 403 "KYC level 1+ required"; L1 retorna 200 + Payout criado no Stripe
  - `rule` TR-5.4: Qualquer query `SUM(amount) FROM wallet.wallet_ledger` retorna 0 (double-entry equilibrado) após 100 operações aleatórias
- **Notes**: Toda operação de débito/crédito usar transação SERIALIZABLE PostgreSQL; sem dirty reads

---

## Task 6: Odds & Data Microservice (Abstração Provider + Live Odds WS)
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 1
- **Description**:
  - NestJS microservice 3005: schema `odds` Prisma com Sport, League, Team, Event, Market, Selection, OddHistory, ProviderSyncLog
  - Interface `OddsProvider` abstrata: `fetchSports()`, `fetchLeagues()`, `fetchPreMatchEvents()`, `fetchLiveEvents()`, `fetchOddsByEvent()`, `subscribeToLiveUpdates()` → implementação `CustomOddsProvider` (aguardando detalhes da API do usuário)
  - Scheduler BullMQ: job `sync-prematch` (cada 5 min), `sync-live` (cada 15s, adaptativo: mais frequente quando há jogos live), `sync-leagues-sports` (1x por dia)
  - WebSocket `gateway`: namespace `/odds-ws` com tópicos `live:scores`, `event:{id}:odds`, `league:{id}:events`
  - Cache Redis: `odds:events:{id}`, `odds:live:events`, `odds:prematch:next24h` com TTL adaptativo
  - Endpoints: `GET /api/odds/sports`, `GET /api/odds/leagues/:sport`, `GET /api/odds/events/prematch`, `GET /api/odds/events/live`, `GET /api/odds/events/:id/markets`, `GET /api/odds/next-events?hours=24`
- **Acceptance Criteria Addressed**: AC-4, AC-7, AC-8
- **Test Requirements**:
  - `rule` TR-6.1: Interface `OddsProvider` implementada com mock retornando 50 eventos pré-jogo e 10 live; scheduler popula tabela `odds.events` sem duplicatas (UPSERT por provider_event_id)
  - `rule` TR-6.2: Atualizar odd de seleção no mock; WebSocket `/odds-ws` envia atualização em < 300ms para subscribers; cache Redis invalidado e atualizado
  - `rule` TR-6.3: `GET /odds/events/live` retorna array com eventos em status LIVE (StartTime < Now < EndTime); cadência de sync reduz automaticamente quando zero eventos live
  - `rule` TR-6.4: Suspensão de mercado (market status SUSPENDED) é propagada via WS e bloqueia novas apostas (validar no Bets Service)
- **Notes**: Camada provider deve permitir trocar para API real do usuário sem alterar código core; criar arquivo `providers/custom/README.md` para instruções de integração

---

## Task 7: Bets & Settlement Microservice (Apostas, Cashout, Liquidação Automática)
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 1, Task 5, Task 6
- **Description**:
  - NestJS microservice 3006: schema `bets` Prisma com Bet, BetSelection, Cashout, SettlementLog, BetSlip (carrinho temporário opcional)
  - Endpoints: `POST /api/bets/place` (simples ou combinada em body), `GET /api/bets/my-bets`, `GET /api/bets/:id`, `POST /api/bets/:id/cashout`, `POST /internal/bets/settle-event` (chamado por scheduler ou admin)
  - Fluxo Place Bet: validar JWT → validar odds atuais (chamada interna ao Odds Service ou cache Redis para slippage protection, max slippage 5%) → chamar Wallet debit → criar Bet + BetSeleções → emitir `bet.placed`
  - Fluxo Settlement: Scheduler BullMQ `settle-live-events` (cada 30s) verifica eventos finalizados no Odds Provider → para cada evento, atualizar resultados → para cada Bet ligado, calcular WON/LOST/HALF_WON/HALF_LOST → chamar Wallet credit (se WON) → emitir `bet.settled`
  - Cashout: Fórmula `cashoutValue = (currentImpliedProbability * potentialReturn) * (1 - houseEdge)`; partial cashout reduz stake remanescente proporcionalmente; valida odds em tempo real
  - Tipos aposta: SINGLE, MULTI (2-20 seleções); mercados: 1X2, OVER_UNDER, BTTS, CORRECT_SCORE, ASIAN_HANDICAP
- **Acceptance Criteria Addressed**: AC-4, AC-5, AC-6, AC-11
- **Test Requirements**:
  - `rule` TR-7.1: Aposta simples €20 odd 2.00 aceita; saldo carteira cai €20 (verificável TR-5.2); tabela bets.bet criada status PENDING
  - `rule` TR-7.2: Aposta combinada 3 seleções (odds 2.00 × 1.85 × 2.20 = odd total 8.14); stake €10; retorno potencial €81.40 calculado corretamente
  - `rule` TR-7.3: Evento finalizado 1-0 Home; scheduler liquida aposta Home Win como WON; credita €40; status atualizado; email notificação disparada (via Notifications Service)
  - `rule` TR-7.4: Cashout total €32 em aposta de €20 (odds 2.00) durante live; saldo carteira +€32; bet status CASHOUT; 0 diferença de valor com precisão 2 decimais
  - `rule` TR-7.5: Tentar apostar com odd desatualizada > 5% → rejeitada 409 "Odd alterada, confirme o novo valor"
  - `rule` TR-7.6: Mercado suspenso → tentativa de aposta retorna 409 "Mercado suspenso"
- **Notes**: Isolation level SERIALIZABLE em toda transação de place bet; considerar aposta nula (void) quando evento cancelado

---

## Task 8: Bonus Microservice (Bônus Boas-Vindas, Freebet, Cashback, Rollover)
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: Task 1, Task 5, Task 7
- **Description**:
  - NestJS microservice 3007: schema `bonus` Prisma com Bonus, UserBonus, RolloverProgress, Campaign
  - Tipos: WELCOME (match depósito %), FREEBET (valor fixo aposta grátis), CASHBACK (percentual perdas semanais), RELOAD (match depósito)
  - Lógica Rollover: cada bônus tem `rolloverRequirement` (ex: 8x aposta total em odds >= 1.50) antes de liberar para saque; saldo separado REAL vs BONUS; prioridade uso BONUS primeiro
  - Endpoints: `GET /api/bonus/my-bonuses`, `POST /api/bonus/:id/activate`, `POST /api/admin/campaigns/create`, `POST /api/admin/bonus/grant-user`
  - Consumir eventos: `wallet.deposit.completed` (aplica welcome bonus automático), `bet.settled` (atualiza progresso rollover, calcula cashback semanal)
- **Acceptance Criteria Addressed**: AC-3, FR-7
- **Test Requirements**:
  - `rule` TR-8.1: Primeiro depósito €100 usuário novo; campaign Welcome 100% até €200 aplica bônus €100; saldo REAL=€100, BONUS=€100; rollover = 8x (requer aposta €800)
  - `rule` TR-8.2: Aposta €50 com odds 1.40 (abaixo min 1.50) → NÃO conta para rollover; odds 1.70 SIM conta (progresso +€50)
  - `rule` TR-8.3: Rollover completo 100%; saldo bônus move para saldo real automaticamente; permite saque €100 bônus convertido
  - `rule` TR-8.4: Bônus expira após 30 dias (configurável); status EXPIRED, valor removido
- **Notes**: Implementar FIFO de bônus (bônus mais antigo usa primeiro)

---

## Task 9: Casino Microservice (Jogos Cassino + Integração)
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: Task 1, Task 5
- **Description**:
  - NestJS microservice 3008: schema `casino` Prisma com CasinoGame, CasinoCategory, CasinoSession, CasinoBet, CasinoProvider
  - Interface `CasinoProvider` + implementação `MockCasinoProvider` inicial: 20 slots fictícios, Roleta Europeia, Blackjack básico (RTP 96%)
  - Endpoints: `GET /api/casino/games`, `GET /api/casino/categories`, `GET /api/casino/games/:id`, `POST /api/casino/games/:id/session/start`, `POST /api/casino/session/:id/spin/bet` (ou ação do jogo)
  - Wallet compartilhada: aposta cassino debita da mesma wallet esportes; ganhos creditados na mesma wallet
- **Acceptance Criteria Addressed**: AC-7, FR-6
- **Test Requirements**:
  - `rule` TR-9.1: `GET /casino/games` retorna lista >= 20 jogos com campos: id, nome, categoria, thumbnail, provedor, RTP
  - `rule` TR-9.2: Iniciar sessão roleta €1 aposta no vermelho; debita €1 da carteira; resultado vermelho → credita €2; histórico mostra aposta cassino
  - `rule` TR-9.3: RTP simulado ao longo de 100.000 giros slot mock fica entre 95.5% e 96.5% (tolerância estatística)
- **Notes**: Mock para demonstração; criar `providers/README.md` para integrar PG Soft / Evolution Gaming posteriormente

---

## Task 10: Notifications Microservice (Email, Push, In-App)
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: Task 1, Task 2
- **Description**:
  - NestJS microservice 3009: schema `notifications` Prisma com Notification, NotificationPreference, EmailLog
  - Envio Email: Nodemailer + SendGrid (templates MJML: registro confirmação, depósito recebido, aposta liquidada, KYC status, saque processado)
  - Web Push: VAPID keys + service worker PWA (tópicos: odd favorita alterada, início de jogo, aposta ganha)
  - BullMQ queues separadas: `email-queue`, `push-queue` (retentativas exponenciais)
  - Consumir todos eventos da plataforma: `user.created`, `wallet.*`, `kyc.*`, `bet.*`, `bonus.*`
- **Acceptance Criteria Addressed**: FR-9
- **Test Requirements**:
  - `rule` TR-10.1: Usuário se registra → email "Bem-vindo à BET62" chega em < 30s (via Mailtrap/SendGrid sandbox); template renderiza logo e nome usuário
  - `rule` TR-10.2: Aposta é liquidada WON → notificação in-app toast aparece no frontend (via WS gateway notifications); push chega em dispositivo registrado
  - `rule` TR-10.3: Usuário desativa notificações push no perfil → push não é mais enviado; email continua
- **Notes**: Templates email em português/inglês/espanhol via i18n

---

## Task 11: Admin Microservice + Backoffice API
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 1, Task 2, Task 4, Task 5, Task 6, Task 7, Task 8, Task 9
- **Description**:
  - NestJS microservice 3010: schema `admin` Prisma com AdminUser, Role, AuditLog, RolePermission
  - Roles: SUPER_ADMIN, FINANCE, RISK, SUPPORT, OPERATOR
  - Endpoints (todos prefix `/api/admin` com AdminGuard + permissões): auth admin CRUD, `/users` (listar/bloquear/editar limites/ver KYC), `/finance/dashboard` (GGR, NGR, depósitos, saques em tempo real via agregações SQL), `/finance/withdrawals` (aprovar/rejeitar saques manuais), `/odds` (override odd, suspender mercado/evento), `/bets` (liquidação manual, anular aposta), `/bonus` (criar campanha, conceder bônus manual), `/audit` (logs imutáveis)
  - AuditLog: TUDO que admin faz (data, admin_id, action, entity_type, entity_id, before_json, after_json) → imutável (apenas INSERT, sem UPDATE/DELETE; trigger SQL para garantir)
- **Acceptance Criteria Addressed**: AC-3, AC-12, AC-9
- **Test Requirements**:
  - `rule` TR-11.1: Login admin retorna JWT admin separado; usuário regular tenta acessar /api/admin retorna 403
  - `rule` TR-11.2: Admin FINANCE aprova saque €50 → Payout Stripe confirma; log `audit.admin.saques` inserido com before/after
  - `rule` TR-11.3: Dashboard GGR = soma apostas - soma pagamentos (liquidações) - soma saques bônus; números batem com query manual na tabela wallet
  - `rule` TR-11.4: Tabela `admin.audit_log` NÃO tem triggers UPDATE/DELETE habilitados (violação retorna erro SQL)
- **Notes**: Painel web admin vai ser separado ou rota `/admin` no frontend Next.js

---

## Task 12: Frontend Next.js 14 - Design System + Setup
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 1
- **Description**:
  - Next.js 14 App Router pasta `apps/web`, Tailwind CSS v3, shadcn/ui, Framer Motion, Zustand (state global bet slip, auth, user), React Query (server state cache), Socket.IO-client (WS odds e notifications)
  - Tema futurista BET62: dark mode permanent, CSS variáveis `--bet62-primary: #00ff9d` (neon verde), `--bet62-secondary: #ff00ea` (neon rosa), `--bet62-accent: #00d4ff` (neon azul ciano), `--bet62-bg: #0a0e17`, `--bet62-surface: #121a29` (glass rgba), tipografia `Space Grotesk` + `JetBrains Mono`
  - Glassmorphism components: backdrop-blur, bordas neon 1px, sombras glow (`box-shadow: 0 0 20px rgba(0,255,157,0.2)`)
  - PWA manifest + service worker (cache estático assets, push notifications, instalação)
  - i18n next-intl: pt-PT, en-US, es-ES
  - State management:
    - Zustand stores: `useAuthStore`, `useBetSlipStore`, `useWalletStore`, `useThemeStore`
    - React Query: hooks `usePrematchEvents`, `useLiveEvents`, `useEventMarkets`, `useUserBets`, `useBalance`
    - Socket.IO: hooks `useOddsSocket`, `useNotificationsSocket`
- **Acceptance Criteria Addressed**: AC-7, AC-10, FR-8
- **Test Requirements**:
  - `rule` TR-12.1: Lighthouse `apps/web` home page: Performance >= 90, Accessibility >= 90, Best Practices >= 90, SEO >= 90
  - `rule` TR-12.2: Tema CSS aplicado em TODOS componentes shadcn/ui override; variáveis no `:root` são a única fonte de verdade para cores
  - `rubric` TR-12.3: Design futurista, scale 1-5; 1=Bootstrap default, 3=tema escuro básico, 5=glassmorphism neon impecável, animações Framer Motion fluidas 60fps; threshold >= 4.5
  - `rule` TR-12.4: Service Worker registrado; PWA instalável no Chrome desktop/mobile; manifest.json tem ícones 512px
- **Notes**: Criar pasta `apps/web/styles/theme.css` com TODOS tokens de design

---

## Task 13: Frontend - Páginas Principais + Bet Slip + User Flow
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 2, Task 6, Task 7, Task 9, Task 12
- **Description**:
  - **Páginas Next.js (App Router)**:
    1. `/` (Home - Destaque): Carrossel banner promocional, "Jogos em Destaque" (odds grandes, neon), "Ao Vivo Agora" (mini livescore), "Próximos Grandes Jogos", cassino miniatura
    2. `/live` (Ao Vivo): Lista eventos LIVE (atualização WS), livescore com gols/cartões em tempo real, painel lateral estatísticas do jogo, filtros esporte/liga
    3. `/upcoming` (Próximos Jogos): Timeline de eventos 24h / 48h / 7d, filtros múltiplos, cards com horário e odds iniciais
    4. `/casino`: Grid jogos cassino (categorias tabs: Slots, Roleta, Blackjack, Live), filtro provedor, busca
    5. `/sport/[sportSlug]`: Futebol, Basquete, Tênis - lista ligas colapsáveis, eventos por liga
    6. `/event/[eventId]`: Página detalhe evento → todos mercados collapsados por tipo (1X2, Over/Under, Handicap, etc.), placar live, timeline eventos
    7. `/auth/login` + `/auth/register` + `/auth/forgot-password`: Forms com validação zod, erro toast, animação glass
    8. `/account/*`: Minha Conta (dashboard saldo, últimos movimentos); `profile` (editar); `kyc` (níveis + Sumsub SDK iframe? NÃO → SDK nativo, white-label controlado); `wallet` (depósito/saque Stripe Elements); `history` (apostas + transações com filtros); `responsible` (limites, auto-exclusão, reality check); `security` (2FA, sessões, alterar senha); `notifications` (preferências)
    9. `/admin/*`: Backoffice SPA Next.js com sidebar menu, componentes shadcn DataTable (usuários, apostas, saques), Recharts gráficos dashboard financeiro
    10. Static pages: `/terms`, `/privacy`, `/responsible-gaming`, `/contact`, `/about`
  - **Bet Slip (boleto)**:
    - Desktop: Sidebar fixa direita largura 360px, colapsável
    - Mobile: Bottom sheet (desliza de baixo para cima com Framer Motion snap points)
    - Abas: Simples | Combinada | Sistema
    - Features: Remover seleção, limpar tudo, editar stake por seleção, stake total, odd total, retorno potencial, cashout disponível em apostas ativas
- **Acceptance Criteria Addressed**: AC-1, AC-2, AC-3, AC-5, AC-6, AC-7, AC-10, AC-11, AC-12
- **Test Requirements**:
  - `rule` TR-13.1: Registro completo (cadastro → confirmação email → login) em < 3 minutos sem bugs; usuário autenticado chega a Home autenticada
  - `rule` TR-13.2: Fluxo aposta completa: Home → clicar odd 1X2 → Bet Slip abre → inserir stake €10 → "Confirmar Aposta" → toast verde "Aposta recebida!" → `/account/history` mostra aposta ativa
  - `rule` TR-13.3: Página `/live` atualiza placar gol em < 500ms via WS; odd muda de cor (verde up ↑, vermelho down ↓) com animação
  - `rule` TR-13.4: Bet Slip em mobile abre como bottom sheet; em desktop é sidebar fixa; ambos responsive em 360px até 4K
  - `rubric` TR-13.5: Navegação geral UX, scale 1-5; threshold >= 4; evidência gravação de tela 5 minutos
- **Notes**: Nunca usar iframes de terceiros (nem Sumsub widget? Não → carregar SDK via npm nativo, manter UI 100% BET62)

---

## Task 14: Integração End-to-End + Testes + Qualidade
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 2 até Task 13
- **Description**:
  - Testes unitários: Jest + vitest por microserviço (coverage >= 80% nos arquivos service/core)
  - Testes integração: Supertest por API endpoint (auth, bets critical flows)
  - Testes E2E: Cypress (apps/web/e2e) 5 fluxos críticos:
    1. E2E-Auth: Registro → Login → 2FA → Logout
    2. E2E-Bet-Simple: Login → Depósito (mock Stripe) → Aposta Simples → Liquidação → Ver Saldo
    3. E2E-Bet-Multi-Cashout: Aposta Combinada 3 seleções → Cashout Parcial → Cashout Total
    4. E2E-KYC: Registro → Iniciar L1 → Webhook mock aprovação → Ver status atualizado
    5. E2E-Admin: Login Admin → Ver Dashboard → Aprovar Saque → Ver Audit Log
  - Load Testing: k6 script 1000 usuários concorrentes fazendo apostas simultâneas; 0 race condition
  - Segurança: OWASP ZAP scan full; corrigir todos HIGH e CRITICAL
  - Documentação Swagger OpenAPI: Cada microservice `/docs` auto gerado pelo NestJS Swagger
  - README raiz com setup passo a passo Windows (PowerShell) e Linux
- **Acceptance Criteria Addressed**: AC-1 a AC-12 todos, NFR-1 a NFR-10
- **Test Requirements**:
  - `rule` TR-14.1: Coverage geral de testes >= 80%; Jest coverage report mostra `Statements >= 80`, `Branches >= 80`
  - `rule` TR-14.2: Todos 5 Cypress E2E passam 10x consecutivas (sem flakes)
  - `rule` TR-14.3: k6 load test 1000 VUs durante 5 minutos apostando: P95 response `placeBet` < 500ms; 0 falhas; 0 inconsistências saldo carteira
  - `rule` TR-14.4: OWASP ZAP report: 0 Critical, 0 High (Medium aceitável 2 ou menos)
  - `rule` TR-14.5: Swagger disponível em `http://localhost/api/auth/docs`, `/api/bets/docs`, etc; todos endpoints documentados com schemas
- **Notes**: E2E usar ambientes Docker isolados; Stripe test mode; Sumsub sandbox

---

## Task 15: Deployment Staging + Configuração Produção Ready
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: Task 14
- **Description**:
  - GitHub Actions workflows: CI (lint/test/build cada PR), CD staging (push main → deploy VPS Hetzner/OVH via SSH + Docker stack deploy)
  - Dockerfiles multi-stage para cada microserviço (imagens < 200MB com distroless node)
  - PostgreSQL replicação (1 master, 1 replica read-only) com pgBackRest backups diários (retenção 30 dias)
  - Nginx + Let's Encrypt HTTPS automático (certbot)
  - WAF Cloudflare: regras básicas rate limit, bloqueio IPs suspeitos, países não permitidos
  - Monitoramento: Prometheus + Grafana dashboards por serviço; Alertmanager Telegram/Slack para CPU > 80%, memória, DB connections, erros API 5xx > 1%
  - Logging: Winston structured logging JSON → ELK ou Grafana Loki centralizado
- **Acceptance Criteria Addressed**: NFR-1, NFR-2, NFR-4, NFR-10
- **Test Requirements**:
  - `rule` TR-15.1: `git push origin main` → workflow CD executa com sucesso; aplicação disponível HTTPS `staging.bet62.pt`
  - `rule` TR-15.2: Simular falha microservice bets (parar container); outros serviços continuam rodando; API Gateway retorna 503 para rotas bets, outras rotas OK
  - `rule` TR-15.3: Restore PostgreSQL backup recente em sandbox; todos dados íntegros (apostas, usuários, saldos)
- **Notes**: Fase 2: Kubernetes Helm charts para múltiplos ambientes
