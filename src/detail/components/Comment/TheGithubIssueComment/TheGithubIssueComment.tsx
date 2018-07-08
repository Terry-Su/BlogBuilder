import React, { Component } from "react"
import mapStateAndStyle from "../../../../shared/utils/mapStateAndStyle"
import CommentBox from "./CommentBox"

const styles = {
  container: {
    width: "100%",
    height: "100%"
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
      const { classes: c } = this.props
      const { comments } = this.props.comment
      return (
        <div className={c.container}>
          {comments.map(comment => (
            <div className={c.commentBoxContainer}>
              <CommentBox data={comment} />
            </div>
          ))}
        </div>
      )
    }
  }
)
