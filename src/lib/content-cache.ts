/** Bounded process-local content cache. Errors never enter the cache. */
export class ContentCache {
  private readonly entries = new Map<string, { expiresAt: number; pending: Promise<unknown> }>();

  constructor(private readonly maxEntries = 128, private readonly ttlMs = 60_000,
    private readonly now: () => number = Date.now) {
    if (maxEntries < 1 || ttlMs < 1) throw new Error('Cache bounds must be positive.');
  }

  async getOrLoad<T>(key: string, load: () => Promise<T>): Promise<T> {
    const existing = this.entries.get(key);
    if (existing && existing.expiresAt > this.now()) {
      this.entries.delete(key);
      this.entries.set(key, existing);
      return structuredClone(await existing.pending) as T;
    }
    if (existing) this.entries.delete(key);
    const entry = { expiresAt: this.now() + this.ttlMs, pending: Promise.resolve().then(load) as Promise<unknown> };
    this.entries.set(key, entry);
    while (this.entries.size > this.maxEntries) {
      this.entries.delete(this.entries.keys().next().value!);
    }
    try {
      return structuredClone(await entry.pending) as T;
    } catch (error) {
      if (this.entries.get(key) === entry) this.entries.delete(key);
      throw error;
    }
  }

  clear(): void { this.entries.clear(); }
  get size(): number { return this.entries.size; }
}

export const contentCache = new ContentCache();
export function invalidateContentCache(): void { contentCache.clear(); }
