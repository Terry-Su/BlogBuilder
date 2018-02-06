import React, { Component } from 'react'
import { render } from 'react-dom'


class App extends Component {
  render() {
    return <div> App Detail </div>
  }
}

render( <App />, document.getElementById( 'app' ) )