import React, { Component } from "react"
import mapStateAndStyle from "../../shared/utils/mapStateAndStyle"
import TheTest from "./TheTest/TheTest"
import TheSidebar from "./TheSidebar/TheSidebar"
import TheList from "./TheList/TheList"
import TheHeader from "./TheHeader/TheHeader"
import sidebarItemList from "../mixins/sidebarItemList"
import "../../shared/assets/css/main.scss"
import TheCopyright from "../../shared/components/TheCopyright"
import localStore from "../store/localStore"
import { combineLocalCategoryAndIncomingCategory } from "../navUtils/category"
import { isNil } from "lodash"
import { notNil } from "../../shared/utils/lodash"

const styles = {
  container: {},
  mainContainer: {
    display: "flex",
    margin: "50px 0 0 0"
  },
  sidebarContainer: {
    margin: "0 0 0 100px"
  },
  listContainer: {
    margin: "0 0 0 50px"
  },
  copyrightContainer: {
    margin: "100px 0 15px 0"
  }
}

const testing: boolean = false

export default mapStateAndStyle(styles)(
  class ThePage extends Component<any, any> {
    componentDidMount() {
      const { config, nav } = window["GV"]
      const { textLogo, slogan } = config
      const { dispatch } = this.props

      const { category, newestBlogs } = nav

      const localCategory = localStore.getCategory()
      const localCategorySequence = localStore.getCategorySequence()

      if (isNil(localCategory)) {
        dispatch({
          type: "category/UPDATE_STRUCTURE",
          navCategory: category
        })
      }
      if (notNil(localCategory)) {
        const combinedCategory = combineLocalCategoryAndIncomingCategory(
          localCategory,
          category
        )
        console.log("combinedCategory", combinedCategory)
        dispatch({
          type: "category/UPDATE_STRUCTURE",
          navCategory: combinedCategory
        })
      }

      dispatch({ type: "app/UPDATE_TEXT_LOGO", textLogo })
      dispatch({ type: "app/UPDATE_SLOGAN", slogan })
      dispatch({ type: "app/UPDATE_NAV", nav })

      if (isNil(localCategorySequence)) {
        dispatch({
          type: "list/UPDATE_BLOGS",
          blogs: newestBlogs
        })
      }
      if (notNil(localCategorySequence)) {
        dispatch({ type: "category/UPDATE_SEQUENCE", sequence: localCategorySequence })
        dispatch({ type: "category/fetchCategoryBlogs", sequence: localCategorySequence })
      }

      sidebarItemList.activateOnlyDefaultItem()
    }
    render() {
      const { classes: c } = this.props
      return testing ? (
        <TheTest />
      ) : (
        <div className={c.container}>
          <TheHeader />
          <div className={c.mainContainer}>
            <div className={c.sidebarContainer}>
              <TheSidebar />
            </div>
            <div className={c.listContainer}>
              <TheList />
            </div>
          </div>
          <div className={c.copyrightContainer}>
            <TheCopyright />
          </div>
        </div>
      )
    }
  }
)
