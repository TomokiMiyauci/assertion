import { assertNumber } from "./assert_number.ts";
import { defineTable, doAssert } from "./_fixture.ts";

Deno.test({
  name: "assertNumber",
  fn: () =>
    defineTable({
      0: true,
      1: true,
      "-1": true,
    }).forEach(doAssert(assertNumber)),
});
