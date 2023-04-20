// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isEmpty } from "https://deno.land/x/isx@1.3.0/iterable/is_empty.ts";

/** Assert the string is empty.
 * @param input Any string.
 *
 * @example
 * ```ts
 * import { assertEmpty } from "https://deno.land/x/assertion@$VERSION/iterable/assert_empty.ts";
 * import { assertThrows, assertFalse } from "https://deno.land/std/testing/asserts.ts";
 *
 * assertFalse(assertEmpty(""));
 * assertThrows(() => assertEmpty("a"));
 * ```
 *
 * @throws {Error} If the input is not empty.
 */
export function assertEmpty(input: string, msg?: string): asserts input is "";
/** Assert the array is empty.
 * @param input Any array.
 *
 * @example
 * ```ts
 * import { assertEmpty } from "https://deno.land/x/assertion@$VERSION/iterable/assert_empty.ts";
 * import { assertThrows, assertFalse } from "https://deno.land/std/testing/asserts.ts";
 *
 * assertFalse(assertEmpty([]));
 * assertThrows(() => assertEmpty([""]));
 * ```
 *
 * @throws {Error} If the input is not empty.
 */
export function assertEmpty(
  input: unknown[],
  msg?: string,
): asserts input is [];
export function assertEmpty(
  input: readonly unknown[],
  msg?: string,
): asserts input is readonly [];
/** Assert the input is empty.
 * @param input Any iterable.
 *
 * @example
 * ```ts
 * import { assertEmpty } from "https://deno.land/x/assertion@$VERSION/iterable/assert_empty.ts";
 * import { assertThrows, assertFalse } from "https://deno.land/std/testing/asserts.ts";
 *
 * assertFalse(assertEmpty(new Set()));
 * assertThrows(() => assertEmpty(new Set("")));
 * ```
 *
 * @throws {Error} If the input is not empty.
 */
export function assertEmpty(
  input: Iterable<unknown>,
  msg?: string,
): asserts input;
export function assertEmpty(
  input: Iterable<unknown>,
  msg?: string,
): asserts input {
  if (!isEmpty(input)) throw Error(msg);
}
