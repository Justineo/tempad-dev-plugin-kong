import type {
  DesignComponent,
  DevComponent,
  VectorNode,
} from '@tempad-dev/plugins'
import tokens from '@kong/design-tokens/tokens/js/tokens.json'
import { findChild, h } from '@tempad-dev/plugins'

export function toUpperFirst(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

export function toCamelCase(name: string): string {
  return name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
}

export function toKebabCase(name: string): string {
  return name
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[_\s]/g, '-')
    .toLowerCase()
}

export function toPascalCase(name: string): string {
  return toUpperFirst(toCamelCase(name))
}

export function toConstantCase(name: string): string {
  return name.toUpperCase().replace(/-/g, '_')
}

export function renderIcon(
  icon: DesignComponent,
  props: DevComponent['props'] = {},
): DevComponent {
  const name = icon.mainComponent?.name || icon.name

  const vector = findChild<VectorNode>(icon, { type: 'VECTOR' })
  const color = vector?.fills[0]?.color

  return h(
    `${toPascalCase(name)}Icon`,
    Object.assign(
      color
        ? {
            ':color':
              typeof color === 'string'
                ? color
                : getTokenName(color.name, 'js'),
          }
        : {},
      props,
    ),
  )
}

const tokenSet = new Set(
  Object.keys(tokens).map((key) => key.substring(4).replaceAll('_', '-')),
)

export function getTokenName(
  token: string,
  type?: 'scss' | 'js',
): string | null {
  const parts = token.toLowerCase().split(/[-/_ ]/)
  let tokenName: string | null = null
  while (parts.length) {
    const name = parts.join('-')
    if (tokenSet.has(name)) {
      tokenName = name
      break
    }
    parts.shift()
  }

  if (!tokenName) {
    return null
  }

  if (type === 'scss') {
    return `$kui-${tokenName.toLowerCase()}`
  } else if (type === 'js') {
    return `KUI_${toConstantCase(tokenName)}`
  } else {
    return tokenName
  }
}

export function mapKey(
  obj: Record<string, unknown>,
  mapping: Record<string, string> | ((key: string) => string),
): Record<string, unknown> {
  const result: Record<string, unknown> = {}

  // Determine the mapping function upfront
  const mapFn =
    typeof mapping === 'function'
      ? mapping
      : (key: string) => mapping[key] ?? key

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = mapFn(key)
      result[newKey] = obj[key]
    }
  }

  return result
}

export function pruneUndefined<T extends Record<string, unknown>>(
  obj: T,
): {
  [K in keyof T]: T[K] extends undefined
    ? never
    : T[K] extends object
      ? NonNullable<T[K]>
      : T[K]
} {
  return JSON.parse(JSON.stringify(obj))
}

export const LOREM_IPSUM_TITLE = 'Lorem ipsum'
export const LOREM_IPSUM_TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
