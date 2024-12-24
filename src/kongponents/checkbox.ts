import type {
  DesignComponent,
  DevComponent,
} from '@tempad-dev/plugins'
import { findChild, findOne, h } from '@tempad-dev/plugins'

type CheckboxProperties = {
  'State': string
  'Type': string
  'Show label': boolean
  'Show help text': boolean
}

type LabelProperties = {
  'Label': string
  'Show required': boolean
  'Show tooltip': boolean
}

type InfoTooltipProperties = {
  'Show tooltip': boolean
}

type TooltipProperties = {
  Text: string
}

type HelpTextProperties = {
  Text: string
}

export function Checkbox(component: DesignComponent): DevComponent {
  const {
    State,
    Type,
    'Show label': ShowLabel,
    'Show help text': ShowHelpText,
  } = component.properties as CheckboxProperties

  const indeterminate = Type === 'Indeterminate' ? true : undefined
  const disabled = State === 'Disabled' ? true : undefined
  const error = State === 'Error' ? true : undefined

  let label: string | undefined
  let description: string | undefined

  const labelAttributes: Record<string, unknown> = {}
  const labelInstance = findOne<DesignComponent>(component, { type: 'INSTANCE', name: 'Label' })
  if (ShowLabel && labelInstance) {
    const {
      Label,
      'Show required': ShowRequired,
      'Show tooltip': ShowTooltip,
    } = labelInstance.properties as LabelProperties

    label = Label

    if (ShowRequired) {
      labelAttributes.required = true
    }

    const infoTooltip = findChild<DesignComponent>(labelInstance, { type: 'INSTANCE', name: 'Info Tooltip' })
    if (ShowTooltip && infoTooltip) {
      const {
        'Show tooltip': ShowInfoTooltip,
      } = infoTooltip.properties as InfoTooltipProperties

      const tooltip = findChild<DesignComponent>(infoTooltip, { type: 'INSTANCE', name: 'Tooltip' })
      if (ShowInfoTooltip && tooltip) {
        const { Text } = tooltip.properties as TooltipProperties

        if (Text) {
          labelAttributes.info = Text
        }
      }
    }
  }

  const helpTextInstance = findOne<DesignComponent>(component, { type: 'INSTANCE', name: 'Parts/.Help Text' })
  if (ShowHelpText && helpTextInstance) {
    const { Text } = helpTextInstance.properties as HelpTextProperties

    if (Text) {
      description = Text
    }
  }

  return h('Checkbox', {
    label,
    labelAttributes: Object.keys(labelAttributes).length > 0 ? labelAttributes : undefined,
    description,
    error,
    indeterminate,
    disabled,
  })
}
