// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'lib',
  rules: {
    'ts/consistent-type-definitions': 'off',
  },
  markdown: false,
})
