import { fetchConfig, fetchNav } from '../services/index';
export default {
  namespace: "app",
  state    : {
    textLogo: "Blog",
    slogan  : "Blog slogan",
    nav     : null
  },
  reducers: {
    UPDATE_TEXT_LOGO: ( state, { textLogo } ) => ( { ...state, textLogo } ),
    UPDATE_SLOGAN   : ( state, { slogan } ) => ( { ...state, slogan } ),
    UPDATE_NAV      : ( state, { nav } ) => ( { ...state, nav } ),
  },
  effects: {
    *fetchConfig( action, { put, call } ) {
      const data = yield call( fetchConfig )

      if ( data ) {
        const { textLogo, slogan } = data
        yield put( { type: "UPDATE_TEXT_LOGO", textLogo } )
        yield put( { type: "UPDATE_SLOGAN", slogan } )
      }
    },
    *fetchNav( action, { put, call } ) {
      const data = yield call( fetchNav )

      if ( data ) {
        yield put( { type: 'UPDATE_NAV', nav: data } )
      }
    }
  }
}
