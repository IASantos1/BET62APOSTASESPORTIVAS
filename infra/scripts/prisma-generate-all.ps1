$ErrorActionPreference = "Stop"
$ROOT = Split-Path -Parent $PSScriptRoot
$ROOT = Split-Path -Parent $ROOT

$prismaServices = @(
    "auth-service",
    "wallet-service",
    "bonus-service",
    "bets-service",
    "casino-service",
    "kyc-service",
    "notifications-service",
    "user-service",
    "admin-service"
)

Write-Host ""
Write-Host "=== BET62  PRISMA GENERATE ALL ($($prismaServices.Count) servicos) ===" -ForegroundColor DarkCyan
Write-Host ("ROOT: " + $ROOT) -ForegroundColor Gray
Write-Host ""

$ok = 0
$fail = 0
$failed = @()

foreach ($svc in $prismaServices) {
    $svcPath = Join-Path $ROOT ("services\" + $svc)
    if (-not (Test-Path $svcPath)) {
        Write-Host ("SKIP  " + $svc + "  - pasta nao encontrada em " + $svcPath) -ForegroundColor DarkYellow
        continue
    }

    Push-Location $svcPath
    try {
        Write-Host ("> GENERATE  " + $svc) -ForegroundColor Cyan
        npx prisma generate
        if ($LASTEXITCODE -eq 0) {
            Write-Host ("[OK]        " + $svc + "  - prisma generate concluido") -ForegroundColor Green
            Write-Host ""
            $ok++
        } else {
            Write-Host ("[FAIL]      " + $svc + "  - exit code " + $LASTEXITCODE) -ForegroundColor Red
            Write-Host ""
            $fail++
            $failed += $svc
        }
    } catch {
        Write-Host ("[EXCEPTION] " + $svc + "  - " + $_) -ForegroundColor Red
        Write-Host ""
        $fail++
        $failed += $svc
    } finally {
        Pop-Location
    }
}

Write-Host ""
Write-Host "============================================"
Write-Host ("  PRISMA GENERATE - RESUMO:")
Write-Host ("    SUCESSO: " + $ok + " / " + $prismaServices.Count)
if ($fail -gt 0) {
    Write-Host ("    FALHAS:  " + $fail) -ForegroundColor Red
    Write-Host ("       Servicos com erro: " + ($failed -join ", ")) -ForegroundColor Red
    Write-Host "============================================" -ForegroundColor Red
    exit 1
} else {
    Write-Host "============================================" -ForegroundColor Green
    Write-Host "  Todos os Prisma Client gerados com sucesso." -ForegroundColor Green
    exit 0
}
