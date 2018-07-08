import React, { Component } from "react"
import mapStateAndStyle from "../../../shared/utils/mapStateAndStyle"
import { MAX_ARTICLE_WITH } from "../../constants/styles"

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center'

  },
  contentContainer: {
    width: '100%',
    maxWidth: MAX_ARTICLE_WITH,
    padding: "0 20px",
    boxSizing: "border-box",
  },
}

export default mapStateAndStyle(styles)(
  class TheBody extends Component<any, any> {
    render() {
      const { classes: c, app } = this.props
      const { body } = app
      return (
        <div className={`${c.container}`}>
          <div
            className={`${c.contentContainer} highlight`}
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </div>
      )
    }
  }
)
