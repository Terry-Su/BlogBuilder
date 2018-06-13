import React, { Component } from "react"
import TheCategorySection from "./TheCategorySection/TheCategorySection"
import TheTagSection from "./TheTagSection/TheTagSection"
import mapStateAndStyle from "../../../shared/utils/mapStateAndStyle";
import TheNewestItem from "./TheNewestItem";

const styles = {
  container: {
    minWidth: '200px',
    // color: '#0071ea',
    fontSize: '16px',
    cursor: "default"
  },
  categoryContainer: {
    // margin: '20px 0 0 0'
  },
  tagContainer: {
    // margin: '20px 0 0 0'
  }
}

export default mapStateAndStyle(styles)(
  class TheSidebar extends Component<any, any> {
    render() {
      const { classes: c } = this.props
      return (
        <div className={c.container}>
          <div className={c.newestContainer}>
            <TheNewestItem />
          </div>
          <div className={ c.categoryContainer }>
          <TheCategorySection />
          </div>
          <div className={ c.tagContainer } >
          <TheTagSection />
          </div>
        </div>
      )
    }
  }
)
