// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isEven } from "https://deno.land/x/isx@1.3.1/number/is_even.ts";
import type { ErrorConstructorLike } from "../types.ts";

/** Assert the input is even.
 * @param input - Any `number`.
 * @example
 * ```ts
 * import { assertEven } from "https://deno.land/x/assertion@$VERSION/number/assert_even.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertEven(0));
 * assertThrows(() => assertEven(1));
 * ```
 *
 * @throws {Error} If the input is not even.
 */
export function assertEven(
  input: number,
  msg?: string,
  constructor: ErrorConstructorLike = Error,
): asserts input {
  if (!isEven(input)) throw new constructor(msg);
}
