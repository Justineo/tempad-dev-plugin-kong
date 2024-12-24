import { definePlugin } from '@tempad-dev/plugins'
import { transformComponent } from './kongponents'
import { getTokenName, toConstantCase } from './utils'

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
      transformVariable({ name, value }) {
        const tokenName = getTokenName(name)
        return tokenName
          ? `$kui-${tokenName.toLowerCase()}`
          : value
            ? `var(--${name}, ${value})`
            : `var(--${name})`
      },
    },
    js: {
      transformVariable({ name, value }) {
        const tokenName = getTokenName(name)
        return tokenName
          ? `\0KUI_${toConstantCase(tokenName)}\0`
          : value
            ? `var(--${name}, ${value})`
            : `var(--${name})`
      },
    },
  },
})
