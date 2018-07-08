import React, { Component } from "react"
import mapStateAndStyle from "../../../shared/utils/mapStateAndStyle"
const styles = {
  container: {
    display: "inline-flex",
    padding: "5px",
    alignItems: "center"
  }
}

export default mapStateAndStyle(styles)(
  class CategoryCell extends Component<any, any> {
    render() {
      const { classes: c, name } = this.props
      const notEmptyName = name !== ""
      return notEmptyName ? <div className={c.container}>{name}</div> : <div />
    }
  }
)
