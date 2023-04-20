import { assertOdd } from "./assert_odd.ts";
import { numbers } from "./_fixture.ts";
import { assertFalse, assertThrows, describe, it } from "../_dev_deps.ts";

describe("assertOdd", () => {
  it("should return void", () => {
    numbers({
      real: {
        rational: {
          integer: {
            negative: true,
            positive: true,
          },
        },
      },
    }).forEach(
      (input) => assertFalse(assertOdd(input)),
    );
  });
  it("should throw error", () => {
    const table: number[] = [
      NaN,
      0,
      2,
      4.4,
      -2,
      Infinity,
      -Infinity,
    ];

    table.forEach((input) => {
      assertThrows(() => assertOdd(input));
    });
  });
});
