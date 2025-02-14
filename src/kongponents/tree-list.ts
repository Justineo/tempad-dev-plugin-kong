import type { DesignComponent } from '@tempad-dev/plugins'
import { findAll, findChild } from '@tempad-dev/plugins'
import { cleanPropNames, h, renderIcon, renderSlot } from '../utils'

// eslint-disable-next-line ts/no-empty-object-type
export type TreeListProperties = {}

export type TreeListItemProperties = {
  Icon: DesignComponent
  Label: string
}

export function TreeList(component: DesignComponent<TreeListProperties>) {
  const items = findAll<DesignComponent<TreeListItemProperties>>(component, {
    type: 'INSTANCE',
    name: 'Parts/.List Item',
    visible: true,
  })

  const iconNodes = items.map((item) => {
    return findChild<DesignComponent>(item, {
      type: 'INSTANCE',
      name: 'Icon',
      visible: true,
    })
  })

  const icons = items.map((item) => {
    return cleanPropNames(item.properties).icon
  })

  const dedupedIcons = [
    ...new Map(icons.map((icon) => [icon.name, icon])).values(),
  ]

  const iconSlot = renderSlot(
    'item-icon',
    '{ item }',
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
    {
      hideIcons: false,
    },
    dedupedIcons.length === 1 && dedupedIcons[0].name === 'document'
      ? []
      : [iconSlot],
  )
}
