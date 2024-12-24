import { definePlugin } from '@tempad-dev/plugins'
import { transformComponent } from './kongponents'
import { getTokenBaseName, toConstantCase } from './utils'

export const plugin = definePlugin({
  name: 'Kong UI Advanced',
  code: {
    component: {
      title: 'Component',
      lang: 'vue',
      transformComponent,
    },
    css: {
      title: 'SCSS',
      lang: 'scss',
      transformVariable({ name }) {
        const baseName = getTokenBaseName(name).toLowerCase()
        return `calc(var(--kui-${baseName}), $kui-${baseName})`
      },
    },
    js: {
      transformVariable({ name }) {
        const baseName = getTokenBaseName(name)
        return `calc(var(--kui-${baseName.toLowerCase()}), \0KUI_${toConstantCase(baseName)}\0)`
      },
    },
  },
})
