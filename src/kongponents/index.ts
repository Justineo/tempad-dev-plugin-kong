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
import { Collapse } from './collapse'
import { DatePicker } from './date-picker'
import { Dropdown } from './dropdown'
import { EmptyState } from './empty-state'
import { FileUpload } from './file-upload'
import { Input } from './input'
import { Label } from './label'
import { Modal } from './modal'
import { Multiselect } from './multiselect'
import { Pagination } from './pagination'
import { Popover } from './popover'
import { Radio } from './radio'

type RenderFn = (component: DesignComponent) => DevComponent

const componentMap: Record<string, RenderFn> = {
  Alert,
  Badge,
  MethodBadge,
  GlobalBreadcrumb: Breadcrumbs,
  Button,
  IconButton: Button,
  IconOnly: Button,
  Card,
  Checkbox,
  CodeBlock,
  CodeLine,
  Collapse,
  DatePicker,
  Dropdown,
  EmptyState,
  FileUpload,
  Input,
  Label,
  Modal,
  Multiselect,
  Pagination,
  Popover,
  Radio,
}

export const transformComponent: TransformOptions['transformComponent'] = ({
  component,
}) => {
  const render = componentMap[component.name.replaceAll(' ', '')]
  return render ? render(component) : ''
}
