// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isOdd } from "https://deno.land/x/isx@1.3.1/number/is_odd.ts";
import type { ErrorConstructorLike } from "../types.ts";

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
 *
 * @throws {Error} If the input is not non-positive number.
 */
export function assertOdd(
  input: number,
  msg?: string,
  constructor: ErrorConstructorLike = Error,
): asserts input {
  if (!isOdd(input)) throw new constructor(msg);
}
