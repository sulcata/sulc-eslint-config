"use strict";

module.exports = {
  env: {
    jest: true,
  },
  plugins: ["jest"],
  extends: [
    "plugin:jest/recommended",
    "plugin:jest/style",
    require.resolve("eslint-config-prettier"),
  ],
  rules: {
    "jest/consistent-test-it": "error",
    "jest/lowercase-name": ["error", { ignore: ["test"] }],
    "jest/no-duplicate-hooks": "error",
    "jest/no-test-return-statement": "error",
    "jest/prefer-called-with": "error",
    "jest/prefer-hooks-on-top": "error",
    "jest/no-restricted-matchers": [
      "error",
      {
        // replace jest/no-truthy-falsy
        toBeFalsy: "Use `.toBe(false)` or coerce with `Boolean(value)`.",
        toBeTruthy: "Use `.toBe(true)` or coerce with `Boolean(value)`.",
        // disable aliases
        toBeCalled: "Use `.toHaveBeenCalled` instead.",
        toBeCalledTimes: "Use `.toHaveBeenCalledTimes` instead.",
        toBeCalledWith: "Use `.toHaveBeenCalledWith` instead.",
        lastCalledWith: "Use `.toHaveBeenLastCalledWith` instead.",
        nthCalledWith: "Use `.toHaveBeenNthCalledWith` instead.",
        toReturn: "Use `.toHaveReturned` instead.",
        toReturnTimes: "Use `.toHaveReturnedTimes` instead.",
        toReturnWith: "Use `.toHaveReturnedWith` instead.",
        lastReturnedWith: "Use `.toHaveLastReturnedWith` instead.",
        nthReturnedWith: "Use `.toHaveNthReturnedWith` instead.",
        toThrowError: "Use `.toThrow` instead.",
      },
    ],
  },
};
