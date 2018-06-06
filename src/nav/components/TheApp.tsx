import React, { Component } from "react"
import { hot } from "react-hot-loader"
import { fetchNav } from "../http/index"
import TheHeader from './TheHeader/TheHeader';
import TheSidebar from './TheSidebar/TheSidebar';
import TheList from './TheList/TheList';

class App extends Component<any, any> {
  componentDidMount() {
    fetchNav().then(data => {
      // console.log(data)
    })
  }
  render() {
    return <div>
      <TheHeader />
      <TheSidebar/>
      <TheList />
    </div>
  }
}

export default App
