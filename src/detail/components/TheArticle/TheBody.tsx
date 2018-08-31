import React, { Component } from "react"
import mapStateAndStyle from "../../../shared/utils/mapStateAndStyle"
import { MAX_ARTICLE_WITH } from "../../constants/styles"
import { markedHtml } from "../../store/global"

const styles = {
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "center"
  },
  contentContainer: {
    width: "100%",
    maxWidth: MAX_ARTICLE_WITH
  }
}

export default mapStateAndStyle(styles)(
  class TheBody extends Component<any, any> {
    constructor(props) {
      super(props)
    }
    componentDidMount() {
     
    }
    render() {
      const { classes: c } = this.props
      return (
        <div className={`${c.container}`}>
          <div
            className={`${c.contentContainer}`}
            dangerouslySetInnerHTML={{ __html: markedHtml }}
          />
        </div>
      )
    }
  }
)
