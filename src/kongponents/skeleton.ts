import type { DesignComponent, DevComponent } from '@tempad-dev/plugins'
import { h } from '@tempad-dev/plugins'

const SkeletonTypeMap: Record<string, string | undefined> = {
  Generic: 'generic',
  Card: 'card',
  Form: 'form',
  Table: 'table',
}

const NAME_RE = 'Skeleton Loader/(.*)'

export function Skeleton(component: DesignComponent): DevComponent {
  const [, name] = component.name.match(NAME_RE) || []
  const type = (name && SkeletonTypeMap[name]) || 'generic'

  return h('KSkeleton', {
    type: type !== 'generic' ? type : undefined,
  })
}
