import React, { Component } from "react"
import mapStateAndStyle from "../../../shared/utils/mapStateAndStyle"
import TheTitle from "./TheTitle"
import TheBody from "./TheBody"
const styles = {
  container: {
    fontSize: '16px',   
  },
  titleContainer: {
    margin: "50px 0 0 0"
  },
  bodyContainer: {
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
