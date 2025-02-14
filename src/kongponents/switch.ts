import type { DesignComponent } from '@tempad-dev/plugins'
import type { BooleanVariant, KInputSwitchProps } from '../types'
import { cleanPropNames, h, LOREM_IPSUM_TITLE } from '../utils'

export type SwitchProperties = {
  State: BooleanVariant
  Size: 'Medium' | 'Small'
}

export function Switch(component: DesignComponent<SwitchProperties>) {
  const { size } = cleanPropNames(component.properties)

  const sizeMap: Record<SwitchProperties['Size'], KInputSwitchProps['size']> = {
    Medium: 'large',
    Small: 'small',
  }

  return h(
    'KInputSwitch',
    {
      'v-model': 'switchValue',
      label: LOREM_IPSUM_TITLE,
      labelBefore: true,
      size: sizeMap[size],
    },
    {
      size: 'small',
    },
  )
}
