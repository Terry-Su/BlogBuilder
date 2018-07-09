import React, { Component } from "react"
import mapStateAndStyle from "../../../../shared/utils/mapStateAndStyle"
import CommentBox from "./CommentBox"
import { githubIssueCommentsUrl } from "../../../store/global"
import { isGithubCommentsEmpty } from "../../../models/comment"
import { BE_THE_FIRST_TO_COMMENT, BE_THE_FIRST_TO_COMMENT_ON_GITHUB, YOU_CAN_ALSO_COMMENT_ON_GITHUB, WRITE_A_COMMENT } from "../../../constants/localization";

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
              >
                { doesDisqusWork ? BE_THE_FIRST_TO_COMMENT_ON_GITHUB: BE_THE_FIRST_TO_COMMENT }
              </a>
            ) : (
              <a
                className={c.link}
                href={githubIssueCommentsUrl}
              >
                {
                  doesDisqusWork ? YOU_CAN_ALSO_COMMENT_ON_GITHUB: WRITE_A_COMMENT
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
