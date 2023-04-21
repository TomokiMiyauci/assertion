// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isNull } from "https://deno.land/x/isx@1.3.1/is_null.ts";
import type { ErrorConstructorLike } from "./types.ts";

/** Assert the input is `null`.
 * @param input - Any input.
 * @example
 * ```ts
 * import { assertNull } from "https://deno.land/x/assertion@$VERSION/assert_null.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertNull(null));
 * assertThrows(() => assertNull(undefined));
 * ```
 *
 * @throws {Error} If the input is not `null`.
 */
export function assertNull(
  input: unknown,
  msg?: string,
  constructor: ErrorConstructorLike = Error,
): asserts input is null {
  if (!isNull(input)) throw new constructor(msg);
}
