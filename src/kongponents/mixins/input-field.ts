import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import { findOne } from '@tempad-dev/plugins'
import { mapKey } from '../../utils'
import { Label } from '../label'

export type InputFieldProperties = {
  State: string
  'Show label': boolean
  'Show help text': boolean
}

export type HelpTextProperties = {
  Text: string
}

export function getInputFieldProps(
  component: DesignComponent,
  keyMapping?: Parameters<typeof mapKey>[1],
): DevComponent['props'] {
  const {
    State,
    'Show label': ShowLabel,
    'Show help text': ShowHelpText,
  } = component.properties as InputFieldProperties

  let help: string | undefined
  let label: DevComponent | undefined

  const labelInstance = findOne<DesignComponent>(component, {
    type: 'INSTANCE',
    name: 'Label',
  })
  if (ShowLabel && labelInstance) {
    label = Label(labelInstance)
  }

  const helpTextInstance = findOne<DesignComponent>(
    component,
    (node) =>
      node.type === 'INSTANCE' &&
      ['Parts/.Help Text', 'Help text'].includes(node.name),
  )
  if (ShowHelpText && helpTextInstance) {
    const { Text } = helpTextInstance.properties as HelpTextProperties

    if (Text) {
      help = Text
    }
  }

  const labelAttributes = label
    ? Object.keys(label.props).length > 0
      ? label.props
      : undefined
    : undefined

  const props = {
    label: label ? label.children[0] : undefined,
    labelAttributes,
    help,
    error: State === 'Error' ? true : undefined,
    disabled: State === 'Disabled' ? true : undefined,
  }

  return keyMapping ? mapKey(props, keyMapping) : props
}
