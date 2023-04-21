import { assertDate } from "./assert_date.ts";
import { defineTable, doAssert } from "./_fixture.ts";
import { assertFalse } from "./_dev_deps.ts";

Deno.test({
  name: "assertDate",
  fn: () => {
    defineTable({}).forEach(doAssert(assertDate));

    assertFalse(assertDate(new Date("2000/1/1")));
  },
});
