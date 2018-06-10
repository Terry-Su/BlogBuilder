export default {
  namespace: "list",
  state    : {
    blogs: []
  },
  reducers: {
    UPDATE_BLOGS: ( state, { blogs } ) => ( { ...state, blogs } )
  },
  effects: {}
}
