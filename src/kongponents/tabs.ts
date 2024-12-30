import type {
  DesignComponent,
  DevComponent,
  TextNode,
} from '@tempad-dev/plugins'
import type { BasicState, BooleanVariant } from './shared-types'
import { findAll, findChild, h } from '@tempad-dev/plugins'
import { pruneUndefined, renderIcon, toKebabCase } from '../utils'

export type TabsProperties = {
  Padding: BooleanVariant
}

export type TabProperties = {
  State: BasicState | 'Selected'
  'Show icon': boolean
  Icon?: DesignComponent
  'Show count': boolean
}

export function Tabs(component: DesignComponent): DevComponent {
  const children = findAll<DesignComponent>(component, {
    type: 'INSTANCE',
    name: 'Tab',
  })

  const slots: DevComponent[] = []
  const tabs: { title?: string; hash: string; disabled?: boolean }[] = []

  children.forEach((child) => {
    const {
      State,
      'Show icon': ShowIcon,
      Icon,
    } = child.properties as TabProperties

    const disabled = State === 'Disabled' ? true : undefined
    const title =
      findChild<TextNode>(child, { type: 'TEXT', name: 'label' })?.characters ||
      ''

    const hash = toKebabCase(title)

    if (ShowIcon && Icon) {
      slots.push(
        h('template', { [`#${hash}-anchor`]: true }, [renderIcon(Icon), title]),
      )
    }

    tabs.push(
      pruneUndefined({
        title: title || undefined,
        hash: `#${hash}`,
        disabled,
      }),
    )
  })

  return h(
    'KTabs',
    {
      'v-model': 'tabs',
      ':tabs': 'tabs',
    },
    slots,
  )
}
