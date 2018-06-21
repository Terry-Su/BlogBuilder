import React, { Component } from "react"
import SidebarItemProps from "../../typings/SidebarItemProps"
import mapStyle from "../../../shared/utils/mapStyle"
import ExpandIcon from "./ExpandIcon"
import { BOTTOM, RIGHT } from "../../constants/names"

export default mapStyle({
  container: {
    display: "flex",
    alignItems: "center",
  },
  expandIconContainer: {
    display: 'flex',
    height: '38px',
    padding: '0 5px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    width: '100%',
    padding: "10px 0",
    margin: "0 0 0 5px"
  },
  active: {
    background: "rgba(0,0,0,0.06)"
  }
})(
  class Item extends Component<SidebarItemProps, any> {
    expandIconDom: any

    constructor( props ) {
      super( props )

    }

    onExpandIconClick = () => {
      const { onExpandIconClick } = this.props
      onExpandIconClick && onExpandIconClick()
    }

    onNameClick = () => {
      const { onNameClick, canNotBeActivated, clickOnlyToExpand, onExpandIconClick } = this.props

      if ( ! clickOnlyToExpand ) {
        onNameClick && onNameClick()
      }

      if ( clickOnlyToExpand ) {
        onExpandIconClick && onExpandIconClick()
      }
    }

    onClick = ( event ) => {
      const { onClick } = this.props
      onClick && onClick( event )
    }

    render() {
      const {
        name,
        shouldExpand,
        classes: c,
        showIcon,
        interval = 0,
        active
      } = this.props
      const direction = shouldExpand ? BOTTOM : RIGHT

      const style={ paddingLeft: `${ interval }px` }
      return (
        <div className={`${c.container} ${active ? c.active : ""}`} style={ style } onClick={this.onClick}>
          <div
          className={ c.expandIconContainer }
            style={{ visibility: showIcon ? "visible" : "hidden" }}
            onClick={this.onExpandIconClick}
          >
            <ExpandIcon direction={direction}  />
          </div>

          <div className={c.name} onClick={this.onNameClick}>
            {name}
          </div>
        </div>
      )
    }
  }
)
