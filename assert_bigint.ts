// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isBigint } from "https://deno.land/x/isx@1.3.1/is_bigint.ts";
import type { ErrorConstructorLike } from "./types.ts";

/** Assert the input is `bigint`.
 * @param input - Any input.
 * @example
 * ```ts
 * import { assertBigint } from "https://deno.land/x/assertion@$VERSION/assert_bigint.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertBigint(1000n));
 * assertThrows(() => assertBigint(undefined));
 * ```
 *
 * @throws {Error} If the input is not `bigint`.
 */
export function assertBigint(
  input: unknown,
  msg?: string,
  constructor: ErrorConstructorLike = Error,
): asserts input is bigint {
  if (!isBigint(input)) throw new constructor(msg);
}
