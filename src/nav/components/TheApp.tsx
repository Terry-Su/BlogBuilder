import React, { Component } from "react"
import TheHeader from "./TheHeader/TheHeader"
import TheSidebar from "./TheSidebar/TheSidebar"
import TheList from "./TheList/TheList"
import TheTest from "./TheTest/TheTest"

const testing: boolean = true

export default class App extends Component<any, any> {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch({
      type: "app/fetchConfig"
    })
    dispatch({
      type: "app/fetchNav"
    }).then(() => {
      dispatch({
        type: "category/UPDATE_STRUCTURE",
        navCategory: this.props.app.nav.category
      })
    }
      
    )
  }
  render() {
    return testing ? (
      <TheTest />
    ) : (
      <div>
        <TheHeader />
        <TheSidebar />
        <TheList />
      </div>
    )
  }
}
