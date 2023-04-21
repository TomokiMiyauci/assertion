import { assertBigint } from "./assert_bigint.ts";
import { defineTable, doAssert } from "./_fixture.ts";

Deno.test({
  name: "assertBigint",
  fn: () =>
    defineTable({
      big1: true,
    }).forEach(doAssert(assertBigint)),
});
