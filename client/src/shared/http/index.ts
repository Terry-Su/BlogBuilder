import axios from 'axios';
import { GET_CATEGORY_CHUNK, GET_TAG_CHUNK } from './dynamicHttp';
import { CATEGORY_JSON, TAG_JSON, NEWEST_JSON } from './constantHttp';

export const fetchCategory = () => axios.get( CATEGORY_JSON ).then( function( response ) {
  return response.data
} )

export const fetchCategoryChunk = ( chunk: string ) => axios.get( GET_CATEGORY_CHUNK( chunk ) ).then( function( response ) {
  return response.data
} )

export const fetchTag = () => axios.get( TAG_JSON ).then( function( response ) {
  return response.data
} )

export const fetchTagChunk = ( chunk: string ) => axios.get( GET_TAG_CHUNK( chunk ) ).then( function( response ) {
  return response.data
} )

export const fetchNewest = () => axios.get( NEWEST_JSON ).then( function( response ) {
  return response.data
} )


