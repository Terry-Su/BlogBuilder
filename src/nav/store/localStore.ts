import { LOCAL_STOREAGE_CATEGORY_SEQUENCE_NAME } from './../constants/names';
import { LOCAL_STOREAGE_CATEGORY_NAME } from "../constants/names"
class LocalStore {
  setItem( key, data ) {
    try {
      const jsonString = JSON.stringify( data )
      localStorage.setItem( key, jsonString )
    } catch ( e ) {
      console.log( e )
    }
  }
  getItem( key ) {
    try {
      const jsonString = localStorage.getItem( key )
      const json = JSON.parse( jsonString )
      return json
    } catch ( e ) {
      console.log(e)
      return null
    }
  }

  setCategory( category ) {
    this.setItem( LOCAL_STOREAGE_CATEGORY_NAME, category )
  }
  getCategory() {
    return this.getItem( LOCAL_STOREAGE_CATEGORY_NAME )
  }

  setCategorySequence( sequence ) {
    this.setItem( LOCAL_STOREAGE_CATEGORY_SEQUENCE_NAME, sequence )
  }
  getCategorySequence() {
    return this.getItem( LOCAL_STOREAGE_CATEGORY_SEQUENCE_NAME )
  }


}

export default new LocalStore()
