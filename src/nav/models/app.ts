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
  }
}
