import React, { Component } from "react"
import mapStateAndStyle from "../../../shared/utils/mapStateAndStyle"
import TheTitle from "./TheTitle"
import TheBody from "./TheBody"
const styles = {
  container: {
    width: '100%',
    boxSizing: "border-box",
    padding: "0 20px",
  },
  titleContainer: {
    margin: "50px 0 0 0"
  },
  bodyContainer: {
    width: '100%',
    margin: "30px 0 0 0"
  }
}

export default mapStateAndStyle(styles)(
  class TheArticle extends Component<any, any> {
    render() {
      const { classes: c } = this.props
      return (
        <div className={c.container}>
          <div className={c.titleContainer}>
          <TheTitle />
          </div>

          <div className={c.bodyContainer}>
            <TheBody />
          </div>
        </div>
      )
    }
  }
)
