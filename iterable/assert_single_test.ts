import { assertSingle } from "./assert_single.ts";
import { assertFalse, assertThrows, describe, it } from "../_dev_deps.ts";

describe("assertSingle", () => {
  it("should return true if the array is single element", () => {
    assertFalse(assertSingle([0]));
    assertFalse(assertSingle([""]));
  });

  it("should return false if the array is not single element", () => {
    assertThrows(() => assertSingle([]));
    assertThrows(() => assertSingle([0, 1]));
    assertThrows(() => assertSingle([[], [], []]));
  });

  it("should return true if the iterable is single element", () => {
    assertFalse(assertSingle(" "));
    assertFalse(assertSingle("a"));
    assertFalse(assertSingle(new Set([""])));
  });

  it("should return false if the iterable is not single element", () => {
    assertThrows(() => assertSingle(""));
    assertThrows(() => assertSingle("ab"));
    assertThrows(() => assertSingle("abc"));
    assertThrows(() => assertSingle(new Set()));
    assertThrows(() => assertSingle(new Set([1, 2, 3])));
  });
});
