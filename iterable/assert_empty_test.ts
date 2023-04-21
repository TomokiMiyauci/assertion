import { assertEmpty } from "./assert_empty.ts";
import { assertFalse, assertThrows, describe, it } from "../_dev_deps.ts";

describe("assertEmpty", () => {
  it("should return void if the string is empty", () => {
    assertFalse(assertEmpty(""));
  });

  it("should return false if the string is not empty", () => {
    assertThrows(() => assertEmpty("a"));
    assertThrows(() => assertEmpty("   "));
  });

  it("should return true if the array is empty", () => {
    assertFalse(assertEmpty(""));
  });

  it("should return false if the array is not empty", () => {
    assertThrows(() => assertEmpty([""]));
    assertThrows(() => assertEmpty([0, 1, 2]));
    assertThrows(() => assertEmpty([[]]));
  });

  it("should return true if the iterable is empty", () => {
    assertFalse(assertEmpty(new Set()));
    assertFalse(assertEmpty(new Map()));
  });

  it("should return false if the array is not empty", () => {
    assertThrows(() => assertEmpty(new Set([0])));
    assertThrows(() => assertEmpty(new Map([[0, 1]])));
  });
});
