import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import type { BooleanVariant, KDropdownProps } from '../types'
import { findChildren } from '@tempad-dev/plugins'

import { cleanPropNames, h, pick, renderIcon, renderSlot } from '../utils'

export type DropdownOptionProperties = {
  State: 'Default' | 'Hover' | 'Selected' | 'Focus' | 'Disabled' | 'Danger'
  'Show left icon': boolean
  'Left icon'?: DesignComponent
  Label: string
  'Show badge': BooleanVariant
}

// eslint-disable-next-line ts/no-empty-object-type
export type DropdownProperties = {}

export function Dropdown(component: DesignComponent<DropdownProperties>) {
  const options = findChildren<DesignComponent<DropdownOptionProperties>>(
    component,
    {
      type: 'INSTANCE',
      name: 'Dropdown Option',
      visible: true,
    },
  )

  const items = options.map((option) => {
    const { state, showLeftIcon, leftIcon, label } = cleanPropNames(
      option.properties,
    )

    const icon = showLeftIcon && leftIcon ? renderIcon(leftIcon) : undefined

    return pick(
      {
        label,
        selected: state === 'Selected',
        disabled: state === 'Disabled',
        danger: state === 'Danger',
        icon,
      },
      {
        selected: false,
        disabled: false,
        danger: false,
      },
    )
  })

  // if any item has `icon`, we need to use `items` slot instead of the `items` prop
  if (items.some((item) => item.icon)) {
    return h('KDropdown', {}, {}, [
      renderSlot('items', [
        ...items.map(({ icon, label, ...item }) => {
          const children: DevComponent['children'] = []
          if (icon) {
            children.push(icon)
          }
          if (label) {
            children.push(label)
          }
          return h('KDropdownItem', item, {}, children)
        }),
      ]),
    ])
  }

  return h('KDropdown', { items: items as KDropdownProps['items'] }, {})
}
