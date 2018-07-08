import React, { Component } from "react"
import mapStateAndStyle from "../../../../shared/utils/mapStateAndStyle"
import CommentBox from "./CommentBox"
import { githubIssueCommentsUrl } from "../../../store/global"
import { isGithubCommentsEmpty } from "../../../models/comment"

const styles = {
  container: {
    width: "100%",
    height: "100%"
  },
  linkContainer: {
    margin: "10px 0 20px 0",
    textAlign: "center"
  },
  link: {
    color: "blue"
  },
  commentBoxContainer: {
    margin: "0 0 20px 0"
  }
}

export default mapStateAndStyle(styles)(
  class TheGithubIssueComment extends Component<any> {
    componentDidMount() {
      const { dispatch } = this.props
      dispatch({ type: "comment/fetchGithubIssueComments" })
    }
    render() {
      const { classes: c, comment } = this.props
      const { comments, doesDisqusWork } = comment
      return (
        <div className={c.container}>
          <div className={c.linkContainer}>
            {isGithubCommentsEmpty( comment ) ? (
              <a
                className={c.link}
                href={githubIssueCommentsUrl}
                target="blank"
              >
                Be the first to comment
              </a>
            ) : (
              <a
                className={c.link}
                href={githubIssueCommentsUrl}
                target="blank"
              >
                {
                  doesDisqusWork ? 'You can also comment on github': 'Write comment'
                }
              </a>
            )}
          </div>
          {comments.map((comment, index) => (
            <div className={c.commentBoxContainer} key={index}>
              <CommentBox data={comment} />
            </div>
          ))}
        </div>
      )
    }
  }
)
