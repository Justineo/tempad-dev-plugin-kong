import type { Tab } from '@kong/kongponents'
import type {
  DesignComponent,
  DevComponent,
  TextNode,
} from '@tempad-dev/plugins'
import type { BasicState, BooleanVariant } from '../types'
import { findAll, findChild } from '@tempad-dev/plugins'
import {
  cleanPropNames,
  h,
  pick,
  renderIcon,
  renderSlot,
  toKebabCase,
} from '../utils'

export type TabsProperties = {
  Padding: BooleanVariant
}

export type TabProperties = {
  State: BasicState | 'Selected'
  'Show icon': boolean
  Icon?: DesignComponent
  'Show count': boolean
}

export function Tabs(component: DesignComponent<TabsProperties>) {
  const children = findAll<DesignComponent<TabProperties>>(component, {
    type: 'INSTANCE',
    name: 'Tab',
    visible: true,
  })

  const slots: DevComponent['children'] = []

  const tabs: Tab[] = []

  children.forEach((child) => {
    const { state, showIcon, icon } = cleanPropNames(child.properties)

    const title =
      findChild<TextNode>(child, { type: 'TEXT', name: 'label' })?.characters ||
      ''

    const hash = toKebabCase(title)

    if (showIcon && icon) {
      slots.push(renderSlot(`${hash}-anchor`, [renderIcon(icon), title]))
    }

    tabs.push(
      pick(
        {
          title: title || undefined,
          hash: `#${hash}`,
          disabled: state === 'Disabled',
        },
        {
          disabled: false,
        },
      ),
    )
  })

  return h(
    'KTabs',
    {
      'v-model': 'tabs',
      tabs,
    },
    {},
    slots,
  )
}
