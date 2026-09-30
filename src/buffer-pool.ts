export class BufferOptimizationPool {
  private static pool: Buffer[] = [];

  public static acquire(size: number = 4096): Buffer {
    return this.pool.pop() || Buffer.allocUnsafe(size);
  }

  public static release(buf: Buffer): void {
    if (this.pool.length < 50) {
      this.pool.push(buf);
    }
  }

  public static getPoolSize(): number {
    return this.pool.length;
  }
}
