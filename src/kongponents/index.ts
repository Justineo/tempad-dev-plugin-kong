import type { DesignComponent, DevComponent, TransformOptions } from '@tempad-dev/plugins'
import { Alert } from './alert'
import { Button } from './button'

type RenderFn = (component: DesignComponent) => DevComponent

const componentMap: Record<string, RenderFn> = {
  Button,
  'Icon Button': Button,
  'Icon Only': Button,
  Alert,
}

export const transformComponent: TransformOptions['transformComponent'] = ({ component }) => {
  const render = componentMap[component.name]
  return render ? render(component) : ''
}
