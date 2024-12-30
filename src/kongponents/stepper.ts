import type {
  DesignComponent,
  DevComponent,
  TextNode,
} from '@tempad-dev/plugins'
import { findAll, h } from '@tempad-dev/plugins'

export type StepperProperties = {
  Steps: '2' | '3' | '4' | '5'
}

type StepIconProperties = {
  Appearance: 'Inactive' | 'Active' | 'Complete' | 'Loading' | 'Error'
}

const StateMap: Record<StepIconProperties['Appearance'], string> = {
  Inactive: 'default',
  Active: 'active',
  Complete: 'completed',
  Loading: 'pending',
  Error: 'error',
}

export function Stepper(component: DesignComponent): DevComponent {
  const icons = findAll<DesignComponent>(component, {
    type: 'INSTANCE',
    name: 'Parts/.Step Icon',
  })

  const steps = findAll<TextNode>(
    component,
    (node) => node.type === 'TEXT' && node.name.startsWith('Step'),
  ).map((label, i) => {
    const icon = icons[i]
    const { Appearance } = icon.properties as StepIconProperties
    const state = StateMap[Appearance]

    return {
      label: label.characters,
      state: state === 'default' ? undefined : state,
    }
  })

  return h('KStepper', {
    steps,
  })
}
