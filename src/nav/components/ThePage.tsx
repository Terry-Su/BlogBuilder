import React, { Component } from "react"
import mapStateAndStyle from "../../shared/utils/mapStateAndStyle"
import TheTest from "./TheTest/TheTest"
import TheSidebar from "./TheSidebar/TheSidebar"
import TheList from "./TheList/TheList"
import TheHeader from "./TheHeader/TheHeader"
import sidebarItemList from "../mixin/sidebarItemList";
const styles = {
  container: {},
  mainContainer: {
    display: "flex"
  },
  sidebarContainer: {
    margin: "0 0 0 100px"
  },
  listContainer: {
    margin: "0 0 0 20px"
  }
}

const testing: boolean = false

export default mapStateAndStyle(styles)(
  class ThePage extends Component<any, any> {
    componentDidMount() {
      const { dispatch } = this.props
      dispatch({
        type: "app/fetchConfig"
      })
      dispatch({
        type: "app/fetchNav"
      }).then(() => {
        const { category, newestBlogs } = this.props.app.nav

        dispatch({
          type: "category/UPDATE_STRUCTURE",
          navCategory: category
        })

        dispatch({
          type: "list/UPDATE_BLOGS",
          blogs: newestBlogs
        })

        sidebarItemList.activateOnlyDefaultItem()
      })
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
            <div className={ c.listContainer }>
              <TheList />
            </div>
          </div>
        </div>
      )
    }
  }
)
