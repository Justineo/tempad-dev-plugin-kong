import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import type {
  InputFieldProperties,
  InputFieldProps,
} from './mixins/input-field'
import { findOne, h } from '@tempad-dev/plugins'

import { getInputFieldProps } from './mixins/input-field'

export type InputProperties = InputFieldProperties

export function TextArea(component: DesignComponent): DevComponent {
  const { 'Show value': ShowValue, Placeholder } =
    component.properties as InputProperties

  const placeholder =
    ShowValue === 'True' ? undefined : Placeholder || undefined

  const inputFieldProps: InputFieldProps = getInputFieldProps(component)

  const resizer = findOne<DesignComponent>(component, {
    type: 'INSTANCE',
    name: 'Parts/.Resize',
  })
  const resizable = resizer ? true : undefined

  return h('KTextArea', {
    'v-model': 'value',
    placeholder,
    resizable,
    ...inputFieldProps,
  })
}
