import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import { findAll, findChild, h } from '@tempad-dev/plugins'
import { renderIcon } from '../utils'

type TreeListItemProperties = {
  Icon: DesignComponent
  Label: string
}

export function TreeList(component: DesignComponent): DevComponent {
  const items = findAll<DesignComponent>(component, {
    type: 'INSTANCE',
    name: 'Parts/.List Item',
  })

  const iconNodes = items.map((item) => {
    return findChild<DesignComponent>(item, { type: 'INSTANCE', name: 'Icon' })
  })

  const icons = items.map((item) => {
    const { Icon } = item.properties as TreeListItemProperties
    return Icon
  })

  const dedupedIcons = [
    ...new Map(icons.map((icon) => [icon.name, icon])).values(),
  ]

  const iconSlot = h(
    'template',
    {
      '#item-icon': '{ item }',
    },
    dedupedIcons.map((icon, i) => {
      const condition =
        dedupedIcons.length === 1
          ? iconNodes.length === items.length
            ? {}
            : { 'v-if': '...' }
          : i === 0
            ? { 'v-if': '...' }
            : i === dedupedIcons.length - 1
              ? { 'v-else': '...' }
              : { 'v-else-if': '...' }

      return renderIcon(icon, condition)
    }),
  )

  return h(
    'KTreeList',
    {
      ':items': 'items',
      hideIcons: iconNodes.length === 0,
    },
    dedupedIcons.length === 1 && dedupedIcons[0].name === 'document'
      ? []
      : [iconSlot],
  )
}
