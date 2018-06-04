import React, { Component } from "react"
import { render } from "react-dom"
import { hot } from 'react-hot-loader'


class App extends Component {

  render() {
    return (
      <div>
        Test123123123123123123
      </div>
    )
  }
}

const HotApp = hot( module )( App )


render(<HotApp />, document.getElementById("app"))
