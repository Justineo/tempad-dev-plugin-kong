import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import type { ButtonProperties } from './button'
import { findOne } from '@tempad-dev/plugins'
import {
  cleanPropNames,
  h,
  renderIcon,
  renderSlot,
  toLowerCase,
} from '../utils'

type ThemeVariant = 'Light' | 'Dark'

export type CodeBlockProperties = {
  Theme: ThemeVariant
  'Show functions': boolean
  'Show method': boolean
  'Show copy': boolean
  'Show alt action': boolean
}

export function CodeBlock(component: DesignComponent<CodeBlockProperties>) {
  const { theme, showFunctions, showCopy, showAltAction } = cleanPropNames(
    component.properties,
  )

  const children: DevComponent['children'] = []
  let isCopy: boolean = false

  const iconButton = findOne<DesignComponent<ButtonProperties>>(component, {
    type: 'INSTANCE',
    name: 'Icon Button',
  })

  if (showAltAction && iconButton) {
    const { iconLeft: icon, label } = cleanPropNames(iconButton.properties)

    const secondaryChildren: DevComponent['children'] = []

    if (icon) {
      if (icon.name === 'copy') {
        isCopy = true
      }
      secondaryChildren.push(renderIcon(icon))
    }
    if (label) {
      secondaryChildren.push(label)
    }
    if (secondaryChildren.length > 0) {
      children.push(
        renderSlot('secondary-actions', [
          h(
            'KCodeBlockIconButton',
            {
              theme: toLowerCase(theme),
              copyTooltip: isCopy ? 'Copy...' : undefined,
              onClick: '() => {}',
            },
            {
              theme: 'light',
            },
            secondaryChildren,
          ),
        ]),
      )
    }
  }

  return h(
    'KCodeBlock',
    {
      id: '...',
      ':code': 'code',
      theme: toLowerCase(theme),
      language: 'json',
      searchable: showFunctions,
      showCopyButton: showCopy,
    },
    {
      theme: 'light',
      searchable: false,
      showCopyButton: true,
    },
    children,
  )
}

export type CodeLineProperties = {
  Theme: ThemeVariant
}

export function CodeLine(component: DesignComponent<CodeLineProperties>) {
  const { theme } = cleanPropNames(component.properties)

  return h(
    'KCodeBlock',
    {
      ':code': 'code',
      theme: toLowerCase(theme),
      singleLine: true,
    },
    {
      theme: 'light',
    },
  )
}
