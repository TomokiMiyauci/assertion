import { assertArray } from "./assert_array.ts";
import { defineTable, doAssert } from "./_fixture.ts";

Deno.test({
  name: "assertArray",
  fn: () =>
    defineTable({
      "[[]]": true,
      "[]": true,
    }).forEach(doAssert(assertArray)),
});
