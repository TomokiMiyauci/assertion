// TODO:(miyauci) All modules here should be external modules.

export {
  isBigint,
  isBoolean,
  isDate,
  isEmpty,
  isFunction,
  isNegativeNumber,
  isNonNegativeInteger,
  isNull,
  isNumber,
  isObject,
  isPlainObject,
  isString,
  isSymbol,
  isUndefined,
} from "https://deno.land/x/isx@1.0.0-beta.20/mod.ts";
import {
  isBigint,
  isString,
} from "https://deno.land/x/isx@1.0.0-beta.20/mod.ts";

export type TypeGuard<V, R extends V> = (value: V) => value is R;

export type Assert<V, R extends V> = (value: V) => asserts value is R;

export function inspect(value: unknown): string {
  if (isString(value)) {
    return `"${value}"`;
  }
  if (isBigint(value)) {
    return `${value}n`;
  }

  return String(value);
}
