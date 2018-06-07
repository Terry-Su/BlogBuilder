import React, { Component } from "react"
import { hot } from "react-hot-loader"
import TheHeader from "./TheHeader/TheHeader"
import TheSidebar from "./TheSidebar/TheSidebar"
import TheList from "./TheList/TheList"

class App extends Component<any, any> {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch({
      type: "app/fetchConfig"
    })
  }
  render() {
    return (
      <div>
        <TheHeader />
        <TheSidebar />
        <TheList />
      </div>
    )
  }
}

export default App
