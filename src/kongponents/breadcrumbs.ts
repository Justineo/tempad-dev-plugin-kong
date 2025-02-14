import type { BreadcrumbItem } from '@kong/kongponents'
import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import type { BooleanVariant } from '../types'
import { findChildren, h } from '@tempad-dev/plugins'
import { cleanPropNames, renderIcon, renderSlot, toKebabCase } from '../utils'

export type BreadcrumbsItemProperties = {
  Icon: DesignComponent
  Selected: BooleanVariant
  'Show icon': boolean
  Text: string
}

function renderBreadcrumbsItem(
  component: DesignComponent<BreadcrumbsItemProperties>,
  index: number,
): BreadcrumbItem & { icon?: DesignComponent } {
  const { icon, showIcon, text } = cleanPropNames(component.properties)

  return {
    text,
    key: toKebabCase(text) || `level-${index}`,
    icon: showIcon ? icon : undefined,
  }
}

export type BreadcrumbsProperties = {
  Levels: '1' | '2' | '3' | '4'
}

export function Breadcrumbs(component: DesignComponent<BreadcrumbsProperties>) {
  const items = findChildren<DesignComponent<BreadcrumbsItemProperties>>(
    component,
    {
      type: 'INSTANCE',
      name: /^Level/,
      visible: true,
    },
  ).map((node, i) => renderBreadcrumbsItem(node, i))

  const children: DevComponent['children'] = []
  items.forEach((item) => {
    if (item.icon) {
      children.push(renderSlot(`icon-${item.key}`, [renderIcon(item.icon)]))
      delete item.icon
    }
  })

  return h(
    'KBreadcrumbs',
    {
      items,
    },
    children,
  )
}
