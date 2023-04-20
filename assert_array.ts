// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Assert the input is array.
 *
 * @param Any input.
 *
 * @example
 * ```ts
 * import { assertArray } from "https://deno.land/x/assertion@$VERSION/assert_array.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertArray([]));
 * assertThrows(() => assertArray({}));
 * ```
 *
 * @throws {Error} If the input is not array.
 */
export function assertArray(
  input: unknown,
  msg?: string,
): asserts input is unknown[] {
  if (!Array.isArray(input)) throw Error(msg);
}
