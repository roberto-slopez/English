# syntax=docker/dockerfile:1.7
#
# Multi-stage build for the Astro 7 + React SSR app (Node adapter, standalone).
#
# • Builder installs all deps, compiles the Astro app, and emits dist/.
# • Runtime starts from the same slim base, copies /app from the builder,
#   prunes devDependencies, and runs as a non-root user.
#
# Postgres: the runtime talks to a Postgres database via the `pg` driver.
# Connection string comes from process.env.DATABASE_URL — set it on the
# Railway service (or in .env locally). No native module, no C toolchain,
# no /app/data volume. The seed script (`pnpm db:seed`) is run separately
# against the target database.

# Astro 7 requires Node >=22.12.0; the maintained Node 22 image meets that minimum.
ARG NODE_IMAGE=node:22-bookworm-slim

# ─── Stage 1: install + build ────────────────────────────────────────
FROM ${NODE_IMAGE} AS builder
WORKDIR /app

# Corepack is bundled with Node 22 — use it to pin pnpm to the exact
# version declared in package.json (`packageManager: pnpm@10.0.0`).
RUN corepack enable

# Copy manifest + lockfile first so the dependency layer is cached when
# only source code changes. `pnpm fetch` populates the offline store so
# the real install is hermetic and reproducible.
COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm fetch

# Now copy the rest of the source and install + build.
COPY . .
RUN pnpm install --frozen-lockfile --strict-peer-dependencies
RUN pnpm build

# ─── Stage 2: runtime ────────────────────────────────────────────────
FROM ${NODE_IMAGE} AS runtime
WORKDIR /app

# Astro's Node adapter reads HOST + PORT from the environment. Railway
# sets PORT automatically; binding to 0.0.0.0 lets the proxy reach us.
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=4321

# Copy the whole /app from the builder (including .pnpm store). Drop
# devDependencies and source to keep the image lean.
COPY --chown=node:node --from=builder /app /app

RUN corepack enable \
 && pnpm prune --prod \
 && rm -rf /app/.astro /app/src /app/.git

USER node
# Verify the pruned image as the runtime user, with no source or dev dependencies.
# This catches adapter/core incompatibility even when compilation succeeds.
RUN node scripts/verify-runtime.mjs
EXPOSE 4321

# Liveness proves the SSR process responds. Readiness is a separate DB-aware endpoint.
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "require('http').get('http://127.0.0.1:'+process.env.PORT+'/api/health/live', r => process.exit(r.statusCode === 200 ? 0 : 1)).on('error', () => process.exit(1))"

CMD ["node", "./dist/server/entry.mjs"]
