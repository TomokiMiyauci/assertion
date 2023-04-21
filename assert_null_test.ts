import { assertNull } from "./assert_null.ts";
import { defineTable, doAssert } from "./_fixture.ts";

Deno.test({
  name: "isNull",
  fn: () => {
    defineTable({
      null: true,
    }).forEach(doAssert(assertNull));
  },
});
