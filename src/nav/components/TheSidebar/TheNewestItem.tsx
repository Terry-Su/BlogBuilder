import React, { Component } from "react"
import mapStateAndStyle from "../../../shared/utils/mapStateAndStyle"
import Item from "./Item"
import { NAV } from '../../constants/names';
import { NAV_SIDE_BAR_THE_NEWEST } from "../../constants/localization";
import { isEqual } from "../../../shared/utils/lodash";
const styles = {}

export default mapStateAndStyle(styles)(
  class TheNewestItem extends Component<any, any> {
    itemComponent: any

    static sequence = [ NAV_SIDE_BAR_THE_NEWEST ]

    onItemClick = () => {
      const { dispatch, app } = this.props
      const { [NAV]: nav } = app
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
          onClick={this.onItemClick}
          active={isActive}
        />
      )
    }
  }
)
