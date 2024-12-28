import type {
  DesignComponent,
  DevComponent,
  FrameNode,
  TextNode,
} from '@tempad-dev/plugins'
import { findChild, findChildren, h } from '@tempad-dev/plugins'
import { LOREM_IPSUM_TEXT, LOREM_IPSUM_TITLE } from '../utils'
import { Button } from './button'

export type ModalHeaderProperties = {
  'Show icon': boolean
  Icon?: DesignComponent
}

export function Modal(component: DesignComponent): DevComponent {
  const header = findChild<DesignComponent>(component, {
    type: 'INSTANCE',
    name: 'Modal Header',
  })

  const { 'Show icon': ShowIcon, Icon } = header
    ? (header.properties as ModalHeaderProperties)
    : {}

  let title: string = LOREM_IPSUM_TITLE
  if (header) {
    title =
      findChild<TextNode>(header, { type: 'TEXT', name: 'Modal title' })
        ?.characters || title
  }

  const titleSlot =
    ShowIcon && Icon ? h('template', { '#title': true }, [title]) : undefined

  const footer = findChild<DesignComponent>(component, {
    type: 'INSTANCE',
    name: 'Modal Footer',
  })

  const actionButtonProps: DevComponent['props'] = {}
  const cancelButtonProps: DevComponent['props'] = {}
  let actionsSlotContent: DevComponent[] | undefined

  if (footer) {
    const actions = findChild<FrameNode>(footer, {
      type: 'FRAME',
      name: 'right',
    })
    const buttons = actions
      ? findChildren<DesignComponent>(actions, {
          type: 'INSTANCE',
          name: 'Button',
        })
      : []

    if (!buttons.length) {
      actionsSlotContent = []
    } else if (buttons.length === 1) {
      // the only button, must be the action button
      const actionButton = Button(buttons[0])
      Object.assign(actionButtonProps, actionButton.props)
      if (typeof actionButton.children[0] === 'string') {
        actionButtonProps.label = actionButton.children[0]
      } else {
        actionsSlotContent = [actionButton]
      }
      cancelButtonProps.hide = true
    } else if (buttons.length === 2) {
      const [cancelButton, actionButton] = buttons.map(Button)
      Object.assign(actionButtonProps, actionButton.props)
      Object.assign(cancelButtonProps, cancelButton.props)
      if (
        actionButton.children[0] === 'string' &&
        cancelButton.children[0] === 'string'
      ) {
        actionButtonProps.label = actionButton.children[0]
        cancelButtonProps.label = cancelButton.children[0]
      } else {
        actionsSlotContent = [cancelButton, actionButton]
      }
    } else {
      actionsSlotContent = buttons.map(Button)
    }
  }

  const actionsSlot = actionsSlotContent
    ? h('template', { '#footer-actions': true }, actionsSlotContent)
    : undefined

  return h(
    'KModal',
    {
      ':visible': 'modalVisible',
      title,
    },
    [
      ...(titleSlot ? [titleSlot] : []),
      LOREM_IPSUM_TEXT,
      ...(actionsSlot ? [actionsSlot] : []),
    ],
  )
}
