import React, { Component } from "react"
import { asyncGetCategories, asyncGetCategoryChunk } from '../shared/store/index';

type State = {
  categories: string[]
}

export default class Category extends Component {
  state: State = {
    categories: []
  }

  componentDidMount() {
    const self = this

    asyncGetCategories().then(setData)

    function setData(data) {
      self.setState({
        categories: data
      })
    }
  }

  handleCategoryClick = category => () => {
    asyncGetCategoryChunk( category ).then( resolve )

    function resolve( url: string ) {
      console.log( url )
    }
  }

  render() {
    const self = this
    const { categories } = this.state

    return (
      <div>
        <h2>Category</h2>
        {getCategories(categories)}
      </div>
    )

    function getCategories(categories) {
      return categories.map(resolve)

      function resolve(category: string, index: number) {
        return (
          <h6 key={index} onClick={self.handleCategoryClick(category)}>
            {category}
          </h6>
        )
      }
    }
  }
}
