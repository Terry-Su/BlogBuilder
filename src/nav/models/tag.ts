export default {
  namespace: "tag",
  state    : {
    shouldExpand: false
  },
  reducers : {
    TOOGLE_SHOULD_EXPAND     : ( state) => ( { ...state, shouldExpand: ! state.shouldExpand } ),
  },
  effects  : {}
}
