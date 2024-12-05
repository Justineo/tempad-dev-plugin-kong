import { defineBuildConfig } from 'unbuild'

const entries = [
  'src/kong',
  'src/kong-advanced',
]

export default defineBuildConfig(entries.map(entry => ({
  entries: [entry],
  clean: true,
  rollup: {
    inlineDependencies: true,
    esbuild: {
      minify: true,
    },
  },
})))
