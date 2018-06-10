import React, { Component } from "react"
import CategoryItemProps from "../../../typings/CategoryItemProps"
import mapStyle from "../../../../shared/utils/mapStyle"
import ExpandIcon from "./ExpandIcon"
import { BOTTOM, RIGHT } from "../../../constants/names"

export default mapStyle({
  container: {
    padding: "5px 0",
    display: "flex",
    alignItems: "center",
    // background: 'blue'
  },
  name: {
    margin: "0 0 0 5px",
    fontSize: "16px"
  }
})(
  class Item extends Component<CategoryItemProps, any> {
    onExpandIconClick = () => {
      const { onExpandIconClick } = this.props
      onExpandIconClick && onExpandIconClick()
    }

    render() {
      const {
        name,
        shouldExpand,
        categories,
        classes: c,
        showIcon
      } = this.props
      const direction = shouldExpand ? BOTTOM : RIGHT
      return (
        <div className={c.container}>
          <div style={{ visibility: showIcon ? 'visible': 'hidden' }} onClick={this.onExpandIconClick}>
            <ExpandIcon direction={direction} />
          </div>

          <div className={c.name}>{name}</div>
        </div>
      )
    }
  }
)
