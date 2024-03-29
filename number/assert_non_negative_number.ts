// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isNonNegativeNumber } from "https://deno.land/x/isx@1.3.1/number/is_non_negative_number.ts";
import type { ErrorConstructorLike } from "../types.ts";

/** Assert the input is non-negative number.
 * Non-negative number means greater than or equal to zero.
 * @param input - Any `number`.
 * @example
 * ```ts
 * import { assertNonNegativeNumber } from "https://deno.land/x/assertion@$VERSION/number/assert_non_negative_number.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertNonNegativeNumber(0));
 * assertFalse(assertNonNegativeNumber(1.1));
 * assertThrows(() => assertNonNegativeNumber(-1));
 * ```
 *
 * @throws {Error} If the input is not non-negative number.
 */
export function assertNonNegativeNumber(
  input: number,
  msg?: string,
  constructor: ErrorConstructorLike = Error,
): asserts input {
  if (!isNonNegativeNumber(input)) throw new constructor(msg);
}
