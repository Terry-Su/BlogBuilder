import React, { Component } from "react"
import mapStateAndStyle from "../../../shared/utils/mapStateAndStyle"

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  subContainer: {
    width: "700px",
    fontSize: "16px",
    // color: "#2166f1"
  }
}

export default mapStateAndStyle(styles)(
  class TheBody extends Component<any, any> {
    render() {
      const { classes: c, app } = this.props
      const { body } = app
      return (
        <div className={c.container}>
          <div
            className={`${c.subContainer} highlight`}
            dangerouslySetInnerHTML={{ __html: body }}
          >
          </div>
        </div>
      )
    }
  }
)
