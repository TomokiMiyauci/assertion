import { assertString } from "./assert_string.ts";
import { defineTable, doAssert } from "./_fixture.ts";

Deno.test({
  name: "assertString",
  fn: () =>
    defineTable({ string: true, "": true }).forEach(doAssert(assertString)),
});
