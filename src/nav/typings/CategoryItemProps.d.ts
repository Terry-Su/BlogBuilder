export default interface CategoryItemProps {
  name: string
  shouldExpand: boolean
  categories: CategoryItemProps[],
  classes?: any,
  onExpandIconClick?: Function
  onNameClick?: Function
  showIcon?: boolean
}
