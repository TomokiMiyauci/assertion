import { assertFunction } from "./assert_function.ts";
import { defineTable, doAssert } from "./_fixture.ts";

Deno.test({
  name: "assertFunction",
  fn: () =>
    defineTable({ "() => {}": true, function: true })
      .forEach(doAssert(assertFunction)),
});
