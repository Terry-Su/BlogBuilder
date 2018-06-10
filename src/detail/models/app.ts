export default {
  namespace: "app",
  state    : {
    markedHtml: ""
  },
  reducers: {
    UPDATE_MARKED_HTML: ( state, { markedHtml } ) => ( { ...state, markedHtml } )
  },
  effects: {}
}
