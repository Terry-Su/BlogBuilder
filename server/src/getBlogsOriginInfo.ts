import { Path, BlogOriginInfo } from "./interface/index"
import isNotNil from "./util/isNotNil"
import * as PATH from 'path'
import { EXT_MARKDOWN, EXT_JSON } from "./store/constant";
const dirTree = require( "directory-tree" )


export default function( root: Path ): BlogOriginInfo[] {
  let res: BlogOriginInfo[] = []

  const rootDirTreeEd: any = dirTree( root )

  if ( isNotNil( rootDirTreeEd ) ) {
    const yearsInfo: string[] = rootDirTreeEd.children

    yearsInfo.map( resolveYearInfo )
  }

  return res

  function resolveYearInfo( yearInfo: any ) {
    const {
      path: yearPath,
      name: yearName
    }: { path: Path; name: string } = yearInfo
    const yearsPathDirTreeEd: any = dirTree( yearPath )

    if ( isNotNil( yearsPathDirTreeEd ) && isYearNameValid( yearName ) ) {
      const daysInfo: any = yearsPathDirTreeEd.children

      daysInfo.map( resolveDayInfo( yearName ) )
    }
  }

  function resolveDayInfo( yearName: Path ) {
    return function( dayInfo: any ) {
      const {
        path: dayPath,
        name: dayName
      }: { path: Path; name: string } = dayInfo

      if ( isDayNameValid( dayName ) ) {
        const date: Date = getDate( yearName, dayName )
        const blogPath: Path = getBlogPath( dayPath )
        const blogPropPath: Path = getBlogPropPath( dayPath )

        const blogOriginInfo: BlogOriginInfo = {
          date,
          blogPath,
          blogPropPath
        }

        res.push( blogOriginInfo )
      }
    }
  }

  function getDate( yearName: string, dayName: string ): Date {
    const year: number = parseInt( yearName )
    const month: number = parseInt( dayName.slice( 0, 2 ) ) - 1
    const day: number = parseInt( dayName.slice( 2, 4 ) )
    const date = new Date( year, month, day )
    return date
  }

  function getBlogPath( dayPath: Path ): Path {
    const res = getBlogFilePath( dayPath, EXT_MARKDOWN )
    return res
  }

  function getBlogPropPath( dayPath: Path ): Path {
    const res = getBlogFilePath( dayPath, EXT_JSON )
    return res
  }

  function getBlogFilePath( dayPath: Path, extName: string ): Path {
    let res: Path
    const dayPathDirTreeEd = dirTree( dayPath )
    
    if ( isNotNil( dayPathDirTreeEd ) ) {
      const filesInfo: any[] = dayPathDirTreeEd.children
      filesInfo.map( resolveFileInfo )
    }
    
    return res

    function resolveFileInfo( fileInfo: any ) {
      const { name, path }: { name: string, path: Path } = fileInfo
      const extNameToCompare = PATH.extname( path )
      if ( extNameToCompare === extName ) {
        res = path
      }
    }
  }

  function isYearNameValid( yearName: string ) {
    let res = false
    res = yearName.split( "" ).every( isNumberString )
    return res
  }

  function isDayNameValid( dayName: string ): boolean {
    let res: boolean = false
    res = dayName.length === 4 && dayName.split( "" ).every( isValid )
    return res

    function isValid( potentialNumberString: string, index: number ): boolean {
      let res: boolean
      /**
       * Potential number
       */
      const n = parseInt( potentialNumberString )
      switch ( index ) {
        case 0:
          res = n >= 0 && n <= 1
          break
        case 1:
          res = n >= 0 && n <= 9
          break
        case 2:
          res = n >= 0 && n <= 3
          break
        case 3:
          res = n >= 0 && n <= 9
          break
      }
      res = res && isNumberString( potentialNumberString )
      return res
    }
  }

  function isNumberString( potentialNumberString: string ): boolean {
    let res: boolean = parseInt( potentialNumberString ) !== NaN
    return res
  }
}
