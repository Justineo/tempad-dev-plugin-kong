import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import type { BasicState } from './shared-types'
import { h } from '@tempad-dev/plugins'
import { renderIcon } from '../utils'

export type ButtonProperties = {
  Appearance: 'Primary' | 'Secondary' | 'Tertiary' | 'Danger'
  Size: 'Medium' | 'Small' | 'Large'
  State: BasicState
  Label: string
  Position?: 'Left' | 'Right'
  Icon?: DesignComponent
  'Icon danger'?: DesignComponent
  'Icon left'?: DesignComponent
  'Icon right'?: DesignComponent
}

export function Button(component: DesignComponent): DevComponent {
  const {
    Appearance,
    Size,
    State,
    Label,
    Position,
    Icon,
    'Icon danger': IconDanger,
    'Icon left': IconLeft,
    'Icon right': IconRight,
  } = component.properties as ButtonProperties

  const appearance = {
    Primary: undefined, // default
    Secondary: 'secondary',
    Tertiary: 'tertiary',
    Danger: 'danger',
  }[Appearance]

  const size = {
    Small: 'small',
    Medium: undefined, // default
    Large: 'large',
  }[Size]

  const disabled = State === 'Disabled' || undefined

  let children: DevComponent['children'] = []

  if (component.name === 'Button') {
    children = [Label]
  } else if (component.name === 'Icon Button') {
    if (Position === 'Left') {
      children = [
        renderIcon(Appearance === 'Danger' ? IconDanger! : IconLeft!),
        Label,
      ]
    } else if (Position === 'Right') {
      children = [Label, renderIcon(IconRight!)]
    }
  } else if (component.name === 'Icon Only') {
    children = [renderIcon(Appearance === 'Danger' ? IconDanger! : Icon!)]
  }

  return h(
    'KButton',
    {
      appearance,
      size,
      disabled,
      onClick: true,
    },
    children,
  )
}
