import type { DesignComponent } from '@tempad-dev/plugins'
import type { InputFieldProperties } from './mixins/input-field'
import { cleanPropNames, h, pick } from '../utils'
import { getInputFieldProps } from './mixins/input-field'

export type CheckboxProperties = {
  Type: 'Unchecked' | 'Checked' | 'Indeterminate'
  Placeholder: never
  'Show value': never
  Value: never
} & InputFieldProperties

export function Checkbox(component: DesignComponent<CheckboxProperties>) {
  const { type } = cleanPropNames(component.properties)

  const { required, label, labelAttributes, ...inputFieldProps } =
    getInputFieldProps(component, {
      help: 'description',
    })

  return h(
    'KCheckbox',
    {
      'v-model': 'checked',
      indeterminate: type === 'Indeterminate',
      label,
      labelAttributes: pick(
        {
          ...labelAttributes,
          required,
        },
        {
          required: false,
        },
      ),
      ...inputFieldProps,
    },
    {
      indeterminate: false,
    },
  )
}
