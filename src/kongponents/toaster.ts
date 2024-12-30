import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import { h } from '@tempad-dev/plugins'

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

export function Toaster(component: DesignComponent): DevComponent {
  const { 'Show title': ShowTitle, Appearance } =
    component.properties as ToasterProperties

  const appearance = {
    Info: 'info',
    Success: 'success',
    Warning: 'warning',
    Error: 'danger',
    System: 'system',
  }[Appearance]

  const title =
    (ShowTitle &&
      (component.properties as ToasterProperties)[`${Appearance} title`]) ||
    undefined
  const message = (component.properties as ToasterProperties)[
    `${Appearance} desc`
  ]

  return h('KToaster', {
    appearance: appearance === 'info' ? undefined : appearance,
    title,
    message,
  })
}
