import { AssertionError } from "./errors.ts";

export function isAssertionError(value: unknown): value is AssertionError {
  return value instanceof AssertionError;
}

export function equalLengthOf(
  length: number | bigint,
  value: { length: number },
): boolean {
  return length === value.length;
}

export function equalMaxLengthOf(
  length: number,
  value: { length: number },
): boolean {
  return value.length <= length;
}

export function equalMinLengthBy(
  length: number,
  value: { length: number },
): boolean {
  return length <= value.length;
}

export function equalCountWith(
  base: number | bigint,
  value: Iterable<unknown>,
): boolean {
  return base === getCount(value);
}

export function getCount(value: Iterable<unknown>): number {
  return Array.from(value).length;
}

export function equalCount(
  base: Iterable<unknown>,
  value: Iterable<unknown>,
): boolean {
  return equalCountWith(Array.from(base).length, value);
}

export function isEmailFormat(value: string): boolean {
  return ReEmail.test(value);
}

/** @see https://stackoverflow.com/a/46181/1550155 */
const ReEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
