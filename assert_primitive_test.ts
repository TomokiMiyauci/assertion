import { assertPrimitive } from "./assert_primitive.ts";
import { defineTable, doAssert } from "./_fixture.ts";

Deno.test({
  name: "assertPrimitive",
  fn: () =>
    defineTable({
      false: true,
      true: true,
      0: true,
      1: true,
      "-1": true,
      string: true,
      big1: true,
      symbol: true,
      null: true,
      undefined: true,
      "": true,
    }).forEach(doAssert(assertPrimitive)),
});
