import { assertNonPositiveNumber } from "./assert_non_positive_number.ts";
import { assertFalse, assertThrows, describe, it } from "../_dev_deps.ts";

describe("assertNonPositiveNumber", () => {
  it("should return true", () => {
    const table: number[] = [
      0,
      -0,
      -1,
      -0.1,
      -Infinity,
      Number.MIN_SAFE_INTEGER,
    ];

    table.forEach((input) => {
      assertFalse(assertNonPositiveNumber(input));
    });
  });

  it("should throw error", () => {
    const table: number[] = [
      1,
      1.1,
      NaN,
      Infinity,
    ];

    table.forEach((input) => {
      assertThrows(() => assertNonPositiveNumber(input));
    });
  });
});
