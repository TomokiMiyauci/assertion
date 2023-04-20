// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isNonNullable } from "https://deno.land/x/isx@1.3.0/is_non_nullable.ts";

/** Assert the input is `NonNullable`.
 * @param input - Any input.
 * @example
 * ```ts
 * import { assertNonNullable } from "https://deno.land/x/isx@$VERSION/assert_non_nullable.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertNonNullable(""));
 * assertThrows(() => assertNonNullable(null));
 * assertThrows(() => assertNonNullable(undefined));
 * ```
 */
export function assertNonNullable<T>(
  input: T,
  msg?: string,
): asserts input is NonNullable<T> {
  if (!isNonNullable(input)) throw Error(msg);
}
