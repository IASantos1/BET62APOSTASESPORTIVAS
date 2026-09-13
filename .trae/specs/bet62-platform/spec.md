# BET62 APOSTAS ESPORTIVAS - Product Requirements Document

## Overview
- **Summary**: Plataforma de apostas esportivas e cassino online completa, estilo Betano/Betclic, com marca BET62 APOSTAS ESPORTIVAS, voltada para o mercado europeu (EUR), com design futurista moderno, arquitetura de microservices e conformidade MGA Malta.
- **Purpose**: Fornecer uma solução de apostas de nível enterprise para produção real, com fluxo completo de usuário (registro → KYC → depósito → aposta → liquidação → saque), suporte a apostas pré-jogo e ao vivo, cashout, cassino e sistema de bônus.
- **Target Users**: Apostadores europeus maiores de 18 anos, com foco em ligas de elite (Tiers P1-P5: Futebol, Basquete, Tênis), jogadores de cassino online, e operadores que necessitam de white-labeling com UI totalmente controlada.

## Goals
- Lançar MVP funcional e aprovado para produção no mercado europeu (MGA)
- Suportar 10.000+ usuários concorrentes com latência < 200ms
- Arquitetura de microservices escalável e desacoplada
- Design futurista/moderno com identidade visual BET62 exclusiva
- Integração nativa com provedores de dados esportivos (camada abstraída), Sumsub (KYC) e Stripe (pagamentos)
- Sistema de liquidação automática e confiável de apostas
- 100% white-label: sem iframes de terceiros na UI

## Non-Goals
- NÃO implementar apps mobile nativos (iOS/Android) neste MVP (apenas PWA responsivo)
- NÃO integrar crypto/pagamentos em criptomoedas no MVP
- NÃO suportar apostas políticas/eSports fora das modalidades principais
- NÃO implementar sistema de afiliados no MVP (roadmap fase 2)
- NÃO fazer licenciamento real MGA neste código (apenas estrutura de conformidade para implementação)

## Background & Context
- Stack escolhida: Next.js 14 (Frontend/PWA) + NestJS (Microservices) + PostgreSQL (Banco principal) + Redis (Cache/Queue)
- Arquitetura: Microservices completos desde o início (Auth, Odds, Wallet, Bets, Casino, Notifications, Payments, KYC)
- Provedor de odds: Camada de abstração (OddsProvider interface) para integração com API específica do usuário
- KYC: Sumsub + fluxo de verificação em 3 níveis (Basic → Intermediate → Advanced)
- Pagamentos: Stripe (depósitos/saques) + wallet interna em EUR
- Regulamentação: Conformidade MGA Malta (estrutura modular para múltiplas jurisdições)
- Moeda base: EUR (€)
- Design: Futurista moderno - dark mode com neon accents, animações fluidas, glassmorphism

## Functional Requirements

### Autenticação e Usuário (FR-1)
- **FR-1.1**: Registro de usuário com email, senha, nome, data de nascimento, país, telefone
- **FR-1.2**: Login com email/senha + JWT tokens (access + refresh)
- **FR-1.3**: Autenticação 2FA (TOTP Google Authenticator)
- **FR-1.4**: Recuperação de senha por email
- **FR-1.5**: Logout de todas as sessões
- **FR-1.6**: Gerenciamento de perfil (editar dados não sensíveis)
- **FR-1.7**: Autologout por inatividade (30 minutos)

### KYC (FR-2)
- **FR-2.1**: Integração Sumsub para verificação de identidade
- **FR-2.2**: 3 níveis de verificação: L0 (básico - email/phone), L1 (intermediário - documento), L2 (avançado - biometria/POA)
- **FR-2.3**: Limites por nível KYC (depósito, aposta, saque)
- **FR-2.4**: Webhook Sumsub para atualização de status
- **FR-2.5**: Bloqueio automático de funcionalidades para usuários não verificados

### Carteira e Pagamentos (FR-3)
- **FR-3.1**: Wallet interna em EUR com saldo em tempo real
- **FR-3.2**: Depósito via Stripe (Cartão, SEPA, Apple Pay, Google Pay)
- **FR-3.3**: Saque via Stripe (SEPA, Transferência)
- **FR-3.4**: Histórico completo de transações (depósitos, saques, apostas, liquidações, bônus)
- **FR-3.5**: Aposta deduz saldo automaticamente; liquidação credita automaticamente
- **FR-3.6**: Contabilidade dupla entrada (double-entry bookkeeping) para todas as movimentações
- **FR-3.7**: Limites configuráveis por usuário (depósito diário/semanal/mensal, perda máxima)

### Sistema de Odds e Dados Esportivos (FR-4)
- **FR-4.1**: Camada de abstração OddsProvider (adaptável a qualquer API)
- **FR-4.2**: Sincronização periódica de ligas, times, eventos pré-jogo (cache Redis)
- **FR-4.3**: Odds em tempo real via WebSocket para pré-jogo e live
- **FR-4.4**: Atualização adaptativa de cadência (maior frequência para live, menor para pré-jogo distante)
- **FR-4.5**: Suporte a Futebol, Basquete, Tênis no MVP
- **FR-4.6**: Livescore em tempo real com eventos (gols, cartões, substituições, tempos)
- **FR-4.7**: Gerenciamento de mercados: 1X2, Over/Under, Handicap Asiático, Ambos Marcam, Resultado Exato, etc.
- **FR-4.8**: Suspensão automática de odds durante eventos críticos (gol, falta, etc.)

### Sistema de Apostas e Liquidação (FR-5)
- **FR-5.1**: Aposta Simples (1 seleção)
- **FR-5.2**: Aposta Combinada (múltiplas seleções, mínimo 2, máximo 20)
- **FR-5.3**: Validação de odds no momento da aposta (slippage protection)
- **FR-5.4**: Cashout Parcial e Total para apostas vencedoras/perdedoras parciais
- **FR-5.5**: Liquidação automática baseada em resultados da API esportiva
- **FR-5.6**: Liquidação manual de contingência (admin)
- **FR-5.7**: Cálculo de retorno com impostos (conforme jurisdição)
- **FR-5.8**: Histórico de apostas do usuário com filtros (data, esporte, status, tipo)
- **FR-5.9**: Apostas bloqueiam saldo; cancelamento de aposta estorna saldo
- **FR-5.10**: Transições de estado do jogo: Pre-match → Live → Finalizado (atualização imediata)

### Cassino (FR-6)
- **FR-6.1**: Página de Cassino com categorias (Slots, Roleta, Blackjack, Jogos ao Vivo)
- **FR-6.2**: Integração com provedor via API adaptável (ou mock inicial para demonstração)
- **FR-6.3**: Sistema de aposta em jogos de cassino com wallet compartilhada
- **FR-6.4**: Histórico de jogos de cassino
- **FR-6.5**: RTP configurável por jogo (com intervalos MGA)

### Sistema de Bônus (FR-7)
- **FR-7.1**: Bônus de boas-vindas (1º depósito - percentual + valor máximo)
- **FR-7.2**: Freebets para novos usuários e campanhas
- **FR-7.3**: Cashback semanal/perdas
- **FR-7.4**: Rollover (requisito de aposta) antes de saque de bônus
- **FR-7.5**: Saldo separado: Saldo Real vs Saldo Bônus (prioridade de uso: Bônus primeiro)
- **FR-7.6**: Expiração de bônus (configurável por tipo)

### Frontend e Páginas (FR-8)
- **FR-8.1**: Página de Destaque (Home) com eventos em destaque, odds principais, banner promocional
- **FR-8.2**: Página Ao Vivo (Live) com todos os jogos em andamento, livescore, odds atualizadas em tempo real
- **FR-8.3**: Página de Próximos Jogos / Eventos com timeline e filtros por esporte/liga/data
- **FR-8.4**: Página de Cassino com grid de jogos e filtros
- **FR-8.5**: Página de Esporte individual (ex: Futebol) com ligas e eventos
- **FR-8.6**: Página de Evento individual com todos os mercados de aposta
- **FR-8.7**: Bet Slip (boleto) lateral/fixo com seleções, edição, remoção
- **FR-8.8**: Minha Conta (Perfil, KYC, Carteira, Histórico, Limites, Segurança)
- **FR-8.9**: Páginas Regulatórias (Termos, Privacidade, Jogo Responsável, Contato)
- **FR-8.10**: PWA - instalação na tela inicial, notificações push, modo offline básico

### Notificações (FR-9)
- **FR-9.1**: Notificações push Web (PWA)
- **FR-9.2**: Notificações por email (registro, depósito, aposta liquidada, KYC, saque)
- **FR-9.3**: Notificações in-app (toast) em tempo real
- **FR-9.4**: Alerta de odds favoritas / mudança de odd / início de jogo

### Admin e Backoffice (FR-10)
- **FR-10.1**: Painel administrativo com autenticação separada
- **FR-10.2**: Gerenciamento de usuários (visualizar, bloquear, editar limites)
- **FR-10.3**: Dashboard financeiro (depósitos, saques, GGR, margem)
- **FR-10.4**: Gerenciamento de odds (overrides manuais, suspensão de mercados)
- **FR-10.5**: Liquidação manual de apostas e eventos
- **FR-10.6**: Gerenciamento de bônus e campanhas
- **FR-10.7**: Logs de auditoria completa
- **FR-10.8**: Relatórios exportáveis (CSV/Excel)

## Non-Functional Requirements
- **NFR-1 (Performance)**: Tempo de resposta API < 200ms (P95); atualização de odd live < 500ms; suporte a 10k usuários concorrentes
- **NFR-2 (Disponibilidade)**: 99.9% uptime (SLA produção); failover automático de banco; Redis cluster
- **NFR-3 (Segurança)**: OWASP Top 10; hash de senha bcrypt/argon2; rate limiting; WAF; CORS restrito; logs sem PII; CSRF protection
- **NFR-4 (Escalabilidade)**: Microservices stateless; horizontal scaling via Docker/Kubernetes-ready; connection pooling PostgreSQL
- **NFR-5 (Conformidade)**: GDPR; MGA Responsible Gambling; AML/KYC (Sumsub); retenção de logs 7 anos; age verification obrigatória
- **NFR-6 (SEO/Performance Web)**: Lighthouse Score > 90 (Performance, Accessibility, Best Practices, SEO); SSR/ISR no Next.js
- **NFR-7 (Design/UX)**: Design futurista moderno (dark tema + neon); responsivo mobile-first; animações 60fps; WCAG 2.1 AA
- **NFR-8 (Observabilidade)**: Structured logging (ELK-ready); métricas Prometheus/Grafana; tracing distribuído OpenTelemetry; alertas críticos
- **NFR-9 (Testabilidade)**: Cobertura de testes > 80% (unitários e integração); testes E2E para fluxos críticos
- **NFR-10 (Manutenibilidade)**: Clean Architecture por microservice; DTOs validados (class-validator); documentação OpenAPI/Swagger; TypeScript strict mode

## Constraints
- **Technical**:
  - Stack fixa: Next.js 14 + NestJS 10.x + PostgreSQL 16 + Redis 7.x + TypeScript 5.x strict
  - ORM: Prisma (PostgreSQL principal) + MikroORM (opcional para alguns serviços)
  - Mensageria: Redis Streams / BullMQ (não requer Kafka no MVP)
  - Containerização: Docker + docker-compose local; manifests Kubernetes prontos
  - Reverse Proxy: Nginx / Traefik para roteamento de microservices
- **Business**:
  - Moeda base EUR € apenas no MVP
  - Idiomas MVP: Português PT, Inglês EN, Espanhol ES (i18n estruturado para +10 idiomas)
  - Regulamentação alvo MGA Malta (estrutura para múltiplas jurisdições)
  - Jogo Responsável obrigatório: auto-exclusão, limites de depósito/perda/tempo, reality checks
- **Dependencies**:
  - Provedor de odds específico do usuário (camada de abstração criada; implementação requer detalhes da API)
  - Sumsub API Key + Secret para KYC (chaves reais do usuário)
  - Stripe API Keys (publishable + secret) + webhook para pagamentos
  - SMTP para envio de emails (SendGrid recomendado)
  - VAPID keys para Web Push Notifications
  - Domínio + SSL válidos (Let's Encrypt para staging, SSL corporativo produção)
  - CDN para assets estáticos (Cloudflare)

## Assumptions
- Usuário fornecerá detalhes da API de odds (endpoints, auth, rate limits, formato dos dados) durante fase de implementação do módulo FR-4
- Chaves Sumsub e Stripe reais serão fornecidas em arquivo .env (não commitadas ao git)
- Estrutura de microservices será executada inicialmente via docker-compose local, com migração opcional para Kubernetes/AWS/GCP em produção
- MVP será hospedado em VPS/Cloud europeu (ex: Hetzner, OVH, AWS Frankfurt) para conformidade GDPR/MGA
- Licenciamento real MGA é responsabilidade do cliente/operador; código implementa apenas estrutura técnica de conformidade
- White-labeling é suportado por tema CSS variáveis (cores, fontes, logos) sem alteração de código core

## Open Questions
- [ ] Qual o nome exato da API de odds e onde está a documentação? (endpoints, autenticação, rate limits, formato de resposta)
- [ ] Quais valores exatos para limites por nível KYC? (Ex: L0: €500/dia; L1: €5.000/dia; L2: ilimitado)
- [ ] Quais valores exatos para bônus de boas-vindas? (Ex: 100% até €200, rollover 8x em 1.50 odd mínimo)
- [ ] Taxa de imposto sobre ganhos (GGR) para MGA Malta / jurisdição específica?
- [ ] Possui domínio registrado e servidor para staging? (ou uso localhost + ngrok no desenvolvimento)

## Acceptance Criteria

### AC-1: Registro e Login Funcional
- **Type**: `rule`
- **Given**: Plataforma rodando em ambiente staging
- **When**: Novo usuário acessa a página de registro, preenche dados válidos, confirma email, e faz login
- **Then**: Usuário é autenticado com sucesso, recebe JWT válido, perfil é criado no banco com KYC nível L0, e é redirecionado para a página inicial
- **Pass Condition**: Registro em < 2 minutos; login em < 1 segundo; JWT expira em 15min (access) / 7 dias (refresh); senha armazenada com argon2
- **Evidence**: Teste E2E Cypress (Registro → Login) passando; query SQL mostrando usuário criado com senha hasheada; curl retornando 200 no /api/auth/login

### AC-2: KYC com 3 Níveis (Sumsub Integration)
- **Type**: `rule`
- **Given**: Usuário registrado e logado, chaves Sumsub configuradas
- **When**: Usuário inicia verificação L1 (envia documento), depois L2 (prova de endereço)
- **Then**: Status KYC atualiza via webhook Sumsub; limites de carteira aumentam conforme nível; usuário visualiza status em Minha Conta
- **Pass Condition**: Webhook Sumsub recebido em < 30s após aprovação; limites aplicados sem intervenção manual; todas transações bloqueadas se KYC reprovado
- **Evidence**: Log Sumsub webhook recebido; tabela user_kyc com status VERIFIED; tabela user_limits com valores atualizados; UI mostrando badge "Verificado"

### AC-3: Carteira com Double-Entry e Stripe
- **Type**: `rule`
- **Given**: Usuário KYC L1+ com método de pagamento Stripe válido
- **When**: Usuário faz depósito de €100 via cartão Stripe, aposta €20 em evento, vence €40, faz saque de €50
- **Then**: Todas movimentações possuem entrada dupla em ledger; saldo reflete todas operações com precisão de 2 casas decimais; histórico mostra todas transações; saque é criado como pendente no Stripe
- **Pass Condition**: Ledger balance sempre 0 (sum de debits = sum credits); saldo carteira = depósitos + ganhos - apostas - saques; transação Stripe sincronizada em < 10s
- **Evidence**: Query SQL wallet_ledger com balance = 0; dashboard financeiro admin mostrando números consistentes; Stripe dashboard mostrando charge/payout sincronizados

### AC-4: Sistema de Odds em Tempo Real
- **Type**: `rule`
- **Given**: Evento de futebol live com odds sincronizadas
- **When**: API de odds atualiza odd de "Home Win" de 1.85 para 1.95
- **Then**: Odd atualizada no frontend via WebSocket em < 500ms; odd em cache Redis atualizada; novas apostas usam odd nova (slippage protection)
- **Pass Condition**: Diferença de tempo entre recebimento webhook/API e atualização UI < 500ms em 95% dos casos; bet slip valida odd no momento da confirmação
- **Evidence**: Log de timestamps: API receive → Redis update → WS broadcast → UI render; curl /api/odds/{eventId} retorna odd atualizada; bet com odd desatualizada é rejeitada com mensagem "Odd alterada"

### AC-5: Aposta Simples + Combinada + Liquidação
- **Type**: `rule`
- **Given**: Usuário logado com saldo €200, eventos com odds válidas
- **When**: Usuário faz aposta simples de €20 (odd 2.00), depois combinada 3 seleções de €10 (odd total 8.00), e eventos são finalizados com vitória do usuário na simples e derrota na combinada
- **Then**: Saldo deduzido €30 no momento da aposta; saldo creditado €40 (simples vencida) após liquidação; combinada marcada como perdida; histórico mostra ambas apostas com status correto
- **Pass Condition**: Aposta é persistida em < 1s; liquidação automática em < 60s após final do evento; valor creditado = stake * odd - impostos (se aplicável); nenhum bug de corrida (race condition) em apostas simultâneas
- **Evidence**: Tabela bets com status WON/LOST; tabela transactions com linhas de aposta e liquidação; UI histórico mostrando corretamente; teste de carga com 1000 apostas simultâneas sem inconsistências

### AC-6: Cashout Parcial e Total
- **Type**: `rule`
- **Given**: Aposta de €20 (odd 2.00, retorno €40) em evento live, time vencendo 1-0, cashout valor €32 disponível
- **When**: Usuário clica em Cashout Parcial (retira €16, mantém €16 de aposta) depois Cashout Total do restante
- **Then**: Primeiro cashout credita €16 imediatamente; stake remanescente é €8 (retorno potencial €16); segundo cashout liquida aposta antecipadamente; saldo carteira reflete ambas operações
- **Pass Condition**: Cálculo cashout = (probabilidade atual * retorno potencial) - taxa; valores corretos em 2 decimais; histórico mostra ambas transações com tipo "CASHOUT"
- **Evidence**: Fórmula de cashout validada matematicamente; carteira saldo correto após ambas operações; logs auditáveis de cashout com timestamp e valor

### AC-7: Páginas Principais (Destaque + Ao Vivo + Próximos + Cassino)
- **Type**: `rubric`
- **Dimension**: Qualidade, performance e completude das páginas principais
- **Scale**: 1-5
- **Anchors**: 1 = Páginas quebradas, dados não carregam, design ruim; 3 = Páginas funcionais, dados carregam, design básico sem animações; 5 = Páginas fluidas, design futurista impecável, dados em tempo real perfeito, animações 60fps, responsivo em todos tamanhos
- **Pass Threshold**: >= 4
- **Evidence**: Screenshots desktop/mobile de cada página; Lighthouse report > 90 em todas páginas; gravação de tela mostrando navegação e atualização em tempo real

### AC-8: Microservices Arquitetura e Desacoplamento
- **Type**: `rubric`
- **Dimension**: Arquitetura de microservices, separação de responsabilidades e escalabilidade
- **Scale**: 1-5
- **Anchors**: 1 = Monólito acoplado, serviços não se comunicam corretamente; 3 = Serviços separados mas com acoplamento forte via DB compartilhado; 5 = Cada microservice possui DB próprio, comunicação via eventos (Redis Streams/BullMQ), sem shared DB, APIs REST + GraphQL documentadas com Swagger, deploy independente cada serviço
- **Pass Threshold**: >= 4
- **Evidence**: Diagrama de arquitetura; docker-compose.yaml com 8+ serviços; cada serviço tem schema PostgreSQL próprio; documentação Swagger ativa em /api/{service}/docs; teste de desligar 1 serviço sem quebrar os outros

### AC-9: Segurança e Conformidade MGA
- **Type**: `rule`
- **Given**: Plataforma rodando publicamente
- **When**: Executa varredura OWASP ZAP + checklist MGA
- **Then**: Nenhuma vulnerabilidade crítica/high; Jogo Responsável funcional (auto-exclusão, limites, reality check); todos termos e páginas de privacidade presentes; KYC obrigatório antes de saque
- **Pass Condition**: OWASP ZAP 0 high/critical; todas NFR-3 e NFR-5 cumpridas; auditoria simulada MGA passa em todos pontos técnicos
- **Evidence**: Relatório OWASP ZAP; tela Jogo Responsável funcional (autoexclusão ativada bloqueia apostas); página /responsible-gaming acessível; KYC bloqueia saques em L0

### AC-10: Design Futurista Moderno BET62
- **Type**: `rubric`
- **Dimension**: Qualidade visual, identidade de marca BET62, UX futurista
- **Scale**: 1-5
- **Anchors**: 1 = Design genérico, sem identidade, igual template Bootstrap; 3 = Design limpo mas básico, tema escuro sem personalidade; 5 = Identidade BET62 forte (logo, cores neon exclusivas), glassmorphism, animações micro-interativas, efeitos de glow, tipografia futurista, experiência visual comparável ou superior a Betano/Betclic
- **Pass Threshold**: >= 4.5
- **Evidence**: Style guide com CSS variáveis (cor primária neon, secundária, fundo, tipografia); screenshots comparativos lado-a-lado Betano vs BET62; gravação mostrando animações e transições entre páginas

### AC-11: Bet Slip e UX de Aposta
- **Type**: `rule`
- **Given**: Usuário navegando na página Ao Vivo com múltiplos jogos
- **When**: Usuário clica em 4 odds de eventos diferentes, edita stake da combinada, remove 1 seleção, confirma aposta
- **Then**: Bet slip abre automaticamente com seleções; stake individual calcula corretamente (min €0.10); remoção atualiza total odd; aposta é criada com sucesso no backend; toast de confirmação aparece com "Aposta recebida"
- **Pass Condition**: Todas operações do bet slip em < 200ms; odd total é multiplicação das odds individuais; stake mínima €0.10 máxima €10.000 (configurável); validação de saldo insuficiente
- **Evidence**: Gravação tela demonstrando fluxo completo; tabela bets criada corretamente; bet slip responsivo mobile (bottom sheet) e desktop (sidebar)

### AC-12: Admin Backoffice Completo
- **Type**: `rule`
- **Given**: Admin logado no backoffice
- **When**: Admin visualiza dashboard financeiro, busca usuário, edita limite de depósito, liquida aposta manualmente, cria campanha de bônus
- **Then**: Todas operações são auditáveis; dashboard mostra GGR, depósitos, saques em tempo real; alteração de limite é aplicada instantaneamente; aposta é liquidada e saldo carteira atualizado; bônus é atribuído aos usuários alvo
- **Pass Condition**: Todas operações FR-10 funcionais; logs de auditoria permanentes e imutáveis; permissões por role (SUPER_ADMIN, FINANCE, RISK, SUPPORT)
- **Evidence**: Screenshots backoffice cada funcionalidade; tabela audit_logs com todas ações admin; login sem role admin bloqueia backoffice
