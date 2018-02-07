import React, { Component } from "react"
import { render } from "react-dom"
import axios from "axios"
import Newest from './Newest';
import Category from './Category';
import {
  fetchCategory,
  fetchTag,
  fetchCategoryChunk
} from "../shared/http/index"

class App extends Component {
  get categories(): any[] {
    return
  }
  state = {
    category: [],
    tag: []
  }
  componentDidMount() {
  }

  render() {
    const { category, tag } = this.state

    return (
      <div>
        <Newest />
        <Category />
      </div>
    )
  }
}

render(<App />, document.getElementById("app"))
