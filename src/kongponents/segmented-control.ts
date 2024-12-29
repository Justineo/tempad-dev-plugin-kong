import type {
  DesignComponent,
  DevComponent,
  TextNode,
} from '@tempad-dev/plugins'
import type { BasicState, BooleanVariant } from './shared-types'
import { findChild, findChildren, h } from '@tempad-dev/plugins'
import { pruneUndefined, toKebabCase } from '../utils'

export type SegmentedControlProperties = {
  Size: 'Default' | 'Large'
  Options: '2' | '3' | '4' | '5'
  Selected: 'Option 1' | 'Option 2' | 'Option 3' | 'Option 4' | 'Option 5'
}

export type SegmentedControlOptionProperties = {
  Active: BooleanVariant
  Type: 'Start' | 'Middle' | 'End'
  State: Exclude<BasicState, 'Active'>
  'Show icon': boolean
}

export function SegmentedControl(component: DesignComponent): DevComponent {
  const { Size } = component.properties as SegmentedControlProperties

  const size = {
    Default: undefined, // default
    Large: 'large',
  }[Size]

  const children = findChildren<DesignComponent>(component, {
    type: 'INSTANCE',
    name: 'Control Option',
  })

  const options = children.map((child) => {
    const { State } = child.properties as SegmentedControlOptionProperties

    const disabled = State === 'Disabled' ? true : undefined
    const label =
      findChild<TextNode>(child, {
        type: 'TEXT',
        name: 'option',
      })?.characters || ''

    return {
      label,
      value: toKebabCase(label),
      disabled,
    }
  })

  const disabled = options.every((option) => option.disabled) || undefined

  if (disabled) {
    options.forEach((option) => {
      option.disabled = undefined
    })
  }

  return h('KSegmentedControl', {
    ':v-model': 'selected',
    options: options.map((option) => pruneUndefined(option)),
    size,
    disabled,
  })
}
