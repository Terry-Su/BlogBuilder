import axios from 'axios';
import { NAV_DOT_JSON } from '../constant/names';


export const fetchNav = () => axios.get( NAV_DOT_JSON ).then( function( response ) {
  return response.data
} )