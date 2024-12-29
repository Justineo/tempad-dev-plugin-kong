import type {
  DesignComponent,
  DevComponent,
  TextNode,
} from '@tempad-dev/plugins'
import type { ContextualAppearance } from './shared-types'
import { findOne, h } from '@tempad-dev/plugins'

export type AlertProperties = {
  Appearance: ContextualAppearance
  'Show icon': boolean
  'Show title': boolean
  Title?: string
  'Show close'?: boolean
}

export function Alert(component: DesignComponent): DevComponent {
  const {
    Appearance,
    'Show icon': ShowIcon,
    'Show title': ShowTitle,
    Title,
    'Show close': ShowClose,
  } = component.properties as AlertProperties

  const appearance = {
    Info: undefined, // default
    Success: 'success',
    Warning: 'warning',
    Danger: 'danger',
  }[Appearance]

  const showIcon = ShowIcon ? true : undefined
  const title = ShowTitle ? Title : undefined
  const dismissible = ShowClose ? true : undefined
  const onDismiss = ShowClose ? true : undefined

  const desc = findOne<TextNode>(component, { type: 'TEXT', name: 'desc' })

  return h('KAlert', {
    appearance,
    showIcon,
    title,
    message: desc?.characters,
    dismissible,
    onDismiss,
  })
}
