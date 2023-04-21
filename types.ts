// Copyright 2023-latest Tomoki Miyauchi. All rights reserved. MIT license.
// This module is browser compatible.

/** Error constructor API. */
export interface ErrorConstructorLike {
  new (message?: string): Error;
}
