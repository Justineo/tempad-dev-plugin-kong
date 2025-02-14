import type { DesignComponent, TextNode } from '@tempad-dev/plugins'
import type { BooleanVariant } from '../types'
import { findOne } from '@tempad-dev/plugins'
import { cleanPropNames, h, LOREM_IPSUM_TEXT } from '../utils'

export type CollapseProperties = {
  Collapsed: BooleanVariant
  Size: 'Default' | 'Large' | 'Small'
  'Show link': boolean
}

export function Collapse(component: DesignComponent<CollapseProperties>) {
  const { showLink } = cleanPropNames(component.properties)

  const link = findOne<TextNode>(component, {
    type: 'TEXT',
    name: 'link',
    visible: true,
  })

  return h(
    'KCollapse',
    {
      'v-model': 'isCollapsed',
      triggerLabel: (showLink && link?.characters) || undefined,
    },
    {},
    [LOREM_IPSUM_TEXT],
  )
}
