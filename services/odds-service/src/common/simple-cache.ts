export class SimpleCache<T = any> {
  private store = new Map<string, { value: T; expiresAt: number }>();
  async get(key: string): Promise<T | undefined> {
    const entry = this.store.get(key);
    if (!entry) return undefined;
    if (Date.now() > entry.expiresAt) { this.store.delete(key); return undefined; }
    return entry.value;
  }
  async set(key: string, value: T, ttlSeconds = 60): Promise<void> {
    this.store.set(key, { value, expiresAt: Date.now() + ttlSeconds * 1000 });
  }
  async del(key: string): Promise<void> { this.store.delete(key); }
  reset(): void { this.store.clear(); }
}
