import type { DesignComponent } from '@tempad-dev/plugins'
import type { BooleanVariant } from '../types'
import type { LabelProperties } from './label'
import type {
  HelpTextProperties,
  InputFieldProperties,
  InputFieldState,
} from './mixins/input-field'
import { findChild, findOne } from '@tempad-dev/plugins'
import { h, pick, renderIcon } from '../utils'
import { getInputFieldProps } from './mixins/input-field'

export type RadioProperties = {
  'Show value': never
  Value: never
  Placeholder: never
  Selected: BooleanVariant
} & InputFieldProperties

export function Radio(component: DesignComponent<RadioProperties>) {
  const { required, label, labelAttributes, ...inputFieldProps } =
    getInputFieldProps(component, {
      help: 'description',
    })

  return h(
    'KRadio',
    {
      'v-model': 'checked',
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
    {},
  )
}

export type RadioCardProperties = {
  Selected: BooleanVariant
  State: InputFieldState
}

export function RadioCard(component: DesignComponent<RadioCardProperties>) {
  const icon = findChild<DesignComponent>(component, {
    type: 'INSTANCE',
    visible: true,
  })
  const label = findOne<DesignComponent<LabelProperties>>(component, {
    type: 'INSTANCE',
    name: 'Label',
  })
  const help = findOne<DesignComponent<HelpTextProperties>>(component, {
    type: 'INSTANCE',
    name: 'Help Text',
  })

  return h(
    'KRadio',
    {
      'v-model': 'checked',
      label: label?.properties.Label,
      description: help?.properties.Text,
      cardRadioVisible: false, // Design component only support this style
    },
    {},
    icon ? [renderIcon(icon)] : [],
  )
}
