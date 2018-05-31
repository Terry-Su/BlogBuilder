import * as PATH from "path"

export default function( path: string, ext: string ) {
  let res: string = path
  const baseName = PATH.basename( path )

  const originalExt: string = getOriginalExt( baseName )

  if ( originalExt !== null ) {
    /**
     * RegExp
     */

    const r = new RegExp( `${originalExt}$` )
    res = path.replace( r, ext )
  }

  return res

  function getOriginalExt( baseName: string ) {
    let res = null
    const chunks = baseName.split( "." )
    const { length } = chunks
    if ( length > 0 ) {
      res = `.${chunks[ length - 1 ]}`
    }
    return res
  }
}
