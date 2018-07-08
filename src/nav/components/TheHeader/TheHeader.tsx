import React, { Component } from "react"
import mapStateAndStyle from "../../../shared/utils/mapStateAndStyle"

const styles = {
  container: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "flex-start",
    fontSize: "14px"
  },
  logo: {
    fontSize: "28px",
    textAlign: "left",
    fontWeight: "bold",
    color: "#0071ea"
  },
  slogan: {
    margin: "5px 0 0 0",
    fontSize: "16px",
    color: "#0071ea",
    textAlign: "left"
  }
}

export default mapStateAndStyle(styles)(
  class TheHeader extends Component<any, any> {
    render() {
      const { classes: c, app } = this.props
      const { textLogo, slogan } = app

      return (
        <div className={c.container}>
          <div className={c.logo}>{textLogo}</div>
          <div className={c.slogan}>{slogan}</div>
        </div>
      )
    }
  }
)
