import { RELATIVE_URL, NAME, CREATE_TIME, INTRODUCTION } from '../constants/names';

interface ClientNavBlog {
  /**
   * Url that is relative to client root path
   */
  [ RELATIVE_URL ]: string        
  [ NAME ]: string
  [ CREATE_TIME ]: string,
  [ INTRODUCTION ]: string,
}