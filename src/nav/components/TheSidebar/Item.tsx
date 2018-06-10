import React, { Component } from "react"
import SidebarItemProps from "../../typings/SidebarItemProps"
import mapStyle from "../../../shared/utils/mapStyle"
import ExpandIcon from "./ExpandIcon"
import { BOTTOM, RIGHT } from "../../constants/names"

export default mapStyle({
  container: {
    padding: "5px 0",
    display: "flex",
    alignItems: "center"
    // background: 'blue'
  },
  name: {
    margin: "0 0 0 5px"
  },
  active: {
    // background: "blue"
  }
})(
  class Item extends Component<SidebarItemProps, any> {
    onExpandIconClick = () => {
      const { onExpandIconClick } = this.props
      onExpandIconClick && onExpandIconClick()
    }

    onNameClick = () => {
      const { onNameClick } = this.props
      onNameClick && onNameClick()
    }

    render() {
      const {
        name,
        shouldExpand,
        classes: c,
        showIcon,
        interval = 0,
        active = true
      } = this.props
      const direction = shouldExpand ? BOTTOM : RIGHT

      const style={ padding: `0 0 0 ${ interval }px` }
      return (
        <div className={`${c.container} ${active ? c.active : ""}`} style={ style }>
          <div
            style={{ visibility: showIcon ? "visible" : "hidden" }}
            onClick={this.onExpandIconClick}
          >
            <ExpandIcon direction={direction} />
          </div>

          <div className={c.name} onClick={this.onNameClick}>
            {name}
          </div>
        </div>
      )
    }
  }
)
