import { fetchConfig } from "../services/index"
export default {
  namespace: "app",
  state    : {
    textLogo: "Blog",
    slogan  : "Blog slogan"
  },
  reducers: {
    UPDATE_TEXT_LOGO( state, { textLogo } ) {
      return {
        ...state,
        textLogo
      }
    },
    UPDATE_SLOGAN( state, { slogan } ) {
      return {
        ...state,
        slogan
      }
    },
  },
  effects: {
    *fetchConfig( action, { put, call } ) {
      const data = yield call( fetchConfig )

      if ( data ) {
        const { textLogo, slogan } = data
        yield put( { type: "UPDATE_TEXT_LOGO", textLogo } )
        yield put( { type: "UPDATE_SLOGAN", slogan } )
      }
    }
  }
}
