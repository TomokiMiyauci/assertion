// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isRegExp } from "https://deno.land/x/isx@1.3.0/is_reg_exp.ts";

/** Assert the input is `RegExp`.
 * @param input - Any input.
 * @example
 * ```ts
 * import { assertRegExp } from "https://deno.land/x/assertion@$VERSION/assert_reg_exp.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertRegExp(new RegExp("")));
 * assertThrows(() => assertRegExp({}));
 * ```
 *
 * @throws {Error} If the input is not `RegExp`.
 */
export function assertRegExp(
  input: unknown,
  msg?: string,
): asserts input is RegExp {
  if (!isRegExp(input)) throw Error(msg);
}
