import React, { Component } from "react"
import mapStateAndStyle from "../../shared/utils/mapStateAndStyle"
import TheArticle from "./TheArticle/TheArticle"
import TheInfo from "./TheInfo/TheInfo"
import TheTest from "./TheTest/TheTest"
import TheCopyright from "../../shared/components/TheCopyright"
import "../../shared/assets/css/main.scss"
import "../assets/css/highlight.scss"
import { GV } from "../../shared/constants/names"
import { GVConfigDetail } from "../store/global"
import { GVData } from "../../shared/store/global"
import TheDisqus from "./Comment/TheDisqus"
import TheGithubIssueComment from "./Comment/TheGithubIssueComment/TheGithubIssueComment";

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  infoContainer: {
    margin: "20px 0 0 0"
  },
  copyrightContainer: {
    padding: "100px 0 15px 0"
  },
  disqusContainer: {
    width: "700px",
    margin: "50px 0 0 0"
  }
}

const testing: boolean = true

export default mapStateAndStyle(styles)(
  class ThePage extends Component<any, any> {
    componentDidMount() {
      const { markedHtml, dispatch } = this.props
      const { name, createTime, categorySequence, tags } = GVData
      dispatch({ type: "app/UPDATE_NAME", name })
      dispatch({ type: "app/UPDATE_CREATE_TIME", createTime })
      dispatch({ type: "app/UPDATE_CATEGORY_SEQUENCE", categorySequence })
      dispatch({ type: "app/UPDATE_TAGS", tags })
      dispatch({ type: "app/UPDATE_BODY", body: markedHtml })
    }
    render() {
      const { classes: c } = this.props
      return testing ? (
        <TheTest />
      ) : (
        <div className={c.container}>
          <TheGithubIssueComment />
          <div className={c.articleContainer}>
            <TheArticle />
          </div>
          <div className={c.infoContainer}>
            <TheInfo />
          </div>

          <div className={c.disqusContainer}>
            <TheDisqus />
          </div>

          <div className={c.copyrightContainer}>
            <TheCopyright />
          </div>
        </div>
      )
    }
  }
)
