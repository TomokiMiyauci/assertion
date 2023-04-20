import { assertNotEmpty } from "./assert_not_empty.ts";
import { assertFalse, assertThrows, describe, it } from "../_dev_deps.ts";

describe("assertNotEmpty", () => {
  it("should return true if the array is not empty", () => {
    assertFalse(assertNotEmpty([0]));
    assertFalse(assertNotEmpty([0, 1, 2]));
    assertFalse(assertNotEmpty([[]]));
  });

  it("should return false if the array is empty", () => {
    assertThrows(() => assertNotEmpty([]));
  });

  it("should return true if the iterable is not empty", () => {
    assertFalse(assertNotEmpty(" "));
    assertFalse(assertNotEmpty(new Set([""])));
  });

  it("should return false if the iterable is empty", () => {
    assertThrows(() => assertNotEmpty(""));
    assertThrows(() => assertNotEmpty(new Set()));
  });
});
