#!/usr/bin/env bash
set -euo pipefail
# =======================================================================
# BET62 APOSTAS ESPORTIVAS — Deploy Automático RAILWAY (1 comando)
# =======================================================================
# Requisitos prévios (rodar 1 vez):
#   1. railway login (já autenticado)
#   2. railway init (já inicializaste o projeto Railway associado)
# =======================================================================
# Como usar:
#   chmod +x ./infra/scripts/railway-deploy.sh
#   ./infra/scripts/railway-deploy.sh          # Deploy de TODOS os 13 serviços
#   ./infra/scripts/railway-deploy.sh auth web  # Deploy só auth-service + web
# =======================================================================
export NPM_CONFIG_LEGACY_PEER_DEPS=true
export PRISMA_SKIP_POSTINSTALL_GENERATE=true

PROJECT_ROOT="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/../.." &> /dev/null && pwd)"
cd "$PROJECT_ROOT"

if ! command -v railway &> /dev/null; then
  echo "❌ Railway CLI não encontrado. Instala com: npm i -g @railway/cli && railway login"
  exit 1
fi

# ===== Mapeamento Nome Lógico → SERVICE_DIR + Build Args =====
declare -A SERVICE_DIR_MAP=(
  ["api-gateway"]="services/api-gateway"
  ["auth-service"]="services/auth-service"
  ["user-service"]="services/user-service"
  ["kyc-service"]="services/kyc-service"
  ["wallet-service"]="services/wallet-service"
  ["odds-service"]="services/odds-service"
  ["bets-service"]="services/bets-service"
  ["bonus-service"]="services/bonus-service"
  ["casino-service"]="services/casino-service"
  ["notifications-service"]="services/notifications-service"
  ["admin-service"]="services/admin-service"
)
declare -A DOCKERFILE_MAP=(
  ["web"]="infra/docker/Dockerfile.nextjs"
  ["api-gateway"]="infra/docker/Dockerfile.node"
  ["auth-service"]="infra/docker/Dockerfile.node"
  ["user-service"]="infra/docker/Dockerfile.node"
  ["kyc-service"]="infra/docker/Dockerfile.node"
  ["wallet-service"]="infra/docker/Dockerfile.node"
  ["odds-service"]="infra/docker/Dockerfile.node"
  ["bets-service"]="infra/docker/Dockerfile.node"
  ["bonus-service"]="infra/docker/Dockerfile.node"
  ["casino-service"]="infra/docker/Dockerfile.node"
  ["notifications-service"]="infra/docker/Dockerfile.node"
  ["admin-service"]="infra/docker/Dockerfile.node"
)

# Se passarmos serviços por argumento, usamos só esses; senão TUDO.
if [[ $# -ge 1 ]]; then
  TARGETS=("$@")
else
  TARGETS=(
    "api-gateway"
    "auth-service"
    "user-service"
    "kyc-service"
    "wallet-service"
    "odds-service"
    "bets-service"
    "bonus-service"
    "casino-service"
    "notifications-service"
    "admin-service"
    "web"
  )
fi

echo "==================================================================="
echo " BET62 DEPLOY RAILWAY — $(date '+%Y-%m-%d %H:%M:%S')"
echo " Serviços a deployar: ${TARGETS[*]}"
echo "==================================================================="

for SVC in "${TARGETS[@]}"; do
  echo ""
  echo "▶ [$SVC] 🔨  Build & deploy Railway..."

  if [[ "$SVC" == "web" ]]; then
    # Next.js standalone — build time envs
    NEXT_PUBLIC_API_URL="${NEXT_PUBLIC_API_URL:-$(railway variables get NEXT_PUBLIC_API_URL 2>/dev/null || echo '')}"
    NEXT_PUBLIC_APP_URL="${NEXT_PUBLIC_APP_URL:-$(railway variables get NEXT_PUBLIC_APP_URL 2>/dev/null || echo '')}"
    set +e
    # railway up -s é a nova interface Railway
    if [[ -n "$NEXT_PUBLIC_API_URL" && -n "$NEXT_PUBLIC_APP_URL" ]]; then
      BUILD_ARGS="NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL"
      RAILWAY_SERVICE="$SVC" railway up -d --detach --service "$SVC" \
        --dockerfile "${DOCKERFILE_MAP[$SVC]}" \
        --build-arg NEXT_PUBLIC_API_URL="$NEXT_PUBLIC_API_URL" \
        --build-arg NEXT_PUBLIC_APP_URL="$NEXT_PUBLIC_APP_URL"
      RC=$?
    else
      RAILWAY_SERVICE="$SVC" railway up -d --detach --service "$SVC" --dockerfile "${DOCKERFILE_MAP[$SVC]}"
      RC=$?
    fi
    set -e
  else
    # NestJS monorepo services — build arg SERVICE_DIR
    set +e
    RAILWAY_SERVICE="$SVC" railway up -d --detach --service "$SVC" \
      --dockerfile "${DOCKERFILE_MAP[$SVC]}" \
      --build-arg SERVICE_DIR="${SERVICE_DIR_MAP[$SVC]}"
    RC=$?
    set -e
  fi

  if [[ $RC -eq 0 ]]; then
    echo "✅ [$SVC] Deploy enviado para Railway (a compilar na cloud...)"
  else
    echo "⚠️  [$SVC] Aviso: railway up retornou código $RC (verifica Railway Dashboard para estado)"
  fi
done

echo ""
echo "==================================================================="
echo " 👉 Tudo enviado! Abre Railway Dashboard para logs e status:"
echo "      https://railway.app/project/"
echo "==================================================================="
echo "Ordem recomendada de arranque (espera 'Deployed' por esta ordem):"
echo "  1. Postgres + Redis (serviços managed Railway)"
echo "  2. auth-service  → wallet-service → user-service → kyc-service"
echo "  3. odds-service → bets-service → bonus-service → casino-service"
echo "  4. notifications-service → admin-service"
echo "  5. api-gateway → web"
echo "==================================================================="
