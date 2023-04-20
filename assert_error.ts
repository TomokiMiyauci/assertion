// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isError } from "https://deno.land/x/isx@1.3.0/is_error.ts";

/** Assert the input is `Error`.
 * @param input - Any input.
 * @example
 * ```ts
 * import { assertError } from "https://deno.land/x/assertion@$VERSION/assert_error.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertError(Error()));
 * assertFalse(assertError(new SyntaxError()));
 * assertThrows(() => assertError(new Date()));
 * ```
 *
 * @throws {Error} If the input is not `Error`.
 */
export function assertError(
  input: unknown,
  msg?: string,
): asserts input is Error {
  if (!isError(input)) throw Error(msg);
}
