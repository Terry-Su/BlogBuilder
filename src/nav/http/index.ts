import axios from 'axios';
import { NAV_DOT_JSON } from '../constants/names';


export const fetchNav = () => axios.get( NAV_DOT_JSON ).then( response => response.data )