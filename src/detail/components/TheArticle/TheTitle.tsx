import React, { Component } from "react"
import mapStateAndStyle from "../../../shared/utils/mapStateAndStyle";
import { GVData } from "../../../shared/store/global";
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#333',
  }
}

export default mapStateAndStyle( styles )(
  class TheTitle extends Component<any, any> {
    render() {
      const { classes: c } = this.props
      const { name } = GVData
      return <div className={c.container}>
          { name }
      </div>
    }
  }
)
