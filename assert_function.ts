// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isFunction } from "https://deno.land/x/isx@1.3.1/is_function.ts";
import type { ErrorConstructorLike } from "./types.ts";

/** Assert the input is `Function`.
 * @param input - Any input.
 * @example
 * ```ts
 * import { assertFunction } from "https://deno.land/x/assertion@$VERSION/assert_function.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertFunction(() => {}));
 * assertThrows(() => assertFunction({}));
 * ```
 *
 * @throws {Error} If the input is not `Function`.
 */
export function assertFunction(
  input: unknown,
  msg?: string,
  constructor: ErrorConstructorLike = Error,
): asserts input is Function {
  if (!isFunction(input)) throw new constructor(msg);
}
