import React, { Component } from 'react'
import mapStateAndStyle from '../../../shared/utils/mapStateAndStyle';

const styles = {

}

export default mapStateAndStyle( styles ) ( class TheHeader extends Component {
  render() {
    console.log( 12, this.props )
    return <div>TheHeader</div>
  }
} )