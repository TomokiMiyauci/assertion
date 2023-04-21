import { assertNonNullable } from "./assert_non_nullable.ts";
import { defineTable, doAssert } from "./_fixture.ts";
import { assertType, IsExact } from "./_dev_deps.ts";

Deno.test({
  name: "assertNonNullable",
  fn: () => {
    defineTable({
      "() => {}": true,
      "-1": true,
      "0": true,
      1: true,
      "": true,
      "[[]]": true,
      "[]": true,
      "big1": true,
      "error": true,
      "false": true,
      "function": true,
      "map": true,
      "promise": true,
      "set": true,
      "string": true,
      "true": true,
      "weakMap": true,
      "weakSet": true,
      "{{}}": true,
      "{}": true,
      symbol: true,
    }).forEach(doAssert(assertNonNullable));
  },
});

Deno.test("should infer {}", () => {
  const input: unknown = {};

  assertNonNullable(input);
  assertType<IsExact<typeof input, {}>>(true);
});

Deno.test("should infer non-nullable", () => {
  const input: null | undefined | string = "";

  assertNonNullable(input);
  assertType<IsExact<typeof input, string>>(true);
});
