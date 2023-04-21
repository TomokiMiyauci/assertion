// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isObject } from "https://deno.land/x/isx@1.3.1/is_object.ts";
import type { ErrorConstructorLike } from "./types.ts";

/** Assert the input is `object`.
 * @param input - Any input.
 *
 * @example
 * ```ts
 * import { assertObject } from "https://deno.land/x/assertion@$VERSION/assert_object.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertObject({}));
 * assertThrows(() => assertObject(null));
 * ```
 *
 * @throws {Error} If the input is not `object`.
 */
export function assertObject(
  input: unknown,
  msg?: string,
  constructor: ErrorConstructorLike = Error,
): asserts input is object {
  if (!isObject(input)) throw new constructor(msg);
}
