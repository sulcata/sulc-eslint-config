"use strict";

module.exports = {
  extends: require.resolve("./recommended"),
  overrides: [
    {
      files: "**/*.{ts,tsx}",
      extends: require.resolve("./typescript"),
    },
    {
      files: "**/*.{jsx,tsx}",
      extends: require.resolve("./react"),
    },
    {
      files: "**/*.{spec,test}.*",
      extends: require.resolve("./jest"),
    },
  ],
};
