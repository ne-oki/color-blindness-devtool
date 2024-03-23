import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', '@lit/react', 'color-blindness-devtool'],
    },
    sourcemap: true,
  },
  plugins: [
    dts({
      entryRoot: resolve(__dirname, 'src'),
      rollupTypes: true,
    }),
  ],
})
