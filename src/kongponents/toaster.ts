import type { ToasterAppearance } from '@kong/kongponents'
import type { DesignComponent } from '@tempad-dev/plugins'
import { cleanPropNames, h } from '../utils'

export type ToasterProperties = {
  Appearance: 'Info' | 'Success' | 'Warning' | 'Error' | 'System'
  'Show title': boolean
  'Show close': boolean
  'Info title'?: string
  'Info desc'?: string
  'Success title'?: string
  'Success desc'?: string
  'Warning title'?: string
  'Warning desc'?: string
  'Error title'?: string
  'Error desc'?: string
  'System title'?: string
  'System desc'?: string
}

export function Toaster(component: DesignComponent<ToasterProperties>) {
  const { showTitle, appearance } = cleanPropNames(component.properties)

  const appearanceMap: Record<
    ToasterProperties['Appearance'],
    ToasterAppearance
  > = {
    Info: 'info',
    Success: 'success',
    Warning: 'warning',
    Error: 'danger',
    System: 'system',
  }

  const title =
    (showTitle && component.properties[`${appearance} title`]) || undefined
  const message = component.properties[`${appearance} desc`] || undefined

  return h(
    'KToaster',
    {
      appearance: appearanceMap[appearance],
      title,
      message,
    },
    {
      appearance: 'info',
    },
  )
}
