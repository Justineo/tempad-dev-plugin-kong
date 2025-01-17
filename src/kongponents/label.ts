import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import { findChild, h } from '@tempad-dev/plugins'

export type LabelProperties = {
  Label: string
  'Show required': boolean
  'Show tooltip': boolean
}

type InfoTooltipProperties = {
  'Show tooltip': boolean
}

type TooltipProperties = {
  Text: string
}

export type LabelProps = {
  info?: string
  required?: boolean
}

export function Label(component: DesignComponent): DevComponent {
  const {
    Label,
    'Show required': ShowRequired,
    'Show tooltip': ShowInfoTooltip,
  } = component.properties as LabelProperties

  const props: LabelProps = {}

  if (ShowRequired) {
    props.required = true
  }

  const infoTooltip = findChild<DesignComponent>(component, {
    type: 'INSTANCE',
    name: 'Tooltip',
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
