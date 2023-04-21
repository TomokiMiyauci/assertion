// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isSymbol } from "https://deno.land/x/isx@1.3.1/is_symbol.ts";
import type { ErrorConstructorLike } from "./types.ts";

/** Assert the input is `symbol`.
 * @param input - Any input.
 * @example
 * ```ts
 * import { assertSymbol } from "https://deno.land/x/assertion@$VERSION/assert_symbol.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertSymbol(Symbol("symbol")));
 * assertThrows(() => assertSymbol(null));
 * ```
 *
 * @throws {Error} If the input is not `symbol`.
 */
export function assertSymbol(
  input: unknown,
  msg?: string,
  constructor: ErrorConstructorLike = Error,
): asserts input is symbol {
  if (!isSymbol(input)) throw new constructor(msg);
}
