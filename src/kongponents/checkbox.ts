import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import type { InputFieldProperties } from './mixins/input-field'
import { h } from '@tempad-dev/plugins'
import { getInputFieldProps } from './mixins/input-field'

export type CheckboxProperties = {
  Type: string
} & InputFieldProperties

export function Checkbox(component: DesignComponent): DevComponent {
  const { Type } = component.properties as CheckboxProperties

  const indeterminate = Type === 'Indeterminate' ? true : undefined

  const inputFieldProps = getInputFieldProps(component, { help: 'description' })

  return h('KCheckbox', {
    'v-model': 'checked',
    indeterminate,
    ...inputFieldProps,
  })
}
