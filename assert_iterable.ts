// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isIterable } from "https://deno.land/x/isx@1.3.1/is_iterable.ts";
import type { ErrorConstructorLike } from "./types.ts";

/** Assert the input is `Iterable`.
 * @param input - Any input.
 * @example
 * ```ts
 * import { assertIterable } from "https://deno.land/x/assertion@$VERSION/assert_iterable.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertIterable(""));
 * assertThrows(() => assertIterable({}));
 * ```
 *
 * @throws {Error} If the input is not `Iterable`.
 */
export function assertIterable<T>(
  input: unknown,
  msg?: string,
  constructor: ErrorConstructorLike = Error,
): asserts input is Iterable<T> {
  if (!isIterable(input)) throw new constructor(msg);
}
