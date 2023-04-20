import { assertNonNegativeInteger } from "./assert_non_negative_integer.ts";
import { assertFalse, assertThrows, describe, it } from "../_dev_deps.ts";

describe("assertNonNegativeInteger", () => {
  it("should return true", () => {
    const table: number[] = [
      0,
      -0,
      1,
      1000,
      Number.MAX_SAFE_INTEGER,
      Number.MAX_VALUE,
    ];

    table.forEach((input) => {
      assertFalse(assertNonNegativeInteger(input));
    });
  });

  it("should throw error", () => {
    const table: number[] = [
      NaN,
      0.1,
      -1,
      -0.1,
      Infinity,
      -Infinity,
      Number.NEGATIVE_INFINITY,
      Number.MIN_SAFE_INTEGER,
    ];

    table.forEach((input) => {
      assertThrows(() => assertNonNegativeInteger(input));
    });
  });
});
