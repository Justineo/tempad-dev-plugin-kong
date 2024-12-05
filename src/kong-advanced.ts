import { definePlugin } from '@tempad-dev/plugins'
import { transformComponent } from './kongponents/components'
import { toConstantCase } from './utils'

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
        return `calc(var(--kui-${name.toLowerCase()}), $kui-${name.toLowerCase()})`
      },
    },
    js: {
      transformVariable({ name }) {
        return `calc(var(--kui-${name.toLowerCase()}), \0KUI_${toConstantCase(name)}\0)`
      },
    },
  },
})
