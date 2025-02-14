import type { DesignComponent } from '@tempad-dev/plugins'
import { findChild } from '@tempad-dev/plugins'
import { cleanPropNames, h } from '../utils'

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

export function Label(component: DesignComponent<LabelProperties>) {
  const { label, showRequired, showTooltip } = cleanPropNames(
    component.properties,
  )

  const props: LabelProps = {}

  if (showRequired) {
    props.required = true
  }

  const infoTooltip = findChild<DesignComponent<InfoTooltipProperties>>(
    component,
    {
      type: 'INSTANCE',
      name: 'Tooltip',
      visible: true,
    },
  )

  if (showTooltip && infoTooltip) {
    props.info = '...'

    const { showTooltip } = cleanPropNames(infoTooltip.properties)

    const tooltip = findChild<DesignComponent<TooltipProperties>>(infoTooltip, {
      type: 'INSTANCE',
      name: 'Tooltip',
      visible: true,
    })

    if (showTooltip && tooltip) {
      const { text } = cleanPropNames(tooltip.properties)
      props.info = text
    }
  }

  return h('KLabel', props, { required: false }, [label])
}
