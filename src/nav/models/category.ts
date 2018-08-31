import SidebarItemProps from "../typings/SidebarItemProps"
import { fetchCategoryBlogs } from "../services/index"
import { cloneDeep, isNil } from "../../shared/utils/lodash";

const defaultInfo: SidebarItemProps = null

export default {
  namespace: "category",
  state    : {
    info    : defaultInfo,
    sequence: null
  },
  reducers: {
    UPDATE_STRUCTURE: ( state, { navCategory } ) => {
      const info = cloneDeep( navCategory )

      setShouldExpand( info, true )

      return { ...state, info }

      function setShouldExpand( info, isFirst: boolean = false ) {
        if ( info && isNil( info.shouldExpand ) ) {
          info.shouldExpand = isFirst ? true : false
          info.categories && info.categories.map( info => setShouldExpand( info ) )
        }
      }
    },
    TOOGLE_CATEGORY_ITEM_EXPANSION: ( state, { currentInfo } ) => {
      const { info } = state
      if ( info ) {
        recurToUpdateInfo( info )
      }

      return { ...state, info }

      function recurToUpdateInfo( info ) {
        if ( info === currentInfo ) {
          const { shouldExpand } = info
          info.shouldExpand = !shouldExpand
        }
        if ( info !== currentInfo ) {
          info.categories &&
            info.categories.map( category => recurToUpdateInfo( category ) )
        }
      }
    },
    UPDATE_SEQUENCE: ( state, { sequence } ) => ({...state, sequence})
  },
  effects: {
    *fetchCategoryBlogs( { sequence }, { put, call } ) {
      yield put( { type: "list/RESET_BLOGS" } )

      const data = yield call( fetchCategoryBlogs, sequence )

      if ( data ) {
        const { blogs } = data
        yield put( { type: "list/UPDATE_BLOGS", blogs } )
      }
    }
  }
}
