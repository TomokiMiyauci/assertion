import { assertAsyncIterable } from "./assert_async_iterable.ts";
import { assertFalse, assertThrows, describe, it } from "./_dev_deps.ts";

describe("assertAsyncIterable", () => {
  it("should return void", () => {
    async function* asyncGen() {}

    const table: unknown[] = [
      {
        async *[Symbol.asyncIterator]() {},
      },
      {
        async [Symbol.asyncIterator]() {},
        next: () => {},
        return: () => {},
        throw: () => {},
      },
      asyncGen(),
    ];

    table.forEach((input) => {
      assertFalse(assertAsyncIterable(input));
    });
  });

  it("should throw error", () => {
    const table: unknown[] = [
      false,
      {},
      [],
      "",
      {
        [Symbol.asyncIterator]: 1,
      },
    ];

    table.forEach((input) => {
      assertThrows(() => assertAsyncIterable(input));
    });
  });
});
