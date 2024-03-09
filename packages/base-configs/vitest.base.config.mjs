import { defineConfig } from 'vitest/config'

/** @type {import('vitest').UserConfig} */
export default defineConfig({
  test: {
    environment: 'jsdom',
  },
})
