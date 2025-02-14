import type { DesignComponent } from '@tempad-dev/plugins'
import { findChild } from '@tempad-dev/plugins'
import { cleanPropNames, h } from '../utils'

export type PaginationProperties = {
  Selected: 'Start' | 'Middle' | 'End'
  'Show pages': boolean
}

export function Pagination(component: DesignComponent<PaginationProperties>) {
  const { showPages } = cleanPropNames(component.properties)

  const showText = !!findChild<DesignComponent>(component, {
    type: 'INSTANCE',
    name: 'Parts/.Pagination Text',
  })

  return h(
    'KPagination',
    {
      ':total-count': 'total',
      ':current-page': 'page',
      offset: !showPages && !showText,
      disablePageJump: !showPages && showText,
    },
    {
      offset: false,
      disablePageJump: false,
    },
  )
}
