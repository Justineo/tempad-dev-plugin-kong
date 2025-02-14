import type { DesignComponent } from '@tempad-dev/plugins'
import type { InputFieldProperties } from './mixins/input-field'

import { cleanPropNames, h, renderIcon, renderSlot } from '../utils'
import { getInputFieldProps } from './mixins/input-field'

export type SelectProperties = {
  'Show icon left': boolean
  'Icon left'?: DesignComponent
} & InputFieldProperties

export function Select(component: DesignComponent<SelectProperties>) {
  const { showValue, placeholder, showIconLeft, iconLeft } = cleanPropNames(
    component.properties,
  )

  const icon = showIconLeft && iconLeft ? renderIcon(iconLeft) : undefined
  const inputFieldProps = getInputFieldProps(component)

  return h(
    'KSelect',
    {
      'v-model': 'value',
      ':items': 'items',
      placeholder: showValue === 'True' ? undefined : placeholder,
      ...inputFieldProps,
    },
    {},
    icon ? [renderSlot('before', [icon])] : [],
  )
}
