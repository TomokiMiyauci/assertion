import { assertIterable } from "./assert_iterable.ts";
import { assertFalse, assertThrows, describe, it } from "./_dev_deps.ts";

describe("assertIterable", () => {
  it("should return void", () => {
    const table: unknown[] = [
      { [Symbol.iterator]: () => {} },
      "",
      [],
      new Map(),
      new Set(),
      new Map(),
      new Int8Array(),
      new Int16Array(),
    ];

    table.forEach((input) => {
      assertFalse(assertIterable(input));
    });
  });

  it("should throw error", () => {
    const table: unknown[] = [
      false,
      null,
      undefined,
      1,
      1n,
      Symbol.for("test"),
      {},
      new Date(),
      { [Symbol.iterator]: [] },
      new WeakRef([]),
      new WeakSet(),
      new WeakMap(),
    ];

    table.forEach((input) => {
      assertThrows(() => assertIterable(input));
    });
  });
});
