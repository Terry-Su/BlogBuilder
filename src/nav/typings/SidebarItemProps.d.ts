export default interface SidebarItemProps {
  name: string
  shouldExpand: boolean
  categories: SidebarItemProps[]
  interval: number
  active?: boolean
  classes?: any
  onExpandIconClick?: Function
  onNameClick?: Function
  showIcon?: boolean
}
