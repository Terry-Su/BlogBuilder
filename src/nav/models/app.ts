import { NAV } from "./../constants/names"
export default {
  namespace: "app",
  state    : {
    textLogo      : "Blog",
    slogan        : "Blog slogan",
    [ NAV ]       : null,
    activeSequence: null
  },
  reducers: {
    UPDATE_TEXT_LOGO      : ( state, { textLogo } ) => ( { ...state, textLogo } ),
    UPDATE_SLOGAN         : ( state, { slogan } ) => ( { ...state, slogan } ),
    UPDATE_NAV            : ( state, { [ NAV ]: nav }: any ) => ( { ...state, [ NAV ]: nav } ),
    UPDATE_ACTIVE_SEQUENCE: ( state, { activeSequence } ) => ( {
      ...state,
      activeSequence
    } )
  },
  effects: {}
}
