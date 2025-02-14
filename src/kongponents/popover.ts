import type { DesignComponent, FrameNode } from '@tempad-dev/plugins'
import { findOne } from '@tempad-dev/plugins'
import { cleanPropNames, h, renderSlot } from '../utils'

export type PopoverProperties = {
  Position: 'Top' | 'Right' | 'Bottom' | 'Left'
  Text: string
  Heading: string
  'Show button': boolean
}

export function Popover(component: DesignComponent<PopoverProperties>) {
  const { text, heading } = cleanPropNames(component.properties)

  const title = findOne<FrameNode>(component, {
    type: 'FRAME',
    name: 'title',
    visible: true,
  })
  const close = findOne<DesignComponent>(component, {
    type: 'INSTANCE',
    name: 'close',
    visible: true,
  })

  return h(
    'KPop',
    {
      title: (title && heading) || undefined,
      hideCloseIcon: !close,
    },
    { hideCloseIcon: false },
    [renderSlot('content', [text])],
  )
}
