export default interface SidebarItemProps {
  name: string
  shouldExpand: boolean
  categories: SidebarItemProps[]
  showIcon?: boolean
  interval: number
  active?: boolean,
  canNotBeActivated?: boolean
  clickOnlyToExpand: boolean
  classes?: any
  onExpandIconClick?: Function
  onNameClick?: Function
  onClick?: Function
}
