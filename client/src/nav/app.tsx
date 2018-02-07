import React, { Component } from "react"
import { render } from "react-dom"
import axios from "axios"
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
        <div>
          {` Category: `}
          {category.map((item, index) => (
            <div key={index}>
              <h5>{ item }</h5>

            </div>
          ))}
        </div>

        {/* <div>
          {` Tag: `}
          {this.state.tag.map((item, index) => (
            <span key={index}>{`${item} `}</span>
          ))}
        </div> */}
      </div>
    )
  }
}

render(<App />, document.getElementById("app"))
