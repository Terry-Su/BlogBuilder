import React, { Component } from "react"
import mapStateAndStyle from "../../../shared/utils/mapStateAndStyle";
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#2166f1',
  }
}

export default mapStateAndStyle( styles )(
  class TheTitle extends Component<any, any> {
    render() {
      const { classes: c, app } = this.props
      const { name } = app
      return <div className={c.container}>
          { name }
      </div>
    }
  }
)
