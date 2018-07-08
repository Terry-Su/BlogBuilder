import React, { Component } from "react"
import mapStateAndStyle from "../../../shared/utils/mapStateAndStyle"
import { MAIN_FILL_COLOR, SLOGAN_COLOR } from "../../../shared/constants/colors";

const styles = {
  container: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "flex-start",
    fontSize: "16px"
  },
  logo: {
    fontSize: "28px",
    textAlign: "left",
    fontWeight: "bold",
    color: MAIN_FILL_COLOR
  },
  slogan: {
    margin: "5px 0 0 0",
    color: SLOGAN_COLOR,
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
