import React, { Component } from "react"
import mapStateAndStyle from "../../../shared/utils/mapStateAndStyle"
import Item from "./Item"
import { NAV_SIDE_BAR_THE_NEWEST } from "../../constants/names"
import { isEqual } from "lodash";
const styles = {}

export default mapStateAndStyle(styles)(
  class TheNewestItem extends Component<any, any> {
    itemComponent: any

    static sequence = [ NAV_SIDE_BAR_THE_NEWEST ]

    mountedItemCallbackComponent(itemComponent) {
    }

    willUnmountItemCallbackComponent(itemComponent) {
    }

    onItemClick = () => {
      const { dispatch, app } = this.props
      const { nav } = app
      const { newestBlogs } = nav

      dispatch( { type: 'app/UPDATE_ACTIVE_SEQUENCE', activeSequence: TheNewestItem.sequence } )
      
      dispatch({
        type: "list/UPDATE_BLOGS",
        blogs: newestBlogs
      })
    }

    render() {
      const { classes: c, app = {} } = this.props
      const { activeSequence } = app
      const isActive = isEqual( activeSequence, TheNewestItem.sequence )
      return (
        <Item
          name={NAV_SIDE_BAR_THE_NEWEST}
          mountedCallbackComponent={this.mountedItemCallbackComponent}
          willUnmountCallbackComponent={this.willUnmountItemCallbackComponent}
          onClick={this.onItemClick}
          active={isActive}
        />
      )
    }
  }
)
