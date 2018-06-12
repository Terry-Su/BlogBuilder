import React, { Component } from "react"
import Item from "../Item"
import mapStateAndStyle from "../../../../shared/utils/mapStateAndStyle"
import mapStyle from "../../../../shared/utils/mapStyle"

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

    onItemNameClick = categoryInfo => {
      let sequence = []
      const { category, dispatch } = this.props
      if (category) {
        const { info } = category

        recurToGetSequence(info)

        dispatch({ type: "category/fetchCategoryBlogs", sequence })
      }

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

    render() {
      let {
        categoryInfo = {},
        classes: c,
        interval = 0,
        isRootCategory = true
      } = this.props
      categoryInfo = categoryInfo || {}
      const { shouldExpand, categories = [], name } = categoryInfo
      const shouldShowMore = categories.length > 0

      const newInterval = interval + 5
      return (
        <div>
          <div className={c.item}>
            <Item
              name={name}
              shouldExpand={shouldExpand}
              interval={interval}
              showIcon={shouldShowMore}
              canNotBeActivated={isRootCategory}
              clickOnlyToExpand={isRootCategory}
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
                    isRootCategory={false}
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
