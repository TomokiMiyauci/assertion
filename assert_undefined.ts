// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isUndefined } from "https://deno.land/x/isx@1.3.0/is_undefined.ts";

/** Assert the input is `undefined`.
 * @param input - Any input.
 * @example
 * ```ts
 * import { assertUndefined } from "https://deno.land/x/assertion@$VERSION/assert_undefined.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertUndefined(undefined));
 * assertThrows(() => assertUndefined(null));
 * ```
 */
export function assertUndefined(
  input: unknown,
  msg?: string,
): asserts input is undefined {
  if (!isUndefined(input)) throw Error(msg);
}
