import React, { Component } from "react"
import mapStateAndStyle from "../../../shared/utils/mapStateAndStyle"

const styles = {
  container: {
    height: "200px",
    display: 'flex',
    justifyContent: 'flex-start',
    
    background: "blue"
  },
  subContainer: {
    width: '300px',
    display: 'inline-flex',    
    background: 'orange',
  }
}

export default mapStateAndStyle(styles)(
  class TheHeader extends Component<any, any> {
    render() {
      const { classes } = this.props
      const { container, subContainer, logo, slogan } = classes

      return (
        <div className={container}>
          <div className={subContainer}>
            <div className={logo}>Logo</div>
            <div className={slogan}>Slogan</div>
          </div>
        </div>
      )
    }
  }
)
