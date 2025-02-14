import type { DesignComponent, TextNode } from '@tempad-dev/plugins'
import type {
  BasicState,
  BooleanVariant,
  KSegmentedControlProps,
} from '../types'
import { findChild, findChildren } from '@tempad-dev/plugins'
import { cleanPropNames, h, toKebabCase, toLowerCase } from '../utils'

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

export function SegmentedControl(
  component: DesignComponent<SegmentedControlProperties>,
) {
  const { size } = cleanPropNames(component.properties)

  const children = findChildren<
    DesignComponent<SegmentedControlOptionProperties>
  >(component, {
    type: 'INSTANCE',
    name: 'Control Option',
  })

  const options: KSegmentedControlProps['options'] = children.map((child) => {
    const { state } = cleanPropNames(child.properties)

    const disabled = state === 'Disabled'
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

  return h(
    'KSegmentedControl',
    {
      ':v-model': 'selected',
      options,
      size: toLowerCase(size),
      disabled,
    },
    { size: 'default', disabled: false },
  )
}
