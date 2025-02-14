import type { DesignComponent } from '@tempad-dev/plugins'
import { cleanPropNames, h } from '../utils'

export type DateTimePickerProperties = {
  Appearance:
    | 'Date'
    | 'Date and time'
    | 'Range'
    | 'Range and time'
    | 'Months'
    | 'Years'
    | 'Custom date'
    | 'Custom date and time'
    | 'Relative date'
}

export function DateTimePicker(
  component: DesignComponent<DateTimePickerProperties>,
) {
  const { appearance } = cleanPropNames(component.properties)

  const mode = {
    Default: 'date',
    Date: 'date',
    'Date and time': 'dateTime',
    Range: 'date',
    'Range and time': 'dataTime',
    Months: 'UNSUPPORTED',
    Years: 'UNSUPPORTED',
    'Custom date': 'relativeDate',
    'Custom date and time': 'relativeDateTime',
    'Relative date': 'relativeDate',
  }[appearance]

  const range = appearance.startsWith('Range') || undefined

  return h(
    'KDateTimePicker',
    {
      'v-model': 'currentValue',
      mode,
      range,
    },
    {
      range: false,
    },
  )
}
