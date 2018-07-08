import React, { Component } from 'react'
import mapStateAndStyle from '../../../../shared/utils/mapStateAndStyle';

const styles = {}

export default mapStateAndStyle(styles)(
  class TheGithubIssueComment extends Component<any> {
    componentDidMount() {
      const { dispatch } = this.props
      dispatch( { type: 'comment/fetchGithubIssueComments'} )
    }
    render() {
      const { comments } = this.props.comment
      return <div>TheGithubIssueComment</div>
    }
  }
)
