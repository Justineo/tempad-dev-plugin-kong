import { definePlugin } from '@tempad-dev/plugins'
import { transformComponent } from './kongponents'
import { toConstantCase } from './utils'

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
        return `$kui-${name.toLowerCase()}`
      },
    },
    js: {
      transformVariable({ name }) {
        return `\0KUI_${toConstantCase(name)}\0`
      },
    },
  },
})
