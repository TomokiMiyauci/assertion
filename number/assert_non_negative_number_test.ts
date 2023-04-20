import { assertNonNegativeNumber } from "./assert_non_negative_number.ts";
import { numbers } from "./_fixture.ts";
import { assertFalse, assertThrows, describe, it } from "../_dev_deps.ts";

describe("isNonNegativeNumber", () => {
  it("should return void", () => {
    numbers({
      real: {
        rational: {
          decimal: { positive: true },
          integer: {
            positive: true,
            zero: true,
          },
        },
      },
    }).forEach(
      (input) => assertFalse(assertNonNegativeNumber(input)),
    );
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
