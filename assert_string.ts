// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isString } from "https://deno.land/x/isx@1.3.1/is_string.ts";

/** Assert the input is `string`.
 * @param input - Any input.
 * @example
 * ```ts
 * import { assertString } from "https://deno.land/x/assertion@$VERSION/assert_string.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertString("hello world"));
 * assertThrows(() => assertString(1000));
 * ```
 *
 * @throws {Error} If the input is not `string`.
 */
export function assertString(
  input: unknown,
  msg?: string,
): asserts input is string {
  if (!isString(input)) throw Error(msg);
}
