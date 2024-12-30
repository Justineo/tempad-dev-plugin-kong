import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import type {
  InputFieldProperties,
  InputFieldProps,
} from './mixins/input-field'
import { h } from '@tempad-dev/plugins'

import { getInputFieldProps } from './mixins/input-field'

export type InputProperties = InputFieldProperties

export function TextArea(component: DesignComponent): DevComponent {
  const { 'Show value': ShowValue, Placeholder } =
    component.properties as InputProperties

  const placeholder =
    ShowValue === 'True' ? undefined : Placeholder || undefined

  const inputFieldProps: InputFieldProps = getInputFieldProps(component)

  return h('KTextArea', {
    'v-model': 'value',
    placeholder,
    ...inputFieldProps,
  })
}
