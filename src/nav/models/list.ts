export default {
  namespace: "list",
  state    : {
    blogs: []
  },
  reducers: {
    UPDATE_BLOGS: ( state, { blogs } ) => ( { ...state, blogs } ),
    RESET_BLOGS: ( state ) => ( { ...state, blogs: [] } )
  },
  effects: {}
}
