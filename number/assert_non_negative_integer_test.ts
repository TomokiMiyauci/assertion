import { assertNonNegativeInteger } from "./assert_non_negative_integer.ts";
import { numbers } from "./_fixture.ts";
import { assertFalse, assertThrows, describe, it } from "../_dev_deps.ts";

describe("assertNonNegativeInteger", () => {
  it("should return void", () => {
    numbers({
      real: {
        rational: {
          "integer": {
            zero: true,
            positive: true,
          },
        },
      },
    }).forEach(
      (input) => assertFalse(assertNonNegativeInteger(input)),
    );
  });
  it("should throw error", () => {
    const table: number[] = [
      -1,
      -1.1,
      NaN,
      Infinity,
      -Infinity,
    ];

    table.forEach((input) => {
      assertThrows(() => assertNonNegativeInteger(input));
    });
  });
});
