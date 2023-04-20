import { assertPositiveNumber } from "./assert_positive_number.ts";
import { assertFalse, assertThrows, describe, it } from "../_dev_deps.ts";

describe("assertPositiveNumber", () => {
  it("should throw error", () => {
    const table: number[] = [
      Infinity,
      1,
      1.1,
      Number.MAX_VALUE,
      Number.MAX_SAFE_INTEGER,
    ];

    table.forEach((input) => {
      assertFalse(assertPositiveNumber(input));
    });
  });

  it("should throw error", () => {
    const table: number[] = [
      0,
      -0,
      NaN,
      -1,
      -1.1,
      -Infinity,
    ];

    table.forEach((input) => {
      assertThrows(() => assertPositiveNumber(input));
    });
  });
});
