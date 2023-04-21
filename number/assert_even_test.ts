import { assertEven } from "./assert_even.ts";
import { numbers } from "./_fixture.ts";
import { assertFalse, assertThrows, describe, it } from "../_dev_deps.ts";

describe("assertEven", () => {
  it("should return void", () => {
    numbers({
      real: {
        rational: {
          integer: {
            zero: true,
          },
        },
      },
    }).forEach(
      (input) => assertFalse(assertEven(input), String(input)),
    );
  });
  it("should throw error", () => {
    const table: number[] = [
      1,
      1.1,
      NaN,
      -1,
    ];

    table.forEach((input) => {
      assertThrows(() => assertEven(input));
    });
  });
});
