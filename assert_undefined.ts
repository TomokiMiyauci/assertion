// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isUndefined } from "https://deno.land/x/isx@1.3.1/is_undefined.ts";
import type { ErrorConstructorLike } from "./types.ts";

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
 *
 * @throws {Error} If the input is not `undefined`.
 */
export function assertUndefined(
  input: unknown,
  msg?: string,
  constructor: ErrorConstructorLike = Error,
): asserts input is undefined {
  if (!isUndefined(input)) throw new constructor(msg);
}
