// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isDate } from "https://deno.land/x/isx@1.3.1/is_date.ts";
import type { ErrorConstructorLike } from "./types.ts";

/** Assert the input is `Date`.
 * @param input - Any input.
 * @example
 * ```ts
 * import { assertDate } from "https://deno.land/x/assertion@$VERSION/assert_date.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertDate(new Date()));
 * assertThrows(() => assertDate({}));
 * ```
 *
 * @throws {Error} If the input is not `Date`.
 */
export function assertDate(
  input: unknown,
  msg?: string,
  constructor: ErrorConstructorLike = Error,
): asserts input is Date {
  if (!isDate(input)) throw new constructor(msg);
}
