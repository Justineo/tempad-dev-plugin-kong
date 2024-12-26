import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import { findChild, h } from '@tempad-dev/plugins'

export type LabelProperties = {
  Label: string
  'Show required': boolean
  'Show tooltip': boolean
}

export type InfoTooltipProperties = {
  'Show tooltip': boolean
}

export type TooltipProperties = {
  Text: string
}

export function Label(component: DesignComponent): DevComponent {
  const {
    Label,
    'Show required': ShowRequired,
    'Show tooltip': ShowInfoTooltip,
  } = component.properties as LabelProperties

  const props: Record<string, unknown> = {}

  if (ShowRequired) {
    props.required = true
  }

  const infoTooltip = findChild<DesignComponent>(component, {
    type: 'INSTANCE',
    name: 'Info Tooltip',
  })
  if (ShowInfoTooltip && infoTooltip) {
    props.info = '...'

    const { 'Show tooltip': ShowTooltip } =
      infoTooltip.properties as InfoTooltipProperties

    const tooltip = findChild<DesignComponent>(infoTooltip, {
      type: 'INSTANCE',
      name: 'Tooltip',
    })
    if (ShowTooltip && tooltip) {
      const { Text } = tooltip.properties as TooltipProperties

      if (Text) {
        props.info = Text
      }
    }
  }

  return h('KLabel', props, [Label])
}
