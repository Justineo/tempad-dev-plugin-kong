import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import type { BasicState } from '../types'
import { cleanPropNames, h, renderIcon, toLowerCase } from '../utils'

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

export function Button(component: DesignComponent<ButtonProperties>) {
  const {
    appearance,
    size,
    state,
    label,
    position,
    icon,
    iconDanger,
    iconLeft,
    iconRight,
  } = cleanPropNames(component.properties)

  let children: DevComponent['children'] = []

  if (component.name === 'Button') {
    children = [label]
  } else if (component.name === 'Icon Button') {
    if (position === 'Left') {
      children = [
        renderIcon(appearance === 'Danger' ? iconDanger! : iconLeft!),
        label,
      ]
    } else if (position === 'Right') {
      children = [label, renderIcon(iconRight!)]
    }
  } else if (component.name === 'Icon Only') {
    children = [renderIcon(appearance === 'Danger' ? iconDanger! : icon!)]
  }

  return h(
    'KButton',
    {
      appearance: toLowerCase(appearance),
      size: toLowerCase(size),
      disabled: state === 'Disabled',
      onClick: () => {},
    },
    {
      appearance: 'primary',
      size: 'medium',
      disabled: false,
    },
    children,
  )
}
