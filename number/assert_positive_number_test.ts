import { assertPositiveNumber } from "./assert_positive_number.ts";
import { numbers } from "./_fixture.ts";
import { assertFalse } from "../_dev_deps.ts";

Deno.test({
  name: "assertPositiveNumber",
  fn: () =>
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
    ),
});
