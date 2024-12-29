import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import type {
  InputFieldProperties,
  // InputFieldProps,
} from './mixins/input-field'
import { h } from '@tempad-dev/plugins'

// import { renderIcon } from '../utils'
import { getInputFieldProps } from './mixins/input-field'

export type MultiselectProperties = {
  // 'Show icon left': boolean
  // 'Icon left'?: DesignComponent
} & InputFieldProperties

export function Multiselect(component: DesignComponent): DevComponent {
  const {
    'Show value': ShowValue,
    Placeholder,
    // 'Show icon left': ShowIconLeft,
    // 'Icon left': IconLeft,
  } = component.properties as MultiselectProperties

  const placeholder = ShowValue === 'True' ? undefined : Placeholder

  // const icon = ShowIconLeft && IconLeft ? renderIcon(IconLeft) : undefined
  const inputFieldProps = getInputFieldProps(component)

  return h(
    'KMultiselect',
    {
      'v-model': 'value',
      ':items': 'items',
      placeholder,
      ...inputFieldProps,
    },
    // KMultiselect doesn't support `icon` slot
    [], // icon ? [h('template', { '#icon': true }, [icon])] : undefined,
  )
}
