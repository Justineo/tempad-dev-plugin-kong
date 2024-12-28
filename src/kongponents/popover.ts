import type {
  DesignComponent,
  DevComponent,
  FrameNode,
} from '@tempad-dev/plugins'
import { findOne, h } from '@tempad-dev/plugins'

export type PopoverProperties = {
  Text: string
  Heading: string
}

export function Popover(component: DesignComponent): DevComponent {
  const { Text, Heading } = component.properties as PopoverProperties

  const title = findOne<FrameNode>(component, { type: 'FRAME', name: 'title' })
  const close = findOne<DesignComponent>(component, {
    type: 'INSTANCE',
    name: 'close',
  })

  return h(
    'KPopover',
    {
      title: (title && Heading) || undefined,
      hideCloseIcon: !close || undefined,
    },
    [h('template', { '#content': true }, [Text])],
  )
}
