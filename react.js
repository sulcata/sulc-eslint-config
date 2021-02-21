"use strict";

module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
  },
  plugins: ["jsx-a11y", "react", "react-hooks"],
  extends: [
    "plugin:jsx-a11y/strict",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    require.resolve("eslint-config-prettier"),
  ],
  rules: {
    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",

    // I just think TypeScript is neat :)
    "react/prop-types": "off",

    // deprecated, see jsx-a11y/label-has-associated-control
    "jsx-a11y/label-has-for": "off",

    // deprecated, only applies to older browsers/buggy implementations
    "jsx-a11y/no-onchange": "off",
  },
};
