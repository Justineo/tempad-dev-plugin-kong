import type {
  DesignComponent,
  DevComponent,
  TransformOptions,
} from '@tempad-dev/plugins'
import { Alert } from './alert'
import { Badge, MethodBadge } from './badge'
import { Breadcrumbs } from './breadcrumbs'
import { Button } from './button'
import { Card } from './card'
import { Checkbox } from './checkbox'
import { CodeBlock, CodeLine } from './code-block'

type RenderFn = (component: DesignComponent) => DevComponent

const componentMap: Record<string, RenderFn> = {
  Alert,
  Badge,
  'Method Badge': MethodBadge,
  'Global Breadcrumb': Breadcrumbs,
  Button,
  'Icon Button': Button,
  'Icon Only': Button,
  Card,
  Checkbox,
  'Code Block': CodeBlock,
  'Code Line': CodeLine,
}

export const transformComponent: TransformOptions['transformComponent'] = ({
  component,
}) => {
  const render = componentMap[component.name]
  return render ? render(component) : ''
}
