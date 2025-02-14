import type {
  DesignComponent,
  DevComponent,
  VectorNode,
} from '@tempad-dev/plugins'
import type { ComponentPropsMap } from './types'
import tokens from '@kong/design-tokens/tokens/js/tokens.json'

import { mapKeys } from '@s-libs/micro-dash'
import { h as createComponent, findChild } from '@tempad-dev/plugins'

type Camelize<S extends string> =
  S extends `${infer Head}${' ' | '/'}${infer Rest}`
    ? `${Head}${Camelize<Capitalize<Rest>>}`
    : S

type LowerFirst<T extends string> = T extends `${infer First}${infer Rest}`
  ? `${Lowercase<First>}${Rest}`
  : T

export type CleanPropName<
  T,
  // eslint-disable-next-line ts/no-empty-object-type
  M extends Partial<Record<keyof T, string>> = {},
> = {
  [K in keyof T as K extends keyof M
    ? Extract<M[K], string>
    : LowerFirst<Camelize<K & string>>]: T[K]
}

export function cleanPropNames<
  T extends Record<string, unknown>,
  // eslint-disable-next-line ts/no-empty-object-type
  M extends Partial<Record<keyof T, string>> = {},
>(props: T, mapping?: M): CleanPropName<T, M> {
  return mapKeys(props, (_, key) => {
    if (mapping && key in mapping) {
      const mapped = mapping[key as keyof T]
      return mapped ?? key
    }
    const camelizedKey = (key as string).replace(/[ /]+(.)/g, (_, c) =>
      c.toUpperCase(),
    )
    return camelizedKey.charAt(0).toLowerCase() + camelizedKey.slice(1)
  }) as CleanPropName<T, M>
}

export function toUpperFirst(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

export function toCamelCase(name: string): string {
  return name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
}

export function toKebabCase(name: string): string {
  return name
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/(\d)([a-z])/gi, '$1-$2')
    .replace(/([a-z])(\d)/gi, '$1-$2')
    .replace(/[_\s]/g, '-')
    .toLowerCase()
}

export function toPascalCase(name: string): string {
  return toUpperFirst(toCamelCase(name))
}

export function toConstantCase(name: string): string {
  return name.toUpperCase().replace(/-/g, '_')
}

export function toLowerCase<T extends string>(input: T): Lowercase<T> {
  return input.toLowerCase() as Lowercase<T>
}

export function renderIcon(
  icon: DesignComponent,
  props: DevComponent['props'] = {},
): DevComponent {
  const name = icon.mainComponent?.name || icon.name

  const vector = findChild<VectorNode>(icon, { type: 'VECTOR' })
  const color = vector?.fills[0]?.color

  return createComponent(
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

export function pick<
  T extends object,
  D extends Partial<T>,
  R extends Pick<T, Exclude<keyof T, keyof D>> &
    Partial<Pick<T, Extract<keyof D, keyof T>>>,
>(obj: T, defaults: D): R {
  const result = {} as R
  for (const key in obj) {
    if (obj[key] !== undefined && obj[key] !== defaults[key]) {
      ;(result as any)[key] = obj[key]
    }
  }
  return result
}

export function h<K extends keyof ComponentPropsMap>(
  name: K,
  props: Partial<ComponentPropsMap[K]>,
  defaultProps: Partial<ComponentPropsMap[K]>,
  children?: (DevComponent | string)[],
): DevComponent<Partial<ComponentPropsMap[K]>> {
  return createComponent(name, pick(props, defaultProps), children)
}

export function renderSlot(
  name: string,
  children: DevComponent['children'],
): DevComponent
export function renderSlot(
  name: string,
  props: string,
  children: DevComponent['children'],
): DevComponent
export function renderSlot(
  name: string,
  propsOrChildren: string | DevComponent['children'],
  children?: DevComponent['children'],
): DevComponent {
  const props = children ? (propsOrChildren as string) : null
  const slotChildren = children ?? (propsOrChildren as DevComponent['children'])

  return createComponent(
    'template',
    {
      [`#${name}`]: props ?? true,
    },
    slotChildren,
  )
}
export const LOREM_IPSUM_TITLE = 'Lorem ipsum'
export const LOREM_IPSUM_TEXT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
