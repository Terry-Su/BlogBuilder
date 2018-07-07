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
import TheNewestItem from "./TheSidebar/TheNewestItem";
import {  NAV } from '../constants/names';
import { CONFIG, GV } from '../../shared/constants/names';
import {  GVConfigNav, GVNav } from "../store/global";

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


        dispatch( { type: 'app/UPDATE_ACTIVE_SEQUENCE', activeSequence: TheNewestItem.sequence } )
      }

      localStore.setUpdateSymbol(symbolUpdatingLocalstorage)
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
