import type {
  DesignComponent,
  DevComponent,
  FrameNode,
  TextNode,
} from '@tempad-dev/plugins'
import { findChild, findOne, h } from '@tempad-dev/plugins'
import { Tabs } from './tabs'

export type SlideoutProperties = {
  'Show tabs': boolean
}

export function Slideout(component: DesignComponent): DevComponent {
  const { 'Show tabs': ShowTabs } = component.properties as SlideoutProperties

  const header = findChild<FrameNode>(component, {
    type: 'FRAME',
    name: 'header',
  })

  const titleNode =
    header && findChild<FrameNode>(header, { type: 'FRAME', name: 'title' })
  const title = (titleNode && findOne<TextNode>(titleNode, { type: 'TEXT' }))
    ?.characters

  const tabs =
    (ShowTabs &&
      findOne<DesignComponent>(component, {
        type: 'INSTANCE',
        name: 'Tabs',
      })) ||
    null

  return h(
    'KSlideout',
    {
      ':visible': 'slideoutVisible',
      title,
    },
    tabs ? [Tabs(tabs)] : [],
  )
}
