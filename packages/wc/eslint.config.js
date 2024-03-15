import baseConfig from '@color-blindness-devtool/base-configs/eslint.base.config.mjs'

export default [
  ...baseConfig,
  {
    files: ['.storybook/main.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]
