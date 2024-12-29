import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import { h } from '@tempad-dev/plugins'

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

export function DatePicker(component: DesignComponent): DevComponent {
  const { Appearance } = component.properties as DateTimePickerProperties

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
  }[Appearance]

  const range = Appearance.startsWith('Range') || undefined

  return h('KDateTimePicker', {
    'v-model': 'currentValue',
    mode,
    range,
  })
}
