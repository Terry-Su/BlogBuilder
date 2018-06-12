import React, { Component } from "react"
import mapStateAndStyle from "../../../shared/utils/mapStateAndStyle"
const styles = {
  container: {
    display: "inline-flex",
    padding: "5px"
  }
}

export default mapStateAndStyle(styles)(
  class Tag extends Component<any, any> {
    render() {
      const { classes: c, name } = this.props
      const notEmptyName = name !== ""
      return notEmptyName ? <div className={c.container}>{name}</div> : <div />
    }
  }
)
