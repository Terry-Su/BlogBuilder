import React, { Component } from "react"
import TheCategorySection from "./TheCategorySection/TheCategorySection"
import TheTagSection from "./TheTagSection/TheTagSection"
import mapStateAndStyle from "../../../shared/utils/mapStateAndStyle";

const styles = {
  tagContainer: {
    margin: '20px 0 0 0'
  }
}

export default mapStateAndStyle(styles)(
  class TheSidebar extends Component<any, any> {
    render() {
      const { classes: c } = this.props
      return (
        <div>
          <TheCategorySection />
          <div className={ c.tagContainer } >
          <TheTagSection />
          </div>
        </div>
      )
    }
  }
)
