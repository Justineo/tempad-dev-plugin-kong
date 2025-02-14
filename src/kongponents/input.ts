import type { DesignComponent } from '@tempad-dev/plugins'
import type {
  InputFieldProperties,
  InputFieldState,
} from './mixins/input-field'

import { cleanPropNames, h, renderIcon, renderSlot } from '../utils'
import { getInputFieldProps } from './mixins/input-field'

export type InputProperties = {
  State: InputFieldState
  'Show icon left': boolean
  'Icon left'?: DesignComponent
  'Show icon right': boolean
  'Icon right'?: DesignComponent
} & Omit<InputFieldProperties, 'State'>

export function Input(component: DesignComponent<InputProperties>) {
  const {
    state,
    showValue,
    placeholder,
    showIconLeft,
    iconLeft,
    showIconRight,
    iconRight,
  } = cleanPropNames(component.properties)

  const beforeSlot =
    showIconLeft && iconLeft
      ? renderSlot('before', [renderIcon(iconLeft)])
      : undefined

  const afterSlot =
    showIconRight && iconRight
      ? renderSlot('after', [
          renderIcon(iconRight, {
            role: 'button',
            tabindex: '0',
            onClick: true,
          }),
        ])
      : undefined

  const inputFieldProps = getInputFieldProps(component)

  const isPasswordLabel = inputFieldProps.label === 'Password'
  const hasVisibilityIcon =
    iconRight?.name === 'visibility' || iconRight?.name === 'visibility-off'
  const type = isPasswordLabel || hasVisibilityIcon ? 'password' : undefined

  return h(
    'KInput',
    {
      'v-model': 'value',
      type,
      showPasswordMaskToggle: hasVisibilityIcon,
      placeholder: showValue === 'True' ? undefined : placeholder,
      ...inputFieldProps,
      readonly: state === 'Readonly',
    },
    {
      showPasswordMaskToggle: false,
      readonly: false,
    },
    [beforeSlot, afterSlot].filter((t) => t != null),
  )
}
