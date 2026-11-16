# syntax=docker/dockerfile:1
#
# BET62 — site Next.js (apps/web) com pnpm. Dockerfile em vez do Nixpacks: o passo
# "nix-env -if …" do Nixpacks (descarregar o Node/pnpm do repositório Nix) falhava no Railway
# antes de o código chegar a ser compilado. Aqui a imagem oficial do Node já traz tudo.

FROM node:22-bookworm-slim AS base
ENV PNPM_HOME=/pnpm PATH=/pnpm:$PATH NEXT_TELEMETRY_DISABLED=1
RUN corepack enable && corepack prepare pnpm@10.33.0 --activate
WORKDIR /app

FROM base AS build
# As variáveis NEXT_PUBLIC_* ficam gravadas no código do navegador durante o build:
# o Railway passa-as como build args quando estão declaradas aqui.
ARG NEXT_PUBLIC_BETBY_BASE_URL
ARG NEXT_PUBLIC_BETBY_BRAND_ID
ARG NEXT_PUBLIC_BETBY_LOCALE
ARG NEXT_PUBLIC_BETBY_TRACKER_URL
ARG RAILWAY_GIT_COMMIT_SHA
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
COPY apps/web/package.json apps/web/package.json
RUN pnpm install --frozen-lockfile --filter @bet62/web...
COPY . .
RUN pnpm --filter @bet62/web run build

# Só o necessário para correr (output: 'standalone' do Next.js).
FROM node:22-bookworm-slim AS runtime
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 HOSTNAME=0.0.0.0 PORT=3000
WORKDIR /app
COPY --from=build /app/apps/web/.next/standalone ./
COPY --from=build /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=build /app/apps/web/public ./apps/web/public
EXPOSE 3000
CMD ["node", "apps/web/server.js"]
