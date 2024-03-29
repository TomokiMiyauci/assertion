// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isBoolean } from "https://deno.land/x/isx@1.3.1/is_boolean.ts";
import type { ErrorConstructorLike } from "./types.ts";

/** Assert the input is `boolean`.
 * @param input - Any input.
 * @example
 * ```ts
 * import { assertBoolean } from "https://deno.land/x/assertion@$VERSION/assert_boolean.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertBoolean(true));
 * assertThrows(() => assertBoolean(null));
 * ```
 * @throws {Error} If the input is not `boolean`.
 */
export function assertBoolean(
  input: unknown,
  msg?: string,
  constructor: ErrorConstructorLike = Error,
): asserts input is boolean {
  if (!isBoolean(input)) throw new constructor(msg);
}
