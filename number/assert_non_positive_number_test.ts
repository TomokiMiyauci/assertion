import { assertNonPositiveNumber } from "./assert_non_positive_number.ts";
import { numbers } from "./_fixture.ts";
import { assertFalse } from "../_dev_deps.ts";

Deno.test({
  name: "isNonPositiveNumber",
  fn: () =>
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
    ),
});
