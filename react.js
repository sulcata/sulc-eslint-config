"use strict";

module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  env: { browser: true },
  plugins: ["jsx-a11y", "react", "react-hooks"],
  extends: [
    "plugin:jsx-a11y/strict",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier/react",
  ],
  rules: {
    "react/jsx-uses-react": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/no-onchange": "off",
  },
};
