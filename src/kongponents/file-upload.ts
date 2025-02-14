import type { DesignComponent, FrameNode } from '@tempad-dev/plugins'
import type { ButtonProperties } from './button'
import type { InputFieldProperties } from './mixins/input-field'
import { findChild } from '@tempad-dev/plugins'
import { cleanPropNames, h, renderIcon, renderSlot } from '../utils'
import { getInputFieldProps } from './mixins/input-field'

export type FileUploadProperties = {
  'Show icon left': boolean
  'Icon left'?: DesignComponent
} & InputFieldProperties

export function FileUpload(component: DesignComponent<FileUploadProperties>) {
  const { showValue, placeholder, showIconLeft, iconLeft } = cleanPropNames(
    component.properties,
  )

  const icon = showIconLeft && iconLeft ? renderIcon(iconLeft) : undefined
  const input = findChild<FrameNode>(component, {
    type: 'FRAME',
    name: 'input',
    visible: true,
  })
  const button = input
    ? findChild<DesignComponent<ButtonProperties>>(input, {
        type: 'INSTANCE',
        name: 'Button',
        visible: true,
      })
    : undefined
  const buttonText = button ? button.properties.Label : undefined
  const inputFieldProps = getInputFieldProps(component)

  return h(
    'KFileUpload',
    {
      placeholder: showValue === 'True' ? undefined : placeholder,
      buttonText: buttonText !== 'Select file' ? buttonText : undefined,
      ...inputFieldProps,
      onFileAdded: 'files => {}',
      onFileRemoved: 'files => {}',
    },
    {},
    [...(icon ? [renderSlot('icon', [icon])] : [])],
  )
}
