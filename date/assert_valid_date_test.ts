import { assertValidDate } from "./assert_valid_date.ts";
import { assertFalse, assertThrows } from "../_dev_deps.ts";

Deno.test({
  name: "isValidDate",
  fn: () => {
    assertFalse(assertValidDate(new Date("2000/1/1")));
    assertThrows(() => assertValidDate(new Date("invalid")));
  },
});
