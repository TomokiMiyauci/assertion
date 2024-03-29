// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isNumber } from "https://deno.land/x/isx@1.3.1/is_number.ts";
import type { ErrorConstructorLike } from "./types.ts";

/** Assert the input is `number`.
 * @param input - Any input.
 * @example
 * ```ts
 * import { assertNumber } from "https://deno.land/x/assertion@$VERSION/assert_number.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertNumber(1000));
 * assertThrows(() => assertNumber("hello world"));
 * ```
 *
 * @throws {Error} If the input is not `number`.
 */
export function assertNumber(
  input: unknown,
  msg?: string,
  constructor: ErrorConstructorLike = Error,
): asserts input is number {
  if (!isNumber(input)) throw new constructor(msg);
}
