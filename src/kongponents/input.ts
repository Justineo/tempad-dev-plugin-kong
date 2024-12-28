import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import type {
  InputFieldProperties,
  InputFieldProps,
} from './mixins/input-field'
import { h } from '@tempad-dev/plugins'

import { renderIcon } from '../utils'
import { getInputFieldProps } from './mixins/input-field'

export type InputProperties = {
  Placeholder?: string
  'Show icon left': boolean
  'Icon left'?: DesignComponent
  'Show icon right': boolean
  'Icon right'?: DesignComponent
} & InputFieldProperties

export function Input(component: DesignComponent): DevComponent {
  const {
    State,
    'Show value': ShowValue,
    Placeholder,
    'Show icon left': ShowIconLeft,
    'Icon left': IconLeft,
    'Show icon right': ShowIconRight,
    'Icon right': IconRight,
  } = component.properties as InputProperties

  const placeholder =
    ShowValue === 'True' ? undefined : Placeholder || undefined

  const beforeSlot =
    ShowIconLeft && IconLeft
      ? h('template', { '#before': true }, [renderIcon(IconLeft)])
      : undefined

  const afterSlot =
    ShowIconRight && IconRight
      ? h('template', { '#after': true }, [
          renderIcon(IconRight, {
            role: 'button',
            tabindex: '0',
            onClick: true,
          }),
        ])
      : undefined

  const inputFieldProps: InputFieldProps = getInputFieldProps(component)

  const isPasswordLabel = inputFieldProps.label === 'Password'
  const hasVisibilityIcon =
    IconRight?.name === 'visibility' || IconRight?.name === 'visibility-off'
  const type = isPasswordLabel || hasVisibilityIcon ? 'password' : undefined

  return h(
    'KInput',
    {
      'v-model': 'value',
      type,
      showPasswordMaskToggle: hasVisibilityIcon || undefined,
      placeholder,
      ...inputFieldProps,
      readonly: State === 'Readonly' || undefined,
    },
    [beforeSlot, afterSlot].filter((t) => t != null),
  )
}
