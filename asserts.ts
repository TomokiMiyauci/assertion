import {
  inspect,
  isBigint,
  isBoolean,
  isDate,
  isFunction,
  isNonNegativeInteger,
  isNull,
  isNumber,
  isObject,
  isString,
  isSymbol,
  isUndefined,
} from "./deps.ts";
import { AssertionError } from "./errors.ts";
import {
  equalCount,
  equalCountWith,
  getCount,
  isEmailFormat,
} from "./checks.ts";

export function assertString(value: unknown): asserts value is string {
  if (!isString(value)) {
    throw new AssertionError({
      expect: "string",
      actual: typeof value,
    });
  }
}

export function assertBoolean(value: unknown): asserts value is boolean {
  if (!isBoolean(value)) {
    throw new AssertionError({
      expect: "boolean",
      actual: typeof value,
    });
  }
}

export function assertNumber(value: unknown): asserts value is number {
  if (!isNumber(value)) {
    throw new AssertionError({
      expect: "number",
      actual: typeof value,
    });
  }
}

export function assertBigint(value: unknown): asserts value is bigint {
  if (!isBigint(value)) {
    throw new AssertionError({
      expect: "bigint",
      actual: typeof value,
    });
  }
}

export function assertNull(value: unknown): asserts value is null {
  if (!isNull(value)) {
    throw new AssertionError({
      expect: "null",
      actual: typeof value,
    });
  }
}

export function assertUndefined(value: unknown): asserts value is undefined {
  if (!isUndefined(value)) {
    throw new AssertionError({
      expect: "undefined",
      actual: typeof value,
    });
  }
}

export function assertSymbol(value: unknown): asserts value is symbol {
  if (!isSymbol(value)) {
    throw new AssertionError({
      expect: "symbol",
      actual: typeof value,
    });
  }
}

export function assertFunction(value: unknown): asserts value is Function {
  if (!isFunction(value)) {
    throw new AssertionError({
      expect: "function",
      actual: typeof value,
    });
  }
}

export function assertObject(value: unknown): asserts value is object {
  if (!isObject(value)) {
    throw new AssertionError({
      expect: "object",
      actual: typeof value,
    });
  }
}

export function assertIs<T>(base: T, value: unknown): asserts value is T {
  const valid = Object.is(base, value);

  if (!valid) {
    throw new AssertionError(
      { expect: base, actual: value },
    );
  }
}

export function assertArray(value: unknown): asserts value is any[] {
  const result = Array.isArray(value);

  if (!result) {
    const constructor = new Object(value).constructor;
    const name = constructor.name;
    throw new AssertionError(
      { expect: "Array", actual: name },
    );
  }
}

export function assertLengthIs(
  length: number,
  value: { length: number },
): asserts value is string {
  if (length !== value.length) {
    throw new AssertionError({
      actual: value.length,
      expect: length,
    });
  }
}

export function assertCountIs(
  count: number | bigint,
  value: Iterable<unknown>,
): asserts value is string {
  const actual = Array.from(value).length;

  if (!equalCountWith(count, value)) {
    throw new AssertionError({
      expect: count,
      actual,
    });
  }
}

export function assertSameCount(
  base: Iterable<unknown>,
  value: Iterable<unknown>,
): asserts value is string {
  if (!equalCount(base, value)) {
    const baseSize = getCount(base);
    const valueSize = getCount(value);
    throw new AssertionError(
      { actual: valueSize, expect: baseSize },
    );
  }
}

export function assertEmailFormat(value: string): asserts value is string {
  if (!isEmailFormat(value)) {
    throw new AssertionError(
      { actual: value, expect: "email format" },
    );
  }
}

export type Operand = string | number | bigint | boolean;

export function assertGreaterThanOrEqualTo(
  base: Operand,
  value: Operand,
): asserts value is Operand {
  if (base > value) {
    throw new AssertionError(
      { expect: base, actual: value },
    );
  }
}

export function assertLessThanOrEqualTo(
  base: Operand,
  value: Operand,
): asserts value is Operand {
  if (base < value) {
    throw new AssertionError(
      { expect: base, actual: value },
    );
  }
}

export function assertNoNNegativeInteger(
  value: number,
): asserts value is number {
  if (!isNonNegativeInteger(value)) {
    const expect = "non negative integer";
    throw new AssertionError({
      expect,
      actual: value,
    });
  }
}

export function assertDate(value: unknown): asserts value is Date {
  if (!isDate(value)) {
    const constructor = new Object(value).constructor;
    const name = constructor.name;

    throw new AssertionError({
      actual: name,
      expect: Date,
    });
  }
}

export function assertExistsPropertyOf<T extends PropertyKey>(
  name: T,
  value: object,
): asserts value is { [k in T]: unknown } {
  if (!Object.hasOwn(value, name)) {
    throw new AssertionError({
      actual: `not has ${inspect(name)}`,
      expect: `has ${inspect(name)}`,
    });
  }
}
