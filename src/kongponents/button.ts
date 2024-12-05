import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import { h } from '@tempad-dev/plugins'
import { toPascalCase } from '../utils'

type ButtonProperties = {
  'Appearance': string
  'Size': string
  'State': string
  'Label': string
  'Position'?: string
  'Icon'?: DesignComponent
  'Icon Danger'?: DesignComponent
  'Icon Left'?: DesignComponent
  'Icon Right'?: DesignComponent
}

function renderIcon(icon: DesignComponent): DevComponent {
  return h(toPascalCase(icon.name))
}

export function Button(component: DesignComponent): DevComponent {
  const {
    Appearance,
    Size,
    State,
    Label,
    Position,
    Icon,
    'Icon Danger': IconDanger,
    'Icon Left': IconLeft,
    'Icon Right': IconRight,
  } = component.properties as ButtonProperties

  const appearance = ({
    Primary: undefined, // default
    Secondary: 'secondary',
    Tertiary: 'tertiary',
    Danger: 'danger',
  })[Appearance]

  const size = ({
    Small: 'small',
    Medium: undefined, // default
    Large: 'large',
  })[Size]

  const disabled = ({
    Disabled: true,
    Default: undefined, // default
  })[State]

  let children: DevComponent['children'] = []

  if (component.name === 'Button') {
    children = [Label]
  }
  else if (component.name === 'Icon Button') {
    if (Position === 'Left') {
      children = [renderIcon(Appearance === 'Danger' ? IconDanger! : IconLeft!), Label]
    }
    else if (Position === 'Right') {
      children = [Label, renderIcon(IconRight!)]
    }
  }
  else if (component.name === 'Icon Only') {
    children = [renderIcon(Appearance === 'Danger' ? IconDanger! : Icon!)]
  }

  return h('Button', {
    appearance,
    size,
    disabled,
  }, children)
}
