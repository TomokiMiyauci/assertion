// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isNonNegativeInteger } from "https://deno.land/x/isx@1.3.1/number/is_non_negative_integer.ts";
import type { ErrorConstructorLike } from "../types.ts";

/** Assert the input is non-negative integer.
 * @param input - Any `number`.
 * @example
 * ```ts
 * import { assertNonNegativeInteger } from "https://deno.land/x/assertion@$VERSION/number/assert_non_negative_integer.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertNonNegativeInteger(0));
 * assertFalse(assertNonNegativeInteger(1));
 * assertThrows(() => assertNonNegativeInteger(-1));
 * ```
 *
 * @throws {Error} If the input is not non-negative integer.
 */
export function assertNonNegativeInteger(
  input: number,
  msg?: string,
  constructor: ErrorConstructorLike = Error,
): asserts input {
  if (!isNonNegativeInteger(input)) throw new constructor(msg);
}
