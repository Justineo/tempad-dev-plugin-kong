import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import type {
  InputFieldProperties,
  InputFieldProps,
} from './mixins/input-field'
import { findChild, h } from '@tempad-dev/plugins'
import { pruneUndefined, renderIcon } from '../utils'
import { getInputFieldProps } from './mixins/input-field'

export type RadioProperties = {
  'Show value': never
} & InputFieldProperties

export function Radio(component: DesignComponent): DevComponent {
  const {
    required,
    label,
    labelAttributes,
    ...inputFieldProps
  }: InputFieldProps = getInputFieldProps(component, {
    help: 'description',
  })

  return h('KRadio', {
    'v-model': 'checked',
    label,
    labelAttributes: pruneUndefined({
      ...labelAttributes,
      required,
    }),
    ...inputFieldProps,
  })
}

export function RadioCard(component: DesignComponent): DevComponent {
  const icon = findChild<DesignComponent>(component, { type: 'INSTANCE' })
  const label = findChild<DesignComponent>(component, {
    type: 'INSTANCE',
    name: 'Label',
  })
  const help = findChild<DesignComponent>(component, {
    type: 'INSTANCE',
    name: 'Help Text',
  })

  return h(
    'KRadio',
    {
      'v-model': 'checked',
      label: label?.properties.Label || undefined,
      description: help?.properties.Text || undefined,
      cardRadioVisible: true, // Design component only support this style
    },
    icon ? [renderIcon(icon)] : [],
  )
}
