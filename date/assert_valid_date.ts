// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isValidDate } from "https://deno.land/x/isx@1.3.1/date/is_valid_date.ts";
import type { ErrorConstructorLike } from "../types.ts";

/** Assert the input is valid `Date`.
 * @param input - Any `Date`
 * @example
 * ```ts
 * import { assertValidDate } from "https://deno.land/x/assertion@$VERSION/date/assert_valid_date.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertValidDate(new Date("2000/1/1")));
 * assertThrows(() => assertValidDate(new Date("invalid")));
 * ```
 *
 * @throws {Error} If the input is invalid date.
 */
export function assertValidDate(
  input: Date,
  msg?: string,
  constructor: ErrorConstructorLike = Error,
): asserts input {
  if (!isValidDate(input)) throw new constructor(msg);
}
