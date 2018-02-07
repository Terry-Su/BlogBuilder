import React, { Component } from "react"
import { asyncGetNewest, getUrlByRelativeUrl } from "../shared/store/index"

type State = {
  urls: string[]
}

export default class Category extends Component {
  state: State = {
    urls: []
  }

  componentDidMount() {
    const self = this

    asyncGetNewest().then(setData)

    function setData(data) {
      self.setState({
        urls: data
      })
    }
  }

  handleUrlClick = url => () => {
    const urlToJump: string = getUrlByRelativeUrl(url)
    window.location.href = urlToJump
  }

  render() {
    const self = this
    const { urls } = this.state

    return (
      <div>
        <h2>The Newest</h2>
        {getUrlsComponents(urls)}
      </div>
    )

    function getUrlsComponents(urls) {
      return urls.map(resolve)

      function resolve(url: string, index: number) {
        return (
          <h6 key={index} onClick={self.handleUrlClick(url)}>
            {url}
          </h6>
        )
      }
    }
  }
}
