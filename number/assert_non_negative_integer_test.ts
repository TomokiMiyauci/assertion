import { assertNonNegativeInteger } from "./assert_non_negative_integer.ts";
import { numbers } from "./_fixture.ts";
import { assertFalse } from "../_dev_deps.ts";

Deno.test({
  name: "assertNonNegativeInteger",
  fn: () => {
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
  },
});
