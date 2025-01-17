import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import type { ButtonProperties } from './button'
import { findOne, h } from '@tempad-dev/plugins'
import { renderIcon } from '../utils'

type ThemeVariant = 'Light' | 'Dark'

export type CodeBlockProperties = {
  Theme: ThemeVariant
  'Show functions': boolean
  'Show method': boolean
  'Show copy': boolean
  'Show alt action': boolean
}

export function CodeBlock(component: DesignComponent): DevComponent {
  const {
    Theme,
    'Show functions': ShowFunctions,
    'Show copy': ShowCopy,
    'Show alt action': ShowAltAction,
  } = component.properties as CodeBlockProperties

  const theme = {
    Light: undefined, // default
    Dark: 'dark',
  }[Theme]

  const searchable = ShowFunctions ? true : undefined
  const showCopyButton = ShowCopy === false ? false : undefined

  let secondary: DevComponent | undefined
  let isCopy: boolean = false
  const iconButton = findOne<DesignComponent>(component, {
    type: 'INSTANCE',
    name: 'Icon Button',
  })
  if (ShowAltAction && iconButton) {
    const { 'Icon left': icon, Label: label } =
      iconButton.properties as ButtonProperties

    const secondaryChildren: (DevComponent | string)[] = []

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
      secondary = h(
        'template',
        {
          '#secondary-actions': true,
        },
        [
          h(
            'CodeBlockIconButton',
            {
              theme,
              copyTooltip: isCopy ? 'Copy...' : undefined,
              onClick: '() => {}',
            },
            secondaryChildren,
          ),
        ],
      )
    }
  }

  return h(
    'KCodeBlock',
    {
      id: '...',
      ':code': 'code',
      theme,
      language: 'json',
      searchable,
      showCopyButton,
    },
    secondary ? [secondary] : [],
  )
}

export type CodeLineProperties = {
  Theme: ThemeVariant
}

export function CodeLine(component: DesignComponent): DevComponent {
  const { Theme } = component.properties as CodeLineProperties

  const theme = {
    Light: undefined, // default
    Dark: 'dark',
  }[Theme]

  return h('CodeBlock', {
    ':code': 'code',
    theme,
    singleLine: true,
  })
}
