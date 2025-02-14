import type { DesignComponent } from '@tempad-dev/plugins'
import type {
  InputFieldProperties,
  InputFieldProps,
} from './mixins/input-field'
import { findOne } from '@tempad-dev/plugins'

import { cleanPropNames, h } from '../utils'
import { getInputFieldProps } from './mixins/input-field'

export type TextareaProperties = InputFieldProperties

export function TextArea(component: DesignComponent<TextareaProperties>) {
  const { showValue, placeholder } = cleanPropNames(component.properties)

  const inputFieldProps: InputFieldProps = getInputFieldProps(component)

  const resizer = findOne<DesignComponent>(component, {
    type: 'INSTANCE',
    name: 'Parts/.Resize',
    visible: true,
  })

  return h(
    'KTextArea',
    {
      'v-model': 'value',
      placeholder: showValue === 'True' ? undefined : placeholder,
      resizable: !!resizer,
      ...inputFieldProps,
    },
    {
      resizable: false,
    },
  )
}
