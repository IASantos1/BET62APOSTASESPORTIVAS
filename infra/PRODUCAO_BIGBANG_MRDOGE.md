# Producao BigBang + MrDoge

## Objetivo

Este documento centraliza o que precisa de ficar configurado para operar:

- Futebol com `MrDoge`
- Cassino com `BigBang`
- Gateway, web e callbacks no Railway

## Variaveis obrigatorias

### Frontend / Gateway

```env
NEXT_PUBLIC_APP_URL="https://bet62-web.up.railway.app"
NEXT_PUBLIC_API_URL="https://bet62-api-gateway.up.railway.app"
NEXT_PUBLIC_API_BASE_URL="https://bet62-api-gateway.up.railway.app/api"
APP_URL="https://bet62-web.up.railway.app"
API_URL="https://bet62-api-gateway.up.railway.app"
```

### MrDoge

```env
MRDOGE_API_KEY="<<MRDOGE_SERVER_API_KEY>>"
MRDOGE_JWT_TTL="600"
ODDS_SERVICE_URL="http://bet62-odds-service:3005"
```

### BigBang

```env
CASINO_DEFAULT_PROVIDER="BIGBANG"
BIGBANG_ENABLED="true"
BIGBANG_BASE_URL="https://api.bigbangcasino.bet/api/v1"
BIGBANG_API_KEY="<<BIGBANG_API_KEY>>"
BIGBANG_OPERATOR_ID="BET62"
BIGBANG_DEFAULT_CURRENCY="EUR"
BIGBANG_SYNC_ON_BOOT="true"
CASINO_SERVICE_URL="http://bet62-casino-service:3008"
WALLET_SERVICE_URL="http://bet62-wallet-service:3004"
```

## Endpoints internos publicados

### MrDoge via API Gateway

- `GET /api/odds/sports`
- `GET /api/odds/events/live`
- `GET /api/odds/events/prematch`
- `GET /api/odds/events/home`
- `GET /api/odds/events/:id`
- `GET /api/odds/events/:id/markets`
- `GET /api/odds/events/:id/statistics`
- `GET /api/odds/events/:id/timeline`

### BigBang via API Gateway

- `POST /api/casino/provider/bigbang/sync`
- `GET /api/casino/provider/bigbang/wallet/user-data`
- `POST /api/casino/provider/bigbang/wallet/balance-change`

### Wallet interno consumido pelo BigBang

- `GET /api/wallet/internal/balance`
- `POST /api/wallet/internal/debit`
- `POST /api/wallet/internal/credit`

## Configuracao no painel BigBang

Registar estes callbacks no dashboard do operador:

```text
user_data      = https://bet62-api-gateway.up.railway.app/api/casino/provider/bigbang/wallet/user-data
balance_change = https://bet62-api-gateway.up.railway.app/api/casino/provider/bigbang/wallet/balance-change
```

Notas operacionais:

- `username` precisa representar o `userId` interno esperado pelo `wallet-service`
- O `balance_change` usa assinatura `HMAC-SHA256`
- A assinatura atual concatena: `username + amount + game + game_category + transaction_id`
- `transaction_id` e tratado com idempotencia na tabela `casino_provider_wallet_tx`

## Sequencia recomendada de go-live

1. Subir `wallet-service`, `casino-service`, `odds-service`, `api-gateway` e `web`
2. Confirmar que `GET /api/odds/events/live` responde no dominio do gateway
3. Executar `POST /api/casino/provider/bigbang/sync` para importar catalogo
4. Validar que jogos BigBang ficaram gravados no schema `casino`
5. Configurar callbacks `user_data` e `balance_change` no painel BigBang
6. Testar consulta de saldo e ciclo debito/credito com utilizador real ou sandbox
7. Validar no frontend:
8. Abrir `/live`
9. Abrir `/events`
10. Abrir um detalhe em `/live/match/:id`
11. Abrir `/casino` e iniciar sessao de jogo

## Checklist tecnico

- `pnpm install --no-frozen-lockfile`
- `pnpm run prisma:generate:all`
- `pnpm --filter @bet62/odds-service run build`
- `pnpm run build`
- Variaveis Railway preenchidas com valores reais
- Dominios publicos atualizados em `NEXT_PUBLIC_*` e `API_URL`
- Callback URLs BigBang apontando para o `api-gateway`

## Riscos conhecidos

- Build isolado do `casino-service` sem `prisma:generate:all` pode falhar por depender do client Prisma gerado
- Se `NEXT_PUBLIC_API_BASE_URL` nao for definido, o frontend pode tentar chamar o proprio dominio do `web` em vez do gateway
- `MRDOGE_API_KEY` deve ficar apenas no backend; nao expor no frontend
