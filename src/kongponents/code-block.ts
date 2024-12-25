import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import { findOne, h } from '@tempad-dev/plugins'
import { renderIcon } from '../utils'

type CodeBlockProperties = {
  'Theme': string
  'Show functions': boolean
  'Show method': boolean
  'Show copy': boolean
  'Show alt action': boolean
}

type CodeLineProperties = {
  Theme: string
}

type SecondaryButtonProperties = {
  'Icon left': DesignComponent
  'Label': string
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
    const { 'Icon left': icon, Label: label }
      = iconButton.properties as SecondaryButtonProperties

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
    'CodeBlock',
    {
      'id': '...',
      ':code': 'code',
      theme,
      'language': 'json',
      searchable,
      showCopyButton,
    },
    secondary ? [secondary] : [],
  )
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
    'singleLine': true,
  })
}
