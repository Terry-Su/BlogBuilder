import React, { Component } from "react"
import Item from "../Item"
import mapStateAndStyle from "../../../../shared/utils/mapStateAndStyle"
import mapStyle from "../../../../shared/utils/mapStyle"
import { isEqual } from "./../../../../shared/utils/lodash";
const styles = {
  item: {
    // margin: '0 0 5px 0'
  }
}

const ItemsContainer = mapStateAndStyle(styles)(
  class extends Component<any, any> {
    onItemExpandIconClick = () => {
      const { dispatch, categoryInfo: currentInfo } = this.props
      dispatch({ type: "category/TOOGLE_CATEGORY_ITEM_EXPANSION", currentInfo })
    }

    getSequence(categoryInfo) {
      let sequence = []
      const { category } = this.props
      if (category) {
        const { info } = category
        info && recurToGetSequence(info)
      }

      return sequence

      function recurToGetSequence(info) {
        const { name, categories } = info

        if (canFindCategoryInfoUnderInfo(info)) {
          sequence.push(name)
        }

        if (info !== categoryInfo) {
          categories.map(subInfo => recurToGetSequence(subInfo))
        }
      }

      function canFindCategoryInfoUnderInfo(info) {
        let find: boolean = false

        recurToFind(info)

        return find

        function recurToFind(info) {
          if (info === categoryInfo) {
            find = true
          }
          if (info !== categoryInfo) {
            const { categories } = info
            categories.map(subInfo => recurToFind(subInfo))
          }
        }
      }
    }

    onItemNameClick = categoryInfo => {
      const { dispatch } = this.props

      const sequence = this.getSequence(categoryInfo)
      dispatch({ type: "category/UPDATE_SEQUENCE", sequence })
      dispatch({ type: "category/fetchCategoryBlogs", sequence })
      dispatch({ type: "app/UPDATE_ACTIVE_SEQUENCE", activeSequence: sequence })
    }

    getIsCategoryInfoSequenceActive( categoryInfo ) {
      const sequence = this.getSequence( categoryInfo )
      const { app={} } = this.props
      const { activeSequence } = app
      return isEqual( activeSequence, sequence )
    }

    render() {
      let { categoryInfo = {}, classes: c, interval = 0 } = this.props
      categoryInfo = categoryInfo || {}
      const { categories = [], name } = categoryInfo
      let { shouldExpand } = categoryInfo
      const shouldShowMore = categories.length > 0

      const newInterval = interval + 5

      const isLastBlogsDirectory = categories.length === 0

      return (
        <div>
          <div className={c.item}>
            <Item
              name={name}
              shouldExpand={shouldExpand}
              interval={interval}
              showIcon={shouldShowMore}
              // canNotBeActivated={!isLastBlogsDirectory}
              // clickOnlyToExpand={!isLastBlogsDirectory}
              active={ this.getIsCategoryInfoSequenceActive( categoryInfo ) }
              onExpandIconClick={this.onItemExpandIconClick}
              onNameClick={() => this.onItemNameClick(categoryInfo)}
            />
          </div>
          {
            <div
              style={{
                display: shouldExpand && shouldShowMore ? "block" : "none"
              }}
            >
              {categories &&
                categories.map((categoryInfo, index: number) => (
                  <ItemsContainer
                    categoryInfo={categoryInfo}
                    interval={newInterval}
                    key={index}
                  />
                ))}
            </div>
          }
        </div>
      )
    }
  }
)

export default ItemsContainer
