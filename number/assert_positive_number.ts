// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isPositiveNumber } from "https://deno.land/x/isx@1.3.0/number/is_positive_number.ts";

/** Assert the input is positive number.
 * @param input - Any `number`.
 * @example
 * ```ts
 * import { assertPositiveNumber } from "https://deno.land/x/assertion@$VERSION/number/assert_positive_number.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertPositiveNumber(1));
 * assertThrows(() => assertPositiveNumber(0));
 * ```
 */
export function assertPositiveNumber(
  input: number,
  msg?: string,
): asserts input {
  if (!isPositiveNumber(input)) throw Error(msg);
}
