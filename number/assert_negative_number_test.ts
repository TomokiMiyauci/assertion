import { assertNegativeNumber } from "./assert_negative_number.ts";
import { numbers } from "./_fixture.ts";
import { assertFalse, assertThrows, describe, it } from "../_dev_deps.ts";

describe("assertNegativeNumber", () => {
  it("should return void", () => {
    numbers({
      real: {
        rational: {
          "decimal": { negative: true },

          "integer": {
            "negative": true,
          },
        },
      },
    }).forEach(
      (input) => assertFalse(assertNegativeNumber(input)),
    );
  });

  it("should throw error", () => {
    const table: number[] = [
      0,
      1,
      1.1,
      NaN,
    ];

    table.forEach((input) => {
      assertThrows(() => assertNegativeNumber(input));
    });
  });
});
