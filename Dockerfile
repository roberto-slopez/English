# syntax=docker/dockerfile:1.7
#
# Multi-stage build for the Astro 6 + React SSR app (Node adapter, standalone).
#
# • Builder installs all deps (build tools + better-sqlite3 native build),
#   compiles the Astro app, and emits dist/. better-sqlite3's postinstall
#   builds the .node native binding here.
# • Runtime starts from the same slim base but copies only /app from the
#   builder, prunes devDependencies, and runs as a non-root user. Build
#   tools (python3/make/g++) are NOT installed in this stage — they live
#   and die in the builder, so there's no toolchain to purge here.
#   Copying from a single stage (instead of a separate prod-deps stage)
#   guarantees the native binding file actually ships to the image — the
#   previous design re-ran `pnpm install --prod --offline` in a second
#   stage, which blocked prebuild-install from downloading the prebuilt
#   and produced an image missing better_sqlite3.node.

ARG NODE_IMAGE=node:22-bookworm-slim

# ─── Stage 1: install + build ────────────────────────────────────────
FROM ${NODE_IMAGE} AS builder
WORKDIR /app

# better-sqlite3 needs python3 + a C++ toolchain for the source-build
# fallback that prebuild-install triggers when the prebuilt can't be
# fetched. We keep this in the builder; the runtime stage strips it.
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

# Now copy the rest of the source and install + build. We let this
# install hit the network on purpose: better-sqlite3's postinstall uses
# prebuild-install to download the matching prebuilt .node binary, and
# prebuild-install will fall back to a source build (which we can do,
# because g++ + python3 are installed) if the download fails. Either
# way, /app/node_modules/.pnpm/better-sqlite3@*/.../better_sqlite3.node
# exists by the time this RUN finishes.
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm build

# ─── Stage 2: runtime ────────────────────────────────────────────────
FROM ${NODE_IMAGE} AS runtime
WORKDIR /app

# Astro's Node adapter reads HOST + PORT from the environment. Railway
# sets PORT automatically; binding to 0.0.0.0 lets the proxy reach us.
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=4321

# Drop privileges: the official node image ships an unprivileged `node`
# user (uid 1000). Anything we copy must be readable/writable by it.
#
# Copy the whole /app from the builder (including .pnpm store and the
# native .node file under it). We then prune devDependencies and drop
# the C++ toolchain so the image stays lean and the attack surface is
# smaller.
COPY --chown=node:node --from=builder /app /app

# `apt-get purge` was removed: build tools (python3/make/g++) live in the
# builder stage only and never enter this image — there's nothing to purge
# in the runtime layer. We only need to drop devDependencies and source.
RUN corepack enable \
 && pnpm prune --prod \
 && rm -rf /app/.astro /app/src /app/.git

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
