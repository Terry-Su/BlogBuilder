import React, { Component } from 'react'
import mapStateAndStyle from '../../../shared/utils/mapStateAndStyle';
import { GITHUB_URL } from '../../../shared/constants/urls';

const styles = {
  container: {
    display: 'inline-flex',
    alignItems: 'center',
    marginLeft: '20px',
    cursor: 'pointer'
  },
  img: {
    width: '25px',
    height: '25px',
  },
  "@media (max-width: 576px)": {
    container: {
      marginLeft: '15px',
    } 
  }
}

export default mapStateAndStyle( styles ) ( class SwitchLangIcon extends Component<any, any> {
  render() {
    const { classes: c, app } = this.props
    return <a className={ c.container } href={ GITHUB_URL }>
      <img className={ c.img } src="https://terry-su.github.io/CDN/images/github-icon.png" title="Github"/>
    </a>
  }
} )