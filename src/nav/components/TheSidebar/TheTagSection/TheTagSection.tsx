import React, { Component } from "react"
import mapStateAndStyle from "../../../../shared/utils/mapStateAndStyle"
const styles = {
  container: {
    cursor: 'default'
  },
  item: {
    padding: '5px 0'
  }
}
import Item from "./Item"

export default mapStateAndStyle(styles)(
  class TheTagSection extends Component<any, any> {
    onTagClick = (tagName: string) => {}

    render() {
      let tags = []
      const { classes: c } = this.props
      const { nav } = this.props.app
      if (nav) {
        tags = nav.tags
      }
      return (
        <div className={ c.container }>
          {tags.map((tagName, index) => (
            <div className={c.item} key={index}>
              <Item name={tagName} onClick={this.onTagClick(tagName)} />
            </div>
          ))}
        </div>
      )
    }
  }
)
