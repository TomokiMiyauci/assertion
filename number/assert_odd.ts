// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isOdd } from "https://deno.land/x/isx@1.3.0/number/is_odd.ts";

/** Assert the input is odd.
 * @param input - Any `number`.
 * @example
 * ```ts
 * import { assertOdd } from "https://deno.land/x/assertion@$VERSION/number/assert_odd.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertOdd(1));
 * assertThrows(() => assertOdd(0));
 * ```
 */
export function assertOdd(input: number, msg?: string): asserts input {
  if (!isOdd(input)) throw Error(msg);
}
