import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import type { ContextualAppearance } from './shared-types'
import { h } from '@tempad-dev/plugins'
import { renderIcon } from '../utils'

export type BadgeProperties = {
  Appearance: ContextualAppearance | 'Neutral' | 'Decorative'
  'Show icon left': boolean
  'Icon left'?: DesignComponent
  'Show icon right': boolean
  'Icon right'?: DesignComponent
  Label: string
  Size: 'Default' | 'Small'
}

export function Badge(component: DesignComponent): DevComponent {
  const {
    Appearance,
    'Show icon left': ShowIconLeft,
    'Icon left': IconLeft,
    'Show icon right': ShowIconRight,
    'Icon right': IconRight,
    Label,
  } = component.properties as BadgeProperties
  const appearance = {
    Info: undefined, // default
    Success: 'success',
    Warning: 'warning',
    Danger: 'danger',
    Neutral: 'neutral',
    Decorative: 'decorative',
  }[Appearance]

  const iconBefore = ShowIconRight && !ShowIconLeft ? false : undefined
  const Icon = ShowIconLeft ? IconLeft : ShowIconRight ? IconRight : undefined

  return h('Badge', { appearance, iconBefore }, [
    Label,
    ...(Icon ? [h('template', { '#icon': true }, [renderIcon(Icon)])] : []),
  ])
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

export function MethodBadge(component: DesignComponent): DevComponent {
  const { Method } = component.properties as MethodBadgeProperties

  const appearance = {
    Get: 'get',
    Post: 'post',
    Put: 'put',
    Delete: 'delete',
    Patch: 'patch',
    Options: 'options',
    Head: 'head',
    Connect: 'connect',
    Trace: 'trace',
    Custom: 'custom',
  }[Method]

  return h(
    'KBadge',
    {
      appearance,
    },
    Method ? [Method] : [],
  )
}
