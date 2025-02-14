import type { DesignComponent } from '@tempad-dev/plugins'
import { h } from '../utils'

// eslint-disable-next-line ts/no-empty-object-type
export type SkeletonProperties = {}

const skeletonTypeMap = {
  Generic: '',
  Card: 'card',
  Form: 'form',
  Table: 'table',
} as const

const NAME_RE = 'Skeleton Loader/(.*)'

export function Skeleton(component: DesignComponent<SkeletonProperties>) {
  const [, name] = component.name.match(NAME_RE) || []
  const type =
    name in skeletonTypeMap
      ? skeletonTypeMap[name as keyof typeof skeletonTypeMap]
      : undefined

  return h(
    'KSkeleton',
    {
      type,
    },
    {
      type: '',
    },
  )
}
