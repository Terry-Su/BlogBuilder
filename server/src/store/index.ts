import {
  Path,
  BlogOriginInfo,
  BlogPropComputed,
  BlogProp,
  BlogRelativeUrl
} from "../interface/index"
import readFileJson from "../util/readFileJson"
import { defaultBlogProp } from "./initialState"
import { isNil, cloneDeep } from "lodash"
import getFileNameWithoutExt from "../util/getFileNameWithoutExt"
import isNumberString from "../util/isNumberString"
import isHourNameValid from "../util/isHourNameValid"
import isMinuteNameValid from "../util/isMinuteNameValid"
import isNotNil from "../util/isNotNil"
import * as PATH from "path"
import { EXT_HTML, OUTPUT_FOLDER_CATEGORY, OUTPUT_FOLDER_TAG, OUTPUT_FOLDER_SCRIPT, NEWEST } from './constant';
import pathReplaceExt from "../util/pathReplaceExt"

export function getBlogPropComputed(
  blogOriginInfo: BlogOriginInfo
): BlogPropComputed {
  const {
    blogPropPath,
    blogPath,
    date
  }: { blogPropPath: Path; blogPath: Path; date: Date } = blogOriginInfo

  const prop: BlogProp = readFileJson( blogPropPath )
  /**
   * Blog's prop composed with its default prop
   */
  const propComposed: BlogPropComputed = getComposedProp( prop, blogPath, date )

  return propComposed

  function getComposedProp(
    prop: BlogProp,
    blogPath: Path,
    date: Date
  ): BlogPropComputed {
    let transitionalProp: BlogProp = Object.assign( cloneDeep( defaultBlogProp ) , prop )

    const timeStr = transitionalProp.time

    const res: BlogPropComputed = <BlogPropComputed>Object.assign(
      transitionalProp,
      {
        relativeUrl: computeRelativeUrl(),
        name       : computeName( transitionalProp.name ),
        time       : computeTime( timeStr )
      }
    )

    return res

    function computeRelativeUrl(): BlogRelativeUrl {
      const res:BlogRelativeUrl = getBlogRelativeUrl( blogPath )
      return res
    }

    function computeName( name: string ): string {
      let res: string = name
      if ( isNil( name ) ) {
        res = getFileNameWithoutExt( blogPath )
      }
      return res
    }

    function computeTime( timeStr: string ): Date {
      let res: Date = date

      if ( isNotNil( timeStr ) ) {
        const year: number = date.getFullYear()
        const month: number = date.getMonth()
        /**
         * The date which forbids repeating name with 'date'
         */
        const tDate: number = date.getDate()

        const hour: number = getHour( timeStr )
        const minute: number = getMinute( timeStr )
        res = new Date( year, month, tDate, hour, minute )
      }

      return res

      function getHour( timeStr: string ): number {
        let res = 0
        const hourName = timeStr.slice( 0, 2 )
        if ( isHourNameValid( hourName ) ) {
          res = parseInt( hourName )
        }
        return res
      }

      function getMinute( timeStr: string ): number {
        let res = 0
        const minuteName = timeStr.slice( 2, 4 )
        if ( isMinuteNameValid( minuteName ) ) {
          res = parseInt( minuteName )
        }
        return res
      }
    }
  }
}

export function getBlogRelativeUrl( blogPath: Path ) {
  const src = PATH.resolve( blogPath, "../../../" )
  const relative: string = PATH.relative( src, blogPath )
  const relativeUrl = pathReplaceExt( relative, EXT_HTML )
  return relativeUrl
}

export function getOutputCategoryJsonPath( output: Path ) {
  return PATH.resolve( output, `./${OUTPUT_FOLDER_CATEGORY}.json` )
}


export function getOutputTagJsonPath( output: Path ) {
  return PATH.resolve( output, `./${OUTPUT_FOLDER_TAG}.json` )
}

export function getOutputCategoryChunksJsonPath( name: string, output: Path ) {
  return PATH.resolve( output, `./${OUTPUT_FOLDER_CATEGORY}/${ name }.json` )
}

export function getOutputTagChunksJsonPath( name: string, output: Path ) {
  return PATH.resolve( output, `./${OUTPUT_FOLDER_TAG}/${ name }.json` )
}

export function getOutputScriptPath( scriptFileName: string, output: Path ) {
  return PATH.resolve( output, `./${OUTPUT_FOLDER_SCRIPT}/${ scriptFileName }` )
}

export function getOutputHomeHtmlPath( output: Path ) {
  return PATH.resolve( output, `./index.html` )
}

export function getOutputNewestBlogsInfoPath( output: Path ) {
  return PATH.resolve( output, `./${ NEWEST }.json` )
}