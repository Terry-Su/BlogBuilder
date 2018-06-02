import React, { Component } from "react"
import { render } from "react-dom"
import axios from "axios"
import { fetchNav } from './http/index';

class App extends Component {
  componentDidMount() {
    fetchNav().then( data => {
      console.log( data )
    } )
  }

  render() {
    return (
      <div>
        123
      </div>
    )
  }
}

render(<App />, document.getElementById("app"))
