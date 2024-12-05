import type { DesignComponent, DevComponent, TransformOptions } from '@tempad-dev/plugins'
import { Button } from './button'

type RenderFn = (component: DesignComponent) => DevComponent

const componentMap = new Map<string, RenderFn>([
  ['Button', Button],
  ['Icon Button', Button],
  ['Icon Only', Button],
])

export const transformComponent: TransformOptions['transformComponent'] = ({ component }) => {
  const render = componentMap.get(component.name)
  return render ? render(component) : ''
}
