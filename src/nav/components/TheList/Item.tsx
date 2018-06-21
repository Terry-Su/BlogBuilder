import React, { Component } from "react"
import mapStateAndStyle from "../../../shared/utils/mapStateAndStyle";
import { appendBackInfoToUrl, removeBackInfoFromUrl } from '../../navUtils/url';
import { POST_TIME } from '../../../shared/constants/localization';
const styles = {
  name: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#0071ea',
    textDecoration: 'none'
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
    onClick = () => {
      // appendBackInfoToUrl()
    }

    render() {
      const { classes: c, blog={} } = this.props
      const { name, createTime, introduction, relativeClientUrl } = blog
      return <div>
        <a className={ c.name } href={relativeClientUrl} onClick={ this.onClick }>{ name }</a>
        <div className={ c.property }>{ POST_TIME }: { createTime }</div>
        <div className={ c.introduction }>{ introduction }</div>
      </div>
    }
  }
)
