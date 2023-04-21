import { assertUndefined } from "./assert_undefined.ts";
import { defineTable, doAssert } from "./_fixture.ts";

Deno.test({
  name: "assertUndefined",
  fn: () => {
    defineTable({
      undefined: true,
    }).forEach(doAssert(assertUndefined));
  },
});
