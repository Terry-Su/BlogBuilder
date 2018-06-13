import React, { Component } from "react"
import mapStateAndStyle from "../../../shared/utils/mapStateAndStyle";
const styles = {
  name: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#0071ea'
  },
  property: {
    margin: '10px 0 0 0',
    fontSize: '14px',
    // color: '#3d79f1'
  },
  introduction: {
    margin: '10px 0 0 0',
    fontSize: '16px',
    // color: '#2166f1'
  }
}

export default mapStateAndStyle( styles )(
  class TsTemplate extends Component<any, any> {

    onNameClick = () => {
      const { classes: c, blog={} } = this.props
      const { relativeClientUrl } = blog
      
      window.location.href = relativeClientUrl
    }

    render() {
      const { classes: c, blog={} } = this.props
      const { name, createTime, introduction } = blog
      return <div>
        <div className={ c.name } onClick={ this.onNameClick }>{ name }</div>
        <div className={ c.property }>PostTime: { createTime }</div>
        <div className={ c.introduction }>{ introduction }</div>
      </div>
    }
  }
)
