import React, { Component } from "react"
import mapStateAndStyle from "../../../shared/utils/mapStateAndStyle"
import Item from "./Item"
import { NAV_SIDE_BAR_THE_NEWEST } from "../../constants/names"
import sidebarItemList from "../../mixins/sidebarItemList"
const styles = {}

export default mapStateAndStyle(styles)(
  class TheNewestItem extends Component<any, any> {
    itemComponent: any

    mountedItemCallbackComponent(itemComponent) {
      sidebarItemList.updateDefaultItem(itemComponent)
    }

    willUnmountItemCallbackComponent(itemComponent) {
      sidebarItemList.removeDefaultItem()
    }

    onItemClick = () => {
        const { dispatch, app } = this.props
        const { newestBlogs } = app.nav

        dispatch({
          type: "list/UPDATE_BLOGS",
          blogs: newestBlogs
        })
    }

    render() {
      const { classes: c } = this.props
      return (
        <Item
          name={NAV_SIDE_BAR_THE_NEWEST}
          mountedCallbackComponent={this.mountedItemCallbackComponent}
          willUnmountCallbackComponent={this.willUnmountItemCallbackComponent}
          onClick={ this.onItemClick }
        />
      )
    }
  }
)
