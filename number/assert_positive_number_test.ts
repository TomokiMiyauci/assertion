import { assertPositiveNumber } from "./assert_positive_number.ts";
import { numbers } from "./_fixture.ts";
import { assertFalse, assertThrows, describe, it } from "../_dev_deps.ts";

describe("assertPositiveNumber", () => {
  it("should return void", () => {
    numbers({
      real: {
        rational: {
          decimal: {
            "positive": true,
          },
          "integer": {
            "positive": true,
          },
        },
      },
    }).forEach(
      (input) => assertFalse(assertPositiveNumber(input), String(input)),
    );
  });
  it("should throw error", () => {
    const table: number[] = [
      0,
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
