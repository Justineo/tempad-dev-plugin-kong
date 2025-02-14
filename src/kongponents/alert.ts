import type { DesignComponent, TextNode } from '@tempad-dev/plugins'
import type { ContextualAppearance } from '../types'
import { findOne } from '@tempad-dev/plugins'

import { cleanPropNames, h, toLowerCase } from '../utils'

export type AlertProperties = {
  Appearance: ContextualAppearance
  'Show icon': boolean
  'Show title': boolean
  Title?: string
  'Show close'?: boolean
}

export function Alert(component: DesignComponent<AlertProperties>) {
  const { appearance, showIcon, showTitle, title, showClose } = cleanPropNames(
    component.properties,
  )

  const desc = findOne<TextNode>(component, {
    type: 'TEXT',
    name: 'desc',
    visible: true,
  })

  return h(
    'KAlert',
    {
      appearance: toLowerCase(appearance),
      showIcon,
      title: (showTitle && title) || undefined,
      message: desc?.characters,
      dismissible: showClose,
      onDismiss: showClose ? () => {} : undefined,
    },
    {
      appearance: 'info',
      showIcon: false,
      dismissible: false,
    },
  )
}
