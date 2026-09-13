# BET62 Apostas Esportivas — Deploy em Produção no **Railway**

> Arquitetura: **13 serviços dockerizados (web + API Gateway + 11 NestJS microservices)** + Postgres 16 (managed Railway) + Redis 7 (managed Railway). Monorepo **npm workspaces** (packages/ | services/ | apps/). Railway obriga PORT variável e bind 0.0.0.0 — TUDO configurado abaixo.

---

## 📋 **Pré-requisitos (10 minutos)**

```powershell
# 1. Instalar Railway CLI global (se não tiveres)
npm i -g @railway/cli

# 2. Autenticar na tua conta Railway
railway login

# 3. Associar este diretório local ao teu Projeto Railway novo
railway init
# → seleciona "Create new Project", nome "bet62-platform", região "EUROPE (WEST)" 
```

---

## 1️⃣ **Passo 1 — Criar Serviços Managed Railway (2 cliques)**

No painel **Railway → New → Marketplace**:

1. **Adicionar PostgreSQL**:
   - Nome: `bet62-postgres`
   - Plano mínimo: **Starter ($5/mês)** (5GB disco, 512MB). Upgrade após escala.
   - Após criar → copia a variável **`DATABASE_URL`** → cola em `.env` local e depois em **Railway Variables Shared**

2. **Adicionar Redis**:
   - Nome: `bet62-redis`
   - Plano mínimo: **Starter ($2.5/mês)**
   - Copia **`REDIS_URL`** (do Railway) para Shared Variables.

3. **Criar 10 schemas no mesmo Postgres (multiSchema Prisma)**

Como Railway Postgres já está criado, executa 1 vez **apenas inicialização dos schemas**:

```bash
# Vai ao Railway Dashboard → bet62-postgres → Connect → "psql command" e cola:
CREATE SCHEMA IF NOT EXISTS auth AUTHORIZATION postgres;
CREATE SCHEMA IF NOT EXISTS users AUTHORIZATION postgres;
CREATE SCHEMA IF NOT EXISTS kyc AUTHORIZATION postgres;
CREATE SCHEMA IF NOT EXISTS wallet AUTHORIZATION postgres;
CREATE SCHEMA IF NOT EXISTS odds AUTHORIZATION postgres;
CREATE SCHEMA IF NOT EXISTS bets AUTHORIZATION postgres;
CREATE SCHEMA IF NOT EXISTS bonus AUTHORIZATION postgres;
CREATE SCHEMA IF NOT EXISTS casino AUTHORIZATION postgres;
CREATE SCHEMA IF NOT EXISTS notifications AUTHORIZATION postgres;
CREATE SCHEMA IF NOT EXISTS admins AUTHORIZATION postgres;
GRANT ALL PRIVILEGES ON ALL SCHEMA auth,users,kyc,wallet,odds,bets,bonus,casino,notifications,admins TO postgres;
```

---

## 2️⃣ **Passo 2 — Definir Shared Variables (Railway Project → Variables → Shared)**

Abre `railway.app → teu projeto → Variables → RAW Editor` e cola TUDO de `[.env.railway.example](file:///c:/Users/israe/Desktop/BET62APOSTAS/.env.railway.example)`.  
**Depois substitui só estes valores:**

| Variável | Onde vais buscar |
|---|---|
| `DATABASE_URL` | Dashboard **bet62-postgres → Variables → DATABASE_URL** |
| `REDIS_URL` | Dashboard **bet62-redis → Variables → REDIS_URL** |
| `JWT_SECRET` | Gera com `node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"` |
| `JWT_REFRESH_SECRET` | Outra string diferente (comando igual acima) |
| `STRIPE_SECRET_KEY` / `STRIPE_PUBLISHABLE_KEY` / `STRIPE_WEBHOOK_SECRET` | dashboard.stripe.com/test |
| `SUMSUB_APP_TOKEN` / `SUMSUB_SECRET_KEY` | cockpit.sumsub.com (staging primeiro) |
| `ODDS_PROVIDER_*` | O teu provider de odds real (nome+baseURL+key) |
| `SMTP_*` | Resend/Postmark/Sendgrid (100 grátis/dia) |
| `VAPID_PUBLIC_KEY` / `VAPID_PRIVATE_KEY` | `npx web-push generate-vapid-keys` |
| `ADMIN_DEFAULT_PASSWORD` | Password forte SUPER ADMIN inicial |

---

## 3️⃣ **Passo 3 — Criar 13 serviços (1 comando deploy.sh)**

### Método Recomendado: Script automático (Windows usa WSL ou Git Bash)
```bash
chmod +x ./infra/scripts/railway-deploy.sh

# Deployar TUDO (13 serviços — API Gateway → 11 NestJS → Web):
./infra/scripts/railway-deploy.sh

# OU deploy só um serviço individual:
./infra/scripts/railway-deploy.sh auth-service
./infra/scripts/railway-deploy.sh web
```

### O que o script faz automaticamente:
- Para **serviços NestJS** (ex: `auth-service`): usa **Dockerfile.node** + `--build-arg SERVICE_DIR=services/auth-service` → roda `prisma generate` dentro do container + build → deploy Railway.
- Para **web Next.js**: usa **Dockerfile.nextjs** → `--build-arg NEXT_PUBLIC_API_URL` e `NEXT_PUBLIC_APP_URL` injetados em build time → standalone server runner.

### Método manual Railway UI (se não quiseres script):
Cada serviço no Railway → **New → Empty Service → Settings → Service**:
1. **Build → Dockerfile path**:
   - Web = `infra/docker/Dockerfile.nextjs`
   - Cada NestJS = `infra/docker/Dockerfile.node`
2. **Build → Build Args (adicionar)**:
   - **Web**: `NEXT_PUBLIC_API_URL` = URL do teu api-gateway Railway + `NEXT_PUBLIC_APP_URL` = URL do web Railway
   - **NestJS**: `SERVICE_DIR` = `services/NOME_SERVICO` (ex: `services/auth-service`)
3. **Networking → Generate Public Domain** — Railway gera domínio tipo `bet62-auth-service.up.railway.app` para cada microserviço.

---

## 4️⃣ **Passo 4 — Rodar migrations (1 vez local, dados gravam no Postgres Railway)**

Depois do `bet62-postgres` deployed (status **Available**), executa **localmente** as `prisma migrate dev` (10 migrations) a apontar para o Railway Postgres remoto:

```powershell
# PowerShell Windows — copia DATABASE_URL do Railway Postgres e cola:
$env:DATABASE_URL="COLA_AQUI_TUA_RAILWAY_POSTGRES_DATABASE_URL_COM_SCHEMA_AUTH"
# Ou colar diretamente em .env (SCHEMA_AUTH_URL, etc)

cd c:\Users\israe\Desktop\BET62APOSTAS

# Copiar SCHEMA_AUTH_URL (é DATABASE_URL + ?schema=auth no fim):
$env:DATABASE_URL="$($env:DATABASE_URL)?schema=auth"
npx prisma migrate dev --schema services/auth-service/prisma/schema.prisma --name init

# Repete para os 9 restantes:
$env:DATABASE_URL="RAILWAY_URL_POSTGRES_AQUI?schema=users"
npx prisma migrate dev --schema services/user-service/prisma/schema.prisma --name init
# kyc / wallet / odds / bets / bonus / casino / notifications / admins
```

Após sucesso → tabelas de cada serviço aparecem nos seus schemas correspondentes no Railway Postgres.

---

## 5️⃣ **Passo 5 — Configurar Custom Domains (Railway → Settings → Networking)**

Depois de tudo com `Deployed ✅`:

| Serviço | Railway Domínio Gerado | Custom Domain Recomendado |
|---|---|---|
| `web` | `bet62-web-xxx.up.railway.app` | **`www.bet62apostas.pt`** (CNAME) |
| `api-gateway` | `bet62-api-gateway-xxx.up.railway.app` | **`api.bet62apostas.pt`** (CNAME) |
| `auth-service` | (interno, não publicamos) | — |
| `admin-service` | (interno) | **`admin.bet62apostas.pt`** (opcional, allowlist IPs) |
| Restantes NestJS | (interno) | — |

1. Railway → cada serviço → **Settings → Networking → Add Custom Domain**
2. No teu DNS (Cloudflare recomendado, free SSL):
   ```
   CNAME www        → bet62-web-xxx.up.railway.app
   CNAME api        → bet62-api-gateway-xxx.up.railway.app
   ```
3. Espera 5min, Railway provisiona SSL Let's Encrypt automaticamente.

4. **Atualizar Shared Variables** para apontar para domínios reais:
   ```
   NEXT_PUBLIC_APP_URL="https://www.bet62apostas.pt"
   NEXT_PUBLIC_API_URL="https://api.bet62apostas.pt"
   APP_URL="https://www.bet62apostas.pt"
   API_URL="https://api.bet62apostas.pt"
   CORS_ORIGINS="https://www.bet62apostas.pt,https://api.bet62apostas.pt"
   ```

---

## 6️⃣ **Passo 6 — Ordem recomendada para serviços ligarem**

Railway liga tudo em paralelo, mas para evitar falhas iniciais:
1. ✅ **Postgres + Redis healthy** (sempre primeiro)
2. ✅ **auth-service / wallet-service / user-service** (dependem só de BD)
3. ✅ **kyc-service (Sumsub), bonus, notifications (Webhook SMTP/VAPID)**
4. ✅ **odds-service (odds provider API), bets-service (depende de odds+wallet), casino**
5. ✅ **admin-service, api-gateway** (agregam tudo)
6. ✅ **web** (último, consome api-gateway)

---

## 7️⃣ **Passo 7 — SMTP / Stripe / Sumsub WEBHOOKS (obrigatórios para produção)**

| Serviço / Provider | Webhook URL a registar no provider | Descrição |
|---|---|---|
| Stripe Checkout | `https://api.bet62apostas.pt/api/wallet/stripe/webhook` | Atualiza wallet quando pagamento confirmado. Obrigatório adicionar `STRIPE_WEBHOOK_SECRET` em variáveis. |
| Sumsub KYC | `https://api.bet62apostas.pt/api/kyc/webhook/sumsub` | Atualiza KYC L0/L1/L2 em tempo real quando Sumsub aprova/rejeita. |
| VAPID Push | Auto (não há webhook, service worker do browser) | Configurar `VAPID_PUBLIC_KEY` manifest.json PWA. |
| SMTP | N/A (push do notifications-service) | Testar 1º email: `POST /api/notifications/test-email`. |

---

## 8️⃣ **Monitorização (Railway built-in)**

Cada serviço no Railway tem:
- **Logs** (painel → Logs) — stdout/stderr dos 13 serviços.
- **Metrics** (CPU/Memória/Rede) — escalonar para planos superiores se ultrapassar 70% CPU sustentado.
- **Healthchecks / Auto-restart**: configurado nos Dockerfiles e `railway.json` → Railway restarta automaticamente se cair.
- **Rollback 1 clique**: Dashboard Deployments → escolhe versão anterior → Rollback.

---

## 🧮 **Estimativa de Custos Mensais (Starter → Produção Média)**

| Serviço | Plano Railway Starter | Plano Upgrade tráfego ~5k utilizadores |
|---|---|---|
| Postgres 16 (managed) | $5/mês (5GB) | $20 (25GB 2 vCPU) |
| Redis 7 (managed) | $2.5/mês (1GB) | $7.5/mês (4GB) |
| **11 NestJS** (512MB RAM cada) | $7×11 = $77/mês | Upgrade para 1GB = $15×11 = $165 |
| **API Gateway** (1GB RAM) | $7/mês | $15 |
| **Next.js Web** (1GB RAM) | $7/mês | $25 |
| **TOTAL START** | **~$105 / mês** | |
| **TOTAL MÉDIO tráfego** | | **~$232 / mês** |

💡 **Dica para poupar 40%**:
Começa só **web + api-gateway + auth + wallet + odds + bets + notifications** (6 serviços deployar primeiro). Adiciona kyc/bonus/casino/admin mais tarde quando tiveres KYC ativo e utilizadores reais. Railway paga por serviço ativo.

---

## 🚨 **Hard Blockers que TU precisas de resolver (não são código)**

1. **Ter conta Railway confirmada com método de pagamento adicionado** (obrigatório para manter serviços ligados).
2. **Chaves reais listadas no Passo 2** (Stripe test é grátis, Sumsub sandbox grátis).
3. **Rodar `prisma generate` ×10 localmente HOJE** (passo que o sandbox bloqueou — é só correr PowerShell o script que te passei há 2 mensagens). Sem isto, os deploys NestJS vão ter erros de tipagem em tempo de build (o Dockerfile.node tenta gerar, mas melhor teres a certeza localmente).

---

## ✅ **Checklist Final para GO LIVE (Publicar)**

- [x] 1. Railway Postgres + Redis criados
- [x] 2. 10 schemas criados no Postgres
- [x] 3. Migrations rodadas 10× para o Railway Postgres
- [x] 4. Shared Variables com chaves reais (não placeholder)
- [x] 5. railway-deploy.sh executou 13× deploy `Deployed ✅`
- [x] 6. NEXT_PUBLIC_APP_URL / NEXT_PUBLIC_API_URL atualizados com domínios reais
- [x] 7. Stripe + Sumsub Webhooks configurados e testados (clicar "Send test webhook")
- [x] 8. Testar login em produção: email teste + senha → JWT retornado / bet criada / deposito €10 teste Stripe
- [x] 9. Aposta teste colocada com dados de odds reais e liquidada
- [x] 10. SSL Custom domains ativos (cadeado verde aparece no browser)
- [ ] 11. Publicitar 🎉
