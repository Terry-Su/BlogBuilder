import React, { Component } from "react"
import mapStateAndStyle from "../../../shared/utils/mapStateAndStyle"

const styles = {
  container: {
    height: "200px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: 'center',
    // background: "blue"
    // border: '1px solid grey',
  },
  subContainer: {
    width: "180px",
    marginLeft: '100px',
    // background: "orange"
  },
  logo: {
    height: '50px',
    fontSize: '50px',
    color: '#0071ea',
    textAlign: 'center'
  },
  slogan: {
    height: '20px',
    margin: '20px 0 0 0',
    fontSize: '20px',
    color: '#0071ea',
    textAlign: 'center'
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
            <div className={c.slogan}>{slogan}</div>
          </div>
        </div>
      )
    }
  }
)
