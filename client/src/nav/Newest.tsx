import React, { Component } from "react"
import { asyncGetNewest, getUrlByRelativeUrl } from "../shared/store/index"

type State = {
  blogsInfo: string[]
}

export default class Category extends Component {
  state: State = {
    blogsInfo: []
  }

  componentDidMount() {
    const self = this

    asyncGetNewest().then(setData)

    function setData(data) {
      self.setState({
        blogsInfo: data
      })
    }
  }

  handleTitleClick = url => () => {
    const jumpingUrl: string = getUrlByRelativeUrl(url)

    console.log( url )

    window.location.href = jumpingUrl
  }

  render() {
    const self = this
    const { blogsInfo } = this.state

    return (
      <div>
        <h2>The Newest</h2>
        {getComponents(blogsInfo)}
      </div>
    )

    function getComponents(blogsInfo) {
      return blogsInfo.map(resolve)

      function resolve(blogInfo: any, index: number) {
        const { name, relativeUrl } = blogInfo        
        return (
          <h6 key={index} onClick={self.handleTitleClick( relativeUrl )}>
            {name}
          </h6>
        )
      }
    }
  }
}
