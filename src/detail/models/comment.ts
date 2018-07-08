import { fetchGithubIssueComments } from "../services"
import { filterGithubIssueComments } from "../store/filter"

const commentModel = {
  namespace: "comment",
  state    : {
    comments      : [],
    doesDisqusWork: false
  },
  reducers: {
    UPDATE_COMMENTS: ( state, { comments } ) => ( { ...state, comments } ),
    DISQUS_DOES_WORK: ( state ) =>  ( { ...state, doesDisqusWork: true } ),
  },
  effects: {
    *fetchGithubIssueComments( {}, { put, call } ) {
      if ( fetchGithubIssueComments ) {
        const data = yield call( fetchGithubIssueComments )

        if ( data ) {
          const comments = filterGithubIssueComments( data )
          yield put( { type: "UPDATE_COMMENTS", comments } )
        }
      }
    }
  }
}

export default commentModel

export const isGithubCommentsEmpty = ( state: any ) => state.comments.length === 0
