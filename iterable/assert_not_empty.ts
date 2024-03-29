// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isNotEmpty } from "https://deno.land/x/isx@1.3.1/iterable/is_not_empty.ts";
import type { ErrorConstructorLike } from "../types.ts";

/** Assert the array is not empty.
 * @param input Any array.
 *
 * @example
 * ```ts
 * import { assertNotEmpty } from "https://deno.land/x/assertion@$VERSION/iterable/assert_not_empty.ts";
 * import { assertFalse } from "https://deno.land/std/testing/asserts.ts";
 *
 * assertFalse(assertNotEmpty([""]));
 * assertFalse(assertNotEmpty([[]]));
 * ```
 *
 * @throws {Error} If the input is empty.
 */
export function assertNotEmpty<T>(
  input: T[],
  msg?: string,
  constructor?: ErrorConstructorLike,
): asserts input is [T, ...T[]];
export function assertNotEmpty<T>(
  input: readonly T[],
  msg?: string,
  constructor?: ErrorConstructorLike,
): asserts input is readonly [T, ...T[]];
/** Assert the input is not empty.
 * @param input Any iterable.
 *
 * @example
 * ```ts
 * import { assertNotEmpty } from "https://deno.land/x/assertion@$VERSION/iterable/assert_not_empty.ts";
 * import { assertFalse } from "https://deno.land/std/testing/asserts.ts";
 *
 * assertFalse(assertNotEmpty("abc"));
 * assertFalse(assertNotEmpty([new Set([0, 1, 2])]));
 * ```
 *
 * @throws {Error} If the input is empty.
 */
export function assertNotEmpty(
  input: Iterable<unknown>,
  msg?: string,
  constructor?: ErrorConstructorLike,
): asserts input;
export function assertNotEmpty(
  input: Iterable<unknown>,
  msg?: string,
  constructor: ErrorConstructorLike = Error,
): asserts input {
  if (!isNotEmpty(input)) throw new constructor(msg);
}
