// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

import { isUnitInterval } from "https://deno.land/x/isx@1.3.1/number/is_unit_interval.ts";

/** Assert the input is unit interval.
 * The unit interval means to the interval between 0 and 1 on the real number line.
 * @param input Any `number`
 * @example
 * ```ts
 * import { assertUnitInterval } from "https://deno.land/x/assertion@$VERSION/number/assert_unit_interval.ts";
 * import {
 *   assertFalse,
 *   assertThrows,
 * } from "https://deno.land/std/testing/asserts.ts";
 * assertFalse(assertUnitInterval(0));
 * assertFalse(assertUnitInterval(1.0));
 * assertThrows(() => assertUnitInterval(-1));
 * ```
 *
 * @throws {Error} If the input is not unit interval.
 */
export function assertUnitInterval(input: number, msg?: string): asserts input {
  if (!isUnitInterval(input)) throw Error(msg);
}
