# @sulcata/eslint-config

![Node.js Package](https://github.com/sulcata/sulcata-eslint-config/workflows/Node.js%20Package/badge.svg)

A shareable set of [ESLint](https://eslint.org/) configurations for [TypeScript](https://www.typescriptlang.org/), [React](https://reactjs.org/), and more. Intended to be opinionated in practices, not style.

If you're looking for opinionated style, I highly recommend [Prettier](https://github.com/prettier/prettier).

## Install

```bash
npm install @sulcata/eslint-config
```

Sadly because of the way the configuration system currently works, you'll also need to install the following peer dependencies for now.

```bash
npm install eslint-config-prettier eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-node eslint-plugin-react eslint-plugin-react-hooks
```

Once ESLint starts rolling out the [new configuration system](https://github.com/eslint/rfcs/pull/9), this package will be changed to bundle them transparently.

## Usage

This package exports a number of shareable configs that can be imported into your configuration using the ESLint config [`"extends"`](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files) key.

- `@sulcata/eslint-config` The kitchen sink, most likely what you want for minimal configuration. Pre-configured using the overrides feature to match file extensions to the appropriate configs. Includes `recommended`, `typescript`, `react`, and `jest`. Requires `tsconfigRootDir` and `project` to be configured in `parserOptions` for type information.
- `@sulcata/eslint-config/recommended` for general JavaScript linting.
- `@sulcata/eslint-config/typescript` for TypeScript linting. Requires `tsconfigRootDir` and `project` to be configured in `parserOptions` for type information.
- `@sulcata/eslint-config/react` for React apps.
- `@sulcata/eslint-config/jest` for Jest test suites.

This is the simplest possible `.eslintrc.js` config.

```js
"use strict";

module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  extends: ["@sulcata/eslint-config"],
};
```

## Issues

Raise an issue (or a PR) if you notice any styling related rules bubbling up.

[GitHub Issues](https://github.com/sulcata/sulcata-eslint-config/issues)

## License

[MIT License](LICENSE)
