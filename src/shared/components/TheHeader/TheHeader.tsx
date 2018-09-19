import React, { Component } from "react"
import mapStateAndStyle from "../../../shared/utils/mapStateAndStyle"
import { MAIN_FILL_COLOR, SLOGAN_COLOR } from "../../../shared/constants/colors";
import SwitchLangIcon from "./SwitchLangIcon";
import GithubIcon from "./GithubIcon";
import { HOME_PAGE_URL } from "../../constants/localization";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    // alignItems: "flex-start",
    fontSize: "16px",

    padding: "30px 8% 0 8%",
    boxSizing: "border-box",

    width: '100%',
  },
  leftContainer: {
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "flex-start",
    textDecoration: "none!important"
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
    container: {
      padding: "30px 0 0 30px",
      boxSizing: "border-box"
    },
    rightContainer: {
      padding: '0 30px 0 0',
    } 
  }
}

export default mapStateAndStyle(styles)(
  class TheHeader extends Component<any, any> {
    render() {
      const { classes: c, app, showSwitchLangIcon = true } = this.props
      const { textLogo, slogan } = app

      return (
        <div className={c.container}>
          <a className={ c.leftContainer } href={ HOME_PAGE_URL }>
            <div className={c.logo}>{textLogo}</div>
            <div className={c.slogan}>{slogan}</div>
          </a>

          <div className={c.rightContainer}>
            {
              showSwitchLangIcon && <SwitchLangIcon/>
            }
            <GithubIcon className={ c.githubIcon }/>
          </div>
        </div>
      )
    }
  }
)
