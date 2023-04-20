// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isNonPositiveNumber } from "https://deno.land/x/isx@1.3.0/number/is_non_positive_number.ts";

/** Assert the input is non-positive number.
 * Non-positive number means less than or equal to zero.
 * @param input - Any `number`.
 * @example
 * ```ts
 * import { assertNonPositiveNumber } from "https://deno.land/x/assertion@$VERSION/number/assert_non_positive_number.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertNonPositiveNumber(0));
 * assertFalse(assertNonPositiveNumber(-1));
 * assertThrows(() => assertNonPositiveNumber(1));
 * ```
 *
 * @throws {Error} If the input is not non-positive number.
 */
export function assertNonPositiveNumber(
  input: number,
  msg?: string,
): asserts input {
  if (!isNonPositiveNumber(input)) throw Error(msg);
}
