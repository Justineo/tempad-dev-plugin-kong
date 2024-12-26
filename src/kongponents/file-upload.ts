import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import type { InputFieldProperties } from './mixins/input-field'
import { h } from '@tempad-dev/plugins'
import { renderIcon } from '../utils'
import { getInputFieldProps } from './mixins/input-field'

export type FileUploadProperties = {
  'Show value': boolean
  Placeholder?: string
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

  const placeholder = ShowValue ? undefined : Placeholder

  const icon = ShowIconLeft && IconLeft ? renderIcon(IconLeft) : undefined

  const inputFieldProps = getInputFieldProps(component)

  return h(
    'KFileUpload',
    {
      placeholder,
      ...inputFieldProps,
    },
    icon ? [h('template', { '#icon': true }, [icon])] : undefined,
  )
}
