import {
  BuildOptions,
  EntryPoint,
} from "https://deno.land/x/dnt@0.34.0/mod.ts";

import { expandGlobSync } from "https://deno.land/std@0.181.0/fs/expand_glob.ts";
import {
  fromFileUrl,
  join,
  parse,
  relative,
} from "https://deno.land/std@0.181.0/path/mod.ts";

interface ModuleInfo {
  readonly name: string;
  readonly path: string;
}

function path2EntryPoint(module: ModuleInfo): EntryPoint {
  const entryPoint: EntryPoint = {
    name: toRelative(module.name),
    path: toRelative(module.path),
  };

  return entryPoint;
}

function module2TypeVersions(modules: readonly ModuleInfo[]) {
  const entries = modules.map(({ name, path }) => {
    return [name, [join("types", toDts(path))]];
  });
  const map = Object.fromEntries(entries);

  return { "*": map };
}

function toRelative(path: string): string {
  return path.startsWith("./") ? path : "./" + path;
}

function toDts(path: string): string {
  return path.replace(/.ts$/, ".d.ts");
}

export const makeOptions = (version: string): BuildOptions => {
  const root = fromFileUrl(import.meta.resolve("../"));
  const entries = expandGlobSync("**/!(*_test.ts){assert_,types}*.ts", {
    includeDirs: false,
    root,
  });

  const modules = [...entries].map(({ path }) => relative(root, path)).map(
    (path) => {
      const parsed = parse(path);
      const name = join(parsed.dir, parsed.name) + ".js";

      return { name, path };
    },
  );

  const entryPoints = modules.map(path2EntryPoint);
  const typesVersions = module2TypeVersions(modules);

  return {
    test: false,
    shims: {},
    typeCheck: true,
    entryPoints,
    outDir: "./npm",
    package: {
      name: "@miyauci/assertion",
      version,
      description: "Assertion collection for JavaScript data",
      license: "MIT",
      sideEffects: false,
      type: "module",
      author: {
        name: "TomokiMiyauci",
        email: "contact@miyauchi.dev",
        url: "https://miyauchi.dev/",
      },
      main: undefined,
      module: undefined,
      types: undefined,

      repository: {
        type: "git",
        url: "https://github.com/TomokiMiyauci/assertion.git",
      },
      bugs: {
        url: "https://github.com/TomokiMiyauci/assertion/issues",
      },
      homepage: "https://github.com/TomokiMiyauci/assertion",
      keywords: [
        "assert",
        "asserts",
        "check",
        "validate",
        "validation",
        "utility",
        "collection",
      ],
      publishConfig: { access: "public" },

      typesVersions,
    },
    packageManager: "pnpm",

    mappings: {
      "https://deno.land/x/isx@1.3.1/is_async_iterable.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "is_async_iterable.js",
      },
      "https://deno.land/x/isx@1.3.1/is_bigint.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "is_bigint.js",
      },
      "https://deno.land/x/isx@1.3.1/is_boolean.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "is_boolean.js",
      },
      "https://deno.land/x/isx@1.3.1/is_date.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "is_date.js",
      },
      "https://deno.land/x/isx@1.3.1/is_error.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "is_error.js",
      },
      "https://deno.land/x/isx@1.3.1/is_function.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "is_function.js",
      },
      "https://deno.land/x/isx@1.3.1/is_iterable.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "is_iterable.js",
      },
      "https://deno.land/x/isx@1.3.1/is_non_nullable.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "is_non_nullable.js",
      },
      "https://deno.land/x/isx@1.3.1/is_null.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "is_null.js",
      },
      "https://deno.land/x/isx@1.3.1/is_nullable.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "is_nullable.js",
      },
      "https://deno.land/x/isx@1.3.1/is_number.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "is_number.js",
      },
      "https://deno.land/x/isx@1.3.1/is_object.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "is_object.js",
      },
      "https://deno.land/x/isx@1.3.1/is_primitive.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "is_primitive.js",
      },
      "https://deno.land/x/isx@1.3.1/is_promise.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "is_promise.js",
      },
      "https://deno.land/x/isx@1.3.1/is_reg_exp.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "is_reg_exp.js",
      },
      "https://deno.land/x/isx@1.3.1/is_string.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "is_string.js",
      },
      "https://deno.land/x/isx@1.3.1/is_symbol.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "is_symbol.js",
      },
      "https://deno.land/x/isx@1.3.1/is_undefined.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "is_undefined.js",
      },
      "https://deno.land/x/isx@1.3.1/number/is_even.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "number/is_even.js",
      },
      "https://deno.land/x/isx@1.3.1/number/is_negative_number.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "number/is_negative_number.js",
      },
      "https://deno.land/x/isx@1.3.1/number/is_non_negative_integer.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "number/is_non_negative_integer.js",
      },
      "https://deno.land/x/isx@1.3.1/number/is_non_negative_number.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "number/is_non_negative_number.js",
      },
      "https://deno.land/x/isx@1.3.1/number/is_non_positive_number.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "number/is_non_positive_number.js",
      },
      "https://deno.land/x/isx@1.3.1/number/is_odd.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "number/is_odd.js",
      },
      "https://deno.land/x/isx@1.3.1/number/is_positive_number.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "number/is_positive_number.js",
      },
      "https://deno.land/x/isx@1.3.1/number/is_unit_interval.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "number/is_unit_interval.js",
      },
      "https://deno.land/x/isx@1.3.1/iterable/is_empty.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "iterable/is_empty.js",
      },
      "https://deno.land/x/isx@1.3.1/iterable/is_not_empty.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "iterable/is_not_empty.js",
      },
      "https://deno.land/x/isx@1.3.1/iterable/is_single.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "iterable/is_single.js",
      },
      "https://deno.land/x/isx@1.3.1/date/is_valid_date.ts": {
        name: "@miyauci/isx",
        version: "1.3.1",
        subPath: "date/is_valid_date.js",
      },
    },
  };
};
