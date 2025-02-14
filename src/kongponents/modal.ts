import type {
  DesignComponent,
  DevComponent,
  FrameNode,
  TextNode,
} from '@tempad-dev/plugins'
import type { KButtonProps } from '../types'
import type { ButtonProperties } from './button'
import { findChild, findChildren } from '@tempad-dev/plugins'
import {
  cleanPropNames,
  h,
  LOREM_IPSUM_TEXT,
  LOREM_IPSUM_TITLE,
  renderIcon,
  renderSlot,
} from '../utils'
import { Button } from './button'

export type ModalHeaderProperties = {
  'Show icon': boolean
  Icon?: DesignComponent
}

// eslint-disable-next-line ts/no-empty-object-type
export type ModalProperties = {}

export function Modal(component: DesignComponent<ModalProperties>) {
  const header = findChild<DesignComponent<ModalHeaderProperties>>(component, {
    type: 'INSTANCE',
    name: 'Modal Header',
    visible: true,
  })

  const { showIcon, icon } = header ? cleanPropNames(header.properties) : {}

  let title: string = LOREM_IPSUM_TITLE
  let hideCloseIcon = false
  if (header) {
    title =
      findChild<TextNode>(header, { type: 'TEXT', name: 'Modal title' })
        ?.characters || title

    hideCloseIcon = !findChild<DesignComponent>(header, {
      type: 'INSTANCE',
      name: 'close',
      visible: true,
    })
  }

  const titleSlot =
    showIcon && icon
      ? renderSlot('title', [renderIcon(icon), title])
      : undefined

  const footer = findChild<DesignComponent>(component, {
    type: 'INSTANCE',
    name: 'Modal Footer',
  })

  const actionButtonProps: Partial<KButtonProps & { label: string }> = {}
  const cancelButtonProps: Partial<
    KButtonProps & { label: string; hide: boolean }
  > = {}
  let actionsSlotContent: DevComponent<KButtonProps>[] | undefined

  if (footer) {
    const actions = findChild<FrameNode>(footer, {
      type: 'FRAME',
      name: 'right',
    })
    const buttons = actions
      ? findChildren<DesignComponent<ButtonProperties>>(actions, {
          type: 'INSTANCE',
          name: 'Button',
          visible: true,
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
    ? renderSlot('footer-actions', actionsSlotContent)
    : undefined

  return h(
    'KModal',
    {
      ':visible': 'modalVisible',
      title: titleSlot ? undefined : title,
      actionButtonText: actionButtonProps.label,
      actionButtonAppearance: actionButtonProps.appearance,
      actionButtonDisabled: actionButtonProps.disabled,
      cancelButtonText: cancelButtonProps.label,
      cancelButtonAppearance: cancelButtonProps.appearance,
      cancelButtonDisabled: cancelButtonProps.disabled,
      hideCancelButton: cancelButtonProps.hide,
      hideCloseIcon,
    },
    {
      actionButtonText: 'Submit',
      actionButtonAppearance: 'primary',
      actionButtonDisabled: false,
      cancelButtonText: 'Cancel',
      cancelButtonAppearance: 'tertiary',
      cancelButtonDisabled: false,
      hideCancelButton: false,
      hideCloseIcon: false,
    },
    [
      ...(titleSlot ? [titleSlot] : []),
      LOREM_IPSUM_TEXT,
      ...(actionsSlot ? [actionsSlot] : []),
    ],
  )
}
