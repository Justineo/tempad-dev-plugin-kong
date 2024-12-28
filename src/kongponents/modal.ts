import type {
  DesignComponent,
  DevComponent,
  FrameNode,
  TextNode,
} from '@tempad-dev/plugins'
import { findChild, findChildren, h } from '@tempad-dev/plugins'
import { LOREM_IPSUM_TEXT, LOREM_IPSUM_TITLE, renderIcon } from '../utils'
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
  let hideCloseIcon = false
  if (header) {
    title =
      findChild<TextNode>(header, { type: 'TEXT', name: 'Modal title' })
        ?.characters || title

    hideCloseIcon = !findChild<DesignComponent>(header, {
      type: 'INSTANCE',
      name: 'close',
    })
  }

  const titleSlot =
    ShowIcon && Icon
      ? h('template', { '#title': true }, [renderIcon(Icon), title])
      : undefined

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
        typeof actionButton.children[0] === 'string' &&
        typeof cancelButton.children[0] === 'string'
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

  const actionButtonText = pickProp(actionButtonProps, 'label', 'Submit')
  const actionButtonAppearance = pickProp(
    actionButtonProps,
    'appearance',
    'primary',
  )
  const actionButtonDisabled = pickProp(actionButtonProps, 'disabled', false)

  const cancelButtonText = pickProp(cancelButtonProps, 'label', 'Cancel')
  const cancelButtonAppearance = pickProp(
    cancelButtonProps,
    'appearance',
    'tertiary',
  )
  const cancelButtonDisabled = pickProp(cancelButtonProps, 'disabled', false)
  const hideCancelButton = pickProp(cancelButtonProps, 'hide', false)

  return h(
    'KModal',
    {
      ':visible': 'modalVisible',
      title: titleSlot ? undefined : title,
      actionButtonText,
      actionButtonAppearance,
      actionButtonDisabled,
      cancelButtonText,
      cancelButtonAppearance,
      cancelButtonDisabled,
      hideCancelButton,
      hideCloseIcon: hideCloseIcon || undefined,
    },
    [
      ...(titleSlot ? [titleSlot] : []),
      LOREM_IPSUM_TEXT,
      ...(actionsSlot ? [actionsSlot] : []),
    ],
  )
}

function pickProp(
  props: DevComponent['props'],
  key: string,
  defaultValue: unknown,
): unknown {
  const value = props[key]
  return value === defaultValue ? undefined : value || undefined
}
