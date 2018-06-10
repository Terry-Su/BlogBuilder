import React, { Component } from "react"
import Item from "./Item"
import mapStateAndStyle from "../../../../shared/utils/mapStateAndStyle"
import ItemsContainer from "./ItemsContainer";
import category from '../../../models/category';

export default mapStateAndStyle({
  container: {
    cursor: "default"
  }
})(
  class TheCategorySection extends Component<any, any> {
    render() {
      const { classes: c } = this.props
      const { info } = this.props.category
      return (
        <div className={ c.container }>
          <ItemsContainer categoryInfo={ info } />
        </div>
      )
    }
  }
)
