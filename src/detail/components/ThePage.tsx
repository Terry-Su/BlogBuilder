import React, { Component } from "react"
import mapStateAndStyle from "../../shared/utils/mapStateAndStyle"
const styles = {}

export default mapStateAndStyle(styles)(
  class ThePage extends Component<any, any> {
    componentDidMount() {
      const { markedHtml, dispatch } = this.props

      dispatch({ type: "app/UPDATE_MARKED_HTML", markedHtml })
    }
    render() {
      const { classes: c } = this.props
      return <div>ThePage</div>
    }
  }
)
