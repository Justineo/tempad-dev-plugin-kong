import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import { h } from '@tempad-dev/plugins'

type AlertProperties = {
  'Appearance': string
  'Show icon': boolean
  'Show title': boolean
  'Title'?: string
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

  const appearance = ({
    Info: undefined, // default
    Success: 'success',
    Warning: 'warning',
    Danger: 'danger',
  })[Appearance]

  const showIcon = ShowIcon ? true : undefined
  const title = ShowTitle ? Title : undefined
  const dismissible = ShowClose ? true : undefined
  const onDismiss = ShowClose ? true : undefined

  return h('Alert', {
    appearance,
    showIcon,
    title,
    dismissible,
    onDismiss,
  })
}
