import type { DesignComponent } from '@tempad-dev/plugins'
import type { BooleanVariant } from '../types'
import { KUI_COLOR_TEXT_NEUTRAL } from '@kong/design-tokens'
import { findChild } from '@tempad-dev/plugins'
import { cleanPropNames, h, renderIcon } from '../utils'

export type TooltipProperties = {
  Text: string
}

export function Tooltip(component: DesignComponent<TooltipProperties>) {
  const { text } = cleanPropNames(component.properties)

  return h(
    'KTooltip',
    {
      text,
    },
    {},
  )
}

export type InfoTooltipProperties = {
  'Show tooltip': BooleanVariant
  Position: 'Top' | 'Right' | 'Bottom' | 'Left' | 'None'
}

export function InfoTooltip(component: DesignComponent<InfoTooltipProperties>) {
  const { showTooltip } = cleanPropNames(component.properties)

  const tooltip =
    showTooltip &&
    findChild<DesignComponent<TooltipProperties>>(component, {
      type: 'INSTANCE',
      name: 'Tooltip',
      visible: true,
    })
  const text = (tooltip && cleanPropNames(tooltip.properties))?.text || '...'

  return h(
    'KTooltip',
    {
      text,
      ':tooltip-id': 'tooltipId',
    },
    {},
    [
      renderIcon(
        {
          name: 'info',
          type: 'INSTANCE',
          properties: {},
          children: [],
          visible: true,
        },
        {
          ':aria-describedby': 'tooltipId',
          ':color': `var(--kui-color-text-neutral, ${KUI_COLOR_TEXT_NEUTRAL})`,
          tabindex: '0',
        },
      ),
    ],
  )
}
