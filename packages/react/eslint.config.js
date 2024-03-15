import baseConfig from '@color-blindness-devtool/base-configs/eslint.base.config.mjs'

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  ...baseConfig,
  {
    files: ['.storybook/main.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]
