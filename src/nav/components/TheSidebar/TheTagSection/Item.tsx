import React, { Component } from 'react'
import mapStateAndStyle from '../../../../shared/utils/mapStateAndStyle';

const styles = {

}

interface Props {
  name: string,
  onClick: Function
}

export default mapStateAndStyle( styles ) ( class Item extends Component<Props, any> {
  onClick = () => {
    const { onClick } = this.props
    onClick && onClick()
  }
  render() {
    const { name } = this.props
    return <div onClick={ this.onClick }>{ name }</div>
  }
} )