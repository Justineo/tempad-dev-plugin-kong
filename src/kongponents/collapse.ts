import type {
  DesignComponent,
  DevComponent,
  TextNode,
} from '@tempad-dev/plugins'
import { findOne, h } from '@tempad-dev/plugins'

export type CollapseProperties = {
  'Show link': boolean
}

export function Collapse(component: DesignComponent): DevComponent {
  const { 'Show link': ShowLink } = component.properties as CollapseProperties

  const link = findOne<TextNode>(component, { type: 'TEXT', name: 'link' })

  const triggerLabel = (ShowLink && link?.characters) || undefined

  return h('KCollapse', { 'v-model': 'isCollapsed', triggerLabel }, [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  ])
}
