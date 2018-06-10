import React, { Component } from "react"
import Item from "../Item"
import mapStateAndStyle from "../../../../shared/utils/mapStateAndStyle"
import mapStyle from "../../../../shared/utils/mapStyle"

const styles = {
  list: {
    margin: "0 0 0 5px"
  }
}

const ItemsContainer = mapStateAndStyle(styles)(
  class extends Component<any, any> {
    onItemExpandIconClick = () => {
      const { dispatch, categoryInfo: currentInfo } = this.props
      dispatch({ type: "category/TOOGLE_CATEGORY_ITEM_EXPANSION", currentInfo })
    }

    render() {
      let { categoryInfo = {}, classes: c } = this.props
      categoryInfo = categoryInfo || {}
      const { shouldExpand, categories = [], name } = categoryInfo
      const shouldShowMore = categories.length > 0
      return (
        <div>
          <div>
            <Item
              name={name}
              shouldExpand={shouldExpand}
              showIcon={shouldShowMore}
              onExpandIconClick={this.onItemExpandIconClick}
            />
          </div>
          {shouldShowMore &&
            shouldExpand && (
              <div className={c.list}>
                {categories &&
                  categories.map((categoryInfo, index: number) => (
                    <ItemsContainer key={index} categoryInfo={categoryInfo} />
                  ))}
              </div>
            )}
        </div>
      )
    }
  }
)

export default ItemsContainer
