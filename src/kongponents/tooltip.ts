import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import type { BooleanVariant } from './shared-types'
import { KUI_COLOR_TEXT_NEUTRAL } from '@kong/design-tokens'
import { findChild, h } from '@tempad-dev/plugins'
import { renderIcon } from '../utils'

export type TooltipProperties = {
  Text: string
}

export function Tooltip(component: DesignComponent): DevComponent {
  const { Text: text } = component.properties as TooltipProperties

  return h('KTooltip', {
    text,
  })
}

export type InfoTooltipProperties = {
  'Show tooltip': BooleanVariant
  Position: 'Top' | 'Right' | 'Bottom' | 'Left' | 'None'
}

export function InfoTooltip(component: DesignComponent): DevComponent {
  const { 'Show tooltip': ShowTooltip } =
    component.properties as InfoTooltipProperties

  const tooltip =
    ShowTooltip &&
    findChild<DesignComponent>(component, { type: 'INSTANCE', name: 'Tooltip' })
  const text =
    (tooltip && (tooltip.properties as TooltipProperties).Text) || '...'

  return h(
    'KTooltip',
    {
      text,
      ':tooltip-id': 'tooltipId',
    },
    [
      renderIcon(
        { name: 'info', type: 'INSTANCE', properties: {}, children: [] },
        {
          ':aria-describedby': 'tooltipId',
          ':color': `var(--kui-color-text-neutral, ${KUI_COLOR_TEXT_NEUTRAL})`,
          tabindex: '0',
        },
      ),
    ],
  )
}
