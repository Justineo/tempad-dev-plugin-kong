import type {
  DesignComponent,
  DevComponent,
  FrameNode,
} from '@tempad-dev/plugins'
import type { ButtonProperties } from './button'
import type { InputFieldProperties } from './mixins/input-field'
import { findChild, h } from '@tempad-dev/plugins'
import { renderIcon } from '../utils'
import { getInputFieldProps } from './mixins/input-field'

export type FileUploadProperties = {
  Placeholder: never
  'Show icon left': boolean
  'Icon left'?: DesignComponent
} & InputFieldProperties

export function FileUpload(component: DesignComponent): DevComponent {
  const {
    'Show value': ShowValue,
    Placeholder,
    'Show icon left': ShowIconLeft,
    'Icon left': IconLeft,
  } = component.properties as FileUploadProperties

  const placeholder = ShowValue === 'True' ? undefined : Placeholder

  const icon = ShowIconLeft && IconLeft ? renderIcon(IconLeft) : undefined
  const input = findChild<FrameNode>(component, {
    type: 'FRAME',
    name: 'input',
  })
  const button = input
    ? findChild<DesignComponent>(input, { type: 'INSTANCE', name: 'Button' })
    : undefined
  const buttonText = button
    ? (button.properties as ButtonProperties).Label
    : undefined

  const inputFieldProps = getInputFieldProps(component)

  return h(
    'KFileUpload',
    {
      placeholder,
      buttonText: buttonText !== 'Select file' ? buttonText : undefined,
      ...inputFieldProps,
      onFileAdded: 'files => {}',
      onFileRemoved: 'files => {}',
    },
    icon ? [h('template', { '#icon': true }, [icon])] : undefined,
  )
}
