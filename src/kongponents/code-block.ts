import type {
  DesignComponent,
  DevComponent,
  FrameNode,
  TextNode,
} from '@tempad-dev/plugins'
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

export function CodeBlock(component: DesignComponent): DevComponent {
  const {
    Theme,
    'Show functions': searchable,
    'Show copy': ShowCopy,
    'Show alt action': ShowAltAction,
  } = component.properties as CodeBlockProperties

  const theme = {
    Light: undefined, // default
    Dark: 'dark',
  }[Theme]

  let secondary: DevComponent | undefined
  const iconButton = findOne<FrameNode>(component, {
    type: 'INSTANCE',
    name: 'Icon Button',
  })
  if (ShowAltAction && iconButton) {
    const icon = findOne<DesignComponent>(iconButton, {
      type: 'INSTANCE',
      name: 'Icon',
    })
    const label = findOne<TextNode>(iconButton, { type: 'TEXT', name: 'label' })
    const secondaryChildren: (DevComponent | string)[] = []

    if (icon) {
      secondaryChildren.push(renderIcon(icon))
    }
    if (label) {
      secondaryChildren.push(label.characters)
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
              copyTooltip: '...',
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
      'showCopyButton': ShowCopy === false ? false : undefined,
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
