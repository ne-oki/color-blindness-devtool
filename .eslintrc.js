// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  ignorePatterns: ['packages/**'],
  extends: ['@color-blindness-devtool/eslint-config/base.js'],
  parserOptions: {
    project: true,
  },
}
