import { isDirectoryType, filterIsDirectoryType } from "./dirTree"
import {
  isBlogDirectoryInfo,
  getBlogPropsFilePath,
  getBlogFilePath
} from "./getBlogsInfo"
import readJsonFromFile from "../utils/readJsonFromFile"
import BLOG_PROPS_SCHEMA from "../constants/schemas/BLOG_PROPS_SCHEMA"
import { notNil } from "../utils/lodash"
import getFileNameWithoutItsExtension from "../utils/getFileNameWithoutItsExtension"
import { BlogInfo } from "../../src_old/interface/index"
import { BlogProps } from "../typings/BlogProps"
import { BLOG_PROPS_CREATE_TIME } from '../constants/fields';
import {
  BLOG_PROPS_TAGS,
  BLOG_PROPS_NAME,
  BLOG_INFO_PATH,
  BLOG_INFO_NAME,
  BLOG_INFO_CREATE_TIME,
  BLOG_INFO_TAGS
} from "../constants/fields"
const dirTree = require( "directory-tree" )

var Ajv = require( "ajv" )
var ajv = new Ajv()

export default class UtilGetters {
  getBlogsInfo( path: string ): BlogInfo[] {
    let res: BlogInfo[] = []

    resolveRoot( path )

    return res

    function resolveRoot( path: string ) {
      const directoryInfo = dirTree( path )

      if ( directoryInfo ) {
        const { type } = directoryInfo
        isDirectoryType( type ) && resolveDirectoryInfo( directoryInfo )
      }
    }

    function resolveDirectoryInfo( directoryInfo: any ) {
      const isTheBlogDirectoryInfo = isBlogDirectoryInfo( directoryInfo )

      if ( isTheBlogDirectoryInfo ) {
        const blogPropsFilePath: string = getBlogPropsFilePath( directoryInfo )
        const potentialBlogProps: any = readJsonFromFile( blogPropsFilePath )

        const isValid = ajv.validate( BLOG_PROPS_SCHEMA, potentialBlogProps )
        if ( isValid ) {
          const blogProps: BlogProps = potentialBlogProps
          const blogPath: Path = getBlogFilePath( directoryInfo )

          const name: string = notNil( blogProps[ BLOG_PROPS_NAME ] ) ?
            blogProps[ BLOG_PROPS_NAME ] :
            getFileNameWithoutItsExtension( blogPath )
          const createTime: string = notNil( blogProps[ BLOG_PROPS_CREATE_TIME ] ) ?
            blogProps[ BLOG_PROPS_CREATE_TIME ] :
            null
          const tags: string[] = notNil( blogProps[ BLOG_PROPS_TAGS ] ) ?
            blogProps[ BLOG_PROPS_TAGS ] :
            []

          const blogInfo: BlogInfo = {
            [ BLOG_INFO_PATH ]       : blogPath,
            [ BLOG_INFO_NAME ]       : name,
            [ BLOG_INFO_CREATE_TIME ]: createTime,
            [ BLOG_INFO_TAGS ]       : tags
          }

          res.push( blogInfo )
        }
      }
      if ( !isTheBlogDirectoryInfo ) {
        const { children } = directoryInfo
        children.filter( filterIsDirectoryType ).map( resolveDirectoryInfo )
      }
    }
  }
}
