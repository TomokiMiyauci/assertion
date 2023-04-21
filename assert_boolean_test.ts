import { assertBoolean } from "./assert_boolean.ts";
import { defineTable, doAssert } from "./_fixture.ts";

Deno.test({
  name: "assertBoolean",
  fn: () =>
    defineTable({
      false: true,
      true: true,
    }).forEach(doAssert(assertBoolean)),
});
