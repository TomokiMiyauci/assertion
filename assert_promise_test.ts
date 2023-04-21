import { assertPromise } from "./assert_promise.ts";
import { defineTable, doAssert } from "./_fixture.ts";

Deno.test({
  name: "assertPromise",
  fn: () => {
    defineTable({
      promise: true,
    }).forEach(doAssert(assertPromise));
  },
});
