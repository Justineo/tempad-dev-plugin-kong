import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import type { KEmptyStateProps } from '../types'
import type { ButtonProperties } from './button'
import { findChildren, findOne } from '@tempad-dev/plugins'
import { cleanPropNames, h, renderIcon, renderSlot } from '../utils'
import { Button } from './button'

export type EmptyStateProperties = {
  'Show icon': boolean
  Icon?: DesignComponent
  Title: string
  Description: string
  'Show button': boolean
}

export function EmptyState(component: DesignComponent<EmptyStateProperties>) {
  const { showIcon, icon, title, description, showButton } = cleanPropNames(
    component.properties,
  )

  const button = findOne<DesignComponent<ButtonProperties>>(component, {
    type: 'INSTANCE',
    name: 'Button',
  })

  const { appearance, label, state } = button
    ? cleanPropNames(button.properties)
    : {}

  const useBuiltInButton = showButton && button && appearance === 'Primary'

  const actionButtonProps: Partial<KEmptyStateProps> = useBuiltInButton
    ? {
        actionButtonText: label,
        actionButtonVisible: showButton,
        actionButtonDisabled: useBuiltInButton && state === 'Disabled',
      }
    : {}

  let iconVariant: KEmptyStateProps['iconVariant']
  if (showIcon && icon) {
    iconVariant = {
      analytics: 'default',
      warning: 'error',
      search: 'search',
      kong: 'kong',
    }[icon.name] as KEmptyStateProps['iconVariant']

    if (iconVariant) {
      if (iconVariant === 'default') {
        iconVariant = undefined
      }
    }
  }

  const children: DevComponent['children'] = []

  if (!iconVariant && icon) {
    children.push(renderSlot('icon', [renderIcon(icon)]))
  }

  if (showButton && !useBuiltInButton) {
    const buttons = findChildren<DesignComponent<ButtonProperties>>(component, {
      type: 'INSTANCE',
      name: ['Icon Only', 'Icon Button', 'Button'],
      visible: true,
    })

    if (buttons) {
      children.push(renderSlot('action', buttons.map(Button)))
    }
  }

  return h(
    'KEmptyState',
    {
      title,
      message: description,
      iconVariant,
      ...actionButtonProps,
    },
    {
      actionButtonVisible: true,
      actionButtonDisabled: false,
    },
    children,
  )
}
