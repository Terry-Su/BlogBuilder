import React, { Component } from "react"
import mapStateAndStyle from "../../shared/utils/mapStateAndStyle"
import TheArticle from "./TheArticle/TheArticle"
import TheInfo from "./TheInfo/TheInfo"
import TheTest from "./TheTest/TheTest"
import TheCopyright from "../../shared/components/TheCopyright"
const styles = {
  infoContainer: {
    margin: '20px 0 0 0'
  },
  copyright: {
    margin: '50px 0 0 0'
  },
}

const testing: boolean = false

export default mapStateAndStyle(styles)(
  class ThePage extends Component<any, any> {
    componentDidMount() {
      const { markedHtml, dispatch, app } = this.props
      // const {} = window["GV"]

      dispatch({ type: "app/UPDATE_BODY", body: markedHtml })

      dispatch({ type: "app/fetchProps" })
    }
    render() {
      const { classes: c } = this.props
      return testing ? (
        <TheTest />
      ) : (
        <div>
          <div className={c.articleContainer}>
            <TheArticle />
          </div>
          <div className={c.infoContainer}>
            <TheInfo />
          </div>

          <div className={c.copyright}>
            <TheCopyright />
          </div>
        </div>
      )
    }
  }
)
