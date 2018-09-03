import React, { Component } from "react"
import mapStateAndStyle from "../utils/mapStateAndStyle"
import Space from "./Space"
import { GITHUB_URL } from "../constants/urls";
const styles = {
  container: {
    fontSize: '12px',    
    color: "#979797",
    textAlign: 'center',
    lineHeight: '1.5',
  },
  link: {
    textDecoration: "underline",

    '&:hover': {
      cursor: 'pointer'
    }
  }
}

export default mapStateAndStyle(styles)(
  class TsTemplate extends Component<any, any> {
    render() {
      const { classes: c } = this.props
      return (
        <div className={c.container}>
          <span>Copyright © 2017-2018</span>
          <Space />
          <Space />
          <a className={c.link} href={ GITHUB_URL }>Terry Su</a> 
          <Space />
          <Space />
          <span>
          ALL RIGHTS RESERVED
          </span>
        </div>
      )
    }
  }
)
