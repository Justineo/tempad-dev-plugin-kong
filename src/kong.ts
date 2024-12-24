import { definePlugin } from '@tempad-dev/plugins'
import { transformComponent } from './kongponents'
import { getTokenBaseName, toConstantCase } from './utils'

export const plugin = definePlugin({
  name: 'Kong UI',
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
        const baseName = getTokenBaseName(name)
        return `$kui-${baseName.toLowerCase()}`
      },
    },
    js: {
      transformVariable({ name }) {
        const baseName = getTokenBaseName(name)
        return `\0KUI_${toConstantCase(baseName)}\0`
      },
    },
  },
})
