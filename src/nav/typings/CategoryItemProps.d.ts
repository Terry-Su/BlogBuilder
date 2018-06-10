export default interface CategoryItemProps {
  name: string
  shouldExpand: boolean
  categories: CategoryItemProps[],
  classes?: any,
  onExpandIconClick?: Function
  showIcon?: boolean
}
