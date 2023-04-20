// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isAsyncIterable } from "https://deno.land/x/isx@1.3.1/is_async_iterable.ts";

/** Assert the input is `AsyncIterable`.
 * @param input - Any input.
 * @example
 * ```ts
 * import { assertAsyncIterable } from "https://deno.land/x/assertion@$VERSION/assert_async_iterable.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(
 *   assertAsyncIterable({
 *     async *[Symbol.asyncIterator]() {
 *       yield "hello";
 *     },
 *   }),
 * );
 * assertThrows(() => assertAsyncIterable(() => {}));
 * ```
 * @throws {Error} If the input is not {@link AsyncIterable}.
 */
export function assertAsyncIterable<T>(
  input: unknown,
  msg?: string,
): asserts input is AsyncIterable<T> {
  if (!isAsyncIterable(input)) throw Error(msg);
}
