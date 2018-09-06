import React, { Component } from "react"
import mapStateAndStyle from "../../shared/utils/mapStateAndStyle"
import TheArticle from "./TheArticle/TheArticle"
import TheInfo from "./TheInfo/TheInfo"
import TheTest from "./TheTest/TheTest"
import TheCopyright from "../../shared/components/TheCopyright"
import { GV } from "../../shared/constants/names"
import { GVConfigDetail, shouldShowGithubIsuueComments } from "../store/global"
import { GVData } from "../../shared/store/global"
import TheDisqus from "./Comment/TheDisqus"
import TheGithubIssueComment from "./Comment/TheGithubIssueComment/TheGithubIssueComment"
import { MAX_ARTICLE_WITH } from "../constants/styles";
import highlight from "../detailUtils/highlight";
import { initializeIframeResizing } from "../utils/dom";

highlight()

const styles = {
  container: {
    width: '100%',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "16px",
  },
  articleContainer: {
    width: '100%',
    padding: '0 10px',
    boxSizing: 'border-box', 
  },
  infoContainer: {
    width: "100%",
    maxWidth: MAX_ARTICLE_WITH,
    padding: '0 20px',
    margin: "20px 0 0 0",
    boxSizing: 'border-box', 
  },
  commentContainer: {
    width: "100%",
    maxWidth: MAX_ARTICLE_WITH,
    padding: '0 10px',
    margin: "50px 0 0 0",
    boxSizing: 'border-box',
  },
  disqusContainer: {
  },
  githubIssueCommentContainer: {
    margin: '30px 0 0 0'
  },
  copyrightContainer: {
    padding: "100px 0 15px 0",
  },
}

const testing: boolean = false
export default mapStateAndStyle(styles)(
  class ThePage extends Component<any, any> {
    componentDidMount() {
      const { markedHtml, dispatch } = this.props
      const { name, createTime, categorySequence, tags } = GVData
      dispatch({ type: "app/UPDATE_NAME", name })
      dispatch({ type: "app/UPDATE_CREATE_TIME", createTime })
      dispatch({ type: "app/UPDATE_CATEGORY_SEQUENCE", categorySequence })
      dispatch({ type: "app/UPDATE_TAGS", tags })
    }
    render() {
      const { classes: c } = this.props
      return testing ? (
        <TheTest />
      ) : (
        <div className={c.container}>
          <div className={c.articleContainer}>
            <TheArticle />
          </div>
          <div className={c.infoContainer}>
            <TheInfo />
          </div>

          <div className={c.commentContainer}>
            <div className={c.disqusContainer}>
              <TheDisqus />
            </div>
            {shouldShowGithubIsuueComments && <div className={c.githubIssueCommentContainer}>
              <TheGithubIssueComment />
            </div>}
          </div>

          <div className={c.copyrightContainer}>
            <TheCopyright />
          </div>
        </div>
      )
    }
  }
)
