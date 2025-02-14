import type { StepperState } from '@kong/kongponents'
import type { DesignComponent, TextNode } from '@tempad-dev/plugins'
import { findAll } from '@tempad-dev/plugins'
import { cleanPropNames, h, pick } from '../utils'

export type StepperProperties = {
  Steps: '2' | '3' | '4' | '5'
}

export type StepIconProperties = {
  Appearance: 'Inactive' | 'Active' | 'Complete' | 'Loading' | 'Error'
}

const stateMap: Record<StepIconProperties['Appearance'], StepperState> = {
  Inactive: 'default',
  Active: 'active',
  Complete: 'completed',
  Loading: 'pending',
  Error: 'error',
}

export function Stepper(component: DesignComponent<StepperProperties>) {
  const icons = findAll<DesignComponent<StepIconProperties>>(component, {
    type: 'INSTANCE',
    name: 'Parts/.Step Icon',
  })

  const steps = findAll<TextNode>(component, {
    type: 'TEXT',
    name: /^Step/,
    visible: true,
  }).map((label, i) => {
    const icon = icons[i]
    const { appearance } = cleanPropNames(icon.properties)
    const state = stateMap[appearance]

    return pick(
      {
        label: label.characters,
        state,
      },
      {
        state: 'default',
      } as const,
    )
  })

  return h(
    'KStepper',
    {
      steps,
    },
    {},
  )
}
