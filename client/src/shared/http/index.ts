import axios from 'axios';
import { GET_CATEGORY_CHUNK } from './dynamicHttp';
import { CATEGORY_JSON, TAG_JSON } from './constantHttp';

export const fetchCategory = () => axios.get( CATEGORY_JSON ).then( function( response ) {
  return response.data
} )

export const fetchCategoryChunk = ( chunk ) => axios.get( GET_CATEGORY_CHUNK( chunk ) ).then( function( response ) {
  return response.data
} )

export const fetchTag = () => axios.get( TAG_JSON ).then( function( response ) {
  return response.data
} )


