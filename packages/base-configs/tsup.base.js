import { defineConfig } from 'tsup'

/** @type {import('tsup').Options[]} */
export default defineConfig([
  {
    entry: ['src/index.ts'],
    outDir: 'dist',
    format: 'esm',
    minify: false,
    dts: true,
  },
  {
    entry: ['src/index.ts'],
    outDir: 'dist',
    format: 'esm',
    minify: true,
    dts: false,
    outExtension: () => ({
      js: '.min.js',
    }),
  },
])
