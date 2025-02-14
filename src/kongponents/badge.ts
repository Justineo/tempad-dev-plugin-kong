import type { DesignComponent } from '@tempad-dev/plugins'
import type { ContextualAppearance } from '../types'
import {
  cleanPropNames,
  h,
  renderIcon,
  renderSlot,
  toLowerCase,
} from '../utils'

export type BadgeProperties = {
  Appearance: ContextualAppearance | 'Neutral' | 'Decorative'
  'Show icon left': boolean
  'Icon left'?: DesignComponent
  'Show icon right': boolean
  'Icon right'?: DesignComponent
  Label: string
  Size: 'Default' | 'Small'
}

export function Badge(component: DesignComponent<BadgeProperties>) {
  const {
    appearance,
    showIconLeft,
    iconLeft,
    showIconRight,
    iconRight,
    label,
  } = cleanPropNames(component.properties)

  const icon = showIconLeft ? iconLeft : showIconRight ? iconRight : undefined

  return h(
    'KBadge',
    {
      appearance: toLowerCase(appearance),
      iconBefore: showIconLeft && !showIconRight,
    },
    {
      appearance: 'info',
      iconBefore: true,
    },
    [label, ...(icon ? [renderSlot('icon', [renderIcon(icon)])] : [])],
  )
}

export type MethodBadgeProperties = {
  Method:
    | 'Get'
    | 'Post'
    | 'Put'
    | 'Delete'
    | 'Patch'
    | 'Options'
    | 'Head'
    | 'Connect'
    | 'Trace'
    | 'Custom'
}

export function MethodBadge(component: DesignComponent<MethodBadgeProperties>) {
  const { properties } = component

  const { method } = cleanPropNames(properties)

  return h(
    'KBadge',
    {
      appearance: toLowerCase(method),
    },
    {},
    method ? [method] : [],
  )
}
