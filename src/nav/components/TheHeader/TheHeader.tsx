import React, { Component } from "react"
import mapStateAndStyle from "../../../shared/utils/mapStateAndStyle"
import { MAIN_FILL_COLOR, SLOGAN_COLOR } from "../../../shared/constants/colors";
import SwitchLangIcon from "./SwitchLangIcon";
import GithubIcon from "./GithubIcon";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    // alignItems: "flex-start",
    fontSize: "16px"
  },
  leftContainer: {
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "flex-start",
  },
  logo: {
    fontSize: "36px",
    textAlign: "left",
    fontWeight: "bold",
    color: MAIN_FILL_COLOR
  },
  slogan: {
    margin: "5px 0 0 0",
    color: SLOGAN_COLOR,
    textAlign: "left"
  },

  rightContainer: {
    boxSizing: 'border-box',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: '0 20px 0 0',
  },
  "@media (max-width: 576px)": {
    rightContainer: {
      padding: '0 30px 0 0',
    } 
  }
}

export default mapStateAndStyle(styles)(
  class TheHeader extends Component<any, any> {
    render() {
      const { classes: c, app } = this.props
      const { textLogo, slogan } = app

      return (
        <div className={c.container}>
          <div className={ c.leftContainer }>
            <div className={c.logo}>{textLogo}</div>
            <div className={c.slogan}>{slogan}</div>
          </div>

          <div className={c.rightContainer}>
            <SwitchLangIcon/>
            <GithubIcon className={ c.githubIcon }/>
          </div>


          
        </div>
      )
    }
  }
)
