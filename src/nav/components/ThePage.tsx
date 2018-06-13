import React, { Component } from "react"
import mapStateAndStyle from "../../shared/utils/mapStateAndStyle"
import TheTest from "./TheTest/TheTest"
import TheSidebar from "./TheSidebar/TheSidebar"
import TheList from "./TheList/TheList"
import TheHeader from "./TheHeader/TheHeader"
import sidebarItemList from "../mixins/sidebarItemList";
import '../../shared/assets/css/main.scss'

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
      const { config, nav } = window['GV']
      const { textLogo, slogan } = config
      const { dispatch } = this.props

      dispatch( { type: "app/UPDATE_TEXT_LOGO", textLogo } )
      dispatch( { type: "app/UPDATE_SLOGAN", slogan } )
      dispatch( { type: 'app/UPDATE_NAV', nav } )
      
      const { category, newestBlogs } = nav

      dispatch({
        type: "category/UPDATE_STRUCTURE",
        navCategory: category
      })

      dispatch({
        type: "list/UPDATE_BLOGS",
        blogs: newestBlogs
      })

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
            <div className={ c.listContainer }>
              <TheList />
            </div>
          </div>
        </div>
      )
    }
  }
)
