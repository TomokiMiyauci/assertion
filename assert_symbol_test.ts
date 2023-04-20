import { assertSymbol } from "./assert_symbol.ts";
import { defineTable, doAssert } from "./_fixture.ts";

Deno.test({
  name: "assertSymbol",
  fn: () => {
    defineTable({ symbol: true }).forEach(doAssert(assertSymbol));
  },
});
