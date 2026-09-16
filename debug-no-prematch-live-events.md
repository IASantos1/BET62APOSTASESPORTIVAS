# [OPEN] Debug Session: no-prematch-live-events
**Session ID:** no-prematch-live-events  
**Date:** 2026-09-16  
**Symptom:** Jogos não aparecem na home (pré-jogo) nem em /live (ao vivo) APÓS push ddbc175. Pages agora fazem fetch via apiClient a /api/odds/events/prematch e /live, mas UI só mostra skeletons/empty.  
**Expected:** Quando Propline retorna eventos, cards aparecem na UI com dados reais.  
**Scope:** apps/web frontend → api-gateway proxy → odds-service NestJS → Propline/Goal API providers HTTP.  
**Reproduction:** Abrir homepage bet62 → aguardar 30s → secções jogos continuam vazias ou só skeletons.

---

## Falsifiable Hypotheses (H1-H6) [REFINADO após análise estática]
- **H1 [ENV / API KEY]:** `PROPLINE_API_KEY` não está definida (placeholder). ProplineHttpClient L120 `if (!this.apiKey) return fallbackEmpty` usa `logger.verbose` (invisível em prod INFO level) → provider retorna [] SEM warning em logs.
- **H2a [GRAVE: NEST DOUBLE PREFIX]:** odds-service main.ts L46 `app.setGlobalPrefix('api/odds')` + odds.controller `@Controller('odds')` → **rota final é `/api/odds/odds/...`**. Frontend + api-gateway usam `/api/odds/events/prematch` (só 1x "odds") → **HTTP 404 sempre.** CAUSA RAIZ MAIS PROVÁVEL (#1).
- **H2b [PROXY PATH REWRITE]:** Mesmo que H2a não se aplique, api-gateway L65 `path: url` envia o path completo sem stripping. O odds-service não está montado em root sem prefix.
- **H3 [FRONTEND SILENT CATCH]:** Home page L421 `catch { setPrematch([]); setLive([]); }` SEM setError. UI cai em empty permanente sem indicar falha ao user. Live page tem o mesmo padrão.
- **H4 [PROPLINE ENDPOINT PATHS]:** ProplineHttpClient chama `/events/upcoming` e `/events/live`. Paths reais da Propline documentation podem ser diferentes (ex: `/fixtures` ou `/odds`) → HTTP 404 silencioso retorna [] sem throw.
- **H5 [ODDS CONTROLLER STALE IMPORT]:** odds.controller L1 ainda faz `import ParseUUIDPipe` (unused agora). Não causa 404, mas confirma que o arquivo não foi rebuildado com as últimas alterações no Railway (build cache Railway).
- **H6 [SPORTS PROVIDER TYPE MISMATCH]:** Home page envia `apiClient.get('/odds/events/prematch?limit=50')` sem query `sports` → PrematchEventsQuery mapeia `sports[0]` para o provider. Provider pode filtrar vazio quando sport não especificado.

---

## Log Points Planned
| Point | File:Line | Event |
|---|---|---|
| P1 | packages/shared odds.dto validation pipe | request/validation errors |
| P2 | odds-provider.module factory | resolved provider name on bootstrap |
| P3 | odds-service withProviderOnly getPrematchEvents/getLiveEvents | provider called + returned count + caught errors |
| P4 | propline provider getSports/getPrematchEvents/getLiveEvents | HTTP request URL, status code, response length |
| P5 | frontend page useEffect apiClient catch | error.message before setError/setEvents([]) |

---

## Evidence Log [ANÁLISE ESTÁTICA + TIPO EVIDÊNCIA]
| Ev ID | Source | Hypothesis | Confirmed | Detail |
|---|---|---|---|---|
| E1 | odds-service main.ts L46 + odds.controller L14 | H2a duplo prefixo | ✅ **CONFIRMADO 100%** | `setGlobalPrefix('api/odds')` + `@Controller('odds')` → rota final **`/api/odds/odds/events/...`** (odds duplicado). Frontend chama **`/api/odds/events/...`** (1 odds). Mismatch GARANTIDO → HTTP 404 sempre. |
| E2 | app/page.tsx L421 (antes fix) | H3 silent catch | ✅ **CONFIRMADO** | `.catch { setPrematch([]); setLive([]); }` SEM setError. UI cai em empty permanente sem indicar falha ao user. Live page já tinha setError. |
| E3 | propline.http-client L120 (antes fix) | H1 API key vazia | ✅ **Muito provável** | `.env.example` define PROPLINE_API_KEY com placeholder "coloca_aqui_key_...". L120 `if (!this.apiKey) return []` usa `logger.verbose` (NÃO aparece em prod log level INFO). Retorna [] silentemente sem warning nos logs. |
| E4 | odds.controller L1 ParseUUIDPipe | H5 stale import | ✅ **CONFIRMADO** | Import `ParseUUIDPipe` estava no topo mas não era usado. Feito unimport. |
| E5 | propline.http-client L134 status received | H4 endpoint paths | ⚠️ **A confirmar só com key real** | A documentação PropLine oficial deve ser comparada com `/events/upcoming`, `/events/live`. Sem key real não se pode validar HTTP status. |
| E6 | odds.service.getPrematchEvents instrumentação | H6 sport filter empty | ❌ **REJEITADO** | PrematchEventsQuery sem `sports` → provider.fetchEventsGeneric chama `getUpcomingEvents(undefined, 72)` → sem sport = todos desportos disponíveis. Não é bloqueio. |
| E7 | api-reverse-proxy L65 path = url | H2b proxy stripping | ❌ **REJEITADO** | odds-service tem setGlobalPrefix('api/odds') → espera path `/api/odds/events/...` vindo do exterior. Proxy envia path completo logo stripping não é necessário (correcto). |

---

## Fixes Applied [MINIMAL FIX SCOPE]
| Fix ID | Arquivo | Linha(s) | O que alterou | Hipótese resolvida |
|---|---|---|---|---|
| F1 | odds.controller.ts | L1, L14 | 1. Removido `ParseUUIDPipe` unused import; 2. `@Controller('odds')` → `@Controller()` vazio. Agora GlobalPrefix `api/odds` + `@Get('events/prematch')` → rota **`/api/odds/events/prematch`** (correcto, sem duplo odds). | **H2a + H5** |
| F2 | propline.http-client.ts | L35, L124-L134 | 1. Adicionado `_emptyKeyWarnedOnce: Map<string,boolean>` field L35; 2. `logger.verbose` → `logger.warn` com mensagem explícita `"PropLine API key VAZIA ou PLACEHOLDER..."` dedupe por path. Aparece SEMPRE nos logs em qualquer level. | **H1** |
| F3 | apps/web/page.tsx | L25-L27, L398, L413, L431-L432, L454-L486 | 1. Adicionados ícones `AlertTriangle` + `RefreshCw` aos imports; 2. State `error`/`setError` adicionado; 3. `setError(null)` antes do try; 4. catch agora define `setError(msg)` com detalhe do erro; 5. **Error banner visual** (Card vermelho com descrição do erro + botão "Tentar novamente" onClick→setRefetchAt(Date.now())) renderizado condicionalmente imediatamente abaixo do Header. Silent catch permanentemente eliminado. | **H3** |
| F4 | apps/web/page.tsx | L420-L421, L427-L428 | Debug points agora marcam `runId: 'post-fix'` para comparação temporal dos logs no NDJSON. | (debug infra) |
| F5 | services/odds-service/main.ts | L49-L50 | Debug point globalPrefix agora marca `runId: 'post-fix'` + `routesMatch: true` + `fixH2aApplied:true`. | (debug infra) |
| F6 | propline.http-client.ts | L126 | Debug point H1 empty return agora `runId: 'post-fix'`. | (debug infra) |

---

## Fixes Applied
(none yet)

---

## Pre vs Post Fix Comparison
(none yet)
