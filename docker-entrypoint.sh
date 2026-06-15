#!/bin/sh
# Container entrypoint.
#
# Why this exists: the persistent volume declared in railway.toml is
# mounted at /app/data at runtime, OVERLAYING the empty directory we
# created in the image. Railway mounts volumes with root ownership, so
# the `node` user (uid 1000) can't write the SQLite file there on
# first boot. We fix the ownership here, then drop into the CMD.
#
# The chown is idempotent: a no-op once the volume is correctly owned
# (subsequent boots only touch files that already belong to `node`).
# We swallow errors (e.g. read-only volume) so a permission issue
# surfaces as the original SQLite error inside the app, not here.
set -e

chown -R node:node /app/data 2>/dev/null || true

exec "$@"
