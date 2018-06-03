import React, { Component } from "react"
import { render } from "react-dom"
import { fetchNav } from './http/index';
import { hot } from 'react-hot-loader'

// import App from './App'
import Test from './Test';


class App extends Component {
  componentDidMount() {
    fetchNav().then( data => {
      console.log( data )
    } )
  }

  render() {
    return (
      <div>
        <Test />
      </div>
    )
  }
}

const HotApp = hot( module )( App )


render(<HotApp />, document.getElementById("app"))
