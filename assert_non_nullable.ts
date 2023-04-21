// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isNonNullable } from "https://deno.land/x/isx@1.3.1/is_non_nullable.ts";
import type { ErrorConstructorLike } from "./types.ts";

/** Assert the input is not `null` or `undefined`.
 * @param input - Any input.
 * @example
 * ```ts
 * import { assertNonNullable } from "https://deno.land/x/assertion@$VERSION/assert_non_nullable.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertNonNullable(""));
 * assertThrows(() => assertNonNullable(null));
 * assertThrows(() => assertNonNullable(undefined));
 * ```
 *
 * @throws {Error} If the input is `null` or `undefined`.
 */
export function assertNonNullable<T>(
  input: T,
  msg?: string,
  constructor: ErrorConstructorLike = Error,
): asserts input is NonNullable<T> {
  if (!isNonNullable(input)) throw new constructor(msg);
}
