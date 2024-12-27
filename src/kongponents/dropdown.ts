import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import { findChildren, h } from '@tempad-dev/plugins'
import { renderIcon } from '../utils'

export type DropdownOptionProperties = {
  State: string
  'Show left icon': boolean
  'Left icon'?: DesignComponent
  Label: string
}

export function Dropdown(component: DesignComponent): DevComponent {
  const options = findChildren<DesignComponent>(component, {
    type: 'INSTANCE',
    name: 'Dropdown Option',
  })

  const items = options.map((option) => {
    const {
      State,
      'Show left icon': ShowLeftIcon,
      'Left icon': LeftIcon,
      Label,
    } = option.properties as DropdownOptionProperties

    const selected = State === 'Selected' ? true : undefined
    const disabled = State === 'Disabled' ? true : undefined
    const danger = State === 'Danger' ? true : undefined

    const icon = ShowLeftIcon && LeftIcon ? renderIcon(LeftIcon) : undefined

    return {
      label: Label,
      selected,
      disabled,
      danger,
      icon,
    }
  })

  // if any item has `icon`, we need to use `items` slot instead of the `items` prop
  if (items.some((item) => item.icon)) {
    return h('KDropdown', {}, [
      h('template', { '#items': true }, [
        ...items.map(({ icon, label, ...item }) => {
          return h('KDropdownItem', item, icon ? [icon, label] : [label])
        }),
      ]),
    ])
  }

  return h('KDropdown', { items })
}
