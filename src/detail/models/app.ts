import { fetchProps } from '../services/index';
export default {
  namespace: "app",
  state    : {
    markedHtml: "",
    name: "",
    body: "",
    createTime: "",
    categorySequence: [],
    tags: [],
  },
  reducers: {
    UPDATE_MARKED_HTML: ( state, { markedHtml } ) => ( { ...state, markedHtml } ),
    UPDATE_NAME: ( state, { name } ) => ( { ...state, name } ),
    UPDATE_BODY: ( state, { body } ) => ( { ...state, body } ),
    UPDATE_CREATE_TIME: ( state, { createTime } ) => ( { ...state, createTime } ),
    UPDATE_CATEGORY_SEQUENCE: ( state, { categorySequence } ) => ( { ...state, categorySequence } ),
    UPDATE_TAGS: ( state, { tags } ) => ( { ...state, tags } ),
  },
  effects: {
    *fetchProps( { }, { put, call } ) {
      const data = yield call( fetchProps )

      if ( data ) {
        const { name, createTime, categorySequence, tags } = data 

        yield put( { type: 'UPDATE_NAME', name } )
        yield put( { type: 'UPDATE_CREATE_TIME', createTime } )
        yield put( { type: 'UPDATE_CATEGORY_SEQUENCE', categorySequence } )
        yield put( { type: 'UPDATE_TAGS', tags } )
      }
    }
  }
}
