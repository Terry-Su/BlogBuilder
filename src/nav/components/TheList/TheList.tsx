import React, { Component } from "react"
import mapStateAndStyle from "../../../shared/utils/mapStateAndStyle"
import Item from "./Item"
const styles = {
  itemContainer:{
    padding: '0 0 20px 0'
  }
}

export default mapStateAndStyle(styles)(
  class TheList extends Component<any, any> {
    render() {
      const { list } = this.props
      const { blogs } = list
      const { classes: c } = this.props
      return (
        <div>
          {blogs &&
            blogs.map((blog, index) => (
              <div className={ c.itemContainer } key={index}>
                <Item blog={blog} />
              </div>
            ))}
        </div>
      )
    }
  }
)
