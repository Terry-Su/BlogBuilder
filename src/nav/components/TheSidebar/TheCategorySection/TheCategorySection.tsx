import React, { Component } from "react"
import mapStateAndStyle from "../../../../shared/utils/mapStateAndStyle"
import ItemsContainer from "./ItemsContainer";

export default mapStateAndStyle({
  container: {
  }
})(
  class TheCategorySection extends Component<any, any> {
    render() {
      const { classes: c, category } = this.props
      const { info } = category
      return (
        <div className={ c.container }>
          <ItemsContainer categoryInfo={ info } />
        </div>
      )
    }
  }
)
