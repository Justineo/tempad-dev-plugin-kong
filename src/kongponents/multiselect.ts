import type { DesignComponent } from '@tempad-dev/plugins'
import type { InputFieldProperties } from './mixins/input-field'

import { cleanPropNames, h } from '../utils'
import { getInputFieldProps } from './mixins/input-field'

export type MultiselectProperties = {
  'Show icon left': boolean
  'Icon left'?: DesignComponent
} & InputFieldProperties

export function Multiselect(component: DesignComponent<MultiselectProperties>) {
  const { showValue, placeholder } = cleanPropNames(component.properties)

  const inputFieldProps = getInputFieldProps(component)

  return h(
    'KMultiselect',
    {
      'v-model': 'value',
      ':items': 'items',
      placeholder: showValue === 'True' ? undefined : placeholder,
      ...inputFieldProps,
    },
    {},
    // KMultiselect doesn't support `icon` slot
  )
}
