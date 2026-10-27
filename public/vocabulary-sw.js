/* Vocabulary-only offline shell. Hashed assets stay immutable; HTML is network first. */
const CACHE = "english-vocabulary-2026-10-27-i18n-v2";
self.addEventListener("install", (event) =>
  event.waitUntil(self.skipWaiting()),
);
self.addEventListener("activate", (event) =>
  event.waitUntil(
    (async () => {
      for (const key of await caches.keys())
        if (key.startsWith("english-vocabulary-") && key !== CACHE)
          await caches.delete(key);
      await self.clients.claim();
    })(),
  ),
);
self.addEventListener("message", (event) => {
  if (event.data?.type !== "CACHE_VOCABULARY") return;
  event.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(CACHE),
          origin = self.location.origin;
        const urls = [
          "/vocabulary",
          "/vocabulary/sources",
          "/api/vocabulary/catalog?v=ngsl-gr-1.0-5000-i18n-2026-10-27",
          ...(event.data.assets ?? []),
        ]
          .map((value) => new URL(value, origin))
          .filter(
            (url) =>
              url.origin === origin &&
              (/^\/_astro\//.test(url.pathname) ||
                url.pathname.startsWith("/vocabulary") ||
                url.pathname === "/api/vocabulary/catalog"),
          );
        await Promise.all(
          urls.map(async (url) => {
            const response = await fetch(url.href, {
              credentials: "same-origin",
            });
            if (!response.ok) throw Error("CACHE");
            await cache.put(url.href, response);
          }),
        );
        event.source?.postMessage({ type: "VOCABULARY_OFFLINE_READY" });
      } catch {
        event.source?.postMessage({ type: "VOCABULARY_OFFLINE_FAILED" });
      }
    })(),
  );
});
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== "GET" || url.origin !== self.location.origin)
    return;
  const shell =
    url.pathname === "/vocabulary" ||
    url.pathname === "/vocabulary/" ||
    url.pathname === "/vocabulary/sources";
  const data = url.pathname === "/api/vocabulary/catalog";
  const asset = url.pathname.startsWith("/_astro/");
  if (!shell && !data && !asset) return;
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      if (shell) {
        try {
          const response = await fetch(event.request);
          if (response.ok) await cache.put(url.pathname, response.clone());
          return response;
        } catch {
          const saved = await cache.match(url.pathname);
          if (saved) return saved;
          throw Error("OFFLINE_SHELL");
        }
      }
      const saved =
        (await cache.match(event.request)) ??
        (data
          ? await cache.match(url.pathname, { ignoreSearch: true })
          : undefined);
      if (saved) return saved;
      const response = await fetch(event.request);
      if (response.ok) await cache.put(event.request, response.clone());
      return response;
    })(),
  );
});
