import React, { Component } from "react"
import mapStateAndStyle from "../../../../shared/utils/mapStateAndStyle"
const styles = {
  container: {
    cursor: "default"
  },
  list: {
    margin: "0 0 0 5px",
  },
  item: {
    padding: "5px 0"
  }
}
import Item from "../Item"
import { NAV_SIDE_BAR_TAG } from '../../../constants/names';

export default mapStateAndStyle(styles)(
  class TheTagSection extends Component<any, any> {
    onTagNameClick = (tagName: string) => {}

    onExpandIconClick = () => {
      const { dispatch } = this.props
      dispatch({ type: "tag/TOOGLE_SHOULD_EXPAND" })
    }

    render() {
      let tags = []
      const { classes: c, app, tag } = this.props
      const { nav } = app
      const { shouldExpand } = tag
      if (nav) {
        tags = nav.tags
      }
      return (
        <div className={c.container}>
          <Item
            showIcon={true}
            name={ NAV_SIDE_BAR_TAG }
            shouldExpand={shouldExpand}
            onExpandIconClick={this.onExpandIconClick}
          />

          {shouldExpand && (
            <div className={c.list}>
              {tags.map((tagName, index) => (
                <div className={c.item} key={index}>
                  <Item
                    name={tagName}
                    onNameClick={this.onTagNameClick(tagName)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )
    }
  }
)
