import React, { Component } from "react"
import mapStateAndStyle from "../../shared/utils/mapStateAndStyle"
import TheTest from "./TheTest/TheTest"
import TheSidebar from "./TheSidebar/TheSidebar"
import TheList from "./TheList/TheList"
import TheHeader from "./TheHeader/TheHeader"
import "../../shared/assets/css/main.scss"
import TheCopyright from "../../shared/components/TheCopyright"
import { shouldLocalstorageUpdate } from "../navUtils/initialize"
import localStore from "../store/localStore"
import TheNewestItem from "./TheSidebar/TheNewestItem"
import { NAV } from "../constants/names"
import { CONFIG, GV } from "../../shared/constants/names"
import { GVConfigNav, GVNav } from "../store/global"

const styles = {
  container: {},
  headerContainer: {
    padding: "30px 0 0 8%",
    boxSizing: "border-box"
  },
  mainContainer: {
    display: "flex",
    // flexWrap: "wrap",
    margin: "50px 0 0 0",
    padding: '0 8%',
    boxSizing: "border-box"
  },
  sidebarContainer: {
    minWidth: "230px",
    // boxSizing: "border-box"
    margin: "0 5% 0 0",
  },
  listContainer: {
    flex: "auto",
    // padding: "0 5%",
    // boxSizing: 'border-box',
  },
  copyrightContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "100px 0 15px 0"
  },
  "@media (max-width: 576px)": {
    headerContainer: {
      padding: "30px 0 0 50px",
      boxSizing: "border-box"
    },
    mainContainer: {
      margin: "50px 0 0 0",
      padding: '0',
      flexDirection: 'column'
    },
    sidebarContainer: {
      padding: "0 0 20px 0",
      margin: "0 10px 0 10px",
      boxSizing: "border-six",
      borderBottom: "1px solid rgba(0,0,0,0.05)"
    },
    listContainer: {
      padding: "0 20px",
      margin: "20px 0 0 0",
      boxSizing: "border-six"
    },
    copyrightContainer: {
      margin: "50px 0 10px 0"
    }
  }
}

const testing: boolean = false

export default mapStateAndStyle(styles)(
  class ThePage extends Component<any, any> {
    componentDidMount() {
      const { symbolUpdatingLocalstorage } = GVConfigNav

      const theShouldLocalstorageUpdate = shouldLocalstorageUpdate()

      if (theShouldLocalstorageUpdate) {
        const { dispatch } = this.props

        const { textLogo, slogan } = GVConfigNav
        const { category, newestBlogs } = GVNav

        dispatch({
          type: "category/UPDATE_STRUCTURE",
          navCategory: category
        })

        dispatch({
          type: "list/UPDATE_BLOGS",
          blogs: newestBlogs
        })

        dispatch({ type: "app/UPDATE_TEXT_LOGO", textLogo })
        dispatch({ type: "app/UPDATE_SLOGAN", slogan })
        dispatch({ type: "app/UPDATE_NAV", [NAV]: GVNav })

        dispatch({
          type: "app/UPDATE_ACTIVE_SEQUENCE",
          activeSequence: TheNewestItem.sequence
        })
      }

      localStore.setUpdateSymbol(symbolUpdatingLocalstorage)
    }
    render() {
      const { classes: c } = this.props
      return testing ? (
        <TheTest />
      ) : (
        <div className={c.container}>
          <div className={c.headerContainer}>
            <TheHeader />
          </div>
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
