# assertion

[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno)](https://deno.land/x/assertion)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/TomokiMiyauci/assertion)](https://github.com/TomokiMiyauci/assertion/releases)
[![codecov](https://codecov.io/github/TomokiMiyauci/assertion/branch/main/graph/badge.svg)](https://codecov.io/gh/TomokiMiyauci/assertion)
[![GitHub](https://img.shields.io/github/license/TomokiMiyauci/assertion)](https://github.com/TomokiMiyauci/assertion/blob/main/LICENSE)

[![test](https://github.com/TomokiMiyauci/assertion/actions/workflows/test.yaml/badge.svg)](https://github.com/TomokiMiyauci/assertion/actions/workflows/test.yaml)
[![NPM](https://nodei.co/npm/@miyauci/assertion.png?mini=true)](https://nodei.co/npm/@miyauci/assertion/)

Assertion collection for JavaScript data.

## Module structure and capability

Module can be divided into two categories.

- [Top-type module](#top-type-module)
- [Sub-type module](#sub-type-module)

### Top-type module

Top-type module can accept any JavaScript data. In other words, it accepts the
`unknown` type.

The module directly under namespace is it.

### Sub-type module

Sub-type modules are modules that perform type-dependent operations. It can use
type-specific methods and compare values.

For example, the module under `number` is a sub-type module that takes a
`number` type as an argument.

## Common

All function signatures have an `asserts` specifier.

All modules throw an error if the assert fails. And the errors are fully
customizable.

### Error message

No opinion on error message. Nothing by default.

You can give message.

```ts
import { assertNumber } from "https://deno.land/x/assertion@$VERSION/assert_number.ts";

declare const input: unknown;

assertNumber(input, `must be number`);
```

### Error constructor

No opinion on error constructor.

By default, use `Error` constructor.

To throw `RangeError` instead, do the following.

```ts
import { assertNonNegativeInteger } from "https://deno.land/x/assertion@$VERSION/number/assert_non_negative_integer.ts";

declare const input: number;

assertNonNegativeInteger(input, `must be non-negative integer`, RangeError);
```

## assertArray

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/assert_array.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fassert_array.ts)

Assert the input is array.

```ts
import { assertArray } from "https://deno.land/x/assertion@$VERSION/assert_array.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(assertArray([]));
assertThrows(() => assertArray({}));
```

## assertAsyncIterable

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/assert_async_iterable.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fassert_async_iterable.ts)

Assert the input is `AsyncIterable`.

```ts
import { assertAsyncIterable } from "https://deno.land/x/assertion@$VERSION/assert_async_iterable.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(
  assertAsyncIterable({
    async *[Symbol.asyncIterator]() {
      yield "hello";
    },
  }),
);
assertThrows(() => assertAsyncIterable(() => {}));
```

## assertBigint

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/assert_bigint.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fassert_bigint.ts)

Assert the input is `bigint`.

```ts
import { assertBigint } from "https://deno.land/x/assertion@$VERSION/assert_bigint.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(assertBigint(1000n));
assertThrows(() => assertBigint(undefined));
```

## assertBoolean

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/assert_boolean.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fassert_boolean.ts)

Assert the input is `boolean`.

```ts
import { assertBoolean } from "https://deno.land/x/assertion@$VERSION/assert_boolean.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(assertBoolean(true));
assertThrows(() => assertBoolean(null));
```

## assertDate

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/assert_date.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fassert_date.ts)

Assert the input is `Date`.

```ts
import { assertDate } from "https://deno.land/x/assertion@$VERSION/assert_date.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(assertDate(new Date()));
assertThrows(() => assertDate({}));
```

## assertError

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/assert_error.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fassert_error.ts)

Assert the input is `Error`.

```ts
import { assertError } from "https://deno.land/x/assertion@$VERSION/assert_error.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(assertError(Error()));
assertFalse(assertError(new SyntaxError()));
assertThrows(() => assertError(new Date()));
```

## assertFunction

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/assert_function.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fassert_function.ts)

Assert the input is `Function`.

```ts
import { assertFunction } from "https://deno.land/x/assertion@$VERSION/assert_function.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(assertFunction(() => {}));
assertThrows(() => assertFunction({}));
```

## assertIterable

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/assert_iterable.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fassert_iterable.ts)

Assert the input is `Iterable`.

```ts
import { assertIterable } from "https://deno.land/x/assertion@$VERSION/assert_iterable.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(assertIterable(""));
assertThrows(() => assertIterable({}));
```

## assertNonNullable

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/assert_non_nullable.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fassert_non_nullable.ts)

Assert the input is not `null` or `undefined`.

```ts
import { assertNonNullable } from "https://deno.land/x/assertion@$VERSION/assert_non_nullable.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(assertNonNullable(""));
assertThrows(() => assertNonNullable(null));
assertThrows(() => assertNonNullable(undefined));
```

## assertNull

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/assert_null.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fassert_null.ts)

Assert the input is `null`.

```ts
import { assertNull } from "https://deno.land/x/assertion@$VERSION/assert_null.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(assertNull(null));
assertThrows(() => assertNull(undefined));
```

## assertNullable

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/assert_nullable.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fassert_nullable.ts)

Assert the input is `null` or `undefined`.

```ts
import { assertNullable } from "https://deno.land/x/assertion@$VERSION/assert_nullable.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(assertNullable(null));
assertFalse(assertNullable(undefined));
assertThrows(() => assertNullable({}));
```

## assertNumber

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/assert_number.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fassert_number.ts)

Assert the input is `number`.

```ts
import { assertNumber } from "https://deno.land/x/assertion@$VERSION/assert_number.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(assertNumber(1000));
assertThrows(() => assertNumber("hello world"));
```

## assertObject

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/assert_object.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fassert_object.ts)

Assert the input is `object`.

```ts
import { assertObject } from "https://deno.land/x/assertion@$VERSION/assert_object.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(assertObject({}));
assertThrows(() => assertObject(null));
```

## assertPrimitive

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/assert_primitive.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fassert_primitive.ts)

Assert the input is `Primitive`.

```ts
import { assertPrimitive } from "https://deno.land/x/assertion@$VERSION/assert_primitive.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(assertPrimitive(true));
assertThrows(() => assertPrimitive({}));
```

```ts
type Primitive =
  | number
  | string
  | boolean
  | bigint
  | undefined
  | null
  | symbol;
```

## assertPromise

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/assert_promise.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fassert_promise.ts)

Assert the input is `Promise`.

```ts
import { assertPromise } from "https://deno.land/x/assertion@$VERSION/assert_promise.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(assertPromise(Promise.resolve()));
assertThrows(() => assertPromise({}));
```

## assertRegExp

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/assert_reg_exp.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fassert_reg_exp.ts)

Assert the input is `RegExp`.

```ts
import { assertRegExp } from "https://deno.land/x/assertion@$VERSION/assert_reg_exp.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(assertRegExp(new RegExp("")));
assertThrows(() => assertRegExp({}));
```

## assertString

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/assert_string.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fassert_string.ts)

Assert the input is `string`.

```ts
import { assertString } from "https://deno.land/x/assertion@$VERSION/assert_string.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(assertString("hello world"));
assertThrows(() => assertString(1000));
```

## assertSymbol

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/assert_symbol.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fassert_symbol.ts)

Assert the input is `symbol`.

```ts
import { assertSymbol } from "https://deno.land/x/assertion@$VERSION/assert_symbol.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(assertSymbol(Symbol("symbol")));
assertThrows(() => assertSymbol(null));
```

## assertUndefined

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/assert_undefined.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fassert_undefined.ts)

Assert the input is `undefined`.

```ts
import { assertUndefined } from "https://deno.land/x/assertion@$VERSION/assert_undefined.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(assertUndefined(undefined));
assertThrows(() => assertUndefined(null));
```

## Number subtypes

Assert a subtype of `number`. All assertion functions must satisfy ⊂ `number`.

### assertEven

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/number/assert_even.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fnumber%2Fassert_even.ts)

Assert the input is even.

```ts
import { assertEven } from "https://deno.land/x/assertion@$VERSION/number/assert_even.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(assertEven(0));
assertThrows(() => assertEven(1));
```

### assertNegativeNumber

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/number/assert_negative_number.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fnumber%2Fassert_negative_number.ts)

Assert the input is negative number.

```ts
import { assertNegativeNumber } from "https://deno.land/x/assertion@$VERSION/number/assert_negative_number.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(assertNegativeNumber(-1));
assertThrows(() => assertNegativeNumber(0));
```

### assertNonNegativeInteger

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/number/assert_non_negative_number.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fnumber%2Fassert_non_negative_number.ts)

Assert the input is non-negative integer.

```ts
import { assertNonNegativeInteger } from "https://deno.land/x/assertion@$VERSION/number/assert_non_negative_integer.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(assertNonNegativeInteger(0));
assertFalse(assertNonNegativeInteger(1));
assertThrows(() => assertNonNegativeInteger(-1));
```

### assertNonNegativeNumber

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/number/assert_non_negative_integer.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fnumber%2Fassert_non_negative_integer.ts)

Assert the input is non-negative number. Non-negative number means greater than
or equal to zero.

```ts
import { assertNonNegativeNumber } from "https://deno.land/x/assertion@$VERSION/number/assert_non_negative_number.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(assertNonNegativeNumber(0));
assertFalse(assertNonNegativeNumber(1.1));
assertThrows(() => assertNonNegativeNumber(-1));
```

### assertNonPositiveNumber

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/number/assert_non_positive_number.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fnumber%2Fassert_non_positive_number.ts)

Assert the input is non-positive number. Non-positive number means less than or
equal to zero.

```ts
import { assertNonPositiveNumber } from "https://deno.land/x/assertion@$VERSION/number/assert_non_positive_number.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(assertNonPositiveNumber(0));
assertFalse(assertNonPositiveNumber(-1));
assertThrows(() => assertNonPositiveNumber(1));
```

### assertOdd

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/number/assert_odd.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fnumber%2Fassert_odd.ts)

Assert the input is odd.

```ts
import { assertOdd } from "https://deno.land/x/assertion@$VERSION/number/assert_odd.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(assertOdd(1));
assertThrows(() => assertOdd(0));
```

### assertPositiveNumber

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/number/assert_positive_number.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fnumber%2Fassert_positive_number.ts)

Assert the input is positive number.

```ts
import { assertPositiveNumber } from "https://deno.land/x/assertion@$VERSION/number/assert_positive_number.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(assertPositiveNumber(1));
assertThrows(() => assertPositiveNumber(0));
```

### assertUnitInterval

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/number/assert_unit_interval.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fnumber%2Fassert_unit_interval.ts)

Assert the input is unit interval. The unit interval means to the interval
between 0 and 1 on the real number line.

```ts
import { assertUnitInterval } from "https://deno.land/x/assertion@$VERSION/number/assert_unit_interval.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(assertUnitInterval(0));
assertFalse(assertUnitInterval(1.0));
assertThrows(() => assertUnitInterval(-1));
```

## Iterable subtypes

Assert a subtype of `Iterable`. All assertion functions must satisfy ⊂
`Iterable<unknown>`.

### assertEmpty

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/iterable/assert_empty.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fiterable%2Fassert_empty.ts)

Assert the input is empty.

```ts
import { assertEmpty } from "https://deno.land/x/assertion@$VERSION/iterable/assert_empty.ts";
import { assertFalse } from "https://deno.land/std/testing/asserts.ts";

assertFalse(assertEmpty(""));
assertFalse(assertEmpty([]));
assertFalse(assertEmpty(new Set()));
```

string:

If the input is a string, it has a `""` assertion.

array:

If the input is a array, it has a `[]` assertion.

### assertNotEmpty

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/iterable/assert_non_empty.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fiterable%2Fassert_non_empty.ts)

Assert the input is not empty.

```ts
import { assertNotEmpty } from "https://deno.land/x/assertion@$VERSION/iterable/assert_not_empty.ts";
import { assertFalse } from "https://deno.land/std/testing/asserts.ts";

assertFalse(assertNotEmpty("a"));
assertFalse(assertNotEmpty([0, 1]));
```

array:

If the input is a `T[]`, it has a `[T, ...T[]]` assertion.

### assertSingle

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/iterable/assert_single.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fiterable%2Fassert_single.ts)

Assert the input is single element.

```ts
import { assertSingle } from "https://deno.land/x/assertion@$VERSION/iterable/assert_single.ts";
import {
  assert,
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";

assertFalse(assertSingle("a"));
assertFalse(assertSingle([0]));
assertThrows(() => assertSingle([0, 1, 2]));
```

array:

If the input is a `T[]`, it has a `[T]` assertion.

## Date subtypes

Validates a subtype of `Date`. All validate functions must satisfy ⊂ `Date`.

### assertValidDate

[![badge](https://deno.bundlejs.com/?q=https://deno.land/x/assertion/date/assert_valid_date.ts&badge=)](https://bundlejs.com/?q=https%3A%2F%2Fdeno.land%2Fx%2Fassertion%2Fdate%2Fassert_valid_date.ts)

Assert the input is valid `Date`.

```ts
import { assertValidDate } from "https://deno.land/x/assertion@$VERSION/date/assert_valid_date.ts";
import {
  assertFalse,
  assertThrows,
} from "https://deno.land/std/testing/asserts.ts";
assertFalse(assertValidDate(new Date("2000/1/1")));
assertThrows(() => assertValidDate(new Date("invalid")));
```

## Bundle size

Bundle size is not exact. It is only a guide.

Usually, the actual bundle size is **smaller** than the indicated value.

## Where is mod?

There is no single entry point such as `mod`.

This prevents the inclusion of many unnecessary modules.

## License

Copyright © 2023-present [Tomoki Miyauchi](https://github.com/TomokiMiyauci).

Released under the [MIT](./LICENSE) license
