import { cloneDeep } from "lodash"
import SidebarItemProps from "../typings/SidebarItemProps"

const defaultInfo: SidebarItemProps = null

export default {
  namespace: "category",
  state    : {
    info: defaultInfo
  },
  reducers: {
    UPDATE_STRUCTURE: ( state, { navCategory } ) => {
      const info = cloneDeep( navCategory )

      setShouldExpand( info )

      return { ...state, info }

      function setShouldExpand( info ) {
        if ( info ) {
          info.shouldExpand = false
          info.categories && info.categories.map( setShouldExpand )
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
    }
  },
  effects: {}
}

