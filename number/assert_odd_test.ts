import { assertOdd } from "./assert_odd.ts";
import { numbers } from "./_fixture.ts";
import { assertFalse } from "../_dev_deps.ts";

Deno.test({
  name: "assertOdd",
  fn: () =>
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
    ),
});
