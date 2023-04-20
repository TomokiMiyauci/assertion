// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isNullable } from "https://deno.land/x/isx@1.3.0/is_nullable.ts";

/** Assert the input is `null` or `undefined`.
 * @param input - Any input.
 * @example
 * ```ts
 * import { assertNullable } from "https://deno.land/x/assertion@$VERSION/assert_nullable.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertNullable(null));
 * assertFalse(assertNullable(undefined));
 * assertThrows(() => assertNullable({}));
 * ```
 */
export function assertNullable(
  input: unknown,
  msg?: string,
): asserts input is null | undefined {
  if (!isNullable(input)) throw Error(msg);
}
