import { assertNonPositiveNumber } from "./assert_non_positive_number.ts";
import { numbers } from "./_fixture.ts";
import { assertFalse, assertThrows, describe, it } from "../_dev_deps.ts";

describe("isNonPositiveNumber", () => {
  it("should return void", () => {
    numbers({
      real: {
        rational: {
          decimal: {
            negative: true,
          },
          integer: {
            zero: true,
            negative: true,
          },
        },
      },
    }).forEach(
      (input) => assertFalse(assertNonPositiveNumber(input), String(input)),
    );
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
