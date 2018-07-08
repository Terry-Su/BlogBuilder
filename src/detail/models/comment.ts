import { fetchGithubIssueComments } from "../services"
import { filterGithubIssueComments } from "../store/filter";

export default {
  namespace: "comment",
  state    : {
    comments: []
  },
  reducers: {
    UPDATE_COMMENTS: ( state, { comments } ) => ( { ...state, comments } )
  },
  effects: {
    *fetchGithubIssueComments( {}, { put, call } ) {
      if ( fetchGithubIssueComments ) {
        const data = yield call( fetchGithubIssueComments )

        if ( data ) {
          const comments = filterGithubIssueComments( data )
          yield put( { type: 'UPDATE_COMMENTS', comments } )
        }
      }
    }
  }
}
