// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isNegativeNumber } from "https://deno.land/x/isx@1.3.1/number/is_negative_number.ts";

/** Assert the input is negative number.
 * @param input - Any `number`.
 * @example
 * ```ts
 * import { assertNegativeNumber } from "https://deno.land/x/assertion@$VERSION/number/assert_negative_number.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertNegativeNumber(-1));
 * assertThrows(() => assertNegativeNumber(0));
 * ```
 *
 * @throws {Error} If the input is not negative number.
 */
export function assertNegativeNumber(
  input: number,
  msg?: string,
): asserts input {
  if (!isNegativeNumber(input)) throw Error(msg);
}
