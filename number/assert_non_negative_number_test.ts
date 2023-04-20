import { assertNonNegativeNumber } from "./assert_non_negative_number.ts";
import { numbers } from "./_fixture.ts";
import { assertFalse } from "../_dev_deps.ts";

Deno.test({
  name: "isNonNegativeNumber",
  fn: () =>
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
    ),
});
