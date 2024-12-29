import type {
  DesignComponent,
  DevComponent,
  TextNode,
} from '@tempad-dev/plugins'
import { findOne, h } from '@tempad-dev/plugins'

export type CardProperties = {
  Type: 'Default' | 'Dev Portal'
}

export function Card(component: DesignComponent): DevComponent {
  const title = findOne<TextNode>(component, { type: 'TEXT', name: 'title' })

  const desc = findOne<TextNode>(component, { type: 'TEXT', name: 'desc' })

  return h(
    'KCard',
    {
      title: title?.characters,
    },
    desc?.characters ? [desc.characters] : [],
  )
}
