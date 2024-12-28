import type {
  DesignComponent,
  DevComponent,
  TextNode,
} from '@tempad-dev/plugins'
import { findOne, h } from '@tempad-dev/plugins'
import { LOREM_IPSUM_TEXT } from '../utils'

export type CollapseProperties = {
  'Show link': boolean
}

export function Collapse(component: DesignComponent): DevComponent {
  const { 'Show link': ShowLink } = component.properties as CollapseProperties

  const link = findOne<TextNode>(component, { type: 'TEXT', name: 'link' })

  const triggerLabel = (ShowLink && link?.characters) || undefined

  return h('KCollapse', { 'v-model': 'isCollapsed', triggerLabel }, [
    LOREM_IPSUM_TEXT,
  ])
}
