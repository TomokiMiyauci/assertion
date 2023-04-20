import { assertEven } from "./assert_even.ts";
import { numbers } from "./_fixture.ts";
import { assertFalse } from "../_dev_deps.ts";

Deno.test({
  name: "assertEven",
  fn: () =>
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
    ),
});
