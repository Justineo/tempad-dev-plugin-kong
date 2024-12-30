import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import type { BooleanVariant } from './shared-types'
import { h } from '@tempad-dev/plugins'
import { LOREM_IPSUM_TITLE } from '../utils'

export type SwitchProperties = {
  State: BooleanVariant
  Size: 'Medium' | 'Small'
}

export function Switch(component: DesignComponent): DevComponent {
  const { Size } = component.properties as SwitchProperties

  const size = {
    Medium: 'large',
    Small: 'small',
  }[Size]

  return h('KInputSwitch', {
    'v-model': 'switchValue',
    label: LOREM_IPSUM_TITLE,
    labelBefore: true,
    size: size === 'small' ? undefined : size,
  })
}
