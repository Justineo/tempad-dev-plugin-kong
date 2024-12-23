import type { DesignComponent, DevComponent, TransformOptions } from '@tempad-dev/plugins'
import { Alert } from './alert'
import { Badge, MethodBadge } from './badge'
import { Button } from './button'

type RenderFn = (component: DesignComponent) => DevComponent

const componentMap: Record<string, RenderFn> = {
  Alert,
  Badge,
  'Method Badge': MethodBadge,
  Button,
  'Icon Button': Button,
  'Icon Only': Button,
}

export const transformComponent: TransformOptions['transformComponent'] = ({ component }) => {
  const render = componentMap[component.name]
  return render ? render(component) : ''
}
