// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import {
  isPrimitive,
  type Primitive,
} from "https://deno.land/x/isx@1.3.1/is_primitive.ts";
export type { Primitive };

/** Assert the input is {@link Primitive}.
 * @param input - Any input.
 * @example
 * ```ts
 * import { assertPrimitive } from "https://deno.land/x/assertion@$VERSION/assert_primitive.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertPrimitive(true));
 * assertThrows(() => assertPrimitive({}));
 * ```
 *
 * @throws {Error} If the input is not {@link Primitive}.
 */
export function assertPrimitive(
  input: unknown,
  msg?: string,
): asserts input is Primitive {
  if (!isPrimitive(input)) throw Error(msg);
}
