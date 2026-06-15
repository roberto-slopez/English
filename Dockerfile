# syntax=docker/dockerfile:1.7
#
# Multi-stage build for the Astro 6 + React SSR app (Node adapter, standalone).
#
# • Builder installs all deps (build tools + better-sqlite3 native build),
#   compiles the Astro app, and emits dist/.
# • Prod-deps re-installs without devDependencies so the runtime image
#   only carries what `node ./dist/server/entry.mjs` actually needs.
# • Runtime is a slim node:22-bookworm-slim image running as the non-root
#   `node` user, with /app/data as a persistent volume mount for SQLite.

ARG NODE_IMAGE=node:22-bookworm-slim

# ─── Stage 1: install + build ────────────────────────────────────────
FROM ${NODE_IMAGE} AS builder
WORKDIR /app

# better-sqlite3 ships a C++ source fallback for platforms that don't have
# a matching prebuilt binary, so a minimal toolchain is required at install
# time even when the prebuilt is downloaded.
RUN apt-get update \
 && apt-get install -y --no-install-recommends \
        python3 \
        make \
        g++ \
        ca-certificates \
 && rm -rf /var/lib/apt/lists/*

# Corepack is bundled with Node 22 — use it to pin pnpm to the exact
# version declared in package.json (`packageManager: pnpm@10.0.0`).
RUN corepack enable

# Copy manifest + lockfile first so the dependency layer is cached when
# only source code changes. `pnpm fetch` populates the offline store so
# the real install is hermetic and reproducible.
COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm fetch

# Now copy the rest of the source and install + build. --offline keeps
# the install from touching the network and uses the prefetched store.
COPY . .
RUN pnpm install --offline --frozen-lockfile
RUN pnpm build

# ─── Stage 2: production-only dependencies ──────────────────────────
FROM ${NODE_IMAGE} AS prod-deps
WORKDIR /app

# Same toolchain as builder — better-sqlite3 still has to compile its
# native module against the target Node ABI.
RUN apt-get update \
 && apt-get install -y --no-install-recommends \
        python3 \
        make \
        g++ \
        ca-certificates \
 && rm -rf /var/lib/apt/lists/*

RUN corepack enable
COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm fetch
COPY . .
# --prod drops devDependencies, keeping the image small.
RUN pnpm install --offline --frozen-lockfile --prod

# ─── Stage 3: runtime ────────────────────────────────────────────────
FROM ${NODE_IMAGE} AS runtime
WORKDIR /app

# Astro's Node adapter reads HOST + PORT from the environment. Railway
# sets PORT automatically; binding to 0.0.0.0 lets the proxy reach us.
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=4321

# Drop privileges: the official node image ships an unprivileged `node`
# user (uid 1000). Anything we copy must be readable/writable by it.
COPY --chown=node:node --from=prod-deps /app/node_modules ./node_modules
COPY --chown=node:node --from=builder    /app/dist          ./dist
COPY --chown=node:node --from=builder    /app/package.json  ./package.json

# Persistent volume for the SQLite database. Railway mounts a real
# volume at /app/data (declared in railway.toml), so the directory must
# exist and be writable by the `node` user before the first request
# hits getDb(). The VOLUME directive is intentionally absent — Railway
# rejects it; mount the path via the service's volume config instead.
RUN mkdir -p /app/data && chown -R node:node /app/data

USER node
EXPOSE 4321

# A simple HTTP healthcheck — the landing page is cheap to fetch and
# proves both the SSR runtime and the SQLite bootstrap are alive.
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "require('http').get('http://127.0.0.1:'+process.env.PORT+'/', r => process.exit(r.statusCode < 500 ? 0 : 1)).on('error', () => process.exit(1))"

CMD ["node", "./dist/server/entry.mjs"]
