import { assertObject } from "./assert_object.ts";
import { defineTable, doAssert } from "./_fixture.ts";

Deno.test({
  name: "isObject",
  fn: () => {
    defineTable({
      "[[]]": true,
      "[]": true,
      "map": true,
      "set": true,
      "weakMap": true,
      "weakSet": true,
      "{{}}": true,
      "{}": true,
      error: true,
      promise: true,
    }).forEach(doAssert(assertObject));
  },
});
