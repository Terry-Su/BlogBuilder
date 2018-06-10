import { fetchTagBlogs } from "../services/index"
export default {
  namespace: "tag",
  state    : {
    shouldExpand: false
  },
  reducers: {
    TOOGLE_SHOULD_EXPAND: state => ( {
      ...state,
      shouldExpand: !state.shouldExpand
    } )
  },
  effects: {
    *fetchTagBlogs( { tagName }, { put, call } ) {
      yield put( { type: "list/RESET_BLOGS"} )

      const data = yield call( fetchTagBlogs, tagName )

      if ( data ) {
        const { blogs } = data
        yield put( { type: "list/UPDATE_BLOGS", blogs } )
      }
    }
  }
}
