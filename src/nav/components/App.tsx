import React, { Component } from "react"
import { hot } from 'react-hot-loader'
import { fetchNav } from '../http/index';

class App extends Component<any, any> {

  componentDidMount() {
    fetchNav().then( data => {
      // console.log( data )
    } )
  }
  render() {
    console.log( this.props.count )
    return (
      <div>
        Test { this.props.count }
      </div>
    )
  }
}

export default App

