import type { DesignComponent, FrameNode, TextNode } from '@tempad-dev/plugins'
import type { TabsProperties } from './tabs'
import { findChild, findOne, h } from '@tempad-dev/plugins'
import { cleanPropNames, LOREM_IPSUM_TEXT } from '../utils'
import { Tabs } from './tabs'

export type SlideoutProperties = {
  'Show tabs': boolean
}

export function Slideout(component: DesignComponent<SlideoutProperties>) {
  const { showTabs } = cleanPropNames(component.properties)

  const header = findChild<FrameNode>(component, {
    type: 'FRAME',
    name: 'header',
  })

  const titleNode =
    header &&
    findChild<FrameNode>(header, {
      type: 'FRAME',
      name: 'title',
      visible: true,
    })
  const title = (
    titleNode && findOne<TextNode>(titleNode, { type: 'TEXT', visible: true })
  )?.characters

  const tabs =
    (showTabs &&
      findOne<DesignComponent<TabsProperties>>(component, {
        type: 'INSTANCE',
        name: 'Tabs',
        visible: true,
      })) ||
    null

  return h(
    'KSlideout',
    {
      ':visible': 'slideoutVisible',
      title,
    },
    [...(tabs ? [Tabs(tabs)] : []), LOREM_IPSUM_TEXT],
  )
}
