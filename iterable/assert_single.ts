// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isSingle } from "https://deno.land/x/isx@1.3.0/iterable/is_single.ts";

/** Assert the input is single element.
 * @param input Any array.
 *
 * @example
 * ```ts
 * import { assertSingle } from "https://deno.land/x/assertion@$VERSION/iterable/assert_single.ts";
 * import { assertFalse, assertThrows } from "https://deno.land/std/testing/asserts.ts";
 *
 * assertFalse(assertSingle([0]));
 * assertThrows(() => assertSingle([]));
 * assertFalse(() => assertSingle([0, 1, 2]));
 * ```
 */
export function assertSingle<T>(input: T[], msg?: string): asserts input is [T];
export function assertSingle<T>(
  input: readonly T[],
  msg?: string,
): asserts input is readonly [T];
/** Assert the input is single element.
 * @param input Any iterable.
 *
 * @example
 * ```ts
 * import { assertSingle } from "https://deno.land/x/assertion@$VERSION/iterable/assert_single.ts";
 * import { assertFalse, assertThrows } from "https://deno.land/std/testing/asserts.ts";
 *
 * assertFalse(assertSingle("a"));
 * assertThrows(() => assertSingle(""));
 * assertThrows(() => assertSingle(new Set([0, 1, 2])));
 * ```
 */
export function assertSingle(
  input: Iterable<unknown>,
  msg?: string,
): asserts input;
export function assertSingle(
  input: Iterable<unknown>,
  msg?: string,
): asserts input {
  if (!isSingle(input)) throw Error(msg);
}
