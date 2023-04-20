import { assertNegativeNumber } from "./assert_negative_number.ts";
import { assertFalse, assertThrows, describe, it } from "../_dev_deps.ts";

describe("assertNegativeNumber", () => {
  it("should return true", () => {
    const table: number[] = [
      -1,
      -0.1,
      -Infinity,
      Number.NEGATIVE_INFINITY,
      Number.MIN_SAFE_INTEGER,
    ];

    table.forEach((input) => {
      assertFalse(assertNegativeNumber(input));
    });
  });

  it("should throw error", () => {
    const table: number[] = [
      NaN,
      0,
      -0,
      Infinity,
      0.1,
      1,
      Number.MAX_VALUE,
      Number.MAX_SAFE_INTEGER,
    ];

    table.forEach((input) => {
      assertThrows(() => assertNegativeNumber(input));
    });
  });
});
