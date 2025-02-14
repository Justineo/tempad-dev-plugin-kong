import type {
  KAlert,
  KBadge,
  KBreadcrumbs,
  KButton,
  KCard,
  KCheckbox,
  KCodeBlock,
  KCodeBlockIconButton,
  KCollapse,
  KDateTimePicker,
  KDropdown,
  KDropdownItem,
  KEmptyState,
  KFileUpload,
  KInput,
  KInputSwitch,
  KLabel,
  KModal,
  KMultiselect,
  KPagination,
  KPop,
  KRadio,
  KSegmentedControl,
  KSelect,
  KSkeleton,
  KSlideout,
  KStepper,
  KTabs,
  KTextArea,
  KToaster,
  KTooltip,
  KTreeList,
} from '@kong/kongponents'
import type { ComponentPublicInstance } from 'vue'

export type ContextualAppearance = 'Info' | 'Success' | 'Warning' | 'Danger'

export type BooleanVariant = 'True' | 'False'

export type BasicState =
  | 'Default'
  | 'Hover'
  | 'Focus'
  | 'Active'
  | 'Disabled'
  | 'Readonly'

type ComponentPublicInstanceConstructor = {
  new (...args: any[]): ComponentPublicInstance<any>
}

export type PropType<T extends ComponentPublicInstanceConstructor> =
  InstanceType<T>['$props'] & { [key: string]: unknown }

export type KAlertProps = PropType<typeof KAlert>
export type KBadgeProps = PropType<typeof KBadge>
export type KBreadcrumbsProps = PropType<typeof KBreadcrumbs>
export type KButtonProps = PropType<typeof KButton>
export type KCardProps = PropType<typeof KCard>
export type KCheckboxProps = PropType<typeof KCheckbox>
export type KCodeBlockProps = PropType<typeof KCodeBlock>
export type KCodeBlockIconButtonProps = PropType<typeof KCodeBlockIconButton>
export type KCollapseProps = PropType<typeof KCollapse>
export type KDateTimePickerProps = PropType<typeof KDateTimePicker>
export type KDropdownProps = PropType<typeof KDropdown>
export type KDropdownItemProps = PropType<typeof KDropdownItem>
export type KEmptyStateProps = PropType<typeof KEmptyState>
export type KFileUploadProps = PropType<typeof KFileUpload>
export type KInputProps = PropType<typeof KInput>
export type KInputSwitchProps = PropType<typeof KInputSwitch>
export type KLabelProps = PropType<typeof KLabel>
export type KModalProps = PropType<typeof KModal>
export type KMultiselectProps = PropType<typeof KMultiselect>
export type KPaginationProps = PropType<typeof KPagination>
export type KPopProps = PropType<typeof KPop>
export type KRadioProps = PropType<typeof KRadio>
export type KSegmentedControlProps = PropType<typeof KSegmentedControl>
export type KSelectProps = PropType<typeof KSelect>
export type KSkeletonProps = PropType<typeof KSkeleton>
export type KSlideoutProps = PropType<typeof KSlideout>
export type KStepperProps = PropType<typeof KStepper>
export type KTabsProps = PropType<typeof KTabs>
export type KTextAreaProps = PropType<typeof KTextArea>
export type KToasterProps = PropType<typeof KToaster>
export type KTooltipProps = PropType<typeof KTooltip>
export type KTreeListProps = PropType<typeof KTreeList>

export interface ComponentPropsMap {
  KAlert: KAlertProps
  KBadge: KBadgeProps
  KBreadcrumbs: KBreadcrumbsProps
  KButton: KButtonProps
  KCard: KCardProps
  KCheckbox: KCheckboxProps
  KCodeBlock: KCodeBlockProps
  KCodeBlockIconButton: KCodeBlockIconButtonProps
  KCollapse: KCollapseProps
  KDateTimePicker: KDateTimePickerProps
  KDropdown: KDropdownProps
  KDropdownItem: KDropdownItemProps
  KEmptyState: KEmptyStateProps
  KFileUpload: KFileUploadProps
  KInput: KInputProps
  KInputSwitch: KInputSwitchProps
  KLabel: KLabelProps
  KModal: KModalProps
  KMultiselect: KMultiselectProps
  KPagination: KPaginationProps
  KPop: KPopProps
  KRadio: KRadioProps
  KSegmentedControl: KSegmentedControlProps
  KSelect: KSelectProps
  KSkeleton: KSkeletonProps
  KSlideout: KSlideoutProps
  KStepper: KStepperProps
  KTabs: KTabsProps
  KTextArea: KTextAreaProps
  KToaster: KToasterProps
  KTooltip: KTooltipProps
  KTreeList: KTreeListProps
}
