import { defineConfig } from 'tsup'

const config = defineConfig({
  entryPoints: ['src/index.ts'],
  minify: true,
  dts: true,
  format: ['cjs', 'esm'],
})

export default config
