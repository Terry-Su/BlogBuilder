import React, { Component } from "react"
import mapStateAndStyle from "../../../shared/utils/mapStateAndStyle"

const styles = {
  container: {
    height: "200px",
    display: "flex",
    justifyContent: "flex-start",

    background: "blue"
  },
  subContainer: {
    width: "300px",
    background: "orange"
  }
}

export default mapStateAndStyle(styles)(
  class TheHeader extends Component<any, any> {
    render() {
      const { classes: c, app } = this.props
      const { textLogo, slogan } = app

      return (
        <div className={c.container}>
          <div className={c.subContainer}>
            <div className={c.logo}>{textLogo}</div>
            <br /><br />
            <div className={c.slogan}>{slogan}</div>
          </div>
        </div>
      )
    }
  }
)
