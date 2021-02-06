"use strict";

module.exports = {
  env: { jest: true },
  plugins: ["jest"],
  extends: ["plugin:jest/recommended", "plugin:jest/style"],
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
        toBeFalsy: null,
        toBeTruthy: null,
        // disable aliases
        toBeCalled: null,
        toBeCalledTimes: null,
        toBeCalledWith: null,
        lastCalledWith: null,
        nthCalledWith: null,
        toReturn: null,
        toReturnTimes: null,
        toReturnWith: null,
        lastReturnedWith: null,
        nthReturnedWith: null,
        toThrowError: null,
      },
    ],
  },
};
