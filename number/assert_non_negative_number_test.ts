import { assertNonNegativeNumber } from "./assert_non_negative_number.ts";
import { assertFalse, assertThrows, describe, it } from "../_dev_deps.ts";

describe("assertNonNegativeNumber", () => {
  it("should return void", () => {
    const table: number[] = [
      0,
      -0,
      Infinity,
      1,
      1.1,
      Number.MAX_VALUE,
      Number.MAX_SAFE_INTEGER,
    ];

    table.forEach((input) => {
      assertFalse(assertNonNegativeNumber(input));
    });
  });

  it("should throw error", () => {
    const table: number[] = [
      -1,
      -1.1,
      NaN,
      -Infinity,
    ];

    table.forEach((input) => {
      assertThrows(() => assertNonNegativeNumber(input));
    });
  });
});
