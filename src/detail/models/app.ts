export default {
  namespace: "app",
  state    : {
    textLogo: null,
    slogan  : null
  },
  reducers: {
    UPDATE_TEXT_LOGO: ( state, { textLogo } ) => ( { ...state, textLogo } ),
    UPDATE_SLOGAN   : ( state, { slogan } ) => ( { ...state, slogan } ),
  },
  effects: {
  }
}
