import { assertError } from "./assert_error.ts";
import { defineTable, doAssert } from "./_fixture.ts";

Deno.test({
  name: "assertError",
  fn: () => {
    defineTable({ error: true }).forEach(doAssert(assertError));
  },
});
