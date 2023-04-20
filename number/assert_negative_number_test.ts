import { assertNegativeNumber } from "./assert_negative_number.ts";
import { numbers } from "./_fixture.ts";
import { assertFalse } from "../_dev_deps.ts";

Deno.test({
  name: "assertNegativeNumber",
  fn: () =>
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
    ),
});
