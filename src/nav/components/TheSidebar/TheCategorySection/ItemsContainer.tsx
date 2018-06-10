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

    render() {
      let { categoryInfo = {}, classes: c, interval = 0 } = this.props
      categoryInfo = categoryInfo || {}
      const { shouldExpand, categories = [], name } = categoryInfo
      const shouldShowMore =  categories.length > 0

      const newInterval = interval + 5
      return (
        <div>
          <div className={c.item}>
            <Item
              name={name}
              shouldExpand={shouldExpand}
              interval={interval}
              showIcon={shouldShowMore}
              onExpandIconClick={this.onItemExpandIconClick}
            />
          </div>
          {
            <div
              style={{
                display: ( shouldExpand && shouldShowMore ) ? "block": "none"
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
