import { isUndefined } from "./deps.ts";

/** Assert context. */
export interface AssertContext {
  /** Actual value or behavior. */
  actual: unknown;

  /** Expect value or behavior. */
  expect: unknown;
}

/** Assertion error. */
export class AssertionError extends Error implements AssertContext {
  override name = "AssertionError";

  actual: unknown;

  expect: unknown;

  constructor(
    { actual, expect }: AssertContext,
    message?: string,
    options?: ErrorOptions,
  ) {
    super(message, options);
    this.actual = actual;
    this.expect = expect;

    if (isUndefined(message)) {
      this.message = assertMessageTemplate(this);
    }
  }
}

function assertMessageTemplate(error: AssertionError): string {
  return `Assertion is fail.

  Actual:
    ${error.actual}
  Expected:
    ${error.expect}
`;
}
