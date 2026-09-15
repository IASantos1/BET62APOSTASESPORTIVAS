# syntax=docker/dockerfile:1
#
# BET62 platform — monorepo npm workspaces (10 microservices NestJS + api-gateway + web Next.js).
# Builder explicito em vez de Nixpacks/Railpack: evita a auto-deteccao inconsistente entre
# builders (troca de builder entre deploys), a injecao automatica de TODAS as env vars do
# servico como build ARG/ENV (o que gravaria secrets como JWT_ACCESS_SECRET/STRIPE_SECRET_KEY
# nas camadas da imagem), e o comportamento do npm que omite devDependencies quando
# NODE_ENV=production esta setado no ambiente de build.

# Versao fixada (ver .nvmrc / .node-version) em vez da tag flutuante "22-bookworm-slim":
# evita que uma atualizacao de patch do Node quebre o build silenciosamente.
FROM node:22.23.2-bookworm-slim AS base
RUN apt-get update \
  && apt-get install -y --no-install-recommends openssl ca-certificates python3 make g++ \
  && rm -rf /var/lib/apt/lists/*
WORKDIR /app

FROM base AS build
# NODE_ENV fica DESLIGADO aqui de proposito: "npm ci --include=dev" ja garante as
# devDependencies independente do NODE_ENV, e o `next build` do apps/web precisa
# controlar o proprio NODE_ENV internamente (ele mesmo o forca para "production").
# Fixar NODE_ENV=development aqui quebra o build do Next (bundles React dev/prod
# misturados, causando "useContext" nulo e erros de prerender em todas as paginas).
COPY . .
RUN npm ci --include=dev
RUN npm run build

FROM base AS runtime
ENV NODE_ENV=production
COPY --from=build /app ./
EXPOSE 3000
CMD ["npm", "run", "start:railway"]
