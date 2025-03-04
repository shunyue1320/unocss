import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/dirs',
    'src/index',
    'src/worker',
  ],
  clean: true,
  declaration: false,
  rollup: {
    emitCJS: true,
  },
})
