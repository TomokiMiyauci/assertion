import { assertRegExp } from "./assert_reg_exp.ts";
import { assertFalse, assertThrows } from "./_dev_deps.ts";

Deno.test("assertRegExp", () => {
  assertThrows(() => assertRegExp({}));
  assertFalse(assertRegExp(/a/));
});
