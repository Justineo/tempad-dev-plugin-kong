import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import type { BasicState, BooleanVariant } from '../../types'
import type { LabelProperties, LabelProps } from '../label'
import { mapKeys } from '@s-libs/micro-dash'
import { findOne } from '@tempad-dev/plugins'
import { cleanPropNames, pick } from '../../utils'
import { Label } from '../label'

export type InputFieldState = BasicState | 'Error'

export type InputFieldProperties = {
  State: InputFieldState
  'Show value': BooleanVariant
  Value?: string
  Placeholder?: string
  'Show label': boolean
  'Show help text': boolean
}

export type HelpTextProperties = {
  Text: string
}

export type InputFieldProps = {
  label?: string
  labelAttributes?: LabelProps
  required?: boolean
  help?: string
  error?: boolean
  disabled?: boolean
}

export type KeyMapping = {
  [K in keyof InputFieldProps]?: string
}

export type MapName<T, M extends Partial<Record<keyof T, string>>> = {
  [K in keyof T as K extends keyof M ? Extract<M[K], string> : K]: T[K]
}

// eslint-disable-next-line ts/no-empty-object-type
export function getInputFieldProps<T extends KeyMapping = {}>(
  component: DesignComponent<InputFieldProperties>,
  keyMapping?: T,
): MapName<InputFieldProps, T> {
  const { state, showLabel, showHelpText } = cleanPropNames(
    component.properties,
  )

  let help: string | undefined
  let label: DevComponent<LabelProps> | undefined

  const labelNode = findOne<DesignComponent<LabelProperties>>(component, {
    type: 'INSTANCE',
    name: 'Label',
    visible: true,
  })

  if (showLabel && labelNode) {
    label = Label(labelNode)
  }

  const helpTextNode = findOne<DesignComponent<HelpTextProperties>>(component, {
    type: 'INSTANCE',
    name: ['Parts/.Help Text', 'Help text'],
    visible: true,
  })

  if (showHelpText && helpTextNode) {
    const { text } = cleanPropNames(helpTextNode.properties)
    help = text
  }

  const { required, ...labelAttributes } = label ? label.props : {}

  const props: InputFieldProps = pick(
    {
      label: label?.children[0] as string | undefined,
      labelAttributes,
      required,
      help,
      error: state === 'Error',
      disabled: state === 'Disabled',
    },
    {
      required: false,
      error: false,
      disabled: false,
    },
  )

  if (keyMapping) {
    return mapKeys(props, (_, key) => {
      if (key in keyMapping) {
        const mappedKey = keyMapping[key]
        return mappedKey ?? key
      }
      return key
    }) as any
  }

  return props as any
}
