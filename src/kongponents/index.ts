import type {
  DesignComponent,
  DevComponent,
  TransformOptions,
} from '@tempad-dev/plugins'
import { renderIcon } from '../utils'
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
import { Radio, RadioCard } from './radio'
import { SegmentedControl } from './segmented-control'
import { Select } from './select'
import { Skeleton } from './skeleton'
import { Slideout } from './slideout'
import { Stepper } from './stepper'
import { Switch } from './switch'
import { Tabs } from './tabs'
import { TextArea } from './text-area'
import { Toaster } from './toaster'
import { InfoTooltip, Tooltip } from './tooltip'
import { TreeList } from './tree-list'

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
  RadioCard,
  SegmentedControl,
  Select,
  'SkeletonLoader/Generic': Skeleton,
  'SkeletonLoader/Card': Skeleton,
  'SkeletonLoader/Form': Skeleton,
  'SkeletonLoader/Table': Skeleton,
  Slideout,
  Stepper,
  Tabs,
  Switch,
  Textarea: TextArea,
  Toast: Toaster,
  Tooltip,
  InfoTooltip,
  TreeList,
}

export const transformComponent: TransformOptions['transformComponent'] = ({
  component,
}) => {
  if (
    component.children.length === 1 &&
    component.children[0].type === 'VECTOR'
  ) {
    // only child is a vector, assume it's an icon
    return renderIcon(component)
  }

  const render = componentMap[component.name.replaceAll(' ', '')]
  return render ? render(component) : ''
}
