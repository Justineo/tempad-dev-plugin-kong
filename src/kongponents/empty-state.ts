import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import { findChildren, findOne, h } from '@tempad-dev/plugins'
import { renderIcon } from '../utils'
import { Button } from './button'

type EmptyStateProperties = {
  'Show icon': boolean
  Icon?: DesignComponent
  Title: string
  Description: string
  'Show button': boolean
}

type ButtonProperties = {
  Appearance: string
  Label: string
  State: string
}

export function EmptyState(component: DesignComponent): DevComponent {
  const {
    'Show icon': ShowIcon,
    Icon,
    Title,
    Description,
    'Show button': ShowButton,
  } = component.properties as EmptyStateProperties

  const button = findOne<DesignComponent>(component, {
    type: 'INSTANCE',
    name: 'Button',
  })

  const title = Title || undefined
  const message = Description || undefined

  const { Appearance, Label, State } = button
    ? (button.properties as ButtonProperties)
    : {}
  const useBuiltInButton = ShowButton && button && Appearance === 'Primary'
  const actionButtonText = useBuiltInButton ? Label : undefined
  const actionButtonVisible = ShowButton ? undefined : false
  const actionButtonDisabled =
    useBuiltInButton && State === 'Disabled' ? true : undefined

  let iconVariant: string | undefined
  let icon: DesignComponent | undefined
  if (ShowIcon && Icon) {
    iconVariant = {
      analytics: 'default',
      warning: 'error',
      search: 'search',
      kong: 'kong',
    }[Icon.name]

    if (iconVariant) {
      if (iconVariant === 'default') {
        iconVariant = undefined
      }
    } else {
      icon = Icon
    }
  }

  const children: (DevComponent | string)[] = []

  if (icon) {
    children.push(h('template', { '#icon': true }, [renderIcon(icon)]))
  }

  if (ShowButton && !useBuiltInButton) {
    const buttons = findChildren<DesignComponent>(
      component,
      (node) =>
        node.type === 'INSTANCE' &&
        ['Icon Only', 'Icon Button', 'Button'].includes(node.name),
    )

    if (buttons) {
      children.push(h('template', { '#action': true }, buttons.map(Button)))
    }
  }

  return h(
    'KEmptyState',
    {
      title,
      message,
      iconVariant,
      actionButtonText,
      actionButtonVisible,
      actionButtonDisabled,
    },
    children,
  )
}
