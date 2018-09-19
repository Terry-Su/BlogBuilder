import React, { Component } from 'react'
import mapStateAndStyle from '../../../shared/utils/mapStateAndStyle';
import { SWITCH_LANG_ICON_URL, SWITCH_LANG_ICON_LINK } from '../../constants/localization';

const styles = {
  container: {
  }
}

export default mapStateAndStyle( styles ) ( class SwitchLangIcon extends Component<any, any> {
  render() {
    const { classes: c, app } = this.props
    return <a className={ c.container } href={ SWITCH_LANG_ICON_LINK }>{ SWITCH_LANG_ICON_URL }</a>
  }
} )