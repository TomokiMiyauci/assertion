import { assertNullable } from "./assert_nullable.ts";
import { defineTable, doAssert } from "./_fixture.ts";

Deno.test({
  name: "assertNullable",
  fn: () => {
    defineTable({
      null: true,
      undefined: true,
    }).forEach(doAssert(assertNullable));
  },
});
