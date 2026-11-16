# BET62 — BETBY Data Collector

Standalone Node.js service for collecting BETBY demo API snapshots. It is intentionally outside `apps/web` and does not modify the main BET62 web startup, wallet, payments, or database.

## What it collects

- Live feed: `/api/v4/live/brand/{brand}/{locale}/{cursor}`
- Prematch feed: `/api/v4/prematch/brand/{brand}/{locale}/{cursor}`
- Full raw JSON snapshots (only when the response changes), plus extracted event records with competitors, scores, clock, statistics and markets.

The raw response is retained as the source of truth. The event extractor is best-effort and does not assume that every event has tracking data. Match/player coordinates are not fabricated.

## Railway deployment

Create a **new Railway service** from this same GitHub repository. Do not change the existing BET62 service.

Recommended service settings:
- Root directory: repository root
- Build command: leave empty (no build required)
- Start command: `node services/betby-collector/index.mjs`
- Add a Railway Volume mounted at `/data`

Set these variables on the new service only:

| Variable | Suggested value | Purpose |
|---|---|---|
| `BETBY_ENABLED` | `true` | Enable polling |
| `BETBY_BASE_URL` | `https://demoapi.betby.com` | API base |
| `BETBY_BRAND_ID` | `1653815133341880320` | Demo brand ID used in current tests |
| `BETBY_LOCALE` | `en-GB` | API locale |
| `BETBY_LIVE_CURSOR` | `0` | Live URL suffix. `0` returns a version index (`top_events_versions`, `rest_events_versions`); the collector then requests each version in place of the cursor to get the events |
| `BETBY_PREMATCH_CURSOR` | `0` | Prematch URL suffix; keep fixed until cursor semantics are confirmed |
| `BETBY_POLL_INTERVAL_MS` | `15000` | Poll interval |
| `BETBY_DATA_DIR` | `/data` | Persistent volume path |
| `BETBY_STATUS_TOKEN` | generate a private random value | Protect detailed status endpoint |

Railway supplies `PORT`. The service exposes `/health` for the Railway health check and `/status` for authenticated diagnostics.

## Local check

Requires Node.js 22.5+:

```sh
cd services/betby-collector
npm run check
BETBY_ENABLED=false npm start
```

## Important limitations

- The current demo API paths and brand ID are configurable and must be replaced with production-approved values when BETBY supplies production access.
- The numeric URL suffix `0` returns a version index; the event versions it lists are requested next. This was inferred from a real index response and should be confirmed with BETBY.
- Polling stores snapshots and event data; it does not place bets, authenticate end users, or connect to the BET62 wallet.
- Use only feeds and credentials that BETBY has authorized for your account and intended use.

## Painel de diagnóstico (`/admin` no site)

O site BET62 tem uma página `/admin` que mostra o `/status` deste collector (estado de cada feed, HTTP, motivo de bloqueio e uma pista do que corrigir). No serviço **web** do Railway defina:

| Variável | Valor |
|---|---|
| `BETBY_COLLECTOR_URL` | URL pública deste serviço collector |
| `BETBY_STATUS_TOKEN` | o mesmo valor definido no collector |
| `ADMIN_PASSWORD` | senha da área admin (pedida num formulário em `/admin`) |

Sintoma conhecido: a mesma URL responde num navegador doméstico, mas no servidor dá `HTTP 503 {"error":"access blocked"}` com cabeçalho `bb-rsn: bc`. Isso significa que a BETBY recusou o pedido na origem (IP/região do servidor não autorizado). Não é erro de código: é preciso pedir à BETBY a liberação do IP de saída do collector ou credenciais oficiais.
