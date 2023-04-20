// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isPromise } from "https://deno.land/x/isx@1.3.0/is_promise.ts";

/** Assert the input is `Promise`.
 * @param input - Any input.
 * @example
 * ```ts
 * import { assertPromise } from "https://deno.land/x/isx@$VERSION/assert_promise.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertPromise(Promise.resolve()));
 * assertThrows(() => assertPromise({}));
 * ```
 */
export function assertPromise<T>(
  input: unknown,
  msg?: string,
): asserts input is Promise<T> {
  if (!isPromise(input)) throw Error(msg);
}
