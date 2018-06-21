import React, { Component } from "react"
import mapStateAndStyle from "../../../../shared/utils/mapStateAndStyle"
const styles = {
  list: {
    margin: "0 0 0 5px",
  },
  item: {
    padding: "5px 0"
  }
}
import Item from "../Item"
import { NAV } from '../../../constants/names';
import { isEqual } from 'lodash';
import { NAV_SIDE_BAR_TAG } from "../../../constants/localization";

export default mapStateAndStyle(styles)(
  class TheTagSection extends Component<any, any> {
    onTagNameClick = (tagName: string) => {}

    onExpandIconClick = () => {
      const { dispatch } = this.props
      dispatch({ type: "tag/TOOGLE_SHOULD_EXPAND" })
    }

    getSequence( tagName ) {
      return [ NAV_SIDE_BAR_TAG, tagName ]
    }

    onTagClick = ( tagName ) => {
      const { dispatch } = this.props
      const sequence = this.getSequence( tagName )
      dispatch( { type: 'app/UPDATE_ACTIVE_SEQUENCE', activeSequence: sequence } )
      dispatch( { type: 'tag/fetchTagBlogs', tagName } )
    }

    getIsTagSequenceActive( tagName ) {
      const sequence = this.getSequence( tagName )
      const { app={} } = this.props
      const { activeSequence } = app
      return isEqual( activeSequence, sequence )
    }

    render() {
      let tags = []
      const { classes: c, app, tag } = this.props
      const { [NAV]: nav } = app
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
            canNotBeActivated={true}
            clickOnlyToExpand={true}
            onExpandIconClick={this.onExpandIconClick}
          />

          {shouldExpand && (
            <div className={c.list}>
              {tags.map((tagName, index) => (
                <div className={c.item} key={index}>
                  <Item
                    name={tagName}
                    active={this.getIsTagSequenceActive( tagName )}
                    onNameClick={ () => this.onTagNameClick(tagName)}
                    onClick={ () => this.onTagClick( tagName ) }
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
