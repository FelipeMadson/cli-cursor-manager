import { describe, it } from "node:test";
import assert from "node:assert";
import { BufferOptimizationPool } from "../src/buffer-pool.ts";

describe("BufferOptimizationPool — Heap Optimization", () => {
  it("Deve adquirir e reciclar buffers estáticos com overhead zero", () => {
    const b1 = BufferOptimizationPool.acquire(1024);
    assert.ok(b1);
    BufferOptimizationPool.release(b1);
    assert.strictEqual(BufferOptimizationPool.getPoolSize(), 1);

    const b2 = BufferOptimizationPool.acquire(1024);
    assert.strictEqual(b1, b2, "Deve reutilizar o buffer anterior");
  });
});
