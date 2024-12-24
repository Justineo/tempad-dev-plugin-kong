import { definePlugin } from '@tempad-dev/plugins'
import { transformComponent } from './kongponents'
import { getTokenName, toConstantCase } from './utils'

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
      transformVariable({ name, value }) {
        const tokenName = getTokenName(name)?.toLowerCase()
        return tokenName
          ? `var(--kui-${tokenName}, $kui-${tokenName})`
          : value
            ? `var(--${name}, ${value})`
            : `var(--${name})`
      },
    },
    js: {
      transformVariable({ name, value }) {
        const tokenName = getTokenName(name)
        return tokenName
          ? `var(--kui-${tokenName.toLowerCase()}, \0KUI_${toConstantCase(tokenName)}\0)`
          : value
            ? `var(--${name}, ${value})`
            : `var(--${name})`
      },
    },
  },
})
