import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import { findAll, h } from '@tempad-dev/plugins'
import { renderIcon } from '../utils'

export function TreeList(component: DesignComponent): DevComponent {
  const icons = findAll<DesignComponent>(component, {
    type: 'INSTANCE',
    name: 'Icon',
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
          ? {}
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
      hideIcons: icons.length === 0,
    },
    [iconSlot],
  )
}
