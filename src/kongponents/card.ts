import type { DesignComponent, TextNode } from '@tempad-dev/plugins'
import { findOne } from '@tempad-dev/plugins'
import { h } from '../utils'

export type CardProperties = {
  Type: 'Default' | 'Dev Portal'
}

export function Card(component: DesignComponent<CardProperties>) {
  const title = findOne<TextNode>(component, {
    type: 'TEXT',
    name: 'title',
    visible: true,
  })

  const desc = findOne<TextNode>(component, {
    type: 'TEXT',
    name: 'desc',
    visible: true,
  })

  return h(
    'KCard',
    {
      title: title?.characters,
    },
    {},
    desc?.characters ? [desc.characters] : [],
  )
}
