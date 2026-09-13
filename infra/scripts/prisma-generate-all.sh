#!/bin/bash
set -e

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

prismaServices=(
    "auth-service"
    "wallet-service"
    "bonus-service"
    "bets-service"
    "casino-service"
    "kyc-service"
    "odds-service"
    "notifications-service"
    "user-service"
    "admin-service"
)

echo ""
echo "=== BET62 PRISMA GENERATE ALL (${#prismaServices[@]} servicos) ==="
echo "ROOT: $ROOT"
echo ""

ok=0
fail=0
failed=()

for svc in "${prismaServices[@]}"; do
    svcPath="$ROOT/services/$svc"
    if [ ! -d "$svcPath" ]; then
        echo "SKIP   $svc - pasta nao encontrada em $svcPath"
        continue
    fi

    (
        cd "$svcPath"
        echo "> GENERATE  $svc"
        if npx prisma generate; then
            echo "[OK]        $svc - prisma generate concluido"
            echo ""
        else
            echo "[FAIL]      $svc - exit code $?"
            echo ""
            exit 1
        fi
    ) || {
        fail=$((fail + 1))
        failed+=("$svc")
        continue
    }
    ok=$((ok + 1))
done

echo ""
echo "============================================"
echo "  PRISMA GENERATE - RESUMO:"
echo "    SUCESSO: $ok / ${#prismaServices[@]}"
if [ $fail -gt 0 ]; then
    echo "    FALHAS:  $fail"
    echo "       Servicos com erro: ${failed[*]}"
    echo "============================================"
    exit 1
else
    echo "============================================"
    echo "  Todos os Prisma Client gerados com sucesso."
    exit 0
fi

