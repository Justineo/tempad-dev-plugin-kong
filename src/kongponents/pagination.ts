import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import { findChild, h } from '@tempad-dev/plugins'

export type PaginationProperties = {
  Selected: 'Start' | 'Middle' | 'End'
  'Show pages': boolean
}

export function Pagination(component: DesignComponent): DevComponent {
  const { 'Show pages': ShowPages } =
    component.properties as PaginationProperties

  const showText = !!findChild<DesignComponent>(component, {
    type: 'INSTANCE',
    name: 'Parts/.Pagination Text',
  })
  const offset = (!ShowPages && !showText) || undefined
  const disablePageJump = (!ShowPages && showText) || undefined

  return h('KPagination', {
    ':total-count': 'total',
    ':current-page': 'page',
    offset,
    disablePageJump,
  })
}
