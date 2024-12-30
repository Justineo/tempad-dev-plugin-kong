import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import type {
  InputFieldProperties,
  // InputFieldProps,
} from './mixins/input-field'
import { h } from '@tempad-dev/plugins'

import { renderIcon } from '../utils'
// import { renderIcon } from '../utils'
import { getInputFieldProps } from './mixins/input-field'

export type SelectProperties = {
  'Show icon left': boolean
  'Icon left'?: DesignComponent
} & InputFieldProperties

export function Select(component: DesignComponent): DevComponent {
  const {
    'Show value': ShowValue,
    Placeholder,
    'Show icon left': ShowIconLeft,
    'Icon left': IconLeft,
  } = component.properties as SelectProperties

  const placeholder = ShowValue === 'True' ? undefined : Placeholder

  const icon = ShowIconLeft && IconLeft ? renderIcon(IconLeft) : undefined
  const inputFieldProps = getInputFieldProps(component)

  return h(
    'KSelect',
    {
      'v-model': 'value',
      ':items': 'items',
      placeholder,
      ...inputFieldProps,
    },
    icon ? [h('template', { '#before': true }, [icon])] : undefined,
  )
}
