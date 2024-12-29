import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import type { BooleanVariant } from './shared-types'
import { findChildren, h } from '@tempad-dev/plugins'
import { pruneUndefined, renderIcon } from '../utils'

export type BreadcrumbsProperties = {
  Levels: '1' | '2' | '3' | '4'
}

export type BreadcrumbsItemProperties = {
  Icon: DesignComponent
  Selected: BooleanVariant
  'Show icon': boolean
  Text: string
}

export function Breadcrumbs(component: DesignComponent): DevComponent {
  const children = findChildren<DesignComponent>(component, (node) => {
    return node.type === 'INSTANCE' && node.name.startsWith('Level ')
  }).map((child, i) => {
    const {
      Icon,
      'Show icon': ShowIcon,
      Text,
    } = child.properties as BreadcrumbsItemProperties

    return {
      item: {
        text: Text || undefined,
        key: `level-${i}`,
      },
      icon: ShowIcon ? Icon : undefined,
    }
  })

  const items = children.map(({ item }) => pruneUndefined(item))
  const icons = children
    .map(({ icon }, i) => {
      if (!icon) {
        return undefined
      }

      return h('template', { [`#icon-level-${i}`]: true }, [renderIcon(icon)])
    })
    .filter((t) => t != null)

  return h(
    'KBreadcrumbs',
    {
      items,
    },
    icons,
  )
}
