import React, { Component } from "react"
import Item from "./Item"
import mapStateAndStyle from "../../../../shared/utils/mapStateAndStyle"
import ItemsContainer from "./ItemsContainer";
import category from '../../../models/category';

export default mapStateAndStyle({})(
  class TheCategorySection extends Component<any, any> {
    render() {
      const { info } = this.props.category
      return (
        <div>
          <ItemsContainer categoryInfo={ info } />
        </div>
      )
    }
  }
)
