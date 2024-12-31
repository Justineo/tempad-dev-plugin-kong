import { definePlugin } from '@tempad-dev/plugins'
import { transformComponent } from './kongponents'
import { getTokenName } from './utils'

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
        const tokenName = getTokenName(name, 'scss')
        return (
          tokenName || (value ? `var(--${name}, ${value})` : `var(--${name})`)
        )
      },
    },
    js: {
      transformVariable({ name, value }) {
        const tokenName = getTokenName(name, 'js')
        return tokenName
          ? `\0${tokenName}\0`
          : value
            ? `var(--${name}, ${value})`
            : `var(--${name})`
      },
    },
  },
})
